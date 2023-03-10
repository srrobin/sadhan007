// import content
import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    // <section id="home" className="overflow-hidden">
    //   <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
    //     <div
    //       data-aos="slide-left"
    //       data-aos-delay="1200"
    //       className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
    //     >
    //       <h1 className=" hidden rotate-90 absolute top-[40%] right-[-30%] md:right-[-6%] text-[#EAF2FA]">
    //         {hero.firstName}{" "}
    //         <span className="hidden text-dark_primary">{hero.LastName}</span>
    //       </h1>
    //     </div>

    //     {/* first col */}
    //     <div className="pb-16 px-6 pt-5" data-aos="fade-down">
    //       <h2 className="text-2xl md:text-6xl">{hero.title}</h2>
    //       <br />
    //       <div className="flex ">
    //         <button className="btn md:w-full !text-sm md:text-xl">
    //           {hero.btnText}
    //         </button>
    //       </div>
    //       <div className="flex flex-col gap-10 mt-10">
    //         {hero.hero_content.map((content, i) => (
    //           <div
    //             key={i}
    //             data-aos="fade-down"
    //             data-aos-delay={i * 300}
    //             className={`flex items-center w-80 gap-5
    //       ${i === 1 && " flex-row-reverse text-right"}  `}
    //           >
    //             <h3>{content.count}</h3>
    //             <p>{content.text}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     {/* sec col */}
    //     <div className="md:h-[37rem] h-96">
    //       <img
    //         src={hero.image}
    //         data-aos="slide-up"
    //         alt="..."
    //         className="h-full object-cover"
    //       />
    //     </div>
    //   </div>
    // </section>
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className=" invisible md:visible rotate-90 absolute top-[50%] right-[-0%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h4 className="md:invisible text-dark_primary">{hero.firstName} {hero.LastName}</h4>
          <h2 className="">{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <button className="btn">{hero.btnText}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h2>{content.count}</h2>
                <p className="text-lg">{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
