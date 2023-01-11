import React from "react";
// @ts-ignore
import { ReactComponent as ResumeSVG } from "../assets/icons8-contacts.svg";
// @ts-ignore
import { ReactComponent as SkillsSVG } from "../assets/icons8-walter-white.svg";
// @ts-ignore
import { ReactComponent as WorksSVG } from "../assets/icons8-toolbox.svg";
// @ts-ignore
import pdf from '../assets/cvM1.pdf';
import InternRoute from "./InternRoute";
import ColorWordsFunction from "../assets/ColorWordsFunction";

export default function Home() {
    return (
        <div className={"flex-grow bg-gray-200 border"}>
            <div className={"h-[30vh] text-center flex"}>
                <div className={"flex-1"}>
                    Left
                </div>
                <div className={"flex-1"}>
                    Ici ma photo
                </div>
                <div className={"flex-1"}>
                    Right
                </div>
            </div>
            <div className={"h-[40vh] flex-grow"}>
                <div className={"flex-1 flex h-[20vh]"}>
                    <ColorWordsFunction globalText={
                        "Hi I am Arthur Couturier, a french computer engineer. I am atually working at a french company" +
                        " nammed Lyra Network in the Payment Means' Team."
                    } forceProp={"flex-1 text-center"} />
                    <ColorWordsFunction globalText={
                        "This portfolio is under construction"
                    } forceProp={"flex-1 text-center"} />
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
