import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/pages/components/Navbar";
import HeroSection from "@/pages/components/HeroSection/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />

        </div>
    );
}
