"use client";

import React, { FC, useEffect, useState, Fragment } from "react";
import { motion } from "framer-motion";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const loadingContainer = {
  width: "10rem",
  height: "5rem",
  display: "flex",
  justifyContent: "space-evenly",
};
const loadingCircle = {
  display: "block",
  width: "2rem",
  height: "2rem",
  backgroundColor: "white",
  borderRadius: "50%",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "60%",
  },
};
const loadingCircleTransition = {
  duration: 0.4,
  repeatType: "mirror",
  repeat: Infinity,
  ease: "easeInOut",
};

const Loader = () => {
  return (
    <div>
      <div className="flex fixed w-full justify-center items-center h-screen z-[60]">
        <motion.div
          style={loadingContainer}
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          <motion.span
            key={1}
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            key={2}
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            key={3}
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
        </motion.div>
      </div>
      <div className="fixed  w-full min-h-screen z-50 bg-primaryOwn " />
    </div>
  );
};

export default Loader;
