import SectionHeader from "../UI/SectionHeader";
import { motion } from "framer-motion";
const serviceList = [
  {
    id: 0,
    header: "Interior Design",
    description:
      "We have been designing stunning interior designs for over 30 years and delighting our clients with unique work done in a variety of styles and taste.",
    image: "/assets/services/service_1.png",
  },
  {
    id: 1,
    header: "Design",
    description:
      "One of our directions is the creation of conceptual installations made of wood for those who appreciate contemporary art and want to diversify their interior.",
    image: "/assets/services/service_2.png",
  },
  {
    id: 2,
    header: "wood supply",
    description:
      "We supply exclusively high-quality wood species from reliable Italian and French suppliers. All wood corresponds to the European standard.",
    image: "/assets/services/service_3.png",
  },
  {
    id: 3,
    header: "renovation",
    description:
      "We carry out repairs of furniture and wood products. Our state-of-the-art workshop has the right tools and materials for every task.",
    image: "/assets/services/service_4.png",
  },
  {
    id: 4,
    header: "Concept",
    description:
      "One of our directions is the creation of conceptual installations made of wood for those who appreciate contemporary art and want to diversify their interior.",
    image: "/assets/services/service_5.png",
  },
  {
    id: 5,
    header: "Call of experts",
    description:
      "Do you own antique, heavy or unusual furniture or wood products? We will come to you with all the necessary tools ourselves.",
    image: "/assets/services/service_6.png",
  },
];
const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, type: "spring" }}
      className="Container xl:w-[1250px] mb-16 "
    >
      <SectionHeader
        title="Our services"
        text="Here we have collected all the key services of our company, divided into categories. If the service you need is not listed, please contact us."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {serviceList.map((item) => (
          <div
            key={item.id}
            className="flex flex-col group transition-all duration-200  hover:border-primary md:flex-row gap-2 border  border-[#E4E6E8]"
          >
            <div className="px-5 w-full order-2 md:order-1 md:w-1/2 flex flex-col  justify-center">
              <h2 className="text-text group-hover:underline  transition-all duration-200 group-hover:text-primary underline-primary font-bold text-lg mb-3">
                {item?.header}
              </h2>
              <p className="text-[#7E7E7E] font-normal text-sm">
                {item?.description}
              </p>
            </div>
            <figure className="mb-0 w-full order-1 md:order-2  md:w-1/2">
              <img src={item.image} className="w-full" alt="service" />
            </figure>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-8">
        <button className="bg-primary text-white px-4 py-2 rounded-sm">
          Make a request
        </button>
      </div>
    </motion.div>
  );
};

export default Services;
