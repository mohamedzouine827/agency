import { SlSocialGoogle, SlSocialYoutube, SlSocialGithub, SlSocialLinkedin } from "react-icons/sl";

export default function ServicesSection() {
    return (
        <div className="mx-[6vw] mt-[8vh] lg:mt-[12vh] border bg-black h-[12vh] lg:h-[20vh] flex flex-col justify-center items-center ">
            <div className="flex flex-row gap-[8vh] lg:gap-[22vh]">
                <div className="flex flex-row justify-center items-center gap-[1vh]">
                    <SlSocialGoogle color="white" className="h-[12vh] w-[5.7vw] lg:h-[6vh] lg:w-[2vw]"/>
                    <span className="hidden lg:block lg:text-white lg:text-[3vh]">Google</span>
                </div>
                <div className="flex flex-row justify-center items-center gap-[1vh]">
                    <SlSocialYoutube color="white" className="h-[12vh] w-[5.7vw] lg:h-[6vh] lg:w-[2vw]"/>
                    <span className="hidden lg:block lg:text-white lg:text-[3vh]">Youtube</span>
                </div>
                <div className="flex flex-row justify-center items-center gap-[1vh]">
                    <SlSocialGithub color="white" className="h-[12vh] w-[5.7vw] lg:h-[6vh] lg:w-[2vw]"/>
                    <span className="hidden lg:block lg:text-white lg:text-[3vh]">Github</span>
                </div>
                <div className="flex flex-row justify-center items-center gap-[1vh]">
                    <SlSocialLinkedin color="white" className="h-[12vh] w-[5.7vw] lg:h-[6vh] lg:w-[2vw]"/>
                    <span className="hidden lg:block lg:text-white lg:text-[3vh]">LinkedIn</span>
                </div>
            </div>
        </div>
    )
}