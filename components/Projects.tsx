import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      // easing: "ease-in-out"
      // once: true
    });
  });

  return (
    <div className="flex flex-col gap-10 bg-darkmode text-white px-5 md:px-10 lg:px-40 py-20 md:py-10">
      <div className="bg-basecolor mr-auto px-8 py-3 text-lg font-extrabold font-[family-name:var(--font-syne)]">
        <h2>Project Portfolio &#128188;</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="flex flex-col gap-2 w-full lg:max-w-2xl"
        >
          <div className="flex gap-1 items-center">
            <span className="text-lg font-medium">See Project</span>
            <ArrowUpRight className="w-5 h-5" />
          </div>
          <Link href="https://risto-school.vercel.app/" target="_blank">
            <div className="hover:bg-basecolor hover:opacity-50 hover:transition hover:ease-linear hover:delay-200">
              <Image
                src="/icons/p1.png"
                alt=""
                width={500}
                height={500}
                className="w-full h-full object-fill rounded-xl"
              />
            </div>
          </Link>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="flex flex-col gap-2 w-full lg:max-w-2xl"
        >
          <div className="flex gap-1 items-center">
            <span className="text-lg font-medium">See Project</span>
            <ArrowUpRight className="w-5 h-5" />
          </div>
          <Link href="https://waledashboard.netlify.app/" target="_blank">
            <div className="hover:bg-basecolor hover:opacity-50 hover:transition hover:ease-linear hover:delay-200">
              <Image
                src="/icons/p2.png"
                alt=""
                width={500}
                height={500}
                className="w-full h-full object-fill rounded-xl"
              />
            </div>
          </Link>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="flex flex-col gap-2 w-full lg:max-w-2xl"
        >
          <div className="flex gap-1 items-center">
            <span className="text-lg font-medium">See Project</span>
            <ArrowUpRight className="w-5 h-5" />
          </div>
          <Link href="https://waleadmission.netlify.app/" target="_blank">
            <div className="hover:bg-basecolor hover:opacity-50 hover:transition hover:ease-linear hover:delay-200">
              <Image
                src="/icons/p3.png"
                alt=""
                width={500}
                height={500}
                className="w-full h-full object-fill rounded-xl"
              />
            </div>
          </Link>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="flex flex-col gap-2 w-full lg:max-w-2xl"
        >
          <div className="flex gap-1 items-center">
            <span className="text-lg font-medium">See Project</span>
            <ArrowUpRight className="w-5 h-5" />
          </div>
          <Link href="https://alweather.vercel.app/" target="_blank">
            <div className="hover:bg-basecolor hover:opacity-50 hover:transition hover:ease-linear hover:delay-200">
              <Image
                src="/icons/p4.png"
                alt=""
                width={500}
                height={500}
                className="w-full h-full object-fill rounded-xl"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
