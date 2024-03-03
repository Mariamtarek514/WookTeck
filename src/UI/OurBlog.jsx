import React from "react";
import Blog1 from "../assets/images/home/home_6.png";
import Blog2 from "../assets/images/home/home_7.png";
import Blog3 from "../assets/images/home/home_8.png";
import { Link } from "react-router-dom";
const OurBlog = () => {
  return (
    <div className="Container py-8">
      <h3 className="text-center font-bold text-[29px] mb-5">Our blog</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border flex flex-col items-center justify-center  p-3 rounded-sm">
          <figure className="mb-0">
            <img src={Blog1} alt="" />
          </figure>
          <div className="space-y-2 mt-3 text-center sm:text-start">
            <h3 className="font-bold text-lg">
              Built an amazing wooden staircase
            </h3>
            <p className="text-sm font-normal text-[#333333]">
              One of the most unusual projects of our company is an old-style
              spiral wooden staircase. The work of our team took about four
              months.
            </p>
            <strong className="underline cursor-pointer text-text font-bold text-sm">
              Read more
            </strong>
          </div>
        </div>
        <div className="border flex flex-col items-center justify-center  p-3 rounded-sm">
          <figure className="mb-0">
            <img src={Blog2} alt="blog" />
          </figure>
          <div className="space-y-2 mt-3 text-center sm:text-start">
            <h3 className="font-bold text-lg">
              Creating a wooden futuristic bedroom
            </h3>
            <p className="text-sm font-normal text-[#333333]">
              The creation of a unique project - a wooden bedroom in a
              futuristic style took the Woodtech team two months.
            </p>
            <strong className="underline cursor-pointer text-text font-bold text-sm">
              Read more
            </strong>
          </div>
        </div>
        <div className="border flex flex-col relative items-center justify-center  p-3 rounded-sm">
          <img src={Blog3} alt="blog" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <Link to="/blog" className="text-[15px] font-[500] underline">
              Go to all <br /> blog posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
