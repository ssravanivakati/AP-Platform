const express = require("express");
const cors = require("cors");

const invoiceRoutes = require("./routes/invoiceRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use("/api", invoiceRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("AI AP Platform Backend Running...");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});