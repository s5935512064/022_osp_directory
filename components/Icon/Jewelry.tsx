"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  size: string;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function Jewelry({ size }: Props): JSX.Element {
  return (
    <>
      <svg
        viewBox="0 0 111 82"
        fill="none"
        className={classNames(`${size} shrink-0`)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.86555 23.386H19.2151L17.2376 18.9546L16.6407 17.4278L17.7973 16.2734L33.0575 0H39.96L22.3866 18.4705L24.476 23.386H52.2726V0H58.0185V23.386H84.957L87.6434 17.0554L71.8608 0H78.5395L92.3818 14.8583L93.4266 16.0127L92.8296 17.5395L90.2551 23.386H109.134L111 25.3597L109.023 27.445L88.5015 27.3333L73.5025 63.4923L63.8763 73.2116L83.2034 27.3706H58.0185V79.2071L55.2202 82L52.2726 79.0581V27.3706H26.2669L44.1015 70.5304L34.4753 60.6994L20.8568 27.3706L1.97748 27.4823L0 25.3969L1.86555 23.4233V23.386ZM0.223866 25.1362L23.2074 0.111717L23.3193 0H87.7926L87.9045 0.111717L110.776 25.1362L111 25.3597L110.776 25.5831L55.556 81.7393L55.2202 81.9628L54.9963 81.7393L0.223866 25.6203L0 25.3969L0.223866 25.1735V25.1362Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
}
