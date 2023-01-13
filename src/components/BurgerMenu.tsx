import React, {useState} from "react";

export default function BurgerMenu(props: { changeDisplayMenu: () => void }) {

    const changeDisplayMenu = props.changeDisplayMenu;

    const [hovered, setHovered] = useState(false);

    // Middle Bar
    const [wMiddle, setWMiddle] = useState(50);
    const [xMiddle, setXMiddle] = useState(25);
    const transformMiddle = () => {
        setWMiddle(hovered?50:100);
        setXMiddle(hovered?25:0);
    }

    // External Bars
    const [wExt, setWExt] = useState(100);
    const [xExt, setXExt] = useState(0);
    const transformExt = () => {
        setWExt(hovered?100:50);
        setXExt(hovered?0:25);
    }

    const Transformation = () => {
        setHovered(!hovered);
        transformExt();
        transformMiddle();
    }

    const svgEffect = `fill-white opacity-80 transition duration-500 hover:opacity-100`

    return (
        <div onMouseEnter={Transformation} onMouseLeave={Transformation}>
            <svg viewBox="0 0 100 80"
                 className={`w-10 h-10 absolute inset-y-5 right-10 ${svgEffect} hover:rotate-90`}
                 onClick={changeDisplayMenu}>

                <rect className={`transform duration-500`} x={`${xExt}`} width={`${wExt}`} height="10"></rect>
                <rect className={`transform duration-500`} x={`${xMiddle}`} y="30" width={`${wMiddle}`} height="10"></rect>
                <rect className={`transform duration-500`} x={`${xExt}`} y="60" width={`${wExt}`} height="10"></rect>

            </svg>
        </div>
    )
};
