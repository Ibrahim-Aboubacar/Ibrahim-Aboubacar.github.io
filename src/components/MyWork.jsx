import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { AnimatePresence } from "framer-motion";

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
                    <div className="relative grid grid-cols-3 items-center gap-5 rounded-lg bg-gradient-to-tr from-orange-300 to-violet-300 px-3 py-5 text-center">
                        <div className="absolute inset-0 p-5">
                            <span className={"absolute bottom-0 top-0 z-[1] w-1/3 px-[10px] py-2 transition-all duration-700" + " " + (currentTabClasses)}>
                                <span className="block h-full w-full rounded-xl bg-orange-600/50 bg-blend-screen"></span>
                            </span>
                        </div>
                        <span className="relative z-[2] cursor-pointer px-3" onClick={() => handleTabChange('all')}>All</span>
                        <span className="relative z-[2] cursor-pointer px-3" onClick={() => handleTabChange('dev')}>Developement</span>
                        <span className="relative z-[2] cursor-pointer px-3" onClick={() => handleTabChange('graphics')}>Graphics Design</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 px-4 md:grid-cols-2">
                    <AnimatePresence>
                        {(workToShow == '*' || workToShow == 'dev') && (
                            <ProjectCard key={1} type="dev" title="Ciskolateur: A cunrecy converter XOF <=> GHS" tools={['jquery', 'css', 'alpine.js']}>
                                Découvre &apos;Le Ciskolateur&apos;, l&apos;appli ultime pour des conversions 💱 faciles entre le Cedi ghanéen et le Franc CFA. Ne te trompe plus dans tes conversions ! Économise du temps et de l&apos;argent🤩. Le taux de change est fourni et régulièrement mis à jour.
                            </ProjectCard>)}
                        {(workToShow == '*' || workToShow == 'graphics') && (
                            <ProjectCard key={2} type="graphics" tools={['ts', 'composer', 'js']}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugiat necessitatibus obcaecati unde voluptas officia blanditiis. Reiciendis dolorum minus alias officia.
                            </ProjectCard>)}
                        {(workToShow == '*' || workToShow == 'graphics') && (
                            <ProjectCard key={3} type="graphics" tools={['filezilla', 'windows', 'alpine.js']}>
                                Quibusdam labore sed quam dolores, accusamus unde commodi alias. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia impedit, laboriosam quia.
                            </ProjectCard>)}
                        {(workToShow == '*' || workToShow == 'dev') && (
                            <ProjectCard key={4} type="dev" tools={['react.js', 'mysql', 'laravel']}>
                                quam ad facere vel pariatur recusandae consequatur eaque perferendis? Ex labore nisi quas inventore sed reiciendis reprehenderit optio.
                            </ProjectCard>)}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
