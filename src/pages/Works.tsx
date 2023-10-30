import React from "react";
import Work from "../components/Work";

export default function Works() {
    return (
        <div className={"bg-animation bg-waves bg-center bg-cover animate-animateBG text-gray-200"}>
            <div className={"h-max w-[100vw]"}>

                <Work title={"In progress: Website of a law firm: React, Next.js, Tailwind, Vercel"}
                      url={"https://anthea-avocats-associes.vercel.app"} />

                <Work title={"In progress: Social media I am developping: React, Next.js, Tailwind, Vercel, Prisma, MongoDB, PostgreSQL"}
                    url={"https://social-network-jtz4jpa1c-arthurcouturier.vercel.app"} />

                <div className={"text-center"}>
                    <a className={"text-2xl font-extrabold mb-5 opacity-80 transition duration-300 hover:opacity-100 hover:underline"}
                       href={"https://faint-poppy-175.notion.site/The-Netherlands-8e80dc5b885c45988f1229467572e743?pvs=4"}
                       target={"_blank"}>
                        My trip to the Netherlands for an internship - Summer 2022
                    </a>
                    <div className={`text-gray-200 my-4`}>
                        Travel of 3 months in the Netherlands with my girlfriend.
                    </div>
                </div>

                <div className={"text-center my-7"}>
                    <a className={"text-2xl font-extrabold mb-5 opacity-80 transition duration-300 hover:opacity-100 hover:underline justify-items-center"} href={"https://github.com/ArthurCouturier/enseeiht"} target={"_blank"}>
                        2022.zip (youtube video)
                    </a>
                    <div className={"mx-auto w-min my-7"}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/PikNPgmBjz4"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                        </iframe>
                    </div>
                </div>

                <Work title={"My Dall.E 2 generated images"} url={"/dalle2"} />

                <div className={"text-center"}>
                    <a className={"text-2xl font-extrabold mb-5 opacity-80 transition duration-300 hover:opacity-100 hover:underline"} href={"https://github.com/ArthurCouturier/enseeiht"} target={"_blank"}>
                        ENSEEIHT & Personnal Projects
                    </a>
                    <div className={`text-gray-200 my-4`}>
                        Some projects I did. I will create special pages to illustrate it later.
                    </div>
                </div>

                <Work title={"Cave à vin"} url={"http://191.96.53.174"}
                desc={"I stopped the server, impossible to reach sorry"}/>
                <Work title={"This PortFolio"} url={"/"} />
            </div>
        </div>
    )
};
