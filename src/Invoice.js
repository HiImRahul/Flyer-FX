import React from "react";


const Invoice = () => {
 

  return (
    
      <div id="invoice-content">
      <img src="/Flyerfx.png" alt="Company Logo" style={{ position: 'absolute',width: "150px",right: '10px',top: 'auto', marginBottom: "20px" }} />
      <h2>Invoice</h2>
      <p dir="rtl">مرحبا بكم في موقعي الإلكتروني</p>

      <p><strong>Invoice Number:</strong> INV-123456</p>
      <p><strong>Date:</strong> 2025-02-17</p>
      <p><strong>Customer:</strong> John Doe</p>
      <p><strong>Address:</strong> 123 Main Street, City, Country</p>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Item 1</td>
            <td>2</td>
            <td>$10</td>
            <td>$20</td>
          </tr>
          <tr>
            <td>Item 2</td>
            <td>1</td>
            <td>$15</td>
            <td>$15</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Total Amount:</strong> $35</p>
      </div>      
  );
};

export default Invoice;