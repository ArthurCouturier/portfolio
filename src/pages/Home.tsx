import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ReactComponent as ResumeSVG } from "../assets/icons8-contacts.svg";
import { ReactComponent as SkillsSVG } from "../assets/icons8-walter-white.svg";
import { ReactComponent as WorksSVG } from "../assets/icons8-toolbox.svg";

export default function Home() {
    return (
        <>
            <div className={"h-[30vh]"}>
                <Header />
            </div>

            <div className={"bg-gray-200 shadow border flex-grow h-[70vh]"}>
                <div className={"flex-1 flex h-[20vh]"}>
                    <div className={"flex-1 text-center"}>
                        Hi I am Arthur Couturier, a french computer engineer
                    </div>
                    <div className={"flex-1 text-center"}>
                        This portfolio is under construction
                    </div>
                </div>
                <div className={"flex-1 flex"}>
                    <div className={"flex-1"}>
                        <a className={"flex items-center mx-auto"}>
                            <ResumeSVG /> My Resume
                        </a>
                    </div>
                    <div className={"flex-1"}>
                        <a className={"flex items-center"} href={"/Skills"}>
                            <SkillsSVG /> My Skills
                        </a>
                    </div>
                    <div className={"flex-1"}>
                        <a className={"flex items-center"} href={"/Works"}>
                            <WorksSVG /> My Works
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};
