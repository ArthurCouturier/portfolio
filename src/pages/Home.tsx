import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
                        Let me show you some of my skills
                    </div>
                </div>
                <div className={"flex-1 flex"}>
                    <a className={"flex-1 text-center"}>
                        My Resume
                    </a>
                    <a className={"flex-1 text-center"} href={"/Skills"}>
                        My Skills
                    </a>
                    <a className={"flex-1 text-center"} href={"/Works"}>
                        My Works
                    </a>
                </div>
            </div>

            <Footer />
        </>
    );
};
