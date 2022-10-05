import { BsSpeedometer, BsCreditCard2Back, BsBag } from "react-icons/bs";

const SideBar = () => {
  return (
    <div className="float-left top-0 left-0 h-screen w-32 bg-gray-800 flex flex-col text-white shadow-lg justify-evenly">
      <a href="/mecano/customer">
        <SideBarIcon icon={<BsSpeedometer size="30" />} />
      </a>
      <a href="/mecano/sales">
        <SideBarIcon icon={<BsCreditCard2Back size="30" />} />
      </a>
      <a href="/mecano/order">
        <SideBarIcon icon={<BsBag size="30" />} />
      </a>
    </div>
  );
};
const SideBarIcon = ({ icon }) => {
  return <div className="sidebar-icon">{icon}</div>;
};

export default SideBar;
