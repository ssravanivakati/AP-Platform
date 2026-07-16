const invoices = require("../data/invoices");

const uploadInvoice = (req, res) => {
  const invoice = {
    invoiceId: Date.now().toString(),
    fileName: req.body.fileName,
    uploadedAt: new Date(),
    status: "UPLOADED",
  };

  invoices.push(invoice);

  // Automatically update invoice status
  setTimeout(() => {
    invoice.status = "PROCESSING";
  }, 3000);

  setTimeout(() => {
    invoice.status = "OCR COMPLETE";
  }, 6000);

  setTimeout(() => {
    invoice.status = "EXTRACTION COMPLETE";
  }, 9000);

  setTimeout(() => {
    invoice.status = "VALIDATION COMPLETE";
  }, 12000);

  setTimeout(() => {
    invoice.status = "APPROVED";
  }, 15000);

  res.json(invoice);
};

const getInvoices = (req, res) => {
  res.json(invoices);
};

module.exports = {
  uploadInvoice,
  getInvoices,
};