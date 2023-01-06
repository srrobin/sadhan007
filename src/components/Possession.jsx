import Bgcontact from "../assets/images/Contact/contact.jpg";
import { content } from "../Content";

const Possession = () => {
  const { Contact } = content;
  return (
    <section className="h-[235px] md:w-full md:h-screen relative" id="contact">
      <img src={Bgcontact} alt="" className="w-full h-full object-contain md:object-cover" />

      <div className="absolute top-0 left-0 w-full h-full bg-blue-900/80"></div>
      <div className="absolute text-white p-4 top-0 w-full h-full flex flex-col justify-center text-right md:text-center">
        <h3 className="capitalize text-white pt-36 md:pl-[600px]  md:pt-96 pb-5 text-xl align-bottom md:text-7xl md:top-[700px]">
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
