import Hero from "./Hero/Hero";
import Laptops from "./Laptops/Laptops";
import Appliances from "./Appliances/Appliances";
import Electronics from "./Electronics/Electronics";
import Fragrances from "./Fragrances/Fragrances";
import SmartPhones from "./SmartPhones/SmartPhones";
import Advertise from "./Advertise/Advertise";
import Watches from "./Watches/Watches";
import HappyCustomers from "./HappyCustomers/HappyCustomers";

const Home = () => {
  return (
    <div className="container-fluid">
      <Hero />
      <SmartPhones />
      <Laptops />
      <Electronics />
      <Appliances />
      <Advertise />
      <Watches />
      <Fragrances />
      <HappyCustomers />
    </div>
  );
};

export default Home;
