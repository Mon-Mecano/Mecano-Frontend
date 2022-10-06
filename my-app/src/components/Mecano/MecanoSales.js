import SideBar from "./SideBar";
import Sales from "../../assets/images/Sales.png";

const MecanoSales = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <SideBar />
      <div className="flex justify-center items-center py-40">
        <img src={Sales} alt="customer"></img>
      </div>
    </div>
  );
};

export default MecanoSales;
