import { useState } from "react";
import ProjectCard from "./ProjectCard";
import OutLink from "./OutLink";
import { AnimatePresence } from "framer-motion";
import monEntrepriseEnNe from "../assets/imgs/solunix-mon-entreprise-en-ne-by-ibrahim-aboubacar-ibrahim.webp"
import freeWebsiteForNgos from "../assets/imgs/solunix-free-website-for-ngos-by-ibrahim-aboubacar-ibrahim.webp"
import portfolioIbrahimAboubacarIbrahim from "../assets/imgs/portfolio-ibrahim-aboubacar-ibrahim.webp"
import leCiskolateur from "../assets/imgs/le-ciskolateur-curency-converter-app-by-ibrahim-aboubacar-ibrahim.webp"
import fuggeneration from "../assets/imgs/website-of-csp-future-generation-by-ibrahim-aboubacar-ibrahim.webp"
import starhotel from "../assets/imgs/website-of-starhotel-by-ibrahim-aboubacar-ibrahim.webp"

export default function MyWork() {
    const [workToShow, setWorkToShow] = useState('*');

    const [currentTabClasses, setCurrentTabClasses] = useState('left-0 pl-[10px]');
    const tabState = {
        all: 'left-0 pl-[10px]',
        dev: 'left-1/3',
        graphics: 'left-2/3 pr-[10px]',
    };

    const handleTabChange = (tab) => {
        setCurrentTabClasses(tabState[tab]);
        setWorkToShow(tab == 'all' ? '*' : tab);
    };
    return (
        <section id="projects" className="relative bg-gradient-to-tr from-orange-100 to-violet-200 py-16">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-200" style={{ backgroundSize: 40, backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='2' height='2' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f27e02' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")" }}></div>
            <div className="mx-auto max-w-screen-xl px-4 pt-10">
                <div className="py-10 font-poppins">
                    <h2 className="text-center text-3xl font-bold text-slate-800 md:text-5xl">
                        Recent Projects
                    </h2>
                    <p className="mt-2 text-center text-slate-600 md:mt-5 md:text-xl">
                        Check out some of my latest Web Development and Graphic Design projects.
                    </p>
                </div>
                <div className="sticky z-10 flex select-none items-center justify-center pb-14 pt-0 font-roboto text-sm font-semibold text-slate-700 [inset-block-start:75px] sm:py-14 sm:text-xl sm:[inset-block-start:65px]">
                    <div className="relative grid grid-cols-3 items-center gap-0 rounded-[20px] bg-gradient-to-tr from-orange-300 to-violet-300 px-3 py-5 text-center shadow-md shadow-violet-200 sm:gap-5">
                        <div className="absolute inset-0 p-5">
                            <span className={"absolute bottom-0 top-0 z-[1] w-1/3 py-2 transition-all duration-700 sm:px-[10px]" + " " + (currentTabClasses)}>
                                <span className="block h-full w-full rounded-xl bg-orange-600/80 bg-blend-screen"></span>
                            </span>
                        </div>
                        <span className={"relative z-[2] cursor-pointer px-1 transition-all duration-700 sm:px-3" + " " + (workToShow == '*' && 'text-orange-50')} onClick={() => handleTabChange('all')}>All</span>
                        <span className={"relative z-[2] cursor-pointer px-1 transition-all duration-700 sm:px-3" + " " + (workToShow == 'dev' && 'text-orange-50')} onClick={() => handleTabChange('dev')}>Developement</span>
                        <span className={"relative z-[2] cursor-pointer px-1 transition-all duration-700 sm:px-3" + " " + (workToShow == 'graphics' && 'text-orange-50')} onClick={() => handleTabChange('graphics')}>Graphics <span className="hidden sm:inline">Design</span></span>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:px-4 md:grid-cols-2">
                    <AnimatePresence>
                        {(workToShow == '*' || workToShow == 'dev') && (
                            <ProjectCard key={1} type="dev" tools={['html', 'tailwindcss', 'alpine.js', 'slim', 'php', 'mysql', 'bootstrap']} title={"CSP Future Generation - School Website"} image={fuggeneration}>
                                I developed the website for <OutLink href="https://fuggeneration.com/?utm_source=https://ibrahim-aboubacar.github.io/" className="border-slate-600 font-medium text-orange-800 hover:text-orange-950">CSP Future Generation,</OutLink> a school in Guinea, using the <OutLink href="https://www.slimframework.com/?utm_source=https://ibrahim-aboubacar.github.io/" className="border-slate-600 font-medium text-orange-800 hover:text-orange-950">Slim framework</OutLink> to deliver a fast and lightweight platform. The website allows users to view and download important documents shared by the administration, browse and like news updates, and explore an image gallery. It also includes a contact form for easy communication. Administrators can manage parent feedback via a testimonial management system. The site is fully optimized for SEO, ensuring better search engine visibility. The back-office, built with Bootstrap and Alpine.js, allows seamless management of documents, news, media, and testimonials.
                            </ProjectCard>)}

                        {(workToShow == '*' || workToShow == 'dev') && (
                            <ProjectCard key={2} type="dev" tools={['html', 'css', 'alpine.js', 'php', 'mysql']} title={"Free Website for NGOs Project"} image={freeWebsiteForNgos}>
                                I developed the “Free Website for NGOs” web page for <OutLink href="https://solunixgroups.africa/mon-entreprise-ne/?utm_source=https://ibrahim-aboubacar.github.io/" className="border-slate-600 font-medium text-orange-800 hover:text-orange-950" >Solunix Niger.</OutLink> This initiative provides non-profit organizations with custom websites, free hosting, and maintenance services. The page outlines the benefits of having a website, such as increased visibility, volunteer recruitment, and donation collection. It also details the eligibility criteria and application process for organizations.
                            </ProjectCard>)}

                        {(workToShow == '*' || workToShow == 'dev') && (
                            <ProjectCard key={3} type="dev" tools={['html', 'css', 'alpine.js', 'php', 'mysql']} title={"\"Mon Entreprise en .ne\" Web Page Project"} image={monEntrepriseEnNe}>
                                I developed the “Mon Entreprise en .ne” web page for <OutLink href="https://solunixgroups.africa/site-web-gratuit-pour-les-associations/?utm_source=https://ibrahim-aboubacar.github.io/" className="border-slate-600 font-medium text-orange-800 hover:text-orange-950" >Solunix Niger.</OutLink> This project helps businesses reserve a “.ne” domain name and offers free hosting for the first year to early registrants. The page features a detailed service presentation, a simplified five-step registration form, and information on renewal fees.
                            </ProjectCard>)}

                        {(workToShow == '*' || workToShow == 'dev') && (
                            <ProjectCard key={4} type="dev" tools={['html', 'tailwindcss', 'react.js']} title="My Professional Portfolio Website" image={portfolioIbrahimAboubacarIbrahim}>
                                I designed and developed my professional portfolio website to showcase my skills and projects in web development and graphic design. The site features an elegant, user-friendly layout with sections highlighting my expertise in PHP, MySQL, HTML, CSS, JavaScript, and various frameworks like Laravel and ReactJS.
                            </ProjectCard>)}

                        {(workToShow == '*' || workToShow == 'dev') && (
                            <ProjectCard key={5} type="dev" tools={['html', 'tailwindcss', 'alpine.js']} title={"Development of \"Le Ciskolateur\" Currency Converter App"} image={leCiskolateur}>
                                “Le Ciskolateur,” is a currency converter application that is accessible both as a <span className="font-medium text-orange-800">web app</span> and an <span className="font-medium text-orange-800">APK for mobile devices</span>. The project includes a comprehensive <OutLink href="https://ibrahim-aboubacar.github.io/le-ciskolateur-infos/?utm_source=https://ibrahim-aboubacar.github.io/" className="border-slate-600 font-medium text-orange-800 hover:text-orange-950">website</OutLink> where users can download the app or use it directly <OutLink href="https://ibrahim-aboubacar.github.io/le-ciskolateur-infos/app/?utm_source=https://ibrahim-aboubacar.github.io/" className="border-slate-600 font-medium text-orange-800 hover:text-orange-950">online.</OutLink> “Le Ciskolateur” offers real-time currency conversion, a user-friendly interface.
                            </ProjectCard>)}

                        {(workToShow == '*' || workToShow == 'dev') && (
                            <ProjectCard key={6} type="dev" tools={['html', 'css', 'jquery', 'php', 'mysql', 'bootstrap']} title={"StarHotel - Hotel Room Management System"} image={starhotel}>
                                I developed StarHotel in 2022 as a school project to learn PHP fundamentals. It’s a complete hotel room management and online reservation system built without using any frameworks. The platform includes a back-office for administrators to manage rooms, reservations, and contact messages, while customers can browse available rooms and make reservations directly online. This project showcases my ability to build full-featured systems using core web development technologies.
                            </ProjectCard>)}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
