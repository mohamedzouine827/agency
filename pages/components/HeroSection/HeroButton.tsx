export default function HeroButton() {
    return (
        <div className="flex flex-row gap-[7vh] ">
            <div className="border-[0.1vh] h-[6.7vh] text-[2.5vh] transition-all rounded-[1vh] duration-200 hover:bg-gray-300 hover:text-black w-[9vw] text-white bg-gray-800 flex items-center justify-center">
                Contact Us
            </div>
            <div className="border-[0.1vh] h-[6.7vh] text-[2.5vh] transition-all rounded-[1vh] duration-200 hover:bg-white w-[9vw] text-black bg-gray-400 flex items-center justify-center">
                Learn More
            </div>
        </div>
    )
}