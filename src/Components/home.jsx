import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import lightImg from "../assets/Images/portfolio-nbg.png";
import darkimg from "../assets/Images/portfolio-nbg.png";

const Home = () => {
  const { currTheme } = useContext(ThemeContext);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className=" ml-[200px] flex w-full items-center "
    >
      {/* text section */}
      <div className="h-screen  w-[500px] flex flex-col justify-center  gap-3 ">
        <span className="text-5xl font-bold items-end">
          Hi i'm <span className="text-6xl font-bold font-moonDance">Ajay</span>{" "}
        </span>
        <span className="text-5xl font-bold">Front End Developer</span>
        <p className="text-2xl font-serif">
          I design modern and responsive <br /> webpages which are accessible{" "}
          <br /> across variety of devices
        </p>
      
        <motion.button
        transition={{type:"spring"}}
         whileHover={{ scale: 1.1 }}
         whileTap={{scale:0.9}}
          className={` ml-20 p-3 border font-bold rounded-xl mt-5 mr-5 w-[110px] ${
            currTheme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-800"
          }`}
        >
          {" "}
          Connect{" "}
        </motion.button>
    
      </div>
      {/* image section */}
      <div className="ml-20 border-10 rounded-full">
        <img
          src={currTheme === "light" ? lightImg : darkimg}
          alt="homeImg"
          className="w-[300px] h-[320px] transition-all ease-in-out rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default Home;
