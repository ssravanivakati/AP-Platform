import api from "./api";

export const uploadInvoice = async (fileName: string) => {
  const response = await api.post("/invoices", {
    fileName,
  });

  return response.data;
};

export const getInvoices = async () => {
  const response = await api.get("/invoices");
  return response.data;
};