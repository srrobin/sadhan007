import Bgcontact from "../assets/images/Contact/contact.jpg";
import { content } from "../Content";

const Possession = () => {
  const { Contact } = content;
  return (
    <section className="w-full h-screen relative" id="contact">
      <img src={Bgcontact} alt="" className="w-full h-full object-cover" />

      <div className="absolute top-0 left-0 w-full h-full bg-blue-900/80"></div>
      <div className="absolute text-white p-4 top-0 w-full h-full flex flex-col justify-center text-center">
        <h3 className="capitalize text-white pb-5  text-7xl">
          Keep Calm & carry On.
        </h3>
        {/* <p className="text-white text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p> */}
      </div>
    </section>
  );
};

export default Possession;
