import "./service.css";
import ServiceCard from "./serviceCard";
import { servicesData } from "../../constants/servicesData";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
const ServicesComponent = () => {
  return (
    <>
      <div className="bg-[url(/services-page-images/service-hero-bg.jpg)] bg-fixed bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 ">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="flex gap-10 justify-between items-end max-md:items-center px-10 mx-auto max-md:px-5 max-md:flex-col"
        >
          <div className="text-white flex flex-col gap-8 max-md:items-center max-md:text-center">
            <h1 className="text-5xl font-bold">Our Spaces</h1>
            <p className="text-xl max-w-md">
            Our mission is to combine innovation with sustainability and community collaboration, the business addresses market demand for affordable studio
            spaces while promoting environmental conservation and local economic development.
            </p>
          </div>
          <div className="flex gap-12 text-white max-md:text-center">
            <div className="flex max-md:items-center  flex-col gap-4">
              <h2 className="text-4xl title-font font-bold">20+</h2>
              <p className="text-lg">Premium air spaces</p>
            </div>
            <div className="flex max-md:items-center flex-col gap-4">
              <h2 className="text-4xl  title-font font-bold">5+</h2>
              <p className="text-lg">Premium Co-spaces</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto grid grid-cols-2 max-md:grid-rows-6 max-md:grid-cols-1 grid-rows-3 p-10 max-lg:px-5 gap-5"
      >
        {servicesData.map((e, i) => {
          return (
            <ServiceCard
              key={i}
              title={e.title}
              brief={e.shortDescription}
              imgSrc={e.image}
              id={e.id}
              iconSrc={e.icon}
            />
          );
        })}
      </div>
    </>
  );
};

export default ServicesComponent;
{
  /* <div className="it-content text-xl  gap-2 justify-center items-center flex-col max-w-md text-center hidden overflow-hidden scale-y-0  transition-all  ">
    <p>
    We believe that technology design are revolutionizing brand
    experiences.
    </p>
    <a className="font-bold" href="">
    Read More {">"}
          </a> */
}
//   </div>
