const Hero = () => {
  return (
    <div className="bg-dark relative h-[80vh] sm:h-[650px] flex p-2 sm:p-5  items-center flex-col justify-center">
      <div className="bg-cover w-full h-full bg-center rounded-md bg-[url(../assets/slider-img.png)] bg-no-repeat  ">
        {/* overlay */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="Container">
          <div className="w-full flex flex-col items-start justify-center sm:w-1/2 absolute  top-[25%]  text-white">
            <h1 className=" text-[45px] sm:text-[56px] font-normal">
              Woodhouse
            </h1>
            <span className="bg-primary text-white rounded-sm py-2 px-3 text-sm mt-5">
              high level design
            </span>
            <p className="bg-dark w-[85%] md:w-[410px] text-sm font-normal p-3 rounded-sm mt-5 ">
              The development and implementation of beautiful wood interiors has
              never been so accessible. Interiors made of wood of various
              species will make your home cozy and warm, delighting you and your
              guests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
