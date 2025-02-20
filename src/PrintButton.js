import React from "react";
import html2canvas from "html2canvas";

const PrintButton = () => {
  const printInvoice = async () => {
    await loadJSPM();
    initializeJSPM();
  };

  const loadJSPM = () => {
    return new Promise((resolve, reject) => {
      if (window.JSPM) return resolve();

      console.log("Step 1: Loading JSPrintManager...");

      const script = document.createElement("script");
      script.src = "https://unpkg.com/jsprintmanager@latest";
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };

  const initializeJSPM = async () => {
    console.log("Step 2: Initializing JSPrintManager...");
    const JSPM = window.JSPM;
    if (!JSPM) return console.error("JSPrintManager not available.");

    JSPM.JSPrintManager.auto_reconnect = true;
    JSPM.JSPrintManager.start();

    if (JSPM.JSPrintManager.websocket_status === JSPM.WSStatus.Open) {
      console.log("WebSocket is already open. Sending print job.");
      await sendPrintJob();
    } else {
      JSPM.JSPrintManager.WS.onStatusChanged = async () => {
        if (JSPM.JSPrintManager.websocket_status === JSPM.WSStatus.Open) {
          console.log("Step 3: WebSocket connected.");
          await sendPrintJob();
        } else {
          console.warn("Step 3 ERROR: WebSocket not connected. Retrying...");
        }
      };
    }
  };

  const sendPrintJob = async () => {
    const JSPM = window.JSPM;
    if (!JSPM || JSPM.JSPrintManager.websocket_status !== JSPM.WSStatus.Open) {
      console.log("Step 4: WebSocket not open. Restarting...");
      JSPM.JSPrintManager.start();
      return;
    }

    console.log("Step 4: Converting HTML to image...");

    const invoiceElement = document.getElementById("invoice-content");
    const canvas = await html2canvas(invoiceElement, { useCORS: true });
    const imageData = canvas.toDataURL("image/png");

    const base64Data = imageData.split(",")[1];
    console.log("Step 5: Sending print job...");

    const cpj = new JSPM.ClientPrintJob();
    cpj.clientPrinter = new JSPM.DefaultPrinter();

    const printFile = new JSPM.PrintFile(base64Data, JSPM.FileSourceType.Base64, "invoice.png", 1);
    cpj.files.push(printFile);

    try {
      await cpj.sendToClient();
      console.log("Print job sent successfully.");
    } catch (error) {
      console.error("Error sending print job:", error);
    }
  };

  return <button onClick={printInvoice}>Print Invoice</button>;
};

export default PrintButton;
