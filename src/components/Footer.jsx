
import * as PropTypes from "prop-types";
import { Link } from "react-router-dom";
import whatsappIcon from "../assets/imgs/icons/whatsapp.webp";
import { useRef } from "react";
import useContact from "../hooks/useContact";
export default function Footer() {
    const { linkedInLink, twitterLink, facebookLink, githubLink, whatsappLink } = useContact();
    const ref = useRef(null);
    const year = new Date().getFullYear();
    const handelContact = () => {
        if (confirm('Oops!! This feature is not available yet. Please try reaching via WhatsApp. Clique on \'OK\' to contact me on Whatsapp or \'CANCEL\' to cancel')) {
            ref.current.click()
        }
    }
    return (
        <footer className="w-full bg-orange-950 font-poppins">
            <div className="mx-auto max-w-screen-xl px-10 pb-0 pt-16">
                <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-0">
                    <div className="justify-between_ flex flex-col">
                        <p className="mb-8 text-center font-fira font-medium sm:text-base md:text-start md:text-xl">
                            <span className="text-rose-700">{"<"}</span>
                            <span className="text-rose-600">{"Ibrahim"}</span>
                            <span className="text-rose-700">{">"}</span>
                            <span className="text-slate-400">{"Aboubacar"}</span>
                            <span className="text-rose-700">{"<"}</span>
                            <span className="text-rose-600">{"Ibrahim"}</span>
                            <span className="text-rose-700">{"/>"}</span>
                        </p>
                        <p className="text-center text-slate-400 md:text-start">
                            Now that you&apos;ve learned a bit about me, let&apos;s work together to create something amazing! Whether you need a stunning website or a reliable web application, I&apos;m here to help. Feel free to reach out to me or follow me on social media for updates and insights into my latest projects.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:items-end">
                        <div className="w-60">
                            <p className="mb-4 text-center text-2xl font-bold text-orange-200">Let&apos;s Collaborate!</p>
                            <Link to="/#contact" onClick={handelContact} className="text-nowrap mb-4 flex h-[55px] w-full items-center justify-center rounded-xl bg-orange-600 px-3 py-[5px] text-center text-sm font-semibold text-orange-50 transition-colors hover:bg-orange-700 sm:mr-0 sm:px-8 sm:py-3 sm:text-lg">
                                Contact me
                            </Link>
                            <a href={whatsappLink} ref={ref} target="_blank" className="text-nowrap flex h-[55px] w-full items-center justify-center gap-3 rounded-xl bg-green-600 px-3 py-[5px] font-semibold text-green-50 transition-colors hover:bg-green-700 sm:mr-0 sm:px-8 sm:py-3 sm:text-lg">
                                <span className="inline-block w-10">
                                    <img className="h-full w-full object-cover" src={whatsappIcon} alt="The Social Media WhatsApp icon" />
                                </span>
                                <span>WhatsApp me</span>
                            </a>
                        </div>

                    </div>
                </div>
                <hr className="border-slate-300/20" />
                <div className="flex flex-col-reverse items-center justify-between gap-10 py-10 md:flex-row md:gap-0">
                    <div className="flex h-full items-center justify-center text-sm text-slate-400">
                        <p>&copy; {year} Copyright <Link to='/' className="font-medium underline transition-colors hover:text-orange-600">Ibrahim Aboubacar Ibrahim</Link> • All right reserved.</p>
                    </div>
                    <div className="flex h-full grid-cols-10 items-center justify-end gap-4 text-slate-500 md:gap-2">
                        {/* LinkedIn Logo Icon*/}
                        <SocialIcon link={linkedInLink}>
                            <svg className="size-7" viewBox="0 0 510 510" >
                                <path fill="currentColor" d="M459 0H51C22.95 0 0 22.95 0 51v408c0 28.05 22.95 51 51 51h408c28.05 0 51-22.95 51-51V51c0-28.05-22.95-51-51-51zM153 433.5H76.5V204H153v229.5zm-38.25-272.85c-25.5 0-45.9-20.4-45.9-45.9s20.4-45.9 45.9-45.9 45.9 20.4 45.9 45.9-20.4 45.9-45.9 45.9zM433.5 433.5H357V298.35c0-20.399-17.85-38.25-38.25-38.25s-38.25 17.851-38.25 38.25V433.5H204V204h76.5v30.6c12.75-20.4 40.8-35.7 63.75-35.7 48.45 0 89.25 40.8 89.25 89.25V433.5z"></path>
                            </svg>
                        </SocialIcon>
                        {/* X Logo Icon*/}
                        <SocialIcon link={twitterLink}>
                            <svg className="size-7" viewBox="0 0 1227 1227">
                                <path fill="currentColor" d="M654.53 592.55 930.65 987.5H817.33L592.01 665.22v-.02l-33.08-47.31-263.21-376.5h113.32l212.41 303.85z"></path>
                                <path fill="currentColor" d="M1094.42 0H132.58C59.36 0 0 59.36 0 132.58v961.84C0 1167.64 59.36 1227 132.58 1227h961.84c73.22 0 132.58-59.36 132.58-132.58V132.58C1227 59.36 1167.64 0 1094.42 0zm-311.8 1040.52L554.61 708.68l-285.47 331.84h-73.78l326.49-379.5-326.49-475.17h249.02l215.91 314.23 270.32-314.23h73.78l-311.33 361.9h-.02l338.6 492.77z"></path>
                            </svg>
                        </SocialIcon>
                        {/* FaceBook Logo Icon*/}
                        <SocialIcon link={facebookLink}>
                            <svg className="size-7" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M437 0H75C33.648 0 0 33.648 0 75v362c0 41.352 33.648 75 75 75h151V331h-60v-90h60v-61c0-49.629 40.371-90 90-90h91v90h-91v61h91l-15 90h-76v181h121c41.352 0 75-33.648 75-75V75c0-41.352-33.648-75-75-75zm0 0"></path>
                            </svg>
                        </SocialIcon>
                        {/* Github Logo Icon*/}
                        <SocialIcon link={githubLink}>
                            <svg className="size-7" viewBox="0 0 438.536 438.536">
                                <path fill="currentColor" d="M414.41 24.123C398.326 8.042 378.964 0 356.309 0H82.225C59.577 0 40.208 8.042 24.123 24.123 8.042 40.207 0 59.576 0 82.225v274.088c0 22.65 8.042 42.017 24.123 58.098 16.084 16.084 35.454 24.126 58.102 24.126h63.953c4.184 0 7.327-.144 9.42-.424 2.092-.288 4.184-1.526 6.279-3.717 2.096-2.187 3.14-5.376 3.14-9.562 0-.568-.05-7.046-.144-19.417-.097-12.375-.144-22.176-.144-29.41l-6.567 1.143c-4.187.76-9.469 1.095-15.846.999-6.374-.096-12.99-.76-19.841-1.998-6.855-1.239-13.229-4.093-19.13-8.562-5.898-4.477-10.085-10.328-12.56-17.559l-2.856-6.571c-1.903-4.373-4.899-9.229-8.992-14.554-4.093-5.332-8.232-8.949-12.419-10.852l-1.999-1.428c-1.331-.951-2.568-2.098-3.711-3.429-1.141-1.335-1.997-2.669-2.568-3.997-.571-1.335-.097-2.43 1.427-3.289 1.524-.855 4.281-1.279 8.28-1.279l5.708.855c3.808.76 8.516 3.042 14.134 6.851 5.614 3.806 10.229 8.754 13.846 14.843 4.38 7.806 9.657 13.75 15.846 17.843 6.184 4.097 12.419 6.143 18.699 6.143s11.704-.476 16.274-1.424c4.565-.954 8.848-2.385 12.847-4.288 1.713-12.751 6.377-22.559 13.988-29.41-10.848-1.143-20.602-2.854-29.265-5.14-8.658-2.286-17.605-5.995-26.835-11.136-9.234-5.14-16.894-11.512-22.985-19.13-6.09-7.618-11.088-17.61-14.987-29.978-3.901-12.375-5.852-26.652-5.852-42.829 0-23.029 7.521-42.637 22.557-58.814-7.044-17.32-6.379-36.732 1.997-58.242 5.52-1.714 13.706-.428 24.554 3.855 10.85 4.286 18.794 7.951 23.84 10.992 5.046 3.042 9.089 5.614 12.135 7.71 17.705-4.949 35.976-7.423 54.818-7.423 18.841 0 37.115 2.474 54.821 7.423l10.849-6.852c7.426-4.57 16.18-8.757 26.269-12.562 10.088-3.806 17.795-4.854 23.127-3.14 8.562 21.51 9.328 40.922 2.279 58.241 15.036 16.179 22.559 35.786 22.559 58.815 0 16.18-1.951 30.505-5.852 42.969-3.898 12.467-8.939 22.463-15.13 29.981-6.184 7.519-13.894 13.843-23.124 18.986-9.232 5.137-18.178 8.853-26.84 11.132-8.661 2.286-18.414 4.004-29.263 5.147 9.891 8.562 14.839 22.072 14.839 40.538v68.238c0 3.237.472 5.852 1.424 7.851.958 1.998 2.478 3.374 4.571 4.141 2.102.76 3.949 1.235 5.571 1.424 1.622.191 3.949.287 6.995.287h63.953c22.648 0 42.018-8.042 58.095-24.126 16.084-16.084 24.126-35.454 24.126-58.102V82.225c-.002-22.649-8.044-42.021-24.125-58.102z"></path>
                            </svg>
                        </SocialIcon>
                        {/* WhatsApp Logo Icon*/}
                        <SocialIcon link={whatsappLink}>
                            <svg className="size-7" viewBox="0 0 176 176">
                                <path fill="currentColor" d="m118.43 57.57-.22-.22a42.72 42.72 0 0 0-68.28 49.59l1.88 3.7-3.5 17-.05.22 16.89-4 3.85 1.95a42.78 42.78 0 0 0 49.22-8 42.72 42.72 0 0 0 .22-60.19zm-1.72 47.72c-2.07 3.26-5.34 7.24-9.45 8.23-7.2 1.75-18.25.06-32-12.75l-.17-.16C63 89.41 59.86 80.08 60.62 72.68c.42-4.21 3.92-8 6.87-10.49a3.94 3.94 0 0 1 6.15 1.41l4.45 10.06a3.89 3.89 0 0 1-.49 4l-2.25 2.92a3.88 3.88 0 0 0-.35 4.27c1.26 2.2 4.28 5.45 7.63 8.47 3.76 3.39 7.93 6.5 10.57 7.57a3.85 3.85 0 0 0 4.19-.89l2.61-2.63a4 4 0 0 1 3.9-1l10.57 3a4 4 0 0 1 2.24 5.92z"></path>
                                <path fill="currentColor" d="M152 0H24A24 24 0 0 0 0 24v128a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V24a24 24 0 0 0-24-24zm-9.47 89.3a54.57 54.57 0 0 1-78.82 47.11l-27.55 6.53a2.13 2.13 0 0 1-2.24-.87 2.09 2.09 0 0 1-.33-1.63l5.79-28.11a54.56 54.56 0 1 1 103.15-23z"></path>
                            </svg>
                        </SocialIcon>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const SocialIconTypes = {
    children: PropTypes.node,
    link: PropTypes.string,
}
function SocialIcon({ children, link = '#' }) {
    return (
        <a href={link} target="_blank" className="flex aspect-square items-center justify-center rounded-md border-2 border-slate-500/50 p-2 transition-colors duration-300 hover:border-orange-300 hover:text-orange-600">
            {children}
        </a>
    )
}
SocialIcon.propTypes = SocialIconTypes;
