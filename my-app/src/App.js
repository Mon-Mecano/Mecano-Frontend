import "./App.css";
import GarageSection from "./GarageSection";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GarageDetails from "./GarageDetails";
import Design from "./Design";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<GarageSection />} />
          <Route path ="/garage/:id" element={<GarageDetails />} />
          <Route path ="/test" element={<Design />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
