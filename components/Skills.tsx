import React from "react";
import "aos/dist/aos.css";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

const Skills = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 bg-darkmode text-white px-5 md:px-10 lg:px-40 py-5 md:py-20">
        <div className="bg-basecolor mr-auto px-8 py-3 text-lg font-extrabold font-[family-name:var(--font-syne)]">
          <h2>Skills &#128304;</h2>
        </div>
        <div className="font-[family-name:var(--font-syne)] flex flex-col lg:flex lg:flex-row gap-10">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="flex flex-col gap-2 outline outline-2 outline-gray-500 w-auto p-10 rounded-xl"
          >
            <h2 className="text-3xl font-extrabold">Backend Dev</h2>
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <ArrowLongRightIcon className="w-5 h-5" />
                <span className="text-lg font-semibold text-gray-400">
                  Node JS
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowLongRightIcon className="w-5 h-5" />
                <span className="text-lg font-semibold text-gray-400">
                  Express JS
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowLongRightIcon className="w-5 h-5" />
                <span className="text-lg font-semibold text-gray-400">
                  MongoDB
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowLongRightIcon className="w-5 h-5" />
                <span className="text-lg font-semibold text-gray-400">
                  Rest API
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowLongRightIcon className="w-5 h-5" />
                <span className="text-lg font-semibold text-gray-400">
                  Postgres
                </span>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="flex flex-col gap-2 outline outline-2 outline-gray-500 w-auto p-10 rounded-xl"
          >
            <h2 className="text-3xl font-extrabold">Frontend Dev</h2>
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <ArrowLongRightIcon className="w-5 h-5" />
                <span className="text-lg font-semibold text-gray-400">
                  React JS
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowLongRightIcon className="w-5 h-5" />
                <span className="text-lg font-semibold text-gray-400">
                  Next JS
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowLongRightIcon className="w-5 h-5" />
                <span className="text-lg font-semibold text-gray-400">
                  Redux
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowLongRightIcon className="w-5 h-5" />
                <span className="text-lg font-semibold text-gray-400">
                  TailwindCSS
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowLongRightIcon className="w-5 h-5" />
                <span className="text-lg font-semibold text-gray-400">
                  SASS
                </span>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="flex flex-col gap-2 outline outline-2 outline-gray-500 w-auto p-10 rounded-xl"
          >
            <h2 className="text-3xl font-extrabold">Product Design</h2>
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <ArrowLongRightIcon className="w-5 h-5" />
                <span className="text-lg font-semibold text-gray-400">
                  User Experience
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowLongRightIcon className="w-5 h-5" />
                <span className="text-lg font-semibold text-gray-400">
                  User Interface
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowLongRightIcon className="w-5 h-5" />
                <span className="text-lg font-semibold text-gray-400">
                  Wireframe
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowLongRightIcon className="w-5 h-5" />
                <span className="text-lg font-semibold text-gray-400">
                  Mockups
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowLongRightIcon className="w-5 h-5" />
                <span className="text-lg font-semibold text-gray-400">
                  Graphics Design
                </span>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="flex flex-col gap-2 outline outline-2 outline-gray-500 w-auto p-10 pr-20 rounded-xl"
          >
            <h2 className="text-3xl font-extrabold">Web3 Dev</h2>
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <ArrowLongRightIcon className="w-5 h-5" />
                <span className="text-lg font-semibold text-gray-400">
                  Smart Contracts
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowLongRightIcon className="w-5 h-5" />
                <span className="text-lg font-semibold text-gray-400">
                  Blockchains
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowLongRightIcon className="w-5 h-5" />
                <span className="text-lg font-semibold text-gray-400">
                Solidity JS
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowLongRightIcon className="w-5 h-5" />
                <span className="text-lg font-semibold text-gray-400">
                  Anchor
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <ArrowLongRightIcon className="w-5 h-5" />
                <span className="text-lg font-semibold text-gray-400">
                  Rust
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
