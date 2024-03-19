export default function Footer() {

    return (
        <div className="mt-[8vh] border mx-[6vw] bg-black h-[24vh] lg:h-[30vh] flex flex-col justify-center items-center gap-[4vh]" id="help">
            <div className="justify-between flex items-center  gap-[4vh] lg:gap-[2vh] mt-[2vh]">
                <div className="hidden lg:block lg:text-white">
                    Now About Us More:
                </div>
                <div className="text-white text-[2vh] border h-[4vh] w-[45vw] lg:w-[12vw] flex  justify-start items-center">
                    <input className="bg-black ml-[0.4vh]" placeholder="Enter Your Email"/>
                </div>
                <button className="border bg-white text-black text-[1.9vh] h-[4vh] w-[14vw] lg:w-[5vw] flex  justify-center items-center hover:bg-black hover:text-white">
                    Send
                </button>

            </div>
            <div className="text-white mx-[2vh] lg:mx-0 text-[1.8vh] text-center lg:text-[2.1vh]">
                Copyright © 2024 Mohamed Zouine. All rights reserved.
            </div>
        </div>
    )
}