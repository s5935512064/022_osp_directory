import React, { FC, useEffect, useState, Fragment } from "react";
import Image from "next/image";
import Directory from "@/components/Directory";
import Signed from "@/components/Signed";
import Loader from "@/components/Loader";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "ไดเรคทอรี่ - ดิโอลด์ สยาม พลาซ่า",
  description:
    "ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร",
  keywords: [
    "ดิโอลด์สยาม",
    "ดิโอลด์",
    "ห้างสรรพสินค้า",
    "theoldsiam",
    "ลานมิ่งเมือง",
    "ลานเฟื่องนคร",
    "แหล่งอาหารอร่อยใจกลางกรุง",
    "ห้างติดคลองถม",
    "อมร",
    "ห้างสรรพสินค้าย่านเยาวราช",
    "ผ้าไหม",
    "ผ้าไหมไทย",
    "ขนมไทย",
    "ขนมไทยอร่อย",
    "ผ้าไหมสวย",
    "เครื่องประดับ",
    "เพชร",
    "ทอง",
    "เงิน",
    "plaza",
    "themall",
    "thaimarket",
    "rattanakosin",
  ],
  authors: [{ name: "ดิ โอลด์ สยาม พลาซ่า" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "ไดเรคทอรี่ - ดิโอลด์ สยาม พลาซ่า",
    description:
      "ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
    url: "https://theoldsiam.co.th",
    images: process.env.NEXT_PUBLIC_API_URL + "/assets/Screenshot.webp",
    siteName: "ไดเรคทอรี่ - ดิโอลด์ สยาม พลาซ่า",
    locale: "th_TH",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 5,
  },
};

export default function Home() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-between pt-28">
        <Directory />
        <Signed />
      </div>
    </>
  );
}
