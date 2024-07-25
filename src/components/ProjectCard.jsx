import * as PropTypes from "prop-types";
import { motion } from "framer-motion";
import ToolImage from "./ToolImage";

export default function ProjectCard({ image = '', type = 'dev', title = 'Logo design for Hadi Delice', children = 'lorem', tools = [] }) {

    return (
        <motion.div
            initial={{ opacity: 0, y: '-20px', transform: 'skew(5deg, 5deg)', }}
            animate={{ opacity: 1, y: '0px', transform: 'skew(0deg, 0deg)', }}
            exit={{ opacity: 0, y: '-20px', transform: 'skew(5deg, 5deg)', }}
            className="group relative flex">
            {/* BACKGROUND ANIMATION */}
            <div className="absolute inset-0 overflow-hidden rounded-[20px]">
                <div className="absolute left-1/2 top-[30%] aspect-square h-full w-[180%] origin-center -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute aspect-square w-full animate-spin rounded-full bg-gradient-to-tr from-violet-300 to-orange-300 opacity-0 transition-all duration-700 group-hover:opacity-100" style={{ animation: 'spin 2s linear infinite' }}></div>
                </div>
            </div>
            <div className="flex-1 p-3">
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-lg bg-slate-100 shadow-2xl transition-all duration-500 group-hover:shadow-sm">
                    <div className="p-4">
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-slate-500">
                            <div className="h-full w-full">
                                <img className="h-full w-full object-cover" src={image || ("https://via.assets.so/img.jpg?w=900&h=450&tc=orange&bg=gray&t=" + (type == 'dev' ? "DEV" : "GRAPHIC"))} />
                            </div>
                            <div className={"absolute bottom-2 left-2 flex w-[44px] items-center gap-2 overflow-hidden rounded-[5px] bg-slate-700/50 p-3 text-sm font-bold text-slate-50 transition-all duration-500" + " " + (type == 'dev' ? "group-hover:w-[158px]" : "group-hover:w-[168px]")}>
                                <span>
                                    {type == 'dev' ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                                        </svg>
                                    )}
                                </span>
                                <p className="text-nowrap hidden_ opacity-0 drop-shadow-2xl transition-all delay-150 duration-500 group-hover:block group-hover:opacity-100">
                                    {type == 'dev' ? "DEVELOPEMENT" : "GRAPHIC DESIGN"}
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 font-roboto">
                            <h3 className="text-xl font-extrabold text-slate-700">{title}</h3>
                            <p className="mt-2 text-slate-500">{children}</p>
                        </div>
                    </div>

                    <div className="relative mt-4 flex gap-3 bg-slate-200 px-4 pb-4 pt-8">
                        <span className="absolute left-3 top-0 inline-block -translate-y-1/2 rounded-lg border-[4px] border-slate-50 bg-orange-800 px-3 py-1 font-poppins text-xs font-semibold text-orange-100">TOOLS/TECHONOLOGIES</span>
                        {tools.map(tool => <ToolImage key={tool} tool={tool} />)}
                    </div>
                </div>
            </div>

        </motion.div>
    )
}
const ProjectCardPropTypes = {
    image: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.string,
    tools: PropTypes.array,
};
ProjectCard.propTypes = ProjectCardPropTypes;
