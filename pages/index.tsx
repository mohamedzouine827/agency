import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/pages/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
        <Navbar />
    </div>
  );
}