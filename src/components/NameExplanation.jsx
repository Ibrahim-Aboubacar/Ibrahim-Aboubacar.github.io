import { useState } from "react";
import * as PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import OutLink from "./OutLink";
import MyCv from "../assets/files/CV_Ibrahim_Aboubacar_Ibrahim.pdf";

const NameExplanationTypes = {
    showNameExplanation: PropTypes.bool,
    setShowNameExplanation: PropTypes.func
};
function NameExplanation({ showNameExplanation, setShowNameExplanation }) {
    const [showNameExplanationClasses, setShowNameExplanationClasses] = useState(" absolute top-full mt-2 w-[700px] ");
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [cvIsDownloaded, setCvIsDownloaded] = useState(!false);

    const MakeNameExplanationClassesFullScreen = () => {
        setShowNameExplanationClasses(" fixed inset-1 z-[999] ")
        setIsFullScreen(true)
    }

    const MakeNameExplanationClassesSmall = () => {
        setShowNameExplanationClasses(" absolute top-full mt-2 w-[700px] ")
        setIsFullScreen(false)
    }
    const inialStage = {
        opacity: 0,
        y: -10,
        skewX: "5deg",
        scale: 0.2,
    };
    const NameExplanationAnimation = {
        hidden: inialStage,
        animate: {
            opacity: 1,
            y: 0,
            skewX: "0deg",
            scale: 1,
        },
        exit: inialStage
    };

    const cvDownloaded = () => {
        setTimeout(() => {
            setCvIsDownloaded(true);
            setTimeout(() => {
                setCvIsDownloaded(false);
            }, 3500);
        }, 500);
    }

    return (
        <AnimatePresence>
            {showNameExplanation && (
                <motion.div initial="hidden" animate="animate" exit="exit" variants={NameExplanationAnimation} className={showNameExplanationClasses + " " + (" rounded-md font-normal bg-slate-900 flex flex-col text-slate-500 text-wrap  selection:bg-slate-600/70 selection:text-slate-300/70 overflow-hidden origin-top-left")}>
                    <div className="flex items-center justify-between border-b-2 border-slate-950 bg-slate-900 text-slate-300/80">
                        <div className="pl-5">
                            <span className="font-semibold">
                                <span className="selection:!text-orange-500">
                                    <span>{"<"}</span>
                                    <span>{"Ib"}</span>
                                </span>
                                <span className="selection:!text-white">
                                    <span>{"r"}</span>
                                </span>
                                <span className="selection:!text-orange-500">
                                    <span>{"a"}</span>
                                </span>
                                <span className="selection:!text-white">
                                    <span>{"h"}</span>
                                </span>
                                <span className="selection:!text-green-500">
                                    <span>{"im"}</span>
                                    <span>{" />"}</span>
                                </span>
                            </span>
                            <span>{" explained"}</span>
                        </div>
                        <div className="grid cursor-pointer grid-cols-3 grid-rows-[64px]">
                            <div onClick={() => { setShowNameExplanation(false); MakeNameExplanationClassesSmall() }} className="flex w-14 items-center justify-center hover:bg-slate-700/30">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                            </div>
                            {isFullScreen ? (
                                <div onClick={MakeNameExplanationClassesSmall} className="flex w-14 items-center justify-center hover:bg-slate-700/30">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
                                    </svg>
                                </div>
                            ) : (
                                <div onClick={MakeNameExplanationClassesFullScreen} className="flex w-14 items-center justify-center hover:bg-slate-700/30">
                                    <span className="inline-block h-3 w-4 rounded-sm border-2 border-current"></span>
                                </div>
                            )}
                            <div onClick={() => { setShowNameExplanation(false); MakeNameExplanationClassesSmall() }} className="flex w-14 items-center justify-center hover:bg-red-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 pt-5">
                        <p className="mb-4">
                            <span>{"The "}</span>
                            <span className="text-slate-400 hover:text-slate-300">
                                <span className="selection:!text-orange-500">
                                    <span>{"<"}</span>
                                    <span>{"Ib"}</span>
                                </span>
                                <span className="selection:!text-white">
                                    <span>{"r"}</span>
                                </span>
                                <span className="selection:!text-orange-500">
                                    <span>{"a"}</span>
                                </span>
                                <span className="selection:!text-white">
                                    <span>{"h"}</span>
                                </span>
                                <span className="selection:!text-green-500">
                                    <span>{"im"}</span>
                                    <span>{" />"}</span>
                                </span>
                            </span>
                            <span>
                                {" element encapsulates the essence of "}
                                <OutLink title="Visite my GitHub">
                                    Ibrahim Aboubacar Cissé
                                </OutLink>
                            </span>
                        </p>
                        <p className="mb-2 border-t border-slate-700 pt-2">
                            <span>
                                {" A talented Web Developer & Graphic Designer based in Ghana."}
                            </span>
                            <span>
                                {" With a flair for backend development using "}
                                <OutLink href="https://www.php.net" title="PHP docs">
                                    PHP
                                </OutLink>.
                            </span>
                            <span>
                                {"Ibrahim also excels with modern frameworks like "}
                                <OutLink href="https://laravel.com/" title="LARAVEL docs">
                                    LARAVEL
                                </OutLink>
                                {" and JavaScript libraries such as "}
                                <OutLink href="https://react.dev/" title="REACT.JS docs">
                                    React.JS
                                </OutLink>.
                            </span>
                        </p>
                        <p className="mb-2 border-t border-slate-700 pt-2">
                            <span>
                                {"As a creative designer, Ibrahim brings unique and eye-catching designs to life."}
                            </span>
                        </p>
                        <p className="mb-2 border-t border-slate-700 pt-2">
                            <span>
                                {"Passionate about innovation and continuous learning, Ibrahim is always pushing the boundaries of what's possible in the tech world."}
                            </span>
                        </p>
                    </div>
                    <div className="mt-auto bg-slate-800 px-5 py-0">
                        <a href={MyCv} download={true} onClick={cvDownloaded} className="inline-flex items-center gap-1 py-5 font-medium text-cyan-600 hover:text-cyan-500">
                            <span>Download my CV</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                    <path d="M13.75 7h-3v5.296l1.943-2.048a.75.75 0 0 1 1.114 1.004l-3.25 3.5a.75.75 0 0 1-1.114 0l-3.25-3.5a.75.75 0 1 1 1.114-1.004l1.943 2.048V7h1.5V1.75a.75.75 0 0 0-1.5 0V7h-3A2.25 2.25 0 0 0 4 9.25v7.5A2.25 2.25 0 0 0 6.25 19h7.5A2.25 2.25 0 0 0 16 16.75v-7.5A2.25 2.25 0 0 0 13.75 7Z" />
                                </svg>
                            </span>
                        </a>
                        <AnimatePresence>
                            {cvIsDownloaded && <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setCvIsDownloaded(false)} className="ml-5 inline-flex items-center justify-center rounded-xl border-2 border-green-700 px-5 py-2 ring-2 ring-green-600">
                                <p className="text-sm font-medium text-green-500">CV downloaded! Thank you!</p>
                            </motion.div>}
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
NameExplanation.propTypes = NameExplanationTypes;

export default NameExplanation;