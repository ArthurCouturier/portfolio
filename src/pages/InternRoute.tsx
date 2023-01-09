import React, {Component} from "react";

export default function InternRoute(props: {route: string, newTab?:boolean, Svg: string, str: string}) {
    const { route, newTab, Svg, str } = props;

    return (
        <div className={"flex-1 flex"}>
            <a target={newTab ? '_blank' : ''} className={"mx-auto flex items-center transition duration-500 hover:scale-[1.2]"} href={route}>
                <Svg /> {str}
            </a>
        </div>
    )
};
