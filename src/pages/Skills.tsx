import React from "react";
import Skill from "../components/Skill";

const WebSkills = [
    { name: "Deno", icon: "devicon-denojs-original-wordmark", url: "https://deno.land" },
    { name: "Docker", icon: "devicon-docker-plain-wordmark", url: "https://www.docker.com" },
    { name: "Sass", icon: "devicon-sass-original", url: "https://sass-lang.com" },
    { name: "HTML5", icon: "devicon-html5-plain-wordmark", url: "https://en.wikipedia.org/wiki/HTML5" },
    { name: "CSS3", icon: "devicon-css3-plain-wordmark", url: "https://en.wikipedia.org/wiki/CSS" },
    { name: "JavaScript", icon: "devicon-javascript-plain", url: "https://fr.wikipedia.org/wiki/JavaScript" },
    { name: "TypeScript", icon: "devicon-typescript-plain", url: "https://www.typescriptlang.org" },
    { name: "React", icon: "devicon-react-original-wordmark", url: "https://reactjs.org" },
    { name: "VueJS", icon: "devicon-vuejs-plain-wordmark", url: "https://vuejs.org" },
    { name: "Node", icon: "devicon-nodejs-plain-wordmark", url: "https://nodejs.org/en/about/" },
    { name: "NPM", icon: "devicon-npm-original-wordmark", url: "https://www.npmjs.com" },
    { name: "WebPack", icon: "devicon-webpack-plain", url: "https://webpack.js.org" },
    { name: "Tailwind", icon: "devicon-tailwindcss-plain", url: "https://tailwindcss.com" },
    { name: "Spring", icon: "devicon-spring-plain-wordmark", url: "https://spring.io" },
    { name: "Babel", icon: "devicon-babel-plain", url: "https://babeljs.io" },
    { name: "MongoDB", icon: "devicon-mongodb-plain-wordmark", url: "https://www.mongodb.com" },
    { name: "MySQL", icon: "devicon-mysql-plain-wordmark", url: "https://www.mysql.com" },
    { name: "PostGreSQL", icon: "devicon-postgresql-plain-wordmark", url: "https://www.postgresql.org" },
]

const OtherSkills = [
    { name: "Deno", icon: "devicon-denojs-original-wordmark", url: "https://deno.land" },
]

const Tools = [
    { name: "Deno", icon: "devicon-denojs-original-wordmark", url: "https://deno.land" },
]

export default function Skills() {
    return (
        <div className={"bg-gray-200 border"}>
            <div className={"my-4 flex-wrap"}>
                <h2>My Web Skills:</h2>
                <div className={"h-max grid grid-cols-7 grid-rows-2"}>
                    {WebSkills.map((skill) => {
                        return <Skill skill={JSON.stringify(skill)} />
                    })}
                </div>
            </div>
            <div className={"my-4"}>
                <h2>My Other Skills:</h2>
                <div className={"h-max grid grid-cols-6 grid-rows-2"}>
                    {OtherSkills.map((skill) => {
                        return <Skill skill={JSON.stringify(skill)} />
                    })}
                </div>
            </div>
            <div className={"my-4"}>
                <h2>My Tools:</h2>
                <div className={"h-max grid grid-cols-6 grid-rows-2"}>
                    {Tools.map((skill) => {
                        return <Skill skill={JSON.stringify(skill)} />
                    })}
                </div>
            </div>
        </div>
    )
};
