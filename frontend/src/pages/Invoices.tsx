import { useState } from "react";


function Invoices() {

  const [search, setSearch] = useState("");


  const invoices = [
    {
      id: "INV001",
      vendor: "ABC Technologies",
      date: "15-07-2026",
      amount: "₹50,000",
      status: "Pending"
    },

    {
      id: "INV002",
      vendor: "XYZ Solutions",
      date: "10-07-2026",
      amount: "₹75,000",
      status: "Approved"
    },

    {
      id: "INV003",
      vendor: "Global Pvt Ltd",
      date: "05-07-2026",
      amount: "₹25,000",
      status: "Paid"
    }

  ];


  const filteredInvoices = invoices.filter((invoice)=>


    invoice.vendor
      .toLowerCase()
      .includes(search.toLowerCase())


  );


  return (

    <div>


      <h1 className="text-3xl font-bold">
        Invoices
      </h1>



      <input

        type="text"

        placeholder="Search vendor..."

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

        className="mt-5 p-3 border rounded w-80"

      />




      <div className="bg-white mt-6 rounded shadow">


        <table className="w-full">


          <thead className="bg-gray-200">


            <tr>

              <th className="p-3">
                Invoice ID
              </th>


              <th>
                Vendor
              </th>


              <th>
                Date
              </th>


              <th>
                Amount
              </th>


              <th>
                Status
              </th>


            </tr>


          </thead>



          <tbody>


          {
            filteredInvoices.map((invoice)=>(


              <tr key={invoice.id} className="border-b">


                <td className="p-3">
                  {invoice.id}
                </td>


                <td>
                  {invoice.vendor}
                </td>


                <td>
                  {invoice.date}
                </td>


                <td>
                  {invoice.amount}
                </td>


                <td>

                  <span className="px-3 py-1 rounded bg-yellow-100">

                    {invoice.status}

                  </span>

                </td>


              </tr>


            ))
          }


          </tbody>



        </table>


      </div>


    </div>

  );

}


export default Invoices;