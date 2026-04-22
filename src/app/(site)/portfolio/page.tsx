import React, { Suspense } from "react";
import Portfolio from "@/components/portfolio/PortfolioList";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Portfolio | Dana Electrical",
};

const PortfolioList = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/portfolio", text: "Portfolio" },
    ];
    return (
        <>
            <HeroSub
                title="Portfolio"
                description="Dive into a curated collection of my finest work, showcasing expertise across various industries."
                breadcrumbLinks={breadcrumbLinks}
            />
            <Suspense fallback={null}>
                <Portfolio />
            </Suspense>
        </>
    );
};

export default PortfolioList;