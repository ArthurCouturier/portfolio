import React from "react";

export default function MenuButton(props : { name: string, url: string }) {

    const { name, url } = props;
    const menuButtonClass = "text-m sm:text-2xl text-white font-extrabold mb-5 opacity-50 transition duration-500 hover:opacity-100 hover:underline";

    return (
        <div className={"flex-1 my-2 sm:my-5"}>
            <a className={menuButtonClass} href={url}>
                {name}
            </a>
        </div>
    )
};
