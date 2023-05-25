import icon_sedan from "../assets/icon_sedans.svg";
import icon_suvs from "../assets/icon_suvs.svg";
import icon_luxury from "../assets/icon_luxury.svg";

const Three_col_grid = () => {
  return (
    <>
      <main>
        <section className="grid grid-rows-3 px-6 py-20 lg:flex lg:justify-center lg:items-center lg:h-screen xl:flex xl:justify-center xl:items-center xl:h-screen md:flex md:justify-center md:items-center sm:flex sm:justify-center sm:items-center sm:h-screen">
          <div className="sm:min-h-[550px] flex flex-col bg-[#e38826] px-12 py-12 gap-8 rounded-t-md lg:rounded-bl-md lg:rounded-tl-md xl:rounded-bl-md xl:rounded-tl-md sm:rounded-bl-md sm:rounded-tl-md md:rounded-bl-md md:rounded-tl-md xl:rounded-tr-none md:rounded-tr-none lg:rounded-tr-none sm:rounded-tr-none ">
            <img className="w-16 h-11" src={icon_sedan} alt="sedan car" />
            <span className=" uppercase text-[40px]  font-Big-Shoulder text-[#f2f2f2] ">
              {" "}
              Sedans
            </span>
            <p className=" md:text-[15px] lg:text-[15px] text-[15px] sm:text-[11px] font-normal max-w-[225px] text-white font-Lexend opacity-75 leading-7">
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </p>
            <button className="sm:text-[11px] md:text-[15px] lg:text-[15px] bg-[#f2f2f2] max-w-[140px] px-3 py-3 text-[15px] text-[#e38826] font-Lexend  rounded-l-3xl rounded-r-3xl cursor-pointer hover:bg-transparent hover:border-white border hover:text-white">
              Learn More
            </button>
          </div>

          <div className=" sm:min-h-[550px] flex flex-col bg-[#006970] px-12 py-12 gap-8">
            <img src={icon_suvs} className="w-16 h-11" alt="suv car" />
            <span className="uppercase text-[40px] font-bold text-[#f2f2f2] font-Big-Shoulder ">
              SUVs
            </span>
            <p className="md:text-[15px] sm:text-[11px] lg:text-[15px] text-[15px] font-normal max-w-[220px] text-white opacity-75 leading-7">
              Take an SUV for its spacious interior, power, and versatility.
              Perfect for your next family vacation and off-road adventures.
            </p>
            <button className="bg-[#f2f2f2]  md:text-[15px] lg:text-[15px] sm:text-[11px] text-[15px] max-w-[140px] px-3 py-3 font-Lexend text-[#006970] rounded-l-3xl rounded-r-3xl cursor-pointer hover:bg-transparent hover:border-white border hover:text-white">
              Learn More
            </button>
          </div>

          <div className=" sm:min-h-[550px] flex flex-col bg-[#004241] px-12 py-12 gap-8 rounded-b-md lg:rounded-br-md lg:rounded-tr-md xl:rounded-br-md xl:rounded-tr-md md:rounded-br-md md:rounded-tr-md sm:rounded-br-md sm:rounded-tr-md lg:rounded-bl-none xl:rounded-bl-none sm:rounded-bl-none md:rounded-bl-none">
            <img src={icon_luxury} className="w-16 h-11" alt="luxury car" />
            <span className="uppercase text-[40px] font-bold text-[#f2f2f2] font-Big-Shoulder">
              Luxury
            </span>
            <p className="md:text-[15px] lg:text-[15px] text-[15px] sm:text-[11px] font-normal max-w-[220px] text-white opacity-75 leading-7">
              Cruise in the best car brands without the bloated prices. Enjoy
              the enhanced comfort of a luxury rental and arrive in style.
            </p>
            <button className="bg-[#f2f2f2] sm:text-[11px] text-[15px] lg:text-[15px] md:text-[15px] max-w-[140px] px-3 py-3 text-[#004241] font-Lexend  rounded-l-3xl rounded-r-3xl cursor-pointer hover:bg-transparent hover:border-white border hover:text-white">
              Learn More
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Three_col_grid;
