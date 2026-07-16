function Vendors() {

  const vendors = [
    {
      id: 1,
      name: "ABC Technologies",
      email: "abc@gmail.com",
      invoices: 25,
      amount: "₹2,50,000",
      status: "Active"
    },

    {
      id: 2,
      name: "XYZ Solutions",
      email: "xyz@gmail.com",
      invoices: 15,
      amount: "₹1,20,000",
      status: "Active"
    },

    {
      id: 3,
      name: "Global Pvt Ltd",
      email: "global@gmail.com",
      invoices: 10,
      amount: "₹75,000",
      status: "Inactive"
    }
  ];


  return (

    <div>


      <h1 className="text-3xl font-bold">
        Vendors
      </h1>



      <div className="bg-white mt-6 rounded shadow">


        <table className="w-full">


          <thead className="bg-gray-200">

            <tr>

              <th className="p-3">
                Vendor Name
              </th>


              <th>
                Email
              </th>


              <th>
                Total Invoices
              </th>


              <th>
                Total Amount
              </th>


              <th>
                Status
              </th>


            </tr>

          </thead>



          <tbody>


          {
            vendors.map((vendor)=>(

              <tr 
                key={vendor.id}
                className="border-b"
              >

                <td className="p-3">
                  {vendor.name}
                </td>


                <td>
                  {vendor.email}
                </td>


                <td>
                  {vendor.invoices}
                </td>


                <td>
                  {vendor.amount}
                </td>


                <td>

                  <span className="px-3 py-1 rounded bg-green-100">

                    {vendor.status}

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


export default Vendors;