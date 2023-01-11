import React from "react";
// @ts-ignore
import { ReactComponent as ResumeSVG } from "../assets/icons8-contacts.svg";
// @ts-ignore
import { ReactComponent as SkillsSVG } from "../assets/icons8-walter-white.svg";
// @ts-ignore
import { ReactComponent as WorksSVG } from "../assets/icons8-toolbox.svg";
// @ts-ignore
import pdf from '../assets/cvM1.pdf';
// @ts-ignore
import picture from '../assets/PhotoCouturierArthur.png';
import InternRoute from "./InternRoute";
// import ColorWordsFunction from "../assets/ColorWordsFunction";

export default function Home() {
    return (
        <div className={"flex-grow bg-gray-200 border"}>
            <div className={"h-[30vh] font-bold text-xl flex"}>
                <div className={"flex-1 text-left mx-14"}>
                    French Engineer in
                    <a href={"https://metropole.toulouse.fr"} target="_blank" className={"transition duration-500 hover:text-pink-500"}> Toulouse</a>
                </div>
                <div className={"w-[20vw]"}>
                    <img src={picture} className={"h-[90%] object-cover object-center rounded-full mx-auto"}/>
                </div>
                <div className={"flex-1 text-right mx-14"}>
                    <div>
                        I study at
                        <a href={"https://metropole.toulouse.fr"} target="_blank" className={"transition duration-500 hover:text-blue-800"}> ENSEEIHT </a>
                        and
                    </div>
                    <div>
                        work at
                        <a href={"https://www.lyra.com/fr/"} target="_blank" className={"transition duration-500 hover:text-blue-400"}> Lyra Network</a>
                    </div>
                </div>
            </div>
            <div className={"h-[40vh] flex-grow"}>
                <div className={"flex-1 flex h-[20vh]"}>
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
    );
};
