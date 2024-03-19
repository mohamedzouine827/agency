export default function HeroButton() {
    return (
        <div className="flex flex-row gap-[7vh] ">
            <div className="border-[0.1vh] h-[6vh] text-[2.5vh] lg:h-[6.7vh] lg:text-[2.5vh] transition-all rounded-[1vh] duration-200 hover:bg-white w-[26vw] lg:w-[9vw]  bg-black text-white flex hover:text-black items-center justify-center text-center ">
                Contact Us
            </div>
            <div className="border-[0.1vh] h-[6vh] text-[2.5vh] lg:h-[6.7vh] lg:text-[2.5vh] transition-all rounded-[1vh] duration-200 hover:bg-white w-[26vw] lg:w-[9vw] text-black bg-gray-400 flex items-center justify-center text-center ">
                Learn More
            </div>
        </div>
    )
}