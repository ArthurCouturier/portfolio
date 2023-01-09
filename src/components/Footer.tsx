import React from "react";
// @ts-ignore
import { ReactComponent as LinkedinSVG } from "../assets/icons8-linkedin-material-filled/icons8-linkedin-48.svg";
// @ts-ignore
import { ReactComponent as TwitterSVG } from "../assets/icons8-twitter-material-filled/icons8-twitter-48.svg";
// @ts-ignore
import { ReactComponent as GithubSVG } from "../assets/icons8-github-material-filled/icons8-github-48.svg";
// @ts-ignore
import { ReactComponent as YoutubeSVG } from "../assets/icons8-youtube-material-filled/icons8-youtube-48.svg"

export default function Footer() {

    return (
        <div className="h-[100%] bg-gray-200 shadow border flex-grow font-josefin">
            <div className={"container w-[60vw] justify-around mx-auto flex flex-row"}>
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
            <div className={"container w-[60vw] justify-around mx-auto flex flex-grow"}>
                <p className={"transition duration-500 ease-in-out hover:text-blue-500"}>
                    Arthur Couturier
                </p>
                <a href={"mailto:arthur.couturier.2000@gmail.com"} className={"duration-500 hover:text-blue-500 focus:text-blue-500"}>arthur.couturier.2000@gmail.com</a>
            </div>
        </div>
    )
};
