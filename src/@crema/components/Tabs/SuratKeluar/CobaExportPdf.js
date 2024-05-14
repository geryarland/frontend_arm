import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const CardtoPdf = () => {
  const cardRef = useRef(null);

  const exportToPDF = () => {
    // Get the card element
    const cardElement = cardRef.current;

    // Use html2canvas to capture the card as an image
    html2canvas(cardElement, { scale: 3 }).then((canvas) => {
      // Convert the canvas to a data URL
      const imageData = canvas.toDataURL('image/jpeg', 1.0); // Use JPEG format for better quality

      // Calculate the dimensions of the PDF
      const pdfWidth = cardElement.offsetWidth / 2.5; // Adjust as needed
      const pdfHeight = cardElement.offsetHeight / 2.5; // Adjust as needed

      // Create a new jsPDF instance
      const pdf = new jsPDF('p', 'mm', 'a4');

      // Add the image to the PDF
      pdf.addImage(imageData, 'JPEG', 0, 0, pdfWidth, pdfHeight);

      // Save the PDF
      pdf.save('card.pdf');
    });
  };

  return (
    <>
      <div ref={cardRef}>
        <h1>Card Title</h1>
        <p>This is the content of the card.</p>
      </div>
      <button onClick={exportToPDF}>Export to PDF</button>
    </>
  );
};

export default CardtoPdf;
