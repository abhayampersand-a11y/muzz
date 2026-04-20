import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { getImgPath } from "@/utils/image";

const Footer: FC = () => {
  return (
    <footer className="bg-white text-midnight_text relative z-10 border-t border-border px-4 sm:px-6 md:px-8 pt-12 pb-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-8">

          {/* Left Section */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <Link href="/" className="flex justify-center md:justify-start mb-2">
              <Image
                src={getImgPath("/images/logo/de-logo.png")}
                alt="Dana Electrical Logo"
                width={200}
                height={95}
                quality={100}
                className="h-14 w-auto object-contain"
                unoptimized
              />
            </Link>
            <p className="text-grey text-base leading-relaxed">Professional electrical solutions for industrial and infrastructure projects across India.</p>
          </div>

          {/* Middle Section */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <span className="text-lg font-bold">Support</span>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 items-center md:items-start">
              <p className="font-semibold">Phone:</p>
              <Link href="tel:+918460580905" className="text-grey hover:text-midnight_text">
                +91 8460580905
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 items-center md:items-start">
              <p className="font-semibold">Email:</p>
              <Link href="mailto:danaelectricals347@gmail.com" className="text-grey hover:text-midnight_text">
                danaelectricals347@gmail.com
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <Link href="#" className="hover:text-primary transition-all text-xl">FB</Link>
              <Link href="#" className="hover:text-primary transition-all text-xl">IG</Link>
              <Link href="#" className="hover:text-primary transition-all text-xl">LI</Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <span className="font-bold text-2xl">Subscribe Newsletter</span>
            <p className="text-grey mb-2">Stay updated with our latest electrical solutions</p>
            <form className="flex flex-col sm:flex-row w-full sm:w-auto gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 rounded-lg sm:rounded-r-none sm:rounded-l-lg outline-none flex-1 w-full sm:w-auto bg-gray-100 border border-border text-midnight_text placeholder:text-grey"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary hover:bg-blue-700 rounded-lg sm:rounded-l-none sm:rounded-r-lg text-white transition-all w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-10 border-t border-border pt-6 text-center">
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4">
            {["About", "Services", "Portfolio", "Blog", "Contact"].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`} className="text-grey hover:text-primary transition-all text-sm sm:text-base">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-grey text-xs sm:text-sm">
            © All rights reserved. Dana Electrical
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
