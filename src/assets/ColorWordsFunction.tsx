import React from 'react';

const colors = [
    "violet-500",
    "red-500",
    "blue-500",
    "orange-500",
    "emerald-500",
    "yellow-500",
]
function chooseColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    return randomColor;
};

export default function ColorWordsFunction(props: { globalText:string, forceProp?:string }) {
    const { globalText, forceProp } = props;

    return (
        <div className={forceProp}>
            {globalText.split(' ').map((word) => {

                // eslint-disable-next-line react-hooks/rules-of-hooks
                const [color, setColor] = React.useState("black-500");

                const property = "mx-1/2 transition-transform duration-200 text-" + color;

                function changerCouleur() {
                    setColor(chooseColor);
                }

                return (
                    <a className={property} key={word} onMouseOver={changerCouleur}>
                        {word + " "}
                    </a>
                )
            })}
        </div>
    )
};
