const Hero = () => {
  return (
    <div className="bg-dark h-[50vh] sm:h-[650px] flex p-2 sm:p-5  items-center flex-col justify-center">
      <div className="bg-cover w-full h-full bg-center rounded-md bg-[url(../assets/slider-img.png)] bg-no-repeat  ">
        {/* overlay */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>
    </div>
  );
};

export default Hero;
