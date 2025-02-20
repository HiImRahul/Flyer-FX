import React from "react";
import qz from "qz-tray";
import html2canvas from "html2canvas";

const QZPrint80mm = () => {
  
  const handlePrint = async () => {
    try {
      const invoiceElement = document.getElementById("invoice-content");

      // Set the scale to fit 80mm width (640px)
      const canvas = await html2canvas(invoiceElement, { 
        useCORS: true, 
        scale: 2, // Ensures higher resolution
        width: 640  // 80mm receipt width in pixels
      });

      const imageData = canvas.toDataURL("image/png");
      const base64Data = imageData.split(",")[1];

      await qz.websocket.connect();
      const printer = await qz.printers.getDefault();
      
      // Configure QZ Tray with 80mm width
      const config = qz.configs.create(printer, {
        scaleContent: true, 
        rasterize: true, // Ensures proper receipt printing
        density: 50, // DPI (adjust if needed)
        units: "mm",
        width: 80 // Ensuring width fits 80mm paper
      });

      const data = [
        {
          type: "pixel",
          format: "image",
          flavor: "base64",
          data: base64Data,
        },
      ];

      await qz.print(config, data).catch(e => console.error(e));
    } catch (error) {
      alert(error);
    } finally {
      console.log("Print job completed");
      return qz.websocket.disconnect();
    }
  };

  return <button onClick={handlePrint}>QZ Print 80mm</button>;
};

export default QZPrint80mm;
