import "./App.css";
import GarageSection from "../GarageSection/GarageSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GarageDetails from "../GarageDetails/GarageDetails";
import Design from "../Design/Design";
import Reservation from "../Reservation/Reservation";
import Home from "../Home/Home";
import MecanoCustomer from "../Mecano/MecanoCustomer";
import MecanoOrder from "../Mecano/MecanoOrder";
import MecanoSales from "../Mecano/MecanoSales";
import Years from "../Search/Years";
import Makes from "../Search/Makes";
import Models from "../Search/Models";
import Login from "../Search/Login";
import Dashboard from "../Dashboard/Dashboard.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<GarageSection />} />
          <Route path="/garage/:id" element={<GarageDetails />} />
          <Route path="/test" element={<Design />} />
          <Route path="/reservation/:id" element={<Reservation />} />
          <Route path="/mecano/customer" element={<MecanoCustomer />} />
          <Route path="/mecano/order" element={<MecanoOrder />} />
          <Route path="/mecano/Sales" element={<MecanoSales />} />
          <Route path="/search" element={<Years />} />
          <Route path="/search/:year" element={<Makes />} />
          <Route path="/search/:year/:make" element={<Models />} />
          <Route path="/search/:year/:make/:model/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
