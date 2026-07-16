import { useState } from "react";


function InvoiceUpload() {

  const [file, setFile] = useState<File | null>(null);


  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    if (event.target.files) {
      setFile(event.target.files[0]);
    }

  };


  const handleUpload = () => {

    if (!file) {
      alert("Please select an invoice file");
      return;
    }


    alert(
      `Uploading ${file.name}`
    );

  };


  return (

    <div>


      <h1 className="text-3xl font-bold">
        Invoice Upload
      </h1>



      <div className="bg-white mt-6 p-8 rounded shadow">


        <div className="border-2 border-dashed border-gray-400 p-10 text-center rounded">


          <h2 className="text-xl font-semibold">
            Upload Invoice
          </h2>


          <p className="text-gray-500 mt-2">
            Upload PDF or Image invoice files
          </p>



          <input
            type="file"
            accept=".pdf,.png,.jpg,.jpeg"
            onChange={handleFileChange}
            className="mt-5"
          />



          {
            file && (

              <p className="mt-4 text-green-600">
                Selected File: {file.name}
              </p>

            )
          }



        </div>




        <button
          onClick={handleUpload}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded"
        >

          Upload Invoice

        </button>



      </div>


    </div>

  );

}


export default InvoiceUpload;