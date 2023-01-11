import React from "react";
// @ts-ignore
import { ReactComponent as LinkedinSVG } from "../assets/icons8-linkedin-material-filled/icons8-linkedin-48.svg";
// @ts-ignore
import { ReactComponent as TwitterSVG } from "../assets/icons8-twitter-material-filled/icons8-twitter-48.svg";
// @ts-ignore
import { ReactComponent as GithubSVG } from "../assets/icons8-github-material-filled/icons8-github-48.svg";
// @ts-ignore
import { ReactComponent as YoutubeSVG } from "../assets/icons8-youtube-material-filled/icons8-youtube-48.svg"
import * as colorette from "colorette";
import ColorWordsFunction from "../assets/ColorWordsFunction";

export default function Footer() {

    const colors = ["text-orange-500", "text-emerald-500"];
    const [color, setColor] = React.useState(colors[0]);
    function changerCouleur() {
        if (color == colors[0]) {
            setColor(colors[1]);
        }
        if (color == colors[1]) {
            setColor(colors[0]);
        }
    }

    return (
        <div className="h-[100%] bg-gray-200 border flex-grow font-josefin">
            <div className={"container w-[60vw] justify-around mx-auto flex flex-row my-2.5"}>
                <a href={"https://www.linkedin.com/in/arthur-c-418311131/"} target="_blank" className={"transition duration-500 hover:scale-[1.2]"}>
                    <LinkedinSVG />
                </a>
                <a href={"https://twitter.com/ArthurCouturier"} target="_blank" className={"transition duration-500 hover:scale-[1.2]"}>
                    <TwitterSVG />
                </a>
                <a href={"https://github.com/ArthurCouturier"} target="_blank" className={"transition duration-500 hover:scale-[1.2]"}>
                    <GithubSVG />
                </a>
                <a href={"https://www.youtube.com/channel/UCaJN6T-wJAWX5OkWDEmK58A"} target="_blank" className={"transition duration-500 hover:scale-[1.2]"}>
                    <YoutubeSVG />
                </a>
            </div>
            <div className={"container w-[60vw] justify-around mx-auto flex flex-grow my-2.5"}>
                <p>
                    ©Arthur Couturier 2023
                </p>
                <a href={"mailto:arthur.couturier.2000@gmail.com"} className={"transition duration-500 hover:text-blue-500"}>arthur.couturier.2000@gmail.com</a>
            </div>
            <div className={"text-center my-2.5"}>
                Check the repo here:
                <a href={"https://github.com/ArthurCouturier/portfolio"} className={"transition duration-500 hover:text-blue-500"}> https://github.com/ArthurCouturier/portfolio</a>
            </div>
        </div>
    )
};
