const express = require("express");
const router = express.Router();

const {
  uploadInvoice,
  getInvoices,
} = require("../controllers/invoiceController");

// Upload Invoice
router.post("/invoices", uploadInvoice);

// Get All Invoices
router.get("/invoices", getInvoices);

module.exports = router;