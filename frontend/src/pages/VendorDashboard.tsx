function VendorDashboard() {

  return (

    <div>

      <h1 className="text-3xl font-bold">
        Vendor Dashboard
      </h1>


      <div className="grid grid-cols-3 gap-6 mt-6">


        <div className="bg-white p-6 rounded shadow">

          <h3 className="text-gray-500">
            Total Vendors
          </h3>

          <p className="text-3xl font-bold">
            120
          </p>

        </div>



        <div className="bg-white p-6 rounded shadow">

          <h3 className="text-gray-500">
            Pending Payments
          </h3>

          <p className="text-3xl font-bold">
            ₹3,50,000
          </p>

        </div>



        <div className="bg-white p-6 rounded shadow">

          <h3 className="text-gray-500">
            Completed Payments
          </h3>

          <p className="text-3xl font-bold">
            ₹12,50,000
          </p>

        </div>


      </div>



      <div className="bg-white mt-8 p-6 rounded shadow">


        <h2 className="text-xl font-semibold mb-4">
          Vendor Performance
        </h2>


        <table className="w-full">


          <thead className="bg-gray-200">

            <tr>

              <th className="p-3">
                Vendor
              </th>

              <th>
                Invoices
              </th>

              <th>
                Payment Status
              </th>

            </tr>

          </thead>



          <tbody>


            <tr className="border-b">

              <td className="p-3">
                ABC Technologies
              </td>

              <td>
                25
              </td>

              <td>
                Paid
              </td>

            </tr>



            <tr className="border-b">

              <td className="p-3">
                XYZ Solutions
              </td>

              <td>
                15
              </td>

              <td>
                Pending
              </td>

            </tr>


          </tbody>


        </table>


      </div>


    </div>

  );

}


export default VendorDashboard;