"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  size: string;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function Tutor({ size }: Props): JSX.Element {
  return (
    <>
      <svg
        viewBox="0 0 62 71"
        fill="none"
        className={classNames(`${size} shrink-0`)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.8212 15.045C43.5636 22.8849 37.8273 29.0122 31 29.0122C24.1726 29.0122 18.4363 22.8844 18.1787 15.045C17.91 6.877 23.6459 0 31 0C38.354 0 44.0899 6.877 43.8212 15.045Z"
          fill="currentColor"
        />
        <path
          d="M49.9977 33.5628C43.2785 34.7092 36.8562 37.3068 31.0001 41.556C25.4833 37.5526 19.135 34.7798 12.0024 33.5628C15.0286 30.9433 18.6019 28.9387 22.5277 27.7431C27.5801 31.7806 34.4113 31.7879 39.4724 27.7431C43.3977 28.9387 46.9716 30.9428 49.9977 33.5628Z"
          fill="currentColor"
        />
        <path
          d="M29.9065 43.4643V71C22.7672 65.7582 14.1264 62.6903 4.17212 62.594V53.6549H5.378C8.47717 53.6549 10.999 51.1333 10.999 48.0343C10.999 44.9354 8.47717 42.4137 5.378 42.4137H4.17212V35.0582C14.1259 35.1546 22.7672 38.2224 29.9065 43.4643Z"
          fill="currentColor"
        />
        <path
          d="M5.37803 44.1735H3.86106C1.72866 44.1735 0 45.9021 0 48.0343C0 50.1666 1.72866 51.8951 3.86106 51.8951H5.37803C7.51044 51.8951 9.2391 50.1666 9.2391 48.0343C9.2391 45.9021 7.51044 44.1735 5.37803 44.1735Z"
          fill="currentColor"
        />
        <path
          d="M32.0935 43.4643V71C39.2329 65.7582 47.8737 62.6903 57.8279 62.594V53.6549H56.622C53.5229 53.6549 51.0011 51.1333 51.0011 48.0343C51.0011 44.9354 53.5229 42.4137 56.622 42.4137H57.8279V35.0582C47.8742 35.1546 39.2329 38.2224 32.0935 43.4643Z"
          fill="currentColor"
        />
        <path
          d="M56.622 51.8946H58.1389C60.2713 51.8946 62 50.1661 62 48.0338C62 45.9016 60.2713 44.173 58.1389 44.173H56.622C54.4896 44.173 52.7609 45.9016 52.7609 48.0338C52.7609 50.1661 54.4896 51.8946 56.622 51.8946Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
}