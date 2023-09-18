"use client";

import React, { FC, useEffect, useState, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HiChevronUp,
  HiOutlineXCircle,
  HiOutlineCheck,
  HiPlay,
  HiOutlinePhone,
  LifeStyle,
  Bank,
  Jewelry,
  Silk,
  Gold,
  Food,
  Eyewear,
  Firearm,
  Beauty,
  Electronic,
  Tutor,
  Store,
  Parking,
  Residence,
} from "@components/Icon";

import useSWR, { mutate } from "swr";
import axios from "axios";
import { Tab } from "@headlessui/react";
import Fancybox from "../Fancybox";
import ShopCard from "./ShopCard";
import { Skeleton } from "@/components/ui/skeleton";
interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const filterList = [
  { id: 0, name: "ALL", name_th: "ALL", value: "all", type: "all" },
  {
    id: 99,
    name: "Food Court",
    name_th: "ศูนย์อาหาร",
    value: "foodcourt",
    type: "service",
  },

  {
    id: 1,
    name: "Car Park",
    name_th: "ที่จอดรถ",
    value: "FLG",
    type: "service",
  },
  { id: 2, name: "1 FL.", name_th: "1 FL.", value: "FL1", type: "floor" },
  { id: 3, name: "2 FL.", name_th: "2 FL.", value: "FL2", type: "floor" },
  { id: 4, name: "3 FL.", name_th: "3 FL.", value: "FL3", type: "floor" },
  {
    id: 5,
    name: "RESIDENCE",
    name_th: "เรสซิเดนซ์",
    value: "FL4",
    type: "service",
  },

  {
    id: 6,
    name: "Silk & Lace",
    name_th: "ผ้าไหมและผ้าลูกไม้",
    value: "fashion",
    type: "category",
  },
  {
    id: 7,
    name: "Lifestyles",
    name_th: "ไลฟ์สไตล์",
    value: "lifestyles",
    type: "category",
  },
  {
    id: 8,
    name: "Jewelry & Diamond",
    name_th: "เครื่องประดับและเพชรพลอย",
    value: "watchandjewelry",
    type: "category",
  },
  {
    id: 18,
    name: "Gold",
    name_th: "ทองคำ",
    value: "gold",
    type: "category",
  },
  {
    id: 9,
    name: "Firearm & Equipment",
    name_th: "อาวุธปืน / อุปกรณ์",
    value: "firearm",
    type: "category",
  },
  {
    id: 10,
    name: "Electronics",
    name_th: "เครื่องใช้ไฟฟ้า / อิเล็กทรอนิกส์",
    value: "electronic",
    type: "category",
  },
  {
    id: 11,
    name: "Beauty & Spa",
    name_th: "ความงาม / สปา",
    value: "beauty",
    type: "category",
  },
  {
    id: 13,
    name: "Banking",
    name_th: "สถาบันการเงิน",
    value: "bank",
    type: "category",
  },
  {
    id: 14,
    name: "Optics & Eyewear",
    name_th: "แว่นตา",
    value: "Eyewear",
    type: "category",
  },
  {
    id: 15,
    name: "Café & Restaurant",
    name_th: "ร้านอาหาร / คาแฟ่",
    value: "food",
    type: "category",
  },
  {
    id: 16,
    name: "Tutoring Institute",
    name_th: "สถาบันกวดวิชา",
    value: "tutoring",
    type: "category",
  },
  {
    id: 17,
    name: "Spacialty shop",
    name_th: "ร้านค้าอื่นๆ ในศูนย์การค้า",
    value: "othershops",
    type: "category",
  },
];

const image_residence = [
  { id: 1, src: "/assets/image_show/01.webp", alt: "cover" },
  { id: 2, src: "/assets/image_show/02.webp", alt: "masterbedroom" },
  { id: 3, src: "/assets/image_show/03.webp", alt: "bedroom" },
  { id: 4, src: "/assets/image_show/04.webp", alt: "living_area" },
  { id: 5, src: "/assets/image_show/05.webp", alt: "dining" },
  { id: 6, src: "/assets/image_show/06.webp", alt: "kitchen" },
];

const URL = `https://rmsdev.ssdapp.net/api/v1/shop-directory`;

