"use client";

import React, { FC, useEffect, useState, Fragment } from "react";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Signed: FC<Props> = (): JSX.Element => {
  // useEffect(() => {
  //     const frame = document.getElementById("frame");

  //     if(frame) {
  //         const startPolling = () => {
  //             if (frame.querySelector("...")) {
  //                console.log('react is ready')
  //                return
  //             }
  //             setTimeout(startPolling, 1000)
  //          }

  //          frame.onload = () => {
  //             startPolling()
  //          }
  //     }

  // },[])

  return (
    <>
      <div className="w-full h-max relative aspect-video flex items-center justify-center">
        <iframe
          id="frame"
          width="100%"
          height="100%"
          src={
            "https://smartsignage.ssdapp.net/signage/horizontal-v3/T01?compcode=OSP&screencolor=0a3254"
          }
          title="smartsignage"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          className="w-full h-full relative aspect-video "
        ></iframe>
      </div>
      {/* <div className="w-full h-full relative px-10 flex flex-col ">
        <div className="grid grid-cols-6 gap-4 mt-7">
          {data.data.map((item: IShop, index: number) => (
            <ShopCard key={item.id} shop={item} />
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Signed;
