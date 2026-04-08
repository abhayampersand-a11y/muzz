import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import {Metadata} from "next";
import Services from "@/components/Home/Services";

export const metadata: Metadata = {
  title: "Services | Dana Electrical",
};

const ServicesPage = () => {
  const breadcrumbLinks = [
    {href: "/", text: "Home"},
    {href: "/services", text: "Services"},
  ];

  return (
    <>
      <HeroSub
        title="Services"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Services />
    </>
  );
};

export default ServicesPage;
