import DescriptionSection from "@/pages/components/HeroSection/DesriptionSection";
import HeroButton from "@/pages/components/HeroSection/HeroButton";

export default function HeroSection() {
    return (
        <div className="flex flex-col items-center justify-center mt-[12vh] gap-[5vh]">
            <div className="text-center  text-[8vh] font-bold antialiased">
                We Help To Grow Your Business
                <br />
                With Your Full Potential
            </div>
            <DescriptionSection />
            <HeroButton />
        </div>
    )
}