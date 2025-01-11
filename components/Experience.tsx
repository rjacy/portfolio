import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-col gap-10 bg-darkmode text-white px-5 md:px-10 lg:px-40 py-5 md:py-20">
      <div className="bg-basecolor mr-auto px-8 py-3 text-lg font-extrabold font-[family-name:var(--font-syne)]">
        <h2>Work Experience &#129489;&#8205;&#128187;</h2>
      </div>
      <div className="font-[family-name:var(--font-syne)] flex flex-col gap-5">
        <h2 className="text-3xl font-bold">Employment History</h2>
        <div className="flex flex-col gap-5">
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            className="flex flex-col p-6 rounded-xl bg-basecolor"
          >
            <span className="text-xl md:text-2xl font-bold">
              Software Developer (MERN STACK) - Mzienet Systems (Part-time)
            </span>
            <span className="text-lg font-medium text-gray-500 font-[family-name:var(--font-poppins)]">
              Abeokuta, Nigeria | October 2023 - Present
            </span>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            className="flex flex-col p-6 rounded-xl bg-basecolor"
          >
            <span className="text-xl md:text-2xl font-bold">
              Software Developer (MERN STACK) - Fiverr (Part-time)
            </span>
            <span className="text-lg font-medium text-gray-500 font-[family-name:var(--font-poppins)]">
              Freelance | August 2024 - Present
            </span>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            className="flex flex-col p-6 rounded-xl bg-basecolor"
          >
            <span className="text-xl md:text-2xl font-bold">
              Community State Lead - ATC Africa (Part-time)
            </span>
            <span className="text-lg font-medium text-gray-500 font-[family-name:var(--font-poppins)]">
              Ogun State, Nigeria | July 2023 - July 2024
            </span>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            className="flex flex-col p-6 rounded-xl bg-basecolor"
          >
            <span className="text-xl md:text-2xl font-bold">
              Branch Manager - Viva City Multifarious Ltd. (Full-time)
            </span>
            <span className="text-lg font-medium text-gray-500 font-[family-name:var(--font-poppins)]">
              Osogbo, Nigeria | August 2022 - December 2022
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
