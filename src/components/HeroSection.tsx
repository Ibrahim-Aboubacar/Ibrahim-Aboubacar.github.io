import React from "react";
import Typed from "typed.js";
// import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import img from "../assets/imgs/portrait-jeune-homme-expressif-portant-costume-formel.webp";
import useContact from "../hooks/useContact";
import laravelLogo from "../assets/imgs/icons/laravel.svg";
import nextJsLogo from "../assets/imgs/icons/nextjs.svg";
import { useState } from "react";
import { cn } from "../utils/helpers";
function HeroSection() {
    const { whatsappLink } = useContact();

    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['^700 I am Ibrahim <br class="sm:hidden"/>Aboubacar <br/> Ibrahim', 'I am a <span class="text-orange-600"> <br/>full-stack <br/> developer</span>'],
            typeSpeed: 40,
            backSpeed: 20,
            backDelay: 4500,
            loop: true,
            loopCount: 2,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-r from-orange-200 to-violet-200 pt-48 font-poppins text-slate-800 md:min-h-[unset]">
            <div
                className="absolute inset-0"
                style={{
                    backgroundSize: 170,
                    backgroundAttachment: "fixed",
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'%3E%3Cpath fill='%23f27e02' fill-opacity='0.15' d='M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z'%3E%3C/path%3E%3C/svg%3E\")",
                }}
            ></div>
            <div className="relative z-10 h-full max-w-screen-xl px-4 mx-auto">
                <div className="grid justify-center h-full grid-cols-1 gap-20 md:grid-cols-2 md:gap-0">
                    <div className="flex flex-col justify-center px-4 pb-10 md:px-0_ sm:ml-3 md:ml-0 md:px-0">
                        <h1 className="relative overflow-hidden text-5xl font-black md:overflow-visible md:text-5xl lg:text-6xl">
                            <span className="absolute top-0">
                                Hey, <span ref={el}></span>
                            </span>
                            <span>
                                <br />
                                <br />
                                <br />
                                <br className="block sm:hidden" />
                            </span>
                        </h1>
                        <div className="mt-3 text-slate-600 md:mt-5">
                            <p className="text-base font-normal md:text-lg">
                                I build fast, accessible, and modern digital solutions, focusing on <strong className="font-semibold">performance</strong>, <strong className="font-semibold">design</strong>, and <strong className="font-semibold">user experience</strong>.
                                <br />
                                <span className="text-base">
                                    Based in Ghana 🇬🇭, originally from Niger 🇳🇪 <br /> I help businesses, startups, and NGOs turn ideas into reality through tech.
                                </span>
                                {/* I am specialized in creating elegant and functional user interfaces,
                                combining expertise in PHP and front-end technologies with 3 years of experience in the field of web development. */}
                            </p>
                        </div>
                        <div className="mt-10">
                            <a href={whatsappLink} target="_blank" className="px-10 py-4 text-xl font-semibold transition-colors bg-orange-600 rounded-xl text-orange-50 hover:bg-orange-700">
                                Hire Me
                            </a>
                        </div>
                    </div>
                    <div className="relative flex hiddenmd:">
                        <div className="absolute -right-16 bottom-0 z-0 aspect-square w-[500px] -translate-x-1/2 rounded-full bg-orange-600/30 blur-3xl"></div>
                        <img src={img} className="z-10 w-3/4 ml-auto mr-auto md:mr-0_" alt="portrait jeune homme expressif portant costume formel" />
                        <FrontEndBullet />
                        <BackEndBullet />
                    </div>
                </div>
            </div>
        </section>
    );
}

function FrontEndBullet() {
    return (
        <LittelBullet
            className="absolute z-10 right-8 top-40 sm:right-14 sm:top-72 md:right-0 md:top-52 lg:right-6 lg:top-64"
            title="Front End"
            subtitle="Development"
            variant="sky"
            logo={
                <svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" className="flex self-center w-24 origin-center">
                    <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                    <g stroke="currentColor" strokeWidth="1" fill="none">
                        <ellipse rx="10" ry="4.5"></ellipse>
                        <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                        <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                    </g>
                </svg>
            }
        />
    );
}

function BackEndBullet() {
    const frameworks: { name: string; logo: string; className: string; variant: TLittleBullet["variant"] }[] = [
        {
            name: "Laravel",
            logo: laravelLogo,
            className: "p-2",
            variant: "red",
        },
        {
            name: "NextJs",
            logo: nextJsLogo,
            className: "p-0",
            variant: "black",
        },
    ];
    const [currentTechIndex, setCurrentTechIndex] = useState(0);
    const currentTech = frameworks[currentTechIndex];
    const ref = useRef<NodeJS.Timeout | null>(null);
    useEffect(() => {
        if (ref.current) {
            clearInterval(ref.current);
        }
        ref.current = setInterval(() => {
            setCurrentTechIndex((prev) => {
                if (prev == frameworks.length - 1) {
                    return 0;
                }
                return prev + 1;
            });
        }, 1000);
        return () => {
            ref.current && clearInterval(ref.current);
        };
    }, []);
    return <LittelBullet className="absolute z-10 bottom-3 left-6 md:bottom-5 md:left-0" title="Back End" subtitle="Development" logoClassName={currentTech.className} variant={currentTech.variant} logo={<img loading="lazy" src={currentTech.logo} alt={currentTech.name} />} />;
}

const LittelBulletTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    logo: PropTypes.node,
    variant: PropTypes.string,
    className: PropTypes.string,
};

type TLittleBullet = {
    title: string;
    subtitle: string;
    logo: React.ReactNode;
    variant: "red" | "violet" | "orange" | "sky" | "black";
    className: string;
    logoClassName?: string;
};

function LittelBullet({ title, subtitle, logo, variant = "sky", className, logoClassName }: TLittleBullet) {
    const localVariant = {
        red: {
            background: "bg-red-50",
            border: "border-red-500",
            text: "text-red-600",
        },
        violet: {
            background: "bg-violet-50",
            border: "border-violet-500",
            text: "text-violet-700",
        },
        orange: {
            background: "bg-orange-50",
            border: "border-orange-500",
            text: "text-orange-600",
        },
        sky: {
            background: "bg-sky-50",
            border: "border-sky-600",
            text: "text-sky-700",
        },
        black: {
            background: "bg-neutral-50",
            border: "border-neutral-600",
            text: "text-neutral-700",
        },
    };
    const vari = localVariant[variant];
    return (
        <div className={className}>
            <div className={cn("flex items-center gap-2 md:gap-3 overflow-hidden rounded-full p-2 md:p-4 ", vari["background"], vari["text"])}>
                <div className="z-50 p-4 bg-red-500">hi</div>
                <span className={cn("flex h-9 md:h-11 w-9 md:w-11 items-center justify-center rounded-full border-[4px] p-2 ", vari["border"], vari["background"], logoClassName)} style={{ boxShadow: "0 0px 10px -5px rgb(239 68 68)" }}>
                    {logo}
                </span>
                <div className="pr-2 md:pr-3">
                    <p className="font-semibold md:text-xl">{title}</p>
                    <p className="text-xs md:text-sm">{subtitle}</p>
                </div>
            </div>
        </div>
    );
}
LittelBullet.propTypes = LittelBulletTypes;

export default HeroSection;
