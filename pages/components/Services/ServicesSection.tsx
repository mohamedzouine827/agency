import { SlSocialGoogle, SlSocialYoutube, SlSocialGithub, SlSocialLinkedin } from "react-icons/sl";

export default function ServicesSection() {
    return (
        <div className="mx-[6vw] mt-[12vh] border bg-black h-[20vh] flex flex-col justify-center items-center gap-[6vh]">
            <div className="flex flex-row gap-[18vh]">
                <div className="flex flex-row justify-center items-center gap-[1vh]">
                    <SlSocialGoogle color="white" className="h-[5.2vh]"/>
                    <span className="text-white text-[2.8vh]">Google</span>
                </div>
                <div className="flex flex-row justify-center items-center gap-[1vh]">
                    <SlSocialYoutube color="white" className="h-[5.2vh]"/>
                    <span className="text-white text-[2.8vh]">Youtube</span>
                </div>
                <div className="flex flex-row justify-center items-center gap-[1vh]">
                    <SlSocialGithub color="white" className="h-[5.2vh]"/>
                    <span className="text-white text-[2.8vh]">Github</span>
                </div>
                <div className="flex flex-row justify-center items-center gap-[1vh]">
                    <SlSocialLinkedin color="white" className="h-[5.2vh]"/>
                    <span className="text-white text-[2.8vh]">LinkedIn</span>
                </div>
            </div>
        </div>
    )
}