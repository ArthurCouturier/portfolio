import React from "react";

export default function About() {
    const property = "mx-4 text-xl text-gray-400"

    return (
        <div className={"h-[63vh] bg-animation bg-secondary bg-waves bg-center bg-cover animate-animateBG text-gray-200"}>
            <div className={property}>
                This website was made by Arthur Couturier alias CoutCout.
            </div>
            <div className={property}>
                You can contact me by many ways (all my social media links are on this website).
            </div>
            <div className={property}>
                This website is running on a <a href={"https://vercel.com"}>Vercel</a> website with my personal domain name.
                It's running using React and Tailwind frameworks.
            </div>
            <div className={property}>
                I am a french 22-engineer studying at ENSEEIHT in Toulouse and working at Lyra Networks.
            </div>
        </div>
    )
};
