import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col gap-10 bg-darkmode text-white px-5 md:px-10 lg:px-40 py-5 md:py-20">
      <div className="bg-basecolor mr-auto px-8 py-3 text-lg font-extrabold font-[family-name:var(--font-syne)]">
        <h2>My Contact &#9742;&#65039;</h2>
      </div>
      <div className="font-[family-name:var(--font-syne)] flex flex-col gap-5">
        <h2 className="text-2xl font-bold">
          Got an Interesting Project? Let&apos;s Work Together
        </h2>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col p-6 rounded-xl bg-basecolor">
            <span className="text-xl md:text-xl font-bold">
              furstdev@gmail.com
            </span>
          </div>
          <div className="flex flex-col p-6 rounded-xl bg-basecolor">
            <span className="text-xl md:text-xl font-bold">
              +234 8143249436
            </span>
          </div>
          <Link href="https://wa.me/+2348143249436" target="_blank">
            <div className="flex flex-col p-6 rounded-xl bg-basecolor">
              <span className="flex gap-2 items-center text-xl md:text-xl font-bold">WhatsApp Me <ArrowUpRight className="w-5 h-5" /></span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
