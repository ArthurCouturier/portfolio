import React from "react";

// @ts-ignore
import img1 from "../assets/DallE/img1.png";
// @ts-ignore
import img2 from "../assets/DallE/img2.png";
// @ts-ignore
import img3 from "../assets/DallE/img3.png";
// @ts-ignore
import img4 from "../assets/DallE/img4.png";
// @ts-ignore
import img5 from "../assets/DallE/img5.png";
// @ts-ignore
import img6 from "../assets/DallE/img6.png";
// @ts-ignore
import img7 from "../assets/DallE/img7.png";
// @ts-ignore
import img8 from "../assets/DallE/img8.png";
// @ts-ignore
import img9 from "../assets/DallE/img9.png";
// @ts-ignore
import img10 from "../assets/DallE/img10.png";
// @ts-ignore
import img11 from "../assets/DallE/img11.png";

const images = [
    { url: img1, desc: "Album cover with 3D astronaut painted by a great painter" },
    { url: img2, desc: "Album cover with 3D astronaut painted by a great painter" },
    { url: img3, desc: "Paint of a 3D astronaut walking in a special desert" },
    { url: img4, desc: "Paint of a 3D ancient astronaut in strange places" },
    { url: img5, desc: "Paint of a 3D ancient astronaut walking in the jungle" },
    { url: img6, desc: "Paint of a 3D ancient astronaut walking in the jungle" },
    { url: img7, desc: "Paint of a 3D astronaut diving with wales" },
    { url: img8, desc: "Background by great painter innovation" },
    { url: img9, desc: "Background by great painter innovation" },
    { url: img10, desc: "Background by great painter innovation" },
    { url: img11, desc: "Image to illustrate my personal portfolio" },
];

export default function DallE2() {
    return (
        <div className={"bg-animation bg-secondary bg-waves bg-center bg-cover animate-animateBG text-gray-200 flex-grow"}>
            <div className={"text-xl text-gray-200 opacity-80 text-center"}>
                Voici certaines images que j'ai pu générer en utilisant l'IA d'
                <a href={"https://openai.com"} className={"transtion duration-300 hover:opacity-100 hover:text-pink-500"} target={"_blank"}>OpenAI </a>
                <a href={"https://openai.com/dall-e-2/"} className={"transtion duration-300 hover:opacity-100 hover:text-emerald-500"} target={"_blank"}>Dall.E 2</a>
            </div>
            <div>
                {images.map((img: { url: string, desc: string }) => {
                    return (
                        <div className={"text-center"}>
                            <div className={"my-7"}> </div>
                            <div className={"border fill-white w-[50vw] mx-auto"}></div>
                            <a href={img.url} className={"text-xl text-gray-200 opacity-80 transition duration-300 hover:text-white hover:opacity-100"} target={"_blank"}>{img.desc}</a>
                            <img src={img.url} className="w-[50vw] h-[50vw] mx-auto" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
