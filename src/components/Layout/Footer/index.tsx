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
            <div className="flex gap-4 mt-4 items-center">
              {/* Facebook */}
              <Link href="https://share.google/dYW03xq1QoeCSS6s6" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </Link>
              {/* Instagram */}
              <Link href="https://share.google/dYW03xq1QoeCSS6s6" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </Link>
              {/* LinkedIn */}
              <Link href="https://share.google/dYW03xq1QoeCSS6s6" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.98 1.98 0 110-3.96 1.98 1.98 0 010 3.96zm1.959 13.019H3.379V9h3.917v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              <Link
                href="https://share.google/dYW03xq1QoeCSS6s6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on Google"
                className="hover:text-primary transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M12 11h8.533c.044.385.067.78.067 1.184 0 2.734-.98 5.036-2.678 6.6C16.42 20.272 14.38 21 12 21c-4.971 0-9-4.029-9-9s4.029-9 9-9c2.43 0 4.468.878 6.045 2.322L16.467 6.9C15.258 5.775 13.714 5 12 5c-3.866 0-7 3.134-7 7s3.134 7 7 7c3.498 0 6.135-2.177 6.8-5H12v-3z"/>
                </svg>
              </Link>
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
