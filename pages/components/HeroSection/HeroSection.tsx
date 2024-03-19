import DescriptionSection from "@/pages/components/HeroSection/DesriptionSection";
import HeroButton from "@/pages/components/HeroSection/HeroButton";

export default function HeroSection() {
    return (
        <div className="flex flex-col items-center justify-center mt-[6vh] mx-[4vw] lg:mx-0 lg:mt-[10vh] gap-[4vh] lg:gap-[6vh]" id="home">
            <div className="text-center text-[6vh] lg:text-[8vh] font-bold antialiased">
                We Help To Grow Your Business
                <br />
                With Your Full Potential
            </div>
            <DescriptionSection />
            <HeroButton />
        </div>
    )
}