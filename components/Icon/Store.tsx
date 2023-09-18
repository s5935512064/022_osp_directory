"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  size: string;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function Store({ size }: Props): JSX.Element {
  return (
    <>
      <svg
        viewBox="0 0 74 66"
        fill="none"
        className={classNames(`${size} shrink-0`)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M60.4256 9.87345L73.7718 28.3681C74.1431 28.8861 74.0715 29.4368 73.5634 29.9154C73.0553 30.3874 72.2542 30.6562 71.3227 30.6562H2.68988C1.75845 30.6562 0.957288 30.394 0.449235 29.9154C-0.0588193 29.4433 -0.136981 28.8861 0.240802 28.3681L13.5805 9.87345C14.0169 9.27029 14.9483 8.89659 16.0361 8.89659H57.9766C59.0643 8.89659 59.9958 9.26373 60.4322 9.87345"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.9357 40.6214H41.0936C41.4518 40.6214 41.7515 40.9165 41.7515 41.277V56.9329C41.7515 57.2935 41.4584 57.5951 41.0936 57.5951H12.9357C12.5775 57.5951 12.2778 57.3001 12.2778 56.9329V41.277C12.2778 40.9165 12.5709 40.6214 12.9357 40.6214ZM6.71533 34.3604H67.291V66H62.5426V41.2836C62.5426 40.923 62.2495 40.628 61.8848 40.628H48.2976C47.9393 40.628 47.6397 40.923 47.6397 41.2836V66H6.71533V34.3604Z"
          fill="currentColor"
        />
        <path d="M57.4688 0H16.5378V6.26105H57.4688V0Z" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M51.411 51.3341C52.2252 51.3341 52.8831 51.9962 52.8831 52.8157C52.8831 53.6352 52.2252 54.2974 51.411 54.2974C50.5968 54.2974 49.939 53.6352 49.939 52.8157C49.939 51.9962 50.5968 51.3341 51.411 51.3341Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
}
