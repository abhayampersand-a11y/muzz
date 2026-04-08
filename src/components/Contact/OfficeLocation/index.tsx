import React from "react";
import Link from "next/link";

const Location = () => {
  return (
    <section className="bg-primary md:py-24 py-16">
      <div className="container mx-auto max-w-6xl px-4 space-y-12">
        {/* Pune Head Office */}
        <div className="grid md:grid-cols-6 lg:grid-cols-9 grid-cols-1 gap-7 border-b border-white border-opacity-50 pb-11">
          <div className="col-span-3">
            <h2 className="text-white max-w-56 text-[40px] leading-tight font-bold">Gujarat Head Office</h2>
          </div>

          <div className="col-span-3">
            <p className="sm:text-2xl text-xl text-IceBlue font-normal max-w-64 leading-7 text-white/50">853-54, Navsari Bazar, Gopipura, Surat - 395001</p>
          </div>

          <div className="col-span-3 flex flex-col gap-2">
            <Link href="mailto:danaelectricals347@gmail.com" className="sm:text-2xl text-xl text-white font-medium underline">
              danaelectricals347@gmail.com
            </Link>

            <Link href="tel:+918460580905" className="sm:text-2xl text-xl text-white/80 flex items-center gap-2 hover:text-opacity-100 w-fit">
              <span className="text-white/40">Call</span>
              +91 8460580905
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Location;
