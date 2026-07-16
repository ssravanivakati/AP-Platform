import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { uploadInvoice } from "../../services/invoiceService";

function InvoiceUploader() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadTime, setUploadTime] = useState("");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setSelectedFile(acceptedFiles[0]);
      setUploadTime(new Date().toLocaleString());
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    multiple: false,
  });

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    try {
      const result = await uploadInvoice(selectedFile.name);

      alert(
        `Invoice Uploaded!\n\nInvoice ID: ${result.invoiceId}\nStatus: ${result.status}`
      );

      // Clear the form after successful upload
      setSelectedFile(null);
      setUploadTime("");
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Upload Failed");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-400 rounded-lg p-10 text-center cursor-pointer hover:bg-gray-100 transition"
      >
        <input {...getInputProps()} />

        <p className="text-xl font-semibold">
          Drag & Drop Invoice Here
        </p>

        <p className="text-gray-500 mt-2">
          or click to select a file
        </p>

        <p className="text-sm text-gray-400 mt-2">
          Supported: PDF, PNG, JPG
        </p>
      </div>

      {selectedFile && (
        <div className="mt-6 space-y-3">
          <p>
            <strong>Selected File:</strong> {selectedFile.name}
          </p>

          <p>
            <strong>Uploaded Time:</strong> {uploadTime}
          </p>

          <button
            onClick={handleUpload}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            Upload Invoice
          </button>
        </div>
      )}
    </div>
  );
}

export default InvoiceUploader;