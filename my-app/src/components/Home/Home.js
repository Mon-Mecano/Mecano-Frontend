import NavbarHome from "./NavbarHome";
import BlackCar from "../../assets/images/black-car.png";
import Promotion from "../../assets/images/promotion.png";
import ProfilePic from "../../assets/images/profile-pic.png";

const Home = () => {
  return (
    <>
      <NavbarHome />
      <div className="flex relative justify-center items-center mt-8">
        <img src={BlackCar} alt="car" />
        <a href="/shop">
          <button className="absolute bg-white p-6 text-3xl font-sans font-bold rounded-xl right-1/4">
            Trouvez un mecano
          </button>
        </a>
      </div>
      <div className="flex justify-between mx-32 mt-8">
        <img src={Promotion} alt="promotion" />
        <img src={Promotion} alt="promotion" />
      </div>
      <div className="mx-32 mt-5">
        <h1 className="font-sans text-3xl">Avis de nos clients :</h1>
        <div className="container mt-5 flex-col justify-center">
          <img className="float-left mr-4" src={ProfilePic} alt="profile pic" />
          <h1 className="font-mono font-bold text-xl text-left">Brahim</h1>
          <p className="font-mono text-lg">
            Site lahoma barik Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>
        <div className="container mt-20 flex-col justify-center">
          <img className="float-left mr-4" src={ProfilePic} alt="profile pic" />
          <h1 className="font-mono font-bold text-xl text-left">Brahim</h1>
          <p className="font-mono text-lg">
            Site lahoma barik Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>
        <div className="container mt-20 flex-col justify-center">
          <img className="float-left mr-4" src={ProfilePic} alt="profile pic" />
          <h1 className="font-mono font-bold text-xl text-left">Brahim</h1>
          <p className="font-mono text-lg">
            Site lahoma barik Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
