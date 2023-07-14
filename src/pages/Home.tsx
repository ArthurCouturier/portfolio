import React from "react";
// @ts-ignore
import { ReactComponent as ResumeSVG } from "../assets/icons8-contacts.svg";
// @ts-ignore
import { ReactComponent as SkillsSVG } from "../assets/icons8-walter-white.svg";
// @ts-ignore
import { ReactComponent as WorksSVG } from "../assets/icons8-toolbox.svg";
// @ts-ignore
import pdf from '../assets/cv-arthur-couturier.pdf';
// @ts-ignore
import picture from '../assets/PhotoCouturierArthur.png';
import InternRoute from "./InternRoute";
// import ColorWordsFunction from "../assets/ColorWordsFunction";

export default function Home() {
    return (
        // bg-gray-200
        <div className={"bg-animation bg-black bg-secondary bg-waves bg-center bg-cover animate-animateBG text-gray-200"} >
            <div className={"flex-grow xl:text-3xl"}>
                <div className={"h-[10vh]"}></div>
                <div className={"md:h-[30vh] font-bold text-m sm:text-xl md:flex sm:h-[50vh] sm:flex-grow"}>
                    <div className={"flex-1 text-left mx-14"}>
                        French Engineer in
                        <a href={"https://metropole.toulouse.fr"} target="_blank" className={"transition duration-500 hover:text-pink-500"}> Toulouse</a>
                    </div>
                    <div className={"h-[75vw] w-[100vw] sm:w-[20vw] sm:h-[20vw] mx-auto"}>
                        <img src={picture} className={"w-[75vw] md:[20vw] my-5 sm:my-0 object-cover object-center rounded-full mx-auto"}/>
                    </div>
                    <div className={"flex-1 text-right mx-14 my-7 md:my-0"}>
                        <div>
                            I studied at
                            <a href={"https://www.enseeiht.fr/fr/index.html"} target="_blank" className={"transition duration-500 hover:text-blue-800"}> ENSEEIHT </a>
                            and
                        </div>
                        <div>
                            now work at
                            <a href={"https://www.lyra.com/fr/"} target="_blank" className={"transition duration-500 hover:text-blue-400"}> Lyra Network</a>
                        </div>
                    </div>
                </div>
                <div className={"md:h-[40vh] flex-grow h-[20vh]"}>
                    <div className={"flex-1 flex md:h-[20vh] sm:h-0"}>
                        {/*<div className={"w-[30%] mx-auto"}>*/}
                        {/*    <ColorWordsFunction globalText={*/}
                        {/*        "Hi I am Arthur Couturier, a french computer engineer. I am atually working at a french company" +*/}
                        {/*        " nammed Lyra Network in the Payment Means' Team."*/}
                        {/*    } forceProp={"flex-1 text-center"} />*/}
                        {/*</div>*/}
                        {/*<div className={"w-[30%] mx-auto"}>*/}
                        {/*    <ColorWordsFunction globalText={*/}
                        {/*        "This portfolio is under construction"*/}
                        {/*    } forceProp={"flex-1 text-center"} />*/}
                        {/*</div>*/}
                    </div>
                    <div className={"flex-1 flex"}>
                        <InternRoute route={pdf} Svg={ResumeSVG} str={"My Resume"} newTab />
                        <InternRoute route={"/Skills"} Svg={SkillsSVG} str={"My Skills"} />
                        <InternRoute route={"/Works"} Svg={WorksSVG} str={"My Works"} />
                    </div>
                </div>
            </div>
        </div>
    );
};
