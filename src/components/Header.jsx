import { Link, NavLink, useLocation } from "react-router-dom";

function Header() {
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
            <header className="max-w-screen-lg mx-auto rounded-md bg-gray-50 shadow h-16 text-slate-900 pl-6 pr-4 font-poppins">
                <nav className="flex gap-4 justify-between h-full">
                    <div className="h-full flex items-center">
                        <h3 className="font-bold text-2xl">I.A.I</h3>
                    </div>

                    <ul className="flex gap-5 h-full items-center">
                        <li>
                            <NavLink
                                to="/"
                                className={getClassNames("/")}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={getClassNames("/about")}>
                                À Propos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                className={getClassNames("/services")}>
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                className={getClassNames("/projects")}>
                                Mes Projets
                            </NavLink>
                        </li>
                    </ul>

                    <ul className="flex gap-10 h-full items-center">
                        <li><Link to="/contact" className="px-6 py-2 rounded-md bg-orange-600 text-orange-50 font-semibold" >Me Contacter</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;