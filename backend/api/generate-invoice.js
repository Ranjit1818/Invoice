const handleGenerateInvoice = async () => {
  try {
      const response = await axios.post(
          "https://invoice-backend-orcin.vercel.app/api/generate-invoice",
          invoiceData,
          {
              responseType: "blob", // Ensures the response is handled as binary data
          }
      );

      // Create a Blob URL
      const blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);

      // Create a download link
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'invoice.pdf');
      document.body.appendChild(link);

      // Trigger the download
      link.click();

      // Cleanup
      link.remove();
      window.URL.revokeObjectURL(url);
  } catch (error) {
      // Log error and optionally display feedback to the user
      console.error("Error generating invoice:", error);

      // Provide user feedback (optional)
      alert("Failed to generate the invoice. Please try again.");
  }
};
