"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  size: number;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function HiChevronUp({ size }: Props): JSX.Element {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`w-${size} h-${size} shrink-0`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </>
  );
}
