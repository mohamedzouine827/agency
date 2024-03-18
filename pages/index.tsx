import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/pages/components/Navbar";
import HeroSection from "@/pages/components/HeroSection/HeroSection";

import {Divider} from "@nextui-org/react";
import ServicesSection from "@/pages/components/Services/ServicesSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div>
            <Navbar />
            <Divider className="my-[3vh] h-[0.1vh]"/>
            <HeroSection />
            <ServicesSection />
        </div>
    );
}
