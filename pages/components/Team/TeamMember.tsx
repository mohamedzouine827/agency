import Image from "next/image";
import Pic1 from "@/pages/assets/pic1.jpg"

export default function TeamMember() {
    // @ts-ignore
    return(
        <div className="mt-[4vh] mx-[6vw] flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:gap-0 gap-[4vh]">
            <div
                className="border rounded-md h-[44vh] lg:h-[54vh] w-[80vw] lg:w-[27vw] flex flex-col items-center justify-center gap-[0.5vh] lg:gap-[2vh]">

                <div>
                    <Image src={Pic1.src} width={255} height={255} alt={"pic1"} className="rounded-none lg:rounded-[4vh] h-[28vh] lg:h-[31vh] w-[60vw] lg:w-[20vw]"/>
                </div>
                <div>
                    <h1 className="text-[4vh] font-bold text-black">Tom Cruise</h1>
                </div>
                <div className="text-center text-gray-400 font-bold text-[2.8vh]">
                    Marketing
                </div>
            </div>
            <div
                className="border rounded-md h-[44vh] lg:h-[54vh] w-[80vw] lg:w-[27vw] flex flex-col items-center justify-center gap-[0.5vh] lg:gap-[2vh]">

                <div>
                    <Image src={Pic1.src} width={255} height={255} alt={"pic1"} className="rounded-none lg:rounded-[4vh] h-[28vh] lg:h-[31vh] w-[60vw] lg:w-[20vw]"/>
                </div>
                <div>
                    <h1 className="text-[4vh] font-bold text-black">Tom Cruise</h1>
                </div>
                <div className="text-center text-gray-400 font-bold text-[2.8vh]">
                    Marketing
                </div>
            </div>
            <div
                className="border rounded-md h-[44vh] lg:h-[54vh] w-[80vw] lg:w-[27vw] flex flex-col items-center justify-center gap-[0.5vh] lg:gap-[2vh]">

                <div>
                    <Image src={Pic1.src} width={255} height={255} alt={"pic1"} className="rounded-none lg:rounded-[4vh] h-[28vh] lg:h-[31vh] w-[60vw] lg:w-[20vw]"/>
                </div>
                <div>
                    <h1 className="text-[4vh] font-bold text-black">Tom Cruise</h1>
                </div>
                <div className="text-center text-gray-400 font-bold text-[2.8vh]">
                    Marketing
                </div>
            </div>
        </div>
    )
}