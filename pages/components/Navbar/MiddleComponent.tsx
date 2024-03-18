import { Link } from "react-scroll";

export default function MiddleComponent() {
    return (
        <nav className="flex flex-row justify-between ">
            <ul className="flex space-x-[4vw]">
                <li className="hover:text-gray-600 font-medium text-[2.7vh]">
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="hover:text-gray-600 font-medium text-[2.7vh]">
                    <Link to="Service" smooth={true} duration={500}>
                    Services
                    </Link>
                </li>
                <li className="hover:text-gray-600 font-medium text-[2.7vh]">
                    <Link to="team" smooth={true} duration={500}>
                    Team
                    </Link>
                </li>
                <li className="hover:text-gray-600 font-medium text-[2.7vh]" >
                    <Link  smooth={true} duration={500} to="help">
                    Help
                    </Link>
                </li>
            </ul>
        </nav>
    )
}