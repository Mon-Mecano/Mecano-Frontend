import SideBar from "./SideBar";
import Order from "../../assets/images/order.png";

const MecanoOrder = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <SideBar />
      <div className="flex justify-center items-center py-10">
        <img src={Order} alt="customer"></img>
      </div>
    </div>
  );
};

export default MecanoOrder;
