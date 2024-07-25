import { useState } from "react";
import ProjectCard from "./ProjectCard";
import OutLink from "./OutLink";
import { AnimatePresence } from "framer-motion";
import monEntrepriseEnNe from "../assets/imgs/solunix-mon-entreprise-en-ne-by-ibrahim-aboubacar-ibrahim.png"
import freeWebsiteForNgos from "../assets/imgs/solunix-free-website-for-ngos-by-ibrahim-aboubacar-ibrahim.png"
import portfolioIbrahimAboubacarIbrahim from "../assets/imgs/portfolio-ibrahim-aboubacar-ibrahim.png"
import leCiskolateur from "../assets/imgs/le-ciskolateur-curency-converter-app-by-ibrahim-aboubacar-ibrahim.png"

export default function MyWork() {
    const [workToShow, setWorkToShow] = useState('*');

    const [currentTabClasses, setCurrentTabClasses] = useState('left-0');
    const tabState = {
        all: 'left-0',
        dev: 'left-1/3',
        graphics: 'left-2/3',
    };

    const handleTabChange = (tab) => {
        setCurrentTabClasses(tabState[tab]);
        setWorkToShow(tab == 'all' ? '*' : tab);
    };
    return (
        <section className="bg-gradient-to-tr from-orange-100 to-violet-200 py-16">
            <div className="mx-auto max-w-screen-xl px-4">
                <div className="py-10 font-poppins">
                    <h2 className="text-center text-5xl font-bold text-slate-800">
                        Recent Projects
                    </h2>
                    <p className="mt-5 text-center text-xl text-slate-600">
                        Check out some of my latest Web Development and Graphic Design projects.
                    </p>
                </div>
                <div className="text-nowrap_ flex select-none items-center justify-center py-10 font-roboto font-semibold text-slate-700 sm:text-xl">
                    <div className="relative grid grid-cols-3 items-center gap-5 rounded-[20px] bg-gradient-to-tr from-orange-300 to-violet-300 px-3 py-5 text-center shadow-md shadow-violet-200">
                        <div className="absolute inset-0 p-5">
                            <span className={"absolute bottom-0 top-0 z-[1] w-1/3 px-[10px] py-2 transition-all duration-700" + " " + (currentTabClasses)}>
                                <span className="block h-full w-full rounded-xl bg-orange-600/80 bg-blend-screen"></span>
                            </span>
                        </div>
                        <span className={"relative z-[2] cursor-pointer px-3 transition-all duration-700" + " " + (workToShow == '*' && 'text-orange-50')} onClick={() => handleTabChange('all')}>All</span>
                        <span className={"relative z-[2] cursor-pointer px-3 transition-all duration-700" + " " + (workToShow == 'dev' && 'text-orange-50')} onClick={() => handleTabChange('dev')}>Developement</span>
                        <span className={"relative z-[2] cursor-pointer px-3 transition-all duration-700" + " " + (workToShow == 'graphics' && 'text-orange-50')} onClick={() => handleTabChange('graphics')}>Graphics Design</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 px-4 md:grid-cols-2">
                    <AnimatePresence>
                        {(workToShow == '*' || workToShow == 'dev') && (
                            <ProjectCard key={1} type="dev" tools={['html', 'css', 'alpine.js', 'php', 'mysql']} title={"Free Website for NGOs Project"} image={freeWebsiteForNgos}>
                                I developed the “Free Website for NGOs” web page for <OutLink href="https://solunixgroups.africa/mon-entreprise-ne/?utm_source=https://ibrahim-aboubacar.github.io/" className="border-slate-600 font-medium text-orange-800 hover:text-orange-950" >Solunix Niger.</OutLink> This initiative provides non-profit organizations with custom websites, free hosting, and maintenance services. The page outlines the benefits of having a website, such as increased visibility, volunteer recruitment, and donation collection. It also details the eligibility criteria and application process for organizations.
                            </ProjectCard>)}

                        {(workToShow == '*' || workToShow == 'dev') && (
                            <ProjectCard key={2} type="dev" tools={['html', 'css', 'alpine.js', 'php', 'mysql']} title={"\"Mon Entreprise en .ne\" Web Page Project"} image={monEntrepriseEnNe}>
                                I developed the “Mon Entreprise en .ne” web page for <OutLink href="https://solunixgroups.africa/site-web-gratuit-pour-les-associations/?utm_source=https://ibrahim-aboubacar.github.io/" className="border-slate-600 font-medium text-orange-800 hover:text-orange-950" >Solunix Niger.</OutLink> This project helps businesses reserve a “.ne” domain name and offers free hosting for the first year to early registrants. The page features a detailed service presentation, a simplified five-step registration form, and information on renewal fees.
                            </ProjectCard>)}

                        {(workToShow == '*' || workToShow == 'dev') && (
                            <ProjectCard key={3} type="dev" tools={['html', 'tailwindcss', 'react.js']} title="My Professional Portfolio Website" image={portfolioIbrahimAboubacarIbrahim}>
                                I designed and developed my professional portfolio website to showcase my skills and projects in web development and graphic design. The site features an elegant, user-friendly layout with sections highlighting my expertise in PHP, MySQL, HTML, CSS, JavaScript, and various frameworks like Laravel and ReactJS.
                            </ProjectCard>)}

                        {(workToShow == '*' || workToShow == 'dev') && (
                            <ProjectCard key={4} type="dev" tools={['html', 'tailwindcss', 'alpine.js']} title={"Development of \"Le Ciskolateur\" Currency Converter App"} image={leCiskolateur}>
                                “Le Ciskolateur,” is a currency converter application that is accessible both as a <span className="font-medium text-orange-800">web app</span> and an <span className="font-medium text-orange-800">APK for mobile devices</span>. The project includes a comprehensive <OutLink href="https://ibrahim-aboubacar.github.io/le-ciskolateur-infos/?utm_source=https://ibrahim-aboubacar.github.io/" className="border-slate-600 font-medium text-orange-800 hover:text-orange-950">website</OutLink> where users can download the app or use it directly <OutLink href="https://ibrahim-aboubacar.github.io/le-ciskolateur-infos/app/?utm_source=https://ibrahim-aboubacar.github.io/" className="border-slate-600 font-medium text-orange-800 hover:text-orange-950">online.</OutLink> “Le Ciskolateur” offers real-time currency conversion, a user-friendly interface.
                            </ProjectCard>)}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
