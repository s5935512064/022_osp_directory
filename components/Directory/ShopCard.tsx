"use client";

import React, { FC, useEffect, useState, Fragment, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  HiChevronUp,
  HiOutlineXCircle,
  HiOutlineCheck,
  HiPlay,
  HiOutlinePhone,
  LifeStyle,
} from "@components/Icon";
import { Transition, Dialog } from "@headlessui/react";
import QRCode from "react-qr-code";
import useSWR, { mutate } from "swr";
import axios from "axios";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
interface Props {
  shop: IShop;
  indx: number;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const ShopCard: FC<Props> = ({ shop, indx }): JSX.Element => {
  const [isOpen, setOpen] = useState(false);
  const [scanValue, setScanValue] = useState("");

  const timeDelay = indx * 0.1;

  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "linear",
        delay: timeDelay,
      },
    },
    hidden: { opacity: 0, scale: 0 },
  };

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      <motion.div
        variants={boxVariant}
        initial="hidden"
        animate="visible"
        onClick={openModal}
        className="w-32 h-32 shrink-0 rounded-lg relative loading overflow-hidden shadow cursor-pointer"
      >
        <div className="image w-full h-full absolute">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            priority={true}
            unoptimized={true}
            alt={shop.shop_name}
            src={
              shop.shop_logo?.length != 0
                ? shop.shop_logo
                : "/assets/theoldsiam.webp"
            }
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
            className="w-full h-full bg-white"
          />
        </div>

        <div className="absolute w-full h-full opacity-0 hover:bg-[#0a3254]/50 hover:opacity-100 flex justify-center items-center backdrop-blur-sm text-white duration-200 transition-all ">
          <LifeStyle size="36px" />
        </div>
      </motion.div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-full"
            enterTo="-translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="fixed  inset-0 overflow-hidden ">
              <div className="min-h-full absolute flex justify-end  right-0">
                <Dialog.Panel className="w-[350px] sm:w-[450px] md:w-[65vw] min-h-screen h-full transform overflow-y-visible  bg-white shadow-xl transition-all flex flex-col gap-4 relative ">
                  <div className="absolute right-4 z-10 top-4 ">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="w-8 h-8 md:w-12 md:h-12 rounded-full border   flex items-center justify-center text-black outline-none bg-white"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-10 h-10"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </span>
                      <span className="sr-only">close</span>
                    </button>
                  </div>

                  {shop.shop_cover ? (
                    <div
                      className={classNames(
                        shop.shop_cover.length != 0
                          ? "w-full h-[180px] sm:h-[350px]  relative"
                          : "hidden"
                      )}
                    >
                      <Image
                        unoptimized
                        width="0"
                        height="0"
                        sizes="100vw"
                        alt={shop.shop_name}
                        src={shop.shop_cover}
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        className="w-full h-full"
                      />
                    </div>
                  ) : null}

                  <div className="flex flex-col gap-4 px-6">
                    <div
                      className={classNames(
                        shop.shop_cover && shop.shop_cover.length != 0
                          ? "-mt-24 sm:-mt-16"
                          : "mt-6",
                        "flex flex-col sm:flex-row  items-center gap-2 sm:gap-4"
                      )}
                    >
                      <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full border overflow-hidden  relative shrink-0">
                        <div className="w-full h-full relative bg-[#fff]">
                          <Image
                            unoptimized
                            width="0"
                            height="0"
                            sizes="100vw"
                            alt={shop.shop_name}
                            src={
                              shop.shop_logo?.length != 0
                                ? shop.shop_logo
                                : "/assets/theoldsiam.webp"
                            }
                            style={{
                              objectFit: "contain",
                              objectPosition: "center",
                            }}
                            className="w-full h-full"
                          />
                        </div>
                      </div>

                      <div className="sm:translate-y-4 flex flex-col  items-center sm:items-start text-center sm:text-start ">
                        <p className=" text-lg font-semibold sm:text-2xl text-[#0a3254] whitespace-nowrap">
                          {shop.shop_name}
                        </p>
                        <p className="text-xs sm:text-base text-slate-500">
                          {shop.shop_fl} , {shop.shop_room_no}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm sm:text-xl border-t  pt-3">
                      {shop.shop_detail ? shop.shop_detail : "-"}
                    </p>

                    <div className="flex flex-col gap-1 text-sm sm:text-xl">
                      <div className="flex items-center gap-4">
                        <p className="w-32 shrink-0 font-semibold ">
                          Open Time
                        </p>

                        <p className="whitespace-pre-line">
                          {shop.shop_open ? shop.shop_open : "-"}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <p className="w-32 shrink-0 font-semibold">Tel.</p>

                        <p>{shop.shop_tel ? shop.shop_tel : "-"}</p>
                      </div>

                      {shop.shop_line &&
                      shop.shop_line.indexOf("https") !== 0 ? (
                        <div className="flex items-center gap-4">
                          <p className="w-32 shrink-0 font-semibold">Line ID</p>

                          <p>{shop.shop_line}</p>
                        </div>
                      ) : null}

                      <div className="mt-7 flex flex-col gap-3">
                        <p className="font-semibold">
                          More channels to contact us
                        </p>

                        <div className="w-full flex items-center gap-3 ">
                          {shop.shop_website ? (
                            <button
                              type="button"
                              onClick={() => setScanValue(shop.shop_website)}
                              id="website_btn"
                              className="w-12 h-12 rounded-full  border-black border-2 relative text-black flex justify-center items-center hover:scale-110 duration-300"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-9 h-9"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                                />
                              </svg>
                            </button>
                          ) : null}

                          {shop.shop_facebook ? (
                            <button
                              type="button"
                              onClick={() => setScanValue(shop.shop_facebook)}
                              id="facebook_btn"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32.84 32.84"
                                className="cursor-pointer hover:scale-110 duration-300 w-12 h-12"
                              >
                                <circle
                                  id="Ellipse_9"
                                  data-name="Ellipse 9"
                                  cx="15.67"
                                  cy="15.67"
                                  r="15.67"
                                  transform="translate(0.75 0.75)"
                                  fill="none"
                                  stroke="#000"
                                  strokeWidth="1.5"
                                />
                                <path
                                  id="Path_548020"
                                  data-name="Path 548020"
                                  d="M89.224,61.228h-2.91v-6.2H84.86V52.647h1.454V51.209c0-1.947.821-3.106,3.153-3.106h1.941v2.388H90.2c-.909,0-.969.334-.969.956v1.194h2.194l-.255,2.389H89.224Z"
                                  transform="translate(-71.834 -38.578)"
                                  fill="#000"
                                />
                              </svg>
                            </button>
                          ) : null}

                          {shop.shop_instagram ? (
                            <button
                              type="button"
                              onClick={() => setScanValue(shop.shop_instagram)}
                              id="ig_btn"
                              className="hover:scale-110 duration-300"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32.84 32.84"
                                className="w-12 h-12"
                              >
                                <circle
                                  id="Ellipse_9"
                                  data-name="Ellipse 9"
                                  cx="15.67"
                                  cy="15.67"
                                  r="15.67"
                                  transform="translate(0.75 0.75)"
                                  fill="none"
                                  stroke="#000"
                                  strokeWidth="1.5"
                                />

                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="26"
                                  height="24"
                                  viewBox="0 0 32.84 32.84"
                                >
                                  <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                    fill="#000"
                                    transform="translate(9 10)"
                                  />
                                </svg>
                              </svg>
                            </button>
                          ) : null}

                          {shop.shop_line &&
                          shop.shop_line.indexOf("https") !== -1 ? (
                            <button
                              type="button"
                              onClick={() => setScanValue(shop.shop_line)}
                              id="line_btn"
                              className="hover:scale-110 duration-300"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 33.492 33.499"
                                className="cursor-pointer w-12 h-12"
                              >
                                <path
                                  id="Path_548021"
                                  data-name="Path 548021"
                                  d="M214.5,70.99h0a16,16,0,1,1,16-16,16.2,16.2,0,0,1-6.251,12.693,30.624,30.624,0,0,1-4.459,2.436A26.441,26.441,0,0,1,214.5,71"
                                  transform="translate(-197.758 -38.248)"
                                  fill="none"
                                  stroke="#000"
                                  strokeWidth="1.5"
                                />
                                <path
                                  id="Path_548022"
                                  data-name="Path 548022"
                                  d="M213.915,65.158a.356.356,0,0,1-.288-.113.785.785,0,0,1-.054-.6v-.019l.157-.912a2.076,2.076,0,0,0-.034-.966c-.118-.293-.577-.448-.941-.526-5.171-.685-8.921-4.277-8.921-8.54,0-4.773,4.786-8.657,10.669-8.657s10.666,3.884,10.666,8.657a7.749,7.749,0,0,1-2.286,5.328,34.211,34.211,0,0,1-8.38,6.192,1.622,1.622,0,0,1-.588.151m4.7-13.978a.206.206,0,0,0-.2.2v4.651a.206.206,0,0,0,.2.206h3a.2.2,0,0,0,.2-.2v-.756a.2.2,0,0,0-.2-.2h-2.037v-.784h2.037a.2.2,0,0,0,.2-.2v-.757a.2.2,0,0,0-.2-.2h-2.037v-.784h2.037a.205.205,0,0,0,.2-.2v-.756a.206.206,0,0,0-.2-.2h-3Zm-4.19,2.1h0l2.129,2.876a.247.247,0,0,0,.052.05l.016.008.015.007h.032a.177.177,0,0,0,.056.008h.752a.206.206,0,0,0,.206-.2V51.367a.206.206,0,0,0-.206-.2h-.755a.2.2,0,0,0-.2.2v2.764l-2.131-2.876-.015-.022-.014-.014-.015-.014-.017-.009h-.852a.2.2,0,0,0-.2.2v4.654a.2.2,0,0,0,.2.2h.757a.2.2,0,0,0,.2-.2V53.291Zm-2.852-2.1a.2.2,0,0,0-.2.2v4.654a.2.2,0,0,0,.2.2h.757a.2.2,0,0,0,.2-.2V51.384a.2.2,0,0,0-.2-.2Zm-4.043,0a.2.2,0,0,0-.2.2v4.651a.2.2,0,0,0,.2.206h3a.2.2,0,0,0,.2-.2v-.756a.2.2,0,0,0-.2-.2h-2.037V51.384a.206.206,0,0,0-.206-.2Z"
                                  transform="translate(-197.758 -38.248)"
                                  fill="#000"
                                />
                              </svg>
                            </button>
                          ) : null}
                        </div>
                      </div>

                      {scanValue != "" ? (
                        <div className="flex flex-col  mt-7">
                          <p className="font-semibold">Scan me</p>

                          <div className="w-full flex justify-center items-center">
                            <div className="w-40 h-40 mt-2">
                              <QRCode
                                size={256}
                                style={{
                                  height: "auto",
                                  maxWidth: "100%",
                                  width: "100%",
                                }}
                                value={scanValue}
                                viewBox={`0 0 256 256`}
                              />
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </Dialog.Panel>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default ShopCard;
