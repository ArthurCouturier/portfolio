import React from "react";
import Skill from "../components/Skill";

const WebSkills = [
    { name: "HTML5", icon: "devicon-html5-plain-wordmark", url: "https://en.wikipedia.org/wiki/HTML5" },
    { name: "CSS3", icon: "devicon-css3-plain-wordmark", url: "https://en.wikipedia.org/wiki/CSS" },
    { name: "Sass", icon: "devicon-sass-original", url: "https://sass-lang.com" },
    { name: "Tailwind", icon: "devicon-tailwindcss-plain", url: "https://tailwindcss.com" },
    { name: "TypeScript", icon: "devicon-typescript-plain", url: "https://www.typescriptlang.org" },
    { name: "JavaScript", icon: "devicon-javascript-plain", url: "https://fr.wikipedia.org/wiki/JavaScript" },
    { name: "React", icon: "devicon-react-original-wordmark", url: "https://reactjs.org" },
    { name: "NextJs", icon: "devicon-nextjs-original", url: "https://nextjs.org" },
    { name: "Node", icon: "devicon-nodejs-plain-wordmark", url: "https://nodejs.org/en/about/" },
    { name: "Deno", icon: "devicon-denojs-original-wordmark", url: "https://deno.land" },
    { name: "NPM", icon: "devicon-npm-original-wordmark", url: "https://www.npmjs.com" },
    { name: "WebPack", icon: "devicon-webpack-plain", url: "https://webpack.js.org" },
    { name: "Babel", icon: "devicon-babel-plain", url: "https://babeljs.io" },
    { name: "Spring", icon: "devicon-spring-plain-wordmark", url: "https://spring.io" },
    { name: "MongoDB", icon: "devicon-mongodb-plain-wordmark", url: "https://www.mongodb.com" },
    { name: "MySQL", icon: "devicon-mysql-plain-wordmark", url: "https://www.mysql.com" },
    { name: "PostGreSQL", icon: "devicon-postgresql-plain-wordmark", url: "https://www.postgresql.org" },
]

const OtherSkills = [
    { name: "Java", icon: "devicon-java-plain-wordmark", url: "https://www.java.com/fr/" },
    { name: "Python", icon: "devicon-python-plain-wordmark", url: "https://www.python.org" },
    { name: "TensorFlow", icon: "devicon-tensorflow-original", url: "https://www.tensorflow.org" },
    { name: "C", icon: "devicon-c-plain-wordmark", url: "https://fr.wikipedia.org/wiki/C_(langage)" },
    { name: "Qt", icon: "devicon-qt-original", url: "https://www.qt.io" },
    { name: "Gradle", icon: "devicon-gradle-plain", url: "https://gradle.org" },
    { name: "Matlab", icon: "devicon-matlab-plain", url: "https://fr.mathworks.com/products/matlab.html" },
    { name: "Android", icon: "devicon-android-plain", url: "https://developer.android.com/studio" },
    { name: "Arduino", icon: "devicon-arduino-plain-wordmark", url: "https://www.arduino.cc" },
    { name: "OCaml", icon: "devicon-ocaml-plain-wordmark", url: "https://ocaml.org" },
    { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark", url: "https://aws.amazon.com/" },
    { name: "Bash", icon: "devicon-bash-plain", url: "https://doc.ubuntu-fr.org/bash" },
    { name: "Docker", icon: "devicon-docker-plain-wordmark", url: "https://www.docker.com" },
    { name: "Kubernetes", icon: "devicon-kubernetes-plain-wordmark", url: "https://kubernetes.io" },
]

const Tools = [
    { name: "Apple", icon: "devicon-apple-original", url: "https://www.apple.com" },
    { name: "Debian", icon: "devicon-debian-plain-wordmark", url: "https://www.debian.org" },
    { name: "SSH", icon: "devicon-ssh-original-wordmark", url: "https://fr.wikipedia.org/wiki/Secure_Shell" },
    { name: "JetBrains", icon: "devicon-jetbrains-plain", url: "https://www.jetbrains.com" },
    { name: "Jenkins", icon: "devicon-jenkins-plain", url: "https://www.jenkins.io" },
    { name: "Jira", icon: "devicon-jira-plain", url: "https://www.atlassian.com/fr/software/jira" },
    { name: "Confluence", icon: "devicon-confluence-original-wordmark", url: "https://www.atlassian.com/fr/software/confluence" },
    { name: "Git", icon: "devicon-git-plain", url: "https://git-scm.com" },
    { name: "Slack", icon: "devicon-slack-plain", url: "https://slack.com" },
]

export default function Skills() {
    return (
        <div className={"bg-gray-200 border"}>
            <div className={"my-4 flex-wrap"}>
                <h2 className={"text-xl font-bold text-center md:text-left"}>My Web Skills:</h2>
                <div className={"h-max grid grid-cols-4 sm:grid-cols-7 grid-rows-2"}>
                    {WebSkills.map((skill) => {
                        return <Skill skill={JSON.stringify(skill)} />
                    })}
                </div>
            </div>
            <div className={"my-4"}>
                <h2 className={"text-xl font-bold text-center md:text-left"}>My Other Skills:</h2>
                <div className={"h-max grid grid-cols-4 sm:grid-cols-7 grid-rows-2"}>
                    {OtherSkills.map((skill) => {
                        return <Skill skill={JSON.stringify(skill)} />
                    })}
                </div>
            </div>
            <div className={"my-4"}>
                <h2 className={"text-xl font-bold text-center md:text-left"}>My Tools:</h2>
                <div className={"h-max grid grid-cols-4 sm:grid-cols-7 grid-rows-2"}>
                    {Tools.map((skill) => {
                        return <Skill skill={JSON.stringify(skill)} />
                    })}
                </div>
            </div>
        </div>
    )
};
