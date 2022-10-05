import SideBar from "./SideBar";
import Customer from "../../assets/images/customer.png";

const MecanoCustomer = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <SideBar />
      <div className="flex justify-center items-center py-10">
        <img src={Customer} alt="customer"></img>
      </div>
    </div>
  );
};

export default MecanoCustomer;
