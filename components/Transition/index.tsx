"use client";

import React, { FC, useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Loader from "../Loader";

interface Props {
  children: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  exit: { opacity: 0, x: 0, y: 0 },
};

const Transition: FC<Props> = ({ children }): JSX.Element => {
  const [isLoad, setIsLoad] = useState(true);

  setTimeout(() => {
    setIsLoad(false);
  }, 2000);

  if (isLoad) {
    return <Loader />;
  }
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "spring", duration: 1.5 }}
          className="w-full h-screen flex flex-col "
        >
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Transition;
