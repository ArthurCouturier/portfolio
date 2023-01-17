import React from "react";
import Work from "../components/Work";

export default function Works() {
    return (
        <div className={"bg-animation bg-secondary bg-waves bg-center bg-cover animate-animateBG text-gray-200"}>
            <div className={"h-max w-[100vw]"}>
                <Work title={"My Dall.E 2 generated images"} url={"/dalle2"} />
                <Work title={"Cave à vin"} url={"http://191.96.53.174"} />
                <Work title={"This PortFolio"} url={"/"} />

                <div className={"text-center"}>
                    <a className={"text-2xl font-extrabold mb-5 opacity-80 transition duration-300 hover:opacity-100 hover:underline"} href={"https://github.com/ArthurCouturier/enseeiht"} target={"_blank"}>
                        ENSEEIHT & Personnal Projects
                    </a>
                    <div className={`text-gray-200 my-4`}>
                        Some projects I did. I will create special pages to illustrate it later.
                    </div>
                </div>
            </div>
        </div>
    )
};
