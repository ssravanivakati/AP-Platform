import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Layout from "./layout/Layout";

import Dashboard from "./pages/Dashboard";
import InvoiceUpload from "./pages/InvoiceUpload";
import Invoices from "./pages/Invoices";
import Notifications from "./pages/Notifications";
import Vendors from "./pages/Vendors";
import VendorDashboard from "./pages/VendorDashboard";
import Settings from "./pages/Settings";


function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Dashboard />} />

          <Route 
            path="upload" 
            element={<InvoiceUpload />} 
          />

          <Route 
            path="invoices" 
            element={<Invoices />} 
          />

          <Route 
            path="notifications" 
            element={<Notifications />} 
          />

          <Route 
            path="vendors" 
            element={<Vendors />} 
          />

          <Route 
            path="vendor-dashboard" 
            element={<VendorDashboard />} 
          />

          <Route 
            path="settings" 
            element={<Settings />} 
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
