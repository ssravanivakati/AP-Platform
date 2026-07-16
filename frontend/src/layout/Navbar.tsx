function Navbar() {

  return (

    <div className="h-16 bg-white border-b flex items-center justify-between px-6">


      <h2 className="text-xl font-semibold text-gray-800">
        AI Accounts Payable Platform
      </h2>



      <div className="flex items-center gap-5">


        <button className="text-xl hover:bg-gray-100 p-2 rounded">
          🔍
        </button>


        <button className="text-xl hover:bg-gray-100 p-2 rounded">
          🔔
        </button>


        <button className="text-xl hover:bg-gray-100 p-2 rounded">
          🌙
        </button>


        <button className="text-xl hover:bg-gray-100 p-2 rounded">
          👤
        </button>


      </div>


    </div>

  );

}


export default Navbar;