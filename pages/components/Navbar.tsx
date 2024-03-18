import Image from "next/image";
import logo from "@/pages/assets/logo.png"
import MiddleComponent from "@/pages/components/Navbar/MiddleComponent";
import ContactUs from "@/pages/components/Navbar/ContactUs";
export default function Navbar() {
    return (
        <nav className="mt-[4vh] mx-[6vw] flex flex-row justify-between items-center">
            <Image src={logo.src} width={250} height={250} alt="logo" className="w-[3vw] h-[6vh]"/>
            <MiddleComponent />
            <ContactUs />
        </nav>
    )
}