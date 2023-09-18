"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  size: string;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function Gold({ size }: Props): JSX.Element {
  return (
    <>
      <svg
        viewBox="0 0 111 89"
        fill="none"
        className={classNames(`${size} shrink-0`)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_707_12)">
          <path
            d="M26.7664 53.9418L29.6185 69.8305L34.1382 57.4599L26.7664 53.9418Z"
            fill="currentColor"
          />
          <path
            d="M17.4821 36.6048L7.57202 41.9648L14.3436 45.1969L17.4821 36.6048Z"
            fill="currentColor"
          />
          <path
            d="M24.2972 53.9962L24.0557 52.6475L13.4683 47.5932L13.4982 47.511L6.17925 44.0173L0 60.9305L27.936 74.2643L24.2972 53.9962Z"
            fill="currentColor"
          />
          <path
            d="M56.6541 66.853L56.9128 68.3001L60.6286 89L111 61.1481L107.025 39.0012L56.6541 66.853Z"
            fill="currentColor"
          />
          <path
            d="M48.7612 61.7246L55.2568 64.8248L106.109 36.7067L99.2924 33.7848L48.7612 61.7246Z"
            fill="currentColor"
          />
          <path
            d="M54.209 67.0417L36.3509 58.518L30.1716 75.43L58.1077 88.765L54.47 68.4957L54.209 67.0417Z"
            fill="currentColor"
          />
          <path
            d="M43.0076 37.759L43.2675 39.2049L46.9833 59.906L97.3546 32.0541L93.3789 9.90717L43.0076 37.759Z"
            fill="currentColor"
          />
          <path
            d="M41.6114 35.7297L92.4623 7.6127L74.7089 0L24.0972 27.3703L41.6114 35.7297Z"
            fill="currentColor"
          />
          <path
            d="M16.5264 46.336L44.4624 59.671L40.8236 39.4017L40.5625 37.9477L22.7045 29.4228L16.5264 46.336Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_707_12">
            <rect width="111" height="89" fill="currentColor" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
