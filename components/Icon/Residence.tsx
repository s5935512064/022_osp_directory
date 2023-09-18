"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  size: string;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function Residence({ size }: Props): JSX.Element {
  return (
    <>
      <svg
        viewBox="0 0 73 55"
        fill="none"
        className={classNames(`${size} shrink-0`)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 48.1168V52.6984C0 53.8795 0.957555 54.8371 2.13867 54.8371C3.31979 54.8371 4.27734 53.8795 4.27734 52.6984V50.2555H68.7227V52.6984C68.7227 53.8795 69.6802 54.8371 70.8613 54.8371C72.0424 54.8371 73 53.8795 73 52.6984V48.1168V41.0924H0V48.1168Z"
          fill="currentColor"
        />
        <path
          d="M65.1345 23.0705H7.86546C3.52852 23.0705 0 26.5991 0 30.9361V36.8151H73V30.9361C73 26.5991 69.4715 23.0705 65.1345 23.0705Z"
          fill="currentColor"
        />
        <path
          d="M28.4826 13.6033C26.5039 13.6033 24.8942 15.2129 24.8942 17.1915V18.793H48.1059V17.1915C48.1059 15.2129 46.4963 13.6033 44.5178 13.6033H28.4826Z"
          fill="currentColor"
        />
        <path
          d="M20.6168 17.1915C20.6168 12.8544 24.1453 9.326 28.4825 9.326H44.5179C48.855 9.326 52.3833 12.8544 52.3833 17.1915V18.793H63.8372V8.0284C63.8372 3.69131 60.3087 0.162933 55.9715 0.162933H17.0287C12.6916 0.162933 9.16321 3.69131 9.16321 8.0284V18.793H20.6168V17.1915Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
}
