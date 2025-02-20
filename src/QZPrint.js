import React from "react";
import qz from "qz-tray";
import html2canvas from "html2canvas";


const QZPrint = () => {
  
  const handlePrint = async () => {
    try {
      const invoiceElement = document.getElementById("invoice-content");
      const canvas = await html2canvas(invoiceElement, { useCORS: true });
      const imageData = canvas.toDataURL("image/png");
      const base64Data = imageData.split(",")[1];

      await qz.websocket.connect();
      const printer = await qz.printers.getDefault();
      const config = qz.configs.create(printer);
      const data = [
        {
          type: "pixel",
          format: "image",
          flavor: "base64",
          data: base64Data,
        },
      ];
      await qz.print(config, data).catch(function(e) { console.error(e); });
    } catch (error) {
      alert(error);
    } finally {
      console.log("Print job completed");
      return qz.websocket.disconnect();
    }
  };

  return <button onClick={handlePrint}>QZ Print</button>;
};

export default QZPrint;
