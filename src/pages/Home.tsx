import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="">
            <Header />

            <div className={"container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 flex"}>
                Home
            </div>

            <Footer />
        </div>
    );
};
