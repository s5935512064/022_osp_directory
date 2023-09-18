"use client";

import React, { FC, useEffect, useState, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Clock = dynamic(() => import("@components/Clock"), { ssr: false });

const Navbar: FC<Props> = (): JSX.Element => {
  return (
    <>
      <div className="w-full flex h-fit justify-center items-center py-2 px-6 fixed top-0 bg-primaryOwn z-20">
        <div className="absolute left-10 flex flex-col  ">
          <p className="font-semibold uppercase text-4xl text-white">
            Directory
          </p>
        </div>
        <div className="w-32 h-20 relative">
          <Image
            src="/assets/OSP-Logo-W.webp"
            alt="logo"
            priority
            unoptimized={true}
            width="0"
            height="0"
            sizes="100vw"
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
            className="w-full h-full"
          />
        </div>

        <div className="absolute right-10 flex flex-col items-end ">
          <Clock />
        </div>
      </div>
    </>
  );
};

export default Navbar;
