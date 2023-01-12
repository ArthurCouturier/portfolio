import React from "react";
import BurgerMenu from "./BurgerMenu";

export default function Header(props: {displayMenu:boolean, setDisplayMenu: (b: boolean) => void}) {

    const { displayMenu, setDisplayMenu } = props
    const changeDisplayMenu = () => {
        setDisplayMenu(!displayMenu);
    }

    return (
        <>
            {
                !displayMenu? (

                    <div className="h-[100%] bg-black shadow border flex font-raleway">
                        <div className={"flex-1 mx-5 my-5"}>
                            <a className="text-3xl text-white font-extrabold mb-5 opacity-80 transition duration-300 hover:opacity-100" href={"/"}>
                                CoutCout
                            </a>
                            <div className="text-gray-500 text-lg">
                                React and Tailwind CSS are in action on this website
                            </div>
                        </div>
                        <div className={"flex-3 inset-y-0 right-0 relative my-3"}>
                            <BurgerMenu changeDisplayMenu={changeDisplayMenu} />
                        </div>
                    </div>

                ) : (

                    <div className="h-[100%] bg-black shadow border flex">
                        <div className={"flex-1"}>
                            <a className="text-3xl text-gray-700 font-extrabold mb-5" href={"/"}>
                                Menu
                            </a>
                            <div className={"flex text-gray-500 text-lg"}>
                                <div className={"inline-flex"}>
                                    <a className={"transition duration-500 hover:scale-[1.2]"} href={"/Skills"}>
                                        Skills
                                    </a>
                                </div>
                                <div className={"flex-1"}>
                                    <a className={"w-min transition duration-500 hover:scale-[1.2]"} href={"/Works"}>
                                        Works
                                    </a>
                                </div>
                                <div className={"flex-1"}>
                                    <a className={"w-min transition duration-500 hover:scale-[1.2]"} href={"/About"}>
                                        About
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={"flex-3 inset-y-0 right-0 relative"}>
                            <BurgerMenu changeDisplayMenu={changeDisplayMenu} />
                        </div>
                    </div>

                )
            }
        </>
    )
};
