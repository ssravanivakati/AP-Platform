import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";


function Layout() {

  return (
    <div className="flex min-h-screen">

      <Sidebar />


      <div className="flex-1">

        <Navbar />


        <main className="p-6 bg-gray-100 min-h-screen">

          <Outlet />

        </main>


      </div>


    </div>
  );
}


export default Layout;