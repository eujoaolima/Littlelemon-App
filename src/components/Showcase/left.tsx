import React from "react";
import { BikeDelivery } from "../Assets";
import { motion } from "framer-motion";
import { useStateValue } from "../../context/StateProvider";
import { Link } from "react-router-dom";

const Left = () => {
  const [{ showReserveForm }, dispatch] = useStateValue();
  const handleToggleReserveBook = () => {
    dispatch({
      type: "TOGGLE_RESERVE_FORM",
      showReserveForm: !showReserveForm,
    });
  }


  return (
    <div className="py-2 flex-1 flex flex-col items-start justify-center gap-3">
      <div className="flex items-center gap-2 justify-center bg-yellow-100 px-4 py-1 rounded-full">
        <p className="text-base text-yellow-500 font-bold">We offer motocycle delivery</p>
        <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
          <img
            src={BikeDelivery}
            alt="delivery"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <p className="text-[2rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
        The Best Italian Food in
        <span className="text-yellow-500 text-[2.5rem] lg:text-[4.6rem]"> Boston</span>
      </p>
      <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
        
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
      >
        <Link to={'#'}>Order Now</Link>
      </motion.button>
    </div> 
  );
};

export default Left;
