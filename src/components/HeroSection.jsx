import Typed from 'typed.js';
import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";
import { useRef, useEffect } from 'react';
import img from '../assets/imgs/portrait-jeune-homme-expressif-portant-costume-formel.png'
function HeroSection() {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['^700 I am Ibrahim Aboubacar Ibrahim', ' I am a <span class="text-orange-600">graphics designer</span>', 'I am a <span class="text-orange-600">web developer</span>', 'I am a <span class="text-orange-600">full stack developer</span>'],
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
        <section className="relative overflow-hidden bg-gradient-to-r from-orange-200 to-violet-200 pt-48 font-poppins text-slate-800">
            <div className="relative z-10 mx-auto max-w-screen-xl px-4">
                <div className="grid grid-cols-1 justify-center md:grid-cols-2">
                    <div className="flex flex-col justify-center px-10 md:px-0">
                        <h1 className='text-6xl font-black' >
                            Hey, <span ref={el}></span>
                        </h1>
                        <div className="mt-5 text-slate-600">
                            <p className="text-lg font-medium">
                                I specialize in creating elegant and functional user interfaces,
                                combining expertise in PHP and front-end technologies with 3 years of experience in the field of web development.
                            </p>
                        </div>
                        <div className="mt-10">
                            <Link to="/contact" className="rounded-xl bg-orange-600 px-10 py-4 text-xl font-semibold text-orange-50" >Hire Me</Link>
                        </div>
                    </div>
                    <div className='relative hidden md:flex'>
                        <div className="absolute -right-16 bottom-0 z-0 aspect-square w-[500px] -translate-x-1/2 rounded-full bg-orange-600/30 blur-3xl"></div>
                        <img src={img} className='z-10 ml-auto w-3/4' alt="portrait jeune homme expressif portant costume formel" />
                        <LittelBullet className="absolute bottom-32 left-40 z-10" title="Back End" subtitle="Development" variant='red' logo={<img src="https://laravel.com/img/logomark.min.svg" alt="Laravel Logo" />} />
                        <LittelBullet className="absolute right-0 top-52 z-10" title="Front End" subtitle="Development" variant='sky' logo={(
                            <svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" className="flex w-24 origin-center self-center">
                                <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                                <g stroke="currentColor" strokeWidth="1" fill="none">
                                    <ellipse rx="10" ry="4.5"></ellipse>
                                    <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                                    <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                                </g>
                            </svg>
                        )} />
                    </div>
                </div>
            </div>
        </section>
    );
}

const LittelBulletTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    logo: PropTypes.node,
    variant: PropTypes.string,
    className: PropTypes.string,
}
function LittelBullet({ title, subtitle, logo, variant = "sky", className }) {
    const localVariant = {
        red: {
            background: 'bg-red-50',
            border: 'border-red-500',
            text: 'text-red-600',
        },
        violet: {
            background: 'bg-violet-50',
            border: 'border-violet-500',
            text: 'text-violet-700',
        },
        orange: {
            background: 'bg-orange-50',
            border: 'border-orange-500',
            text: 'text-orange-600',
        },
        sky: {
            background: 'bg-sky-50',
            border: 'border-sky-600',
            text: 'text-sky-700',
        },
    }
    const vari = localVariant[variant];
    return (
        <div className={className}>
            <div className={("flex items-center gap-3 overflow-hidden rounded-full p-4 ") + vari["background"] + " " + vari["text"]}>
                <span className={("flex h-11 w-11 items-center justify-center rounded-full border-[4px] p-2 " + vari["border"]) + (" ") + vari["background"]} style={{ boxShadow: "0 0px 10px -5px rgb(239 68 68)" }}>
                    {logo}
                </span>
                <div className="pr-3">
                    <p className='text-xl font-semibold'>{title}</p>
                    <p className='text-sm'>{subtitle}</p>
                </div>
            </div>
        </div>
    )
}
LittelBullet.propTypes = LittelBulletTypes;

export default HeroSection;