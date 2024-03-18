export default function MiddleComponent() {
    return (
        <nav className="flex flex-row justify-between ">
            <ul className="flex space-x-[4vw]">
                <li className="hover:text-gray-600 font-medium text-[2.7vh]">
                    Home
                </li>
                <li className="hover:text-gray-600 font-medium text-[2.7vh]">
                    Services
                </li>
                <li className="hover:text-gray-600 font-medium text-[2.7vh]">
                    Protocols
                </li>
                <li className="hover:text-gray-600 font-medium text-[2.7vh]">
                    Blog
                </li>
            </ul>
        </nav>
    )
}