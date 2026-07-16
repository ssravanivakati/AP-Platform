function Settings() {

  return (

    <div>


      <h1 className="text-3xl font-bold">
        Settings
      </h1>



      <div className="bg-white mt-6 p-6 rounded shadow">


        <h2 className="text-xl font-semibold mb-4">
          User Profile
        </h2>


        <div className="space-y-4">


          <div>

            <label className="block text-gray-600">
              Name
            </label>

            <input
              type="text"
              value="Admin User"
              readOnly
              className="border p-2 rounded w-full"
            />

          </div>



          <div>

            <label className="block text-gray-600">
              Email
            </label>

            <input
              type="email"
              value="admin@aiap.com"
              readOnly
              className="border p-2 rounded w-full"
            />

          </div>


        </div>


      </div>




      <div className="bg-white mt-6 p-6 rounded shadow">


        <h2 className="text-xl font-semibold mb-4">
          Company Settings
        </h2>



        <div>

          <label className="block text-gray-600">
            Company Name
          </label>


          <input
            type="text"
            value="AI Accounts Payable Platform"
            readOnly
            className="border p-2 rounded w-full"
          />


        </div>


      </div>





      <div className="bg-white mt-6 p-6 rounded shadow">


        <h2 className="text-xl font-semibold mb-4">
          Notification Preferences
        </h2>


        <label className="flex gap-3">

          <input 
            type="checkbox"
            checked
            readOnly
          />

          Receive invoice alerts

        </label>



        <label className="flex gap-3 mt-3">

          <input 
            type="checkbox"
            checked
            readOnly
          />

          Receive payment notifications

        </label>


      </div>


    </div>

  );

}


export default Settings;