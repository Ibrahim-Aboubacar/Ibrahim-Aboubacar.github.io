import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import NameExplanation from "./NameExplanation"

function Header() {
    const [showNameExplanation, setShowNameExplanation] = useState(false);

    const handelMouseOver = () => {
        if (!showNameExplanation) {
            setShowNameExplanation(true)
        }
    }

    const location = useLocation();
    const activeClassNames = "font-bold text-orange-600"
    const nonActiveClassNames = "font-bold text-slate-500"



    const getClassNames = (path) => {
        let ClassNames = "hover:bg-slate-100 hover:shadow rounded-md transition-all px-4 py-2 ";
        if (location.pathname === path) return ClassNames + activeClassNames
        return ClassNames + nonActiveClassNames
    }
    return (
        <div className="pt-4 px-4">
            <div className="text-center py-5">
                <p className="text-xl font-fira font-medium">
                    <span className="text-rose-800">{"<"}</span>
                    <span className="text-rose-700">{"Ibrahim"}</span>
                    <span className="text-rose-800">{">"}</span>
                    <span className="text-slate-600">{"Aboubacar"}</span>
                    <span className="text-rose-800">{"<"}</span>
                    <span className="text-rose-700">{"Ibrahim"}</span>
                    <span className="text-rose-800">{"/>"}</span>
                </p>
            </div>
            <header className="max-w-screen-lg mx-auto rounded-md bg-gray-50 shadow h-16 text-slate-900 pl-6 pr-4 font-poppins">
                <nav className="flex gap-4 justify-between h-full">
                    <div className="h-full flex items-center">
                        <div className="relative text-xl font-medium font-fira text-nowrap group">
                            {/* Logo */}
                            <div onMouseOver={handelMouseOver} className="selection:bg-slate-950/10 font-semibold">
                                <span className="selection:text-orange-500">
                                    <span className="text-rose-900">{"<"}</span>
                                    <span className="text-rose-700">{"Ib"}</span>
                                </span>
                                <span className="selection:text-white">
                                    <span className="text-rose-700">{"r"}</span>
                                </span>
                                <span className="selection:text-orange-500">
                                    <span className="text-rose-700">{"a"}</span>
                                </span>
                                <span className="selection:text-white">
                                    <span className="text-rose-700">{"h"}</span>
                                </span>
                                <span className="selection:text-green-500">
                                    <span className="text-rose-700">{"im"}</span>
                                    <span className="text-rose-900">{" />"}</span>
                                </span>
                            </div>
                            <NameExplanation showNameExplanation={showNameExplanation} setShowNameExplanation={setShowNameExplanation} />
                        </div>
                    </div>

                    <ul className="flex gap-5 h-full items-center">
                        <li>
                            <NavLink to="/" className={getClassNames("/")}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={getClassNames("/about")}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" className={getClassNames("/services")}>
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" className={getClassNames("/projects")}>
                                My Projects
                            </NavLink>
                        </li>
                    </ul>

                    <ul className="flex gap-10 h-full items-center">
                        <li><Link to="/contact" className="px-6 py-2 rounded-md bg-orange-600 text-orange-50 font-semibold" >Contact me</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}



export default Header;