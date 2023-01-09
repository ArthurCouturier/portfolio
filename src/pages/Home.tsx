import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// @ts-ignore
import { ReactComponent as ResumeSVG } from "../assets/icons8-contacts.svg";
// @ts-ignore
import { ReactComponent as SkillsSVG } from "../assets/icons8-walter-white.svg";
// @ts-ignore
import { ReactComponent as WorksSVG } from "../assets/icons8-toolbox.svg";
// @ts-ignore
import pdf from '../assets/cvM1.pdf';
import InternRoute from "./InternRoute";

export default function Home() {
    return (
        <>
            <div className={"h-[70vh] bg-gray-200 shadow border flex-grow"}>
                <div className={"flex-1 flex h-[20vh]"}>
                    <div className={"flex-1 text-center"}>
                        Hi I am Arthur Couturier, a french computer engineer
                    </div>
                    <div className={"flex-1 text-center"}>
                        This portfolio is under construction
                    </div>
                </div>
                <div className={"flex-1 flex"}>
                    <InternRoute route={pdf} Svg={ResumeSVG} str={"My Resume"} newTab />
                    <InternRoute route={"/Skills"} Svg={SkillsSVG} str={"My Skills"} />
                    <InternRoute route={"/Works"} Svg={WorksSVG} str={"My Works"} />
                </div>
            </div>
        </>
    );
};
