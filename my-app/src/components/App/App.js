import "./App.css";
import GarageSection from "../GarageSection/GarageSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GarageDetails from "../GarageDetails/GarageDetails";
import Design from "../Design/Design";
import Reservation from "../Reservation/Reservation";
import Home from "../Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/shop" element={<GarageSection />} />
          <Route path="/garage/:id" element={<GarageDetails />} />
          <Route path="/test" element={<Design />} />
          <Route path="/reservation/:id" element={<Reservation />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
