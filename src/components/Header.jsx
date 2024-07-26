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
        let ClassNames = "hover:bg-slate-100 hover:shadow rounded-md transition-all px-4 py-2 text-nowrap ";
        if (path == '/' && location.pathname == '/index.html') return ClassNames + activeClassNames
        if (location.pathname === path) return ClassNames + activeClassNames
        return ClassNames + nonActiveClassNames
    }
    return (
        <header className="sticky left-0 right-0 top-0 z-[999] p-4 [inset-block-start:-60px]">
            <div className="py-5 text-center">
                <p className="font-fira text-xl font-medium">
                    <span className="text-rose-800">{"<"}</span>
                    <span className="text-rose-700">{"Ibrahim"}</span>
                    <span className="text-rose-800">{">"}</span>
                    <span className="text-slate-600">{"Aboubacar"}</span>
                    <span className="text-rose-800">{"<"}</span>
                    <span className="text-rose-700">{"Ibrahim"}</span>
                    <span className="text-rose-800">{"/>"}</span>
                </p>
            </div>
            <div className="relative mx-auto h-16 max-w-screen-xl rounded-[20px] pl-6 pr-2 font-poppins text-slate-900 shadow">
                <span className="absolute inset-0 z-[-1] rounded-[20px] bg-gray-50/60 backdrop-blur-md"></span>
                <nav className="flex h-full justify-between gap-4">
                    <div className="flex h-full items-center">
                        <div className="text-nowrap font-fira text-xl font-medium">
                            {/* Logo */}
                            <div onMouseOver={handelMouseOver} className="font-semibold selection:bg-slate-950/10">
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

                    <ul className="hidden h-full items-center md:flex md:gap-0 lg:gap-5">
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

                    <ul className="flex h-full items-center gap-10">
                        <li><Link to="/contact" className="text-nowrap rounded-xl bg-orange-600 px-5 py-3 text-lg font-semibold text-orange-50 lg:px-10" >Contact me</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;