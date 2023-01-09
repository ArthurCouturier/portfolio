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
    const property = "mx-1/2 transition-transform duration-200 hover:text-" + randomColor;
    return property;
};

export default function ColorWordsFunction(props: { globalText:string }) {
    const { globalText } = props;

    return (
        <div className={"flex-1 text-center"}>
            {globalText.split(' ').map((word) => {
                return (
                    <a className={chooseColor()} key={word}>
                        {word + " "}
                    </a>
                )
            })}
        </div>
    )
};
