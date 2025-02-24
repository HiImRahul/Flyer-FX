import React from "react";
import html2canvas from "html2canvas";

const PrintInvoice = () => {
  const loadJSPM = () => {
    return new Promise((resolve, reject) => {
      if (window.JSPM) return resolve();
      const script = document.createElement("script");
      script.src = "https://unpkg.com/jsprintmanager@latest";
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };

  // Calculate target width based on printer DPI (default 203 DPI for thermal printers)
  const calculateTargetWidth = (dpi = 203) => {
    const mmToInches = 80 / 25.4;
    return Math.floor(mmToInches * dpi);
  };

  const printInvoice = async () => {
    try {
      const invoiceElement = document.getElementById("invoice-content");
      if (!invoiceElement) {
        console.error("Element with id 'invoice-content' not found.");
        return;
      }

      // Calculate target pixel width based on DPI
      const targetDPI = 203; // Adjust this based on your printer's specification
      const targetWidth = calculateTargetWidth(targetDPI);

      // Capture element with high resolution
      const canvas = await html2canvas(invoiceElement, {
        scale: 3, // Increase scale for higher DPI capture
        width: targetWidth,
        windowWidth: targetWidth, // Ensure content width matches target
        useCORS: true,
      });

      // Convert directly to PNG
      const base64Image = canvas.toDataURL("image/png");

      // Load JSPrintManager
      await loadJSPM();
      const JSPM = window.JSPM;
      if (!JSPM) {
        console.error("JSPrintManager not available.");
        return;
      }

      JSPM.JSPrintManager.auto_reconnect = true;
      JSPM.JSPrintManager.start();

      // Handle WebSocket connection
      const sendWhenReady = async () => {
        if (JSPM.JSPrintManager.websocket_status === JSPM.WSStatus.Open) {
          const cpj = new JSPM.ClientPrintJob();
          const base64Data = base64Image.split(",")[1];
          
          // Create print file with exact dimensions
          const printFile = new JSPM.PrintFile(
            base64Data,
            JSPM.FileSourceType.Base64,
            "invoice.png",
            1
          );

          cpj.files.push(printFile);
          
          // Important: Use direct thermal printer settings
          cpj.printerCommands = [
            "\x1B\x40", // Initialize printer
            "\x1B\x57\x32\x34", // Set print area width (adjust as needed)
          ];

          try {
            await cpj.sendToClient();
            console.log("Print job sent successfully");
          } catch (error) {
            console.error("Print error:", error);
          }
        } else {
          setTimeout(sendWhenReady, 500);
        }
      };

      setTimeout(sendWhenReady, 500);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button onClick={printInvoice}>Print Invoice 80mm</button>
    </div>
  );
};

export default PrintInvoice;