import { Link, useLocation } from "react-router-dom";

import {
  LayoutDashboard,
  Upload,
  FileText,
  Bell,
  Users,
  BarChart3,
  Settings
} from "lucide-react";


function Sidebar() {


  const location = useLocation();



  const menuItems = [

    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard
    },

    {
      name: "Invoice Upload",
      path: "/upload",
      icon: Upload
    },

    {
      name: "Invoices",
      path: "/invoices",
      icon: FileText
    },

    {
      name: "Notifications",
      path: "/notifications",
      icon: Bell
    },

    {
      name: "Vendors",
      path: "/vendors",
      icon: Users
    },

    {
      name: "Vendor Dashboard",
      path: "/vendor-dashboard",
      icon: BarChart3
    },

    {
      name: "Settings",
      path: "/settings",
      icon: Settings
    }

  ];



  return (

    <div className="w-64 min-h-screen bg-slate-900 text-white p-5">


      <h1 className="text-2xl font-bold mb-8">
        AI AP Platform
      </h1>



      <nav className="space-y-3">


        {
          menuItems.map((item)=>{


            const Icon = item.icon;


            return (

              <Link

                key={item.path}

                to={item.path}

                className={`flex items-center gap-3 px-4 py-3 rounded transition ${
                  
                  location.pathname === item.path
                  ?
                  "bg-blue-600"
                  :
                  "hover:bg-slate-700"

                }`}

              >

                <Icon size={20}/>

                <span>
                  {item.name}
                </span>


              </Link>

            );


          })
        }


      </nav>


    </div>

  );

}


export default Sidebar;