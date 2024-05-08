import React from "react";
import BurgerMenu from "./BurgerMenu";
import MenuButton from "./MenuButton";

export default function Header(props: { displayMenu: boolean, setDisplayMenu: (b: boolean) => void }) {

    const { displayMenu, setDisplayMenu } = props
    const changeDisplayMenu = () => {
        setDisplayMenu(!displayMenu);
    }

    return (
        <>
            {
                !displayMenu ? (

                    <div className="h-[100%] bg-black shadow flex font-raleway">
                        <div className={"flex-1 mx-5 my-5"}>
                            <a className="text-xl sm:text-3xl xl:text-5xl text-white font-extrabold mb-5 opacity-80 transition duration-300 hover:opacity-100" href={"/"}>
                                CoutCout
                            </a>
                            <div className="text-gray-500 text-sm sm:text-lg w-1/2 sm:w-max">
                                React and Tailwind CSS are in action on this website
                            </div>
                        </div>
                        <div className={"flex-3 inset-y-0 right-0 relative my-3"}>
                            <BurgerMenu changeDisplayMenu={changeDisplayMenu} />
                        </div>
                    </div>

                ) : (

                    <div className={"h-[100%] bg-black"}>
                        <div className="bg-black shadow flex">
                            <div className={"flex-1 mx-5 my-5"}>
                                <a className="text-xl sm:text-3xl text-white font-extrabold mb-5 opacity-80 transition duration-300 hover:opacity-100" href={"/"}>
                                    Menu
                                </a>
                            </div>
                            <div className={"flex-3 inset-y-0 right-0 relative my-3"}>
                                <BurgerMenu changeDisplayMenu={changeDisplayMenu} />
                            </div>
                        </div>
                        <div className={"flex-1 mx-5 w-[40vw] sm:mx-20 sm:w-[20vw]"}>
                            <div className={"flex-grow text-gray-500 text-lg my-5 sm:my-10"}>
                                <MenuButton name={"Skills"} url={"/Skills"} />
                                <MenuButton name={"Works"} url={"/Works"} />
                                <MenuButton name={"About"} url={"/About"} />
                            </div>
                            <div className={"border fill-white"}></div>
                            <div>
                                <MenuButton name={"Linkedin"} url={"https://www.linkedin.com/in/arthur-c-418311131/"} />
                                <MenuButton name={"Github"} url={"https://github.com/ArthurCouturier"} />
                                <MenuButton name={"Youtube"} url={"https://www.youtube.com/channel/UCaJN6T-wJAWX5OkWDEmK58A"} />
                                <MenuButton name={"Twitter"} url={"https://twitter.com/ArthurCouturier"} />
                                <MenuButton name={"Instagram"} url={"https://www.instagram.com/coutcout.dev"} />
                            </div>
                            <div className={"border fill-white"}></div>
                            <div>
                                <MenuButton name={"Write me"} url={"mailto:arthur.couturier.2000@gmail.com"} />
                                <MenuButton name={"Check the repo"} url={"https://github.com/ArthurCouturier/portfolio"} />
                            </div>
                        </div>
                    </div>


                )
            }
        </>
    )
};
