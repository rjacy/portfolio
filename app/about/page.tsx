"use client";

import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      // easing: "ease-in-out"
      // once: true
    });
  });
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="bg-darkmode text-white px-5 md:px-20 lg:px-60 py-20">
        <div className="flex flex-col lg:flex lg:flex-row items-center gap-10">
          <div className="">
            <Image
              src="/icons/img.jpg"
              alt=""
              width={400}
              height={400}
              className="rounded-2xl grayscale"
            />
          </div>
          <div className="lg:w-[70%] flex flex-col gap-5 ">
            <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold">
              About me 🧑
            </h3>
            <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-bold">
              I&apos;m a Full-Stack Developer based in Lagos, Nigeria
              &#127475;&#127468;
            </h2>
            <span className="font-medium text-gray-500 text-lg text-justify">
              I’m a dynamic Full-stack Developer driven by a passion for
              crafting cutting-edge applications and seamless user experiences.
              <br />
              <br /> With over four years of professional experience, I bring a
              unique blend of technical expertise and creative design to deliver
              solutions that are not only functional but also engaging and
              visually stunning. My goal is to transform ideas into impactful
              digital products that resonate with users and drive results.
            </span>
          </div>
        </div>

        <div className="font-medium text-gray-500 text-lg text-justify mt-10">
          <span>
            Since the beginning of my career as a developer, I have worked on a
            variety of projects, including responsive web platforms,
            decentralized applications, and intuitive user interfaces. My
            expertise lies in the MERN Stack, UI/UX design, and Web3
            development, with proficiency in React, Node.js, Express.js,
            MongoDB, and blockchain technologies.
            <br />
            <br />
            To achieve outstanding results, I collaborate closely with
            cross-functional teams to define product requirements and develop
            scalable, responsive, and high-performance applications. My strong
            focus on usability testing and meticulous attention to detail ensure
            that every project I work on meets the highest standards of quality
            and user satisfaction.
            <br />
            <br />
            In addition to my work in development, I am deeply committed to
            staying ahead of emerging trends in technology. I actively explore
            advancements in Web3, blockchain, and modern UI/UX practices,
            constantly seeking new opportunities to learn and enhance my skill
            set.
            <br />
            <br />
            Overall, I am a passionate and results-driven professional with a
            deep dedication to crafting innovative digital solutions. My ability
            to blend creativity with technical expertise makes me an invaluable
            asset to any team, while my commitment to continuous growth ensures
            I remain at the cutting edge of the industry.
          </span>
        </div>
      </div>

      <div className="bg-darkmode md:px-10 lg:px-20">
        <Experience />
      </div>

      <div className="bg-darkmode md:px-10 lg:px-20">
        <Contact />
      </div>

      <div className="bg-darkmode md:px-10 lg:px-20">
        <Footer />
      </div>
    </div>
  );
};

export default page;
