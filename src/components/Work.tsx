import React, {useState} from "react";

export default function Work(props: { title: string, url: string, desc?: string }) {
    const { title, url, desc } = props;

    return (
        <div className={`text-center`}>
            <a className={"text-2xl font-extrabold mb-5 opacity-80 transition duration-300 hover:opacity-100 hover:underline"} href={url} target={"_blank"}>
                {title}
            </a>
            <div className={`text-gray-200`}>{desc}</div>
            <iframe className={`pointer-events-none my-7 w-[60vw] h-[60vh] mx-auto transition duration-1000`} src={url} />
        </div>
    );
};
