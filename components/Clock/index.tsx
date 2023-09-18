"use client";

import React, { FC, useEffect, useState, Fragment } from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Clock: FC<Props> = (): JSX.Element => {
  const [clock, setClock] = useState(moment().format("LTS"));
  const [date, setDate] = useState(moment().format("MMMM Do YYYY"));

  const timeUpdate = () => {
    setClock(moment().format("LTS"));
  };

  useEffect(() => {
    setInterval(timeUpdate, 1000);
  }, []);

  //   function update() {
  //     const dateElement = document.getElementById("datetime");
  //     if (dateElement)
  //       dateElement.innerHTML = moment().format("MMMM Do YYYY, h:mm:ss a");
  //   }

  //   setInterval(update, 1000);

  return (
    <>
      <time
        suppressHydrationWarning
        className="text-2xl font-semibold text-white"
      >
        {clock}
      </time>
      <time className="text-slate-500">{date}</time>
    </>
  );
};

export default Clock;
