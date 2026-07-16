import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";


function Dashboard() {


  const invoiceData = [
    {
      name: "Approved",
      value: 150
    },
    {
      name: "Pending",
      value: 45
    },
    {
      name: "Rejected",
      value: 15
    }
  ];



  const paymentData = [
    {
      month: "Jan",
      amount: 50000
    },
    {
      month: "Feb",
      amount: 75000
    },
    {
      month: "Mar",
      amount: 100000
    },
    {
      month: "Apr",
      amount: 90000
    }
  ];



  return (

    <div>


      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>




      {/* Summary Cards */}

      <div className="grid grid-cols-4 gap-6 mt-6">


        <div className="bg-white p-6 rounded shadow">

          <h3 className="text-gray-500">
            Total Invoices
          </h3>

          <p className="text-3xl font-bold">
            250
          </p>

        </div>



        <div className="bg-white p-6 rounded shadow">

          <h3 className="text-gray-500">
            Pending Approval
          </h3>

          <p className="text-3xl font-bold">
            45
          </p>

        </div>



        <div className="bg-white p-6 rounded shadow">

          <h3 className="text-gray-500">
            Paid Invoices
          </h3>

          <p className="text-3xl font-bold">
            180
          </p>

        </div>



        <div className="bg-white p-6 rounded shadow">

          <h3 className="text-gray-500">
            Total Amount
          </h3>

          <p className="text-3xl font-bold">
            ₹15,00,000
          </p>

        </div>


      </div>





      {/* Invoice Status Cards */}

      <div className="grid grid-cols-3 gap-6 mt-8">


        <div className="bg-green-100 p-6 rounded shadow">

          <h3 className="font-semibold">
            Approved
          </h3>

          <p className="text-2xl font-bold">
            150
          </p>

        </div>



        <div className="bg-yellow-100 p-6 rounded shadow">

          <h3 className="font-semibold">
            Pending
          </h3>

          <p className="text-2xl font-bold">
            45
          </p>

        </div>



        <div className="bg-red-100 p-6 rounded shadow">

          <h3 className="font-semibold">
            Rejected
          </h3>

          <p className="text-2xl font-bold">
            15
          </p>

        </div>


      </div>





      {/* Charts */}

      <div className="grid grid-cols-2 gap-6 mt-8">


        <div className="bg-white p-6 rounded shadow">

          <h2 className="text-xl font-semibold mb-4">
            Invoice Status
          </h2>


          <ResponsiveContainer width="100%" height={300}>

            <PieChart>

              <Pie
                data={invoiceData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >

                {
                  invoiceData.map((entry,index)=>(

                    <Cell key={index}/>

                  ))
                }

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>


        </div>





        <div className="bg-white p-6 rounded shadow">

          <h2 className="text-xl font-semibold mb-4">
            Monthly Payments
          </h2>


          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={paymentData}>

              <XAxis dataKey="month"/>

              <YAxis/>

              <Tooltip/>

              <Bar dataKey="amount"/>

            </BarChart>

          </ResponsiveContainer>


        </div>


      </div>






      {/* Recent Invoices */}


      <div className="bg-white mt-8 p-6 rounded shadow">


        <h2 className="text-xl font-semibold mb-4">
          Recent Invoices
        </h2>



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
                Amount
              </th>

              <th>
                Status
              </th>

            </tr>

          </thead>



          <tbody>


            <tr className="border-b">

              <td className="p-3">
                INV001
              </td>

              <td>
                ABC Technologies
              </td>

              <td>
                ₹50,000
              </td>

              <td>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">

                  Approved

                </span>

              </td>

            </tr>




            <tr className="border-b">

              <td className="p-3">
                INV002
              </td>

              <td>
                XYZ Solutions
              </td>

              <td>
                ₹75,000
              </td>

              <td>

                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">

                  Pending

                </span>

              </td>

            </tr>


          </tbody>


        </table>


      </div>



    </div>

  );

}


export default Dashboard;