"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  size: string;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function Electronic({ size }: Props): JSX.Element {
  return (
    <>
      <svg
        viewBox="0 0 64 71"
        fill="none"
        className={classNames(`${size} shrink-0`)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M61.5127 16.8729H2.48731C1.11304 16.8729 0 17.9856 0 19.3595V60.5538C0 61.9277 1.11304 63.0405 2.48731 63.0405H61.5127C62.887 63.0405 64 61.9277 64 60.5538V19.3595C64 17.9856 62.887 16.8729 61.5127 16.8729ZM45.6234 57.6243H12.5388C9.18829 57.6243 6.46247 54.9106 6.46247 51.5497V29.3175C6.46247 25.9679 9.17693 23.2428 12.5388 23.2428H45.6234C48.9739 23.2428 51.6997 25.9565 51.6997 29.3175V51.5497C51.6997 54.8993 48.9853 57.6243 45.6234 57.6243ZM59.7863 36.8682H56.2768V33.3597H59.7863V36.8682ZM59.7863 29.6354H56.2768V26.1268H59.7863V29.6354Z"
          fill="currentColor"
        />
        <path
          d="M34.3454 14.1818H17.5361C16.9089 14.1818 16.4004 14.6902 16.4004 15.3173V18.1332C16.4004 18.7603 16.9089 19.2687 17.5361 19.2687H34.3454C34.9726 19.2687 35.4811 18.7603 35.4811 18.1332V15.3173C35.4811 14.6902 34.9726 14.1818 34.3454 14.1818Z"
          fill="currentColor"
        />
        <path
          d="M16.9581 2.00263L14.998 3.05771L22.084 16.2143L24.0441 15.1592L16.9581 2.00263Z"
          fill="currentColor"
        />
        <path
          d="M18.0018 1.24901C18.6265 2.40717 18.1949 3.8492 17.0364 4.4737C15.878 5.0982 14.4356 4.66673 13.8109 3.50856C13.1862 2.3504 13.6178 0.908371 14.7763 0.283871C15.9348 -0.34063 17.3772 0.0908433 18.0018 1.24901Z"
          fill="currentColor"
        />
        <path
          d="M27.8205 15.1478L29.7805 16.2029L36.8665 3.04627L34.9065 1.99119L27.8205 15.1478Z"
          fill="currentColor"
        />
        <path
          d="M33.8683 1.24901C33.2436 2.40717 33.6752 3.8492 34.8337 4.4737C35.9921 5.0982 37.4345 4.66673 38.0592 3.50856C38.6839 2.3504 38.2523 0.908371 37.0938 0.283871C35.9353 -0.34063 34.4929 0.0908433 33.8683 1.24901Z"
          fill="currentColor"
        />
        <path
          d="M8.46149 64.755H3.37329L5.91739 71H8.46149H11.0056L13.5497 64.755H8.46149Z"
          fill="currentColor"
        />
        <path
          d="M55.4932 64.755H60.5814L58.0373 71H55.4932H52.9491L50.405 64.755H55.4932Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
}
