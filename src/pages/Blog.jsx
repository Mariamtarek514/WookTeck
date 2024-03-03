import SectionHeader from "../UI/SectionHeader";
import { motion } from "framer-motion";
const blogList = [
  {
    id: 0,
    image: "./assets/blog/blog_1.png",
    title: "Creating a wooden futuristic bedroom",
    description:
      "The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.",
  },
  {
    id: 1,
    image: "./assets/blog/blog_2.png",
    title: "Creating a wooden futuristic bedroom",
    description:
      "The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.",
  },
  {
    id: 2,
    image: "./assets/blog/blog_3.png",
    title: "Creating a wooden futuristic bedroom",
    description:
      "The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.",
  },
  {
    id: 3,
    image: "./assets/blog/blog_4.png",
    title: "Creating a wooden futuristic bedroom",
    description:
      "The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.",
  },
  {
    id: 4,
    image: "./assets/blog/blog_5.png",
    title: "Creating a wooden futuristic bedroom",
    description:
      "The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.",
  },
  {
    id: 5,
    image: "./assets/blog/blog_6.png",
    title: "Creating a wooden futuristic bedroom",
    description:
      "The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.",
  },
  {
    id: 6,
    image: "./assets/blog/blog_7.png",
    title: "Creating a wooden futuristic bedroom",
    description:
      "The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.",
  },
  {
    id: 7,
    image: "./assets/blog/blog_8.png",
    title: "Creating a wooden futuristic bedroom",
    description:
      "The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.",
  },
  {
    id: 8,
    image: "./assets/blog/blog_9.png",
    title: "Creating a wooden futuristic bedroom",
    description:
      "The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.",
  },
  {
    id: 9,
    image: "./assets/blog/blog_10.png",
    title: "Creating a wooden futuristic bedroom",
    description:
      "The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.",
  },
  {
    id: 10,
    image: "./assets/blog/blog_11.png",
    title: "Creating a wooden futuristic bedroom",
    description:
      "The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.",
  },
  {
    id: 11,
    image: "./assets/blog/blog_12.png",
    title: "Creating a wooden futuristic bedroom",
    description:
      "The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.",
  },
];
const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, type: "spring" }}
      className="Container xl:w-[1250px] mb-16 "
    >
      <SectionHeader
        title="Company blog"
        text="List of Woodtech news and articles on architectural design, engineering and interior design."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {blogList.map((item) => (
          <div
            key={item.id}
            className="border flex flex-col items-center justify-center  p-3 rounded-sm"
          >
            <figure className="mb-0">
              <img src={item.image} alt="" />
            </figure>
            <div className="space-y-2 mt-3 text-center sm:text-start">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm font-normal text-[#333333]">
                {item.description}
              </p>
              <strong className="underline cursor-pointer text-text font-bold text-sm">
                Read more
              </strong>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Blog;
