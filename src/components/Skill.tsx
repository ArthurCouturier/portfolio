import React, { useState } from "react";

export default function Skill(props: { skill: string }) {

    const skill = JSON.parse(props.skill);
    const [logo, setLogo] = useState(skill.icon);
    function changerLogo() {
        if (logo === skill.icon) {
            setLogo(skill.icon + " colored");
        } else {
            setLogo(skill.icon);
        }
    }

    return (
        <div className={"my-7 flex justify-center"}>
            <a href={skill.url} className={""} target={"_blank"}>
                <i className={`${logo} text-[80px] transition duration-300 hover:text-opacity-80`} onMouseEnter={changerLogo} onMouseLeave={changerLogo}></i>
            </a>
        </div>
    )
};
