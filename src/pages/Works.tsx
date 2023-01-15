import React from "react";
import Work from "../components/Work";

export default function Works() {
    return (
        <div className={"bg-animation bg-secondary bg-waves bg-center bg-cover animate-animateBG text-gray-200"}>
            <div className={"h-max w-[100vw]"}>
                <Work title={"Cave à vin"} url={"http://191.96.53.174"} />
                <Work title={"This PortFolio"} url={"/"} />
            </div>
        </div>
    )
};