const fetcher = async (url: string) =>
  await axios
    .get(url, {
      params: {
        compcode: "OSP",
      },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN} `,
      },
    })
    .then((res) => res.data);

const Directory: FC<Props> = (): JSX.Element => {
  const { data, error } = useSWR(URL, fetcher);

  let [filter] = useState([
    { id: 1, name: "ALL", icon: false },
    { id: 2, name: "1 FL.", icon: false },
    { id: 3, name: "2 FL.", icon: false },
    { id: 4, name: "3 FL.", icon: false },
    { id: 5, name: "Silk & Lace", icon: <Silk size="w-10 h-10" /> },
    { id: 6, name: "Gold", icon: <Gold size="w-10 h-10" /> },
    { id: 7, name: "Jewelry & Diamond", icon: <Jewelry size="w-10 h-10" /> },
    { id: 8, name: "CAFÉ & RESTAURANT", icon: <Food size="w-10 h-10" /> },
    { id: 9, name: "BEAUTY & SPA", icon: <Beauty size="w-10 h-10" /> },
    { id: 10, name: "ELECTRONICS", icon: <Electronic size="w-10 h-10" /> },
    { id: 11, name: "BANKING", icon: <Bank size="w-10 h-10" /> },
    { id: 12, name: "OPTICS & EYEWEAR", icon: <Eyewear size="w-10 h-10" /> },
    { id: 13, name: "FIREARM & EQUIPMENT", icon: <Firearm size="w-10 h-10" /> },
    { id: 14, name: "TUTORING INSTITUTE", icon: <Tutor size="w-10 h-10" /> },
    { id: 15, name: "Other Shops", icon: <Store size="w-10 h-10" /> },
    { id: 16, name: "Parking", icon: <Parking size="w-10 h-10" /> },
    { id: 17, name: "Residence", icon: <Residence size="w-10 h-10" /> },
  ]);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Tab.Group>
        <Tab.List className="px-10 flex items-center gap-3 flex-wrap">
          {filter.map((item, index) => (
            <Tab
              key={item.name}
              className={({ selected }) =>
                classNames(
                  "w-20 h-20 border border-white rounded-md flex flex-col gap-1 justify-center items-center shadow transition-all duration-200 p-2 outline-none relative  ",
                  selected
                    ? "bg-white text-primaryOwn font-semibold "
                    : "text-white hover:bg-white hover:text-primaryOwn"
                )
              }
            >
              {item.icon ? item.icon : null}
              <span
                className={classNames(
                  item.icon ? "text-[10px]" : "",
                  "whitespace-nowrap uppercase"
                )}
              >
                {item.name.substring(0, 10)}
              </span>
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="my-7 px-10  w-full h-full max-h-[45vh] flex-1 flex flex-col overflow-scroll relative scrollbar-hide ">
          {filter.map((item, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "outline-none text-white  w-full relative  flex flex-col pb-20"
              )}
            >
              {item.name == "ALL" ? (
                <div className="flex flex-col w-full h-full relative">
                  <div>
                    <p className="uppercase">Silk & Lace</p>

                    <div className="flex items-center gap-4 max-w-max  mt-3  flex-wrap">
                      {data.data
                        .filter((p: any) => p.shop_tag == "fashion")
                        .map((item: any, index: any) => (
                          <ShopCard key={item.id} shop={item} indx={index} />
                        ))}
                    </div>
                  </div>

                  <div className="mt-7">
                    <p className="uppercase">Gold & Jewelry</p>

                    <div className="flex items-center gap-4 max-w-max  mt-3 flex-wrap">
                      {data.data
                        .filter((p: any) => p.shop_tag == "watchandjewelry")
                        .map((item: any, index: any) => (
                          <ShopCard key={item.id} shop={item} indx={index} />
                        ))}
                    </div>
                  </div>

                  <div className="mt-7">
                    <p className="uppercase">Cafe & Restuarant</p>

                    <div className="flex items-center gap-4 max-w-max  mt-3 flex-wrap">
                      {data.data
                        .filter((p: any) => p.shop_tag == "food")
                        .map((item: any, index: any) => (
                          <ShopCard key={item.id} shop={item} indx={index} />
                        ))}
                    </div>
                  </div>

                  <div className="mt-7">
                    <p className="uppercase">Bank</p>

                    <div className="flex items-center gap-4 max-w-max  mt-3 flex-wrap">
                      {data.data
                        .filter((p: any) => p.shop_tag == "bank")
                        .map((item: any, index: any) => (
                          <ShopCard key={item.id} shop={item} indx={index} />
                        ))}
                    </div>
                  </div>

                  <div className="mt-7">
                    <p className="uppercase">FIREARM & EQUIPMENT</p>

                    <div className="flex items-center gap-4 max-w-max  mt-3 flex-wrap">
                      {data.data
                        .filter((p: any) => p.shop_tag == "firearm")
                        .map((item: any, index: any) => (
                          <ShopCard key={item.id} shop={item} indx={index} />
                        ))}
                    </div>
                  </div>

                  <div className="mt-7">
                    <p className="uppercase">Other shop</p>

                    <div className="flex items-center gap-4 max-w-max  mt-3 flex-wrap">
                      {data.data
                        .filter(
                          (p: any) =>
                            p.shop_tag != "firearm" &&
                            p.shop_tag != "bank" &&
                            p.shop_tag != "food" &&
                            p.shop_tag != "watchandjewelry" &&
                            p.shop_tag != "fashion"
                        )
                        .map((item: any, index: any) => (
                          <ShopCard key={item.id} shop={item} indx={index} />
                        ))}
                    </div>
                  </div>
                </div>
              ) : null}

              {item.name == "1 FL." ? (
                <div className="flex items-center flex-wrap gap-4 justify-stretch">
                  {data.data
                    .filter((p: any) => p.shop_fl == "FL1")
                    .map((item: any, index: any) => (
                      <ShopCard key={item.id} shop={item} indx={index} />
                    ))}
                </div>
              ) : null}

              {item.name == "2 FL." ? (
                <div className="flex items-center flex-wrap gap-4 justify-stretch">
                  {data.data
                    .filter((p: any) => p.shop_fl == "FL2")
                    .map((item: any, index: any) => (
                      <ShopCard key={item.id} shop={item} indx={index} />
                    ))}
                </div>
              ) : null}

              {item.name == "3 FL." ? (
                <div className="flex items-center flex-wrap gap-4 justify-stretch">
                  {data.data
                    .filter((p: any) => p.shop_fl == "FL3")
                    .map((item: any, index: any) => (
                      <ShopCard key={item.id} shop={item} indx={index} />
                    ))}
                </div>
              ) : null}

              {item.name == "Silk & Lace" ? (
                <div className="flex items-center flex-wrap gap-4 justify-stretch">
                  {data.data
                    .filter((p: any) => p.shop_tag == "fashion")
                    .map((item: any, index: any) => (
                      <ShopCard key={item.id} shop={item} indx={index} />
                    ))}
                </div>
              ) : null}

              {item.name == "Gold" ? (
                <div className="flex items-center flex-wrap gap-4 justify-stretch">
                  {data.data
                    .filter((p: any) => p.shop_tag == "gold")
                    .map((item: any, index: any) => (
                      <ShopCard key={item.id} shop={item} indx={index} />
                    ))}
                </div>
              ) : null}

              {item.name == "BEAUTY & SPA" ? (
                <div className="flex items-center flex-wrap gap-4 justify-stretch">
                  {data.data
                    .filter((p: any) => p.shop_tag == "beauty")
                    .map((item: any, index: any) => (
                      <ShopCard key={item.id} shop={item} indx={index} />
                    ))}
                </div>
              ) : null}

              {item.name == "ELECTRONICS" ? (
                <div className="flex items-center flex-wrap gap-4 justify-stretch">
                  {data.data
                    .filter((p: any) => p.shop_tag == "electronic")
                    .map((item: any, index: any) => (
                      <ShopCard key={item.id} shop={item} indx={index} />
                    ))}
                </div>
              ) : null}

              {item.name == "BANKING" ? (
                <div className="flex items-center flex-wrap gap-4 justify-stretch">
                  {data.data
                    .filter((p: any) => p.shop_tag == "bank")
                    .map((item: any, index: any) => (
                      <ShopCard key={item.id} shop={item} indx={index} />
                    ))}
                </div>
              ) : null}

              {item.name == "CAFÉ & RESTAURANT" ? (
                <div className="flex items-center flex-wrap gap-4 justify-stretch">
                  {data.data
                    .filter((p: any) => p.shop_tag == "food")
                    .map((item: any, index: any) => (
                      <ShopCard key={item.id} shop={item} indx={index} />
                    ))}
                </div>
              ) : null}

              {item.name == "Jewelry & Diamond" ? (
                <div className="flex items-center flex-wrap gap-4 justify-stretch">
                  {data.data
                    .filter((p: any) => p.shop_tag == "watchandjewelry")
                    .map((item: any, index: any) => (
                      <ShopCard key={item.id} shop={item} indx={index} />
                    ))}
                </div>
              ) : null}

              {item.name == "OPTICS & EYEWEAR" ? (
                <div className="flex items-center flex-wrap gap-4 justify-stretch">
                  {data.data
                    .filter((p: any) => p.shop_tag == "Eyewear")
                    .map((item: any, index: any) => (
                      <ShopCard key={item.id} shop={item} indx={index} />
                    ))}
                </div>
              ) : null}

              {item.name == "TUTORING INSTITUTE" ? (
                <div className="flex items-center flex-wrap gap-4 justify-stretch">
                  {data.data
                    .filter((p: any) => p.shop_tag == "tutoring")
                    .map((item: any, index: any) => (
                      <ShopCard key={item.id} shop={item} indx={index} />
                    ))}
                </div>
              ) : null}

              {item.name == "FIREARM & EQUIPMENT" ? (
                <div className="flex items-center flex-wrap gap-4 justify-stretch">
                  {data.data
                    .filter((p: any) => p.shop_tag == "firearm")
                    .map((item: any, index: any) => (
                      <ShopCard key={item.id} shop={item} indx={index} />
                    ))}
                </div>
              ) : null}

              {item.name == "Other Shops" ? (
                <div className="flex items-center flex-wrap gap-4 justify-stretch">
                  {data.data
                    .filter(
                      (p: any) =>
                        p.shop_tag != "firearm" &&
                        p.shop_tag != "tutoring" &&
                        p.shop_tag != "Eyewear" &&
                        p.shop_tag != "watchandjewelry" &&
                        p.shop_tag != "food" &&
                        p.shop_tag != "bank" &&
                        p.shop_tag != "electronic" &&
                        p.shop_tag != "beauty" &&
                        p.shop_tag != "gold" &&
                        p.shop_tag != "fashion"
                    )
                    .map((item: any, index: any) => (
                      <ShopCard key={item.id} shop={item} indx={index} />
                    ))}
                </div>
              ) : null}

              {item.name == "Parking" ? (
                <div className="col-span-4 xmd:col-span-3 flex flex-col gap-4  ">
                  <p className="text-white font-semibold text-2xl xmd:text-3xl font-fc_ekaluckregular pb-3 border-b  !border-slate-500 ">
                    เงื่อนไขอัตราค่าบริการจอดรถ ดิ โอลด์ สยาม พลาซ่า
                  </p>

                  <p className="text-sm md:text-base">
                    *การเปลี่ยนแปลงดังกล่าวจะเริ่มมีผลตั้งแต่วันอังคารที่ 1
                    สิงหาคม 2566 เป็นต้นไป
                  </p>

                  <ul className="list-decimal list-inside text-sm md:text-base">
                    <li>
                      แสดงใบเสร็จ ซื้อสินค้าครบ 300 บาท ประทับตราบัตรจอดรถ
                      ที่จุดประชาสัมพันธ์ ชั้น 1
                    </li>
                    <li>
                      กรณีที่มีการประทับตราชั่วโมงจอดรถ
                      <ul className="pl-7 list-disc list-inside">
                        <li>15 นาทีแรกจอดฟรี</li>
                        <li>30 นาที : 20 บาท</li>
                        <li>2 ชั่วโมงแรก : เหมาจ่าย 30 บาท</li>
                        <li>ชัวโมงที่ 3 : ครึ่งชั่วโมงละ 20 บาท</li>
                        <li>เกิน 3 ชั่วโมง : ครึ่งชั่วโมงละ 25 บาท</li>
                      </ul>
                    </li>

                    <li>
                      กรณีไม่มีการประทับตราชั่วโมงจอดรถ คิดค่าบริการจอดรถ 50
                      บาท/ชั่วโมง เศษของชั่วโมง คิดเป็น 1 ชั่วโมง
                      <ul className="pl-7 list-disc list-inside">
                        <li>15 นาทีแรกจอดฟรี</li>
                        <li>30 นาทีแรก 20 บาท</li>
                        <li>1-3 ชั่วโมงแรก : ครึ่งชั่วโมงละ 20 บาท</li>
                        <li>เกิน 3 ชั่วโมง : ครึ่งชั่วโมงละ 25 บาท</li>
                      </ul>
                    </li>

                    <li>
                      จอดรถค้างคืน คิดค่าปรับ 300 บาท/คืน ( ไม่รวมค่าบริการจอดรถ
                      )
                    </li>

                    <li>
                      กรณีบัตรจอดรถสูญหาย จะต้องชำระค่าปรับบัตรหาย 300 บาท
                      และชำระค่าบริการจอดรถในอัตราปกติ
                      (ไม่สามารถใช้ตราประทับได้) และผู้ติดต่อต้องนำหลักฐาน
                      มาแสดงการเป็นเจ้าของรถ จึงจะอนุญาตให้นำรถออกจากอาคารได้
                      หากพบบัตรจอดรถ ภายใน 7 วัน นับจากวันที่ สูญหาย
                      สามารถติดต่อรับเงินค่าปรับ จำนวน 300 บาท
                      คืนได้ที่สำนักงานบริหารอาคารชั้น 1 ทุกวัน เวลา 08.30 –
                      17.30 น.
                    </li>
                    <li>
                      บริษัท สยามสินธร จำกัด และฝ่ายบริหารอาคาร
                      จะไม่รับผิดชอบต่อความเสียหายใดๆที่เกิดขึ้นในระหว่างจอดรถภายในอาคาร
                    </li>
                    <li>
                      ฝ่ายบริหารอาคารขอสงวนสิทธิในการปรับเปลี่ยนอัตราค่าจอดรถ /
                      เงื่อนไขในการจอดรถ โดยทางอาคารจะแจ้งให้ทราบต่อไป
                    </li>
                  </ul>
                </div>
              ) : null}

              {item.name == "Residence" ? (
                <div className="col-span-4 xmd:col-span-3 flex flex-col gap-4  ">
                  <p className="text-white font-semibold text-2xl xmd:text-3xl font-fc_ekaluckregular pb-3  border-b  !border-slate-500 ">
                    The Old Siam Residence ที่พักอาศัยอารมณ์ &quot;บ้าน&quot;
                  </p>

                  <p className="text-sm md:text-base">
                    บนโครงการมิกซ์ยูส ดิ โอลด์ สยาม พลาซ่า
                    ทำเลศักยภาพหนึ่งเดียวใจกลางเกาะรัตนโกสินทร์ ห้องพักแบบ
                    Duplex ขนาดใหญ่ พื้นที่ใช้สอยกว่า 100 ตร.ม. มี 2 ห้องนอน 2
                    ห้องน้ำ 1 ห้องครัว และห้องนั่งเล่นขนาดใหญ่
                    ที่เติมเต็มความสุข และรองรับกิจกรรมของทุกคนในครอบครัว
                  </p>

                  <div>
                    <p className="text-sm md:text-base flex items-center gap-2">
                      {" "}
                      <HiOutlineCheck size={4} /> พร้อมที่จอดรถ 100%
                    </p>
                    <p className="text-sm md:text-base flex items-center gap-2">
                      {" "}
                      <HiOutlineCheck size={4} /> เดินทางสะดวกสบาย ติด MRT
                    </p>
                  </div>

                  <div>
                    <p className="text-sm md:text-base">
                      ✨เริ่ม 3.2 ล้าน* สำหรับสัญญาเช่าระยะยาว✨
                      (*เงื่อนไขเป็นไปตามที่บริษัทฯ กำหนด)
                    </p>
                    <p className="text-sm md:text-base">
                      ✨วงเงินอนุมัติสินเชื่อสูงสุด 70% ผ่อนชำระนานสูงสุด 6 ปี
                      ฟรีค่าประเมินพื้นที่**
                      (**เงื่อนไขเป็นไปตามที่ธนาคารกรุงเทพกำหนด)
                    </p>
                  </div>

                  <div>
                    <p>สอบถามข้อมูล หรือนัดชมห้องตัวอย่าง</p>

                    <div className="text-sm md:text-base flex items-center gap-2">
                      <HiOutlinePhone size={4} />

                      <div className="flex gap-1">
                        <a
                          href={`tel:+66991945497`}
                          className="text-sm md:text-base"
                        >
                          099-194-5497,
                        </a>
                        <a
                          href={`tel:+66222601568`}
                          className="text-sm md:text-base"
                        >
                          02-226-0156-8
                        </a>
                      </div>
                    </div>

                    <div className="text-sm md:text-base flex items-center gap-2">
                      {/* <HiOutlinePhone /> */}
                      <p className="">@theoldsiam ( https://lin.ee/muJnC6P )</p>
                    </div>

                    <Fancybox
                      options={{
                        Carousel: {
                          infinite: false,
                        },
                      }}
                    >
                      <div className="mt-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {image_residence.map((item, index) => (
                          <a
                            id="bussiness_card"
                            data-fancybox="gallery_residence"
                            href={item.src}
                            key={index}
                            className="w-full h-52 shrink-0 relative  loading overflow-hidden shadow"
                          >
                            <div className="image w-full h-full relative">
                              <Image
                                alt={item.alt}
                                src={item.src}
                                width="0"
                                height="0"
                                unoptimized={true}
                                sizes="100vw"
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                }}
                                className="w-full h-full"
                              />
                            </div>
                          </a>
                        ))}
                      </div>
                    </Fancybox>
                  </div>
                </div>
              ) : null}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default Directory;
