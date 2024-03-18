import { SlSocialGoogle, SlSocialYoutube, SlSocialGithub, SlSocialLinkedin } from "react-icons/sl";

export default function ServicesSection() {
    return (
        <div className="mx-[6vw] mt-[12vh] border bg-black h-[20vh] flex flex-col justify-center items-center gap-[6vh]">
            <div className="flex flex-row gap-[18vh]">
                <div className="flex flex-row justify-center items-center gap-[1vh]">
                    <SlSocialGoogle color="white" className="h-[6vh] w-[2vw]"/>
                    <span className="text-white text-[3vh]">Google</span>
                </div>
                <div className="flex flex-row justify-center items-center gap-[1vh]">
                    <SlSocialYoutube color="white" className="h-[6vh] w-[2vw]"/>
                    <span className="text-white text-[3vh]">Youtube</span>
                </div>
                <div className="flex flex-row justify-center items-center gap-[1vh]">
                    <SlSocialGithub color="white" className="h-[6vh] w-[2vw]"/>
                    <span className="text-white text-[3vh]">Github</span>
                </div>
                <div className="flex flex-row justify-center items-center gap-[1vh]">
                    <SlSocialLinkedin color="white" className="h-[6vh] w-[2vw]"/>
                    <span className="text-white text-[3vh]">LinkedIn</span>
                </div>
            </div>
        </div>
    )
}