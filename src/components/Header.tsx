import React from "react";

export default function Header() {

    const [displayMenu, setDisplayMenu] = React.useState(false);

    const changeDisplayMenu = () => {
        setDisplayMenu(!displayMenu);
    }

    return (
        <>
            {
                !displayMenu? (
                    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 flex">
                        <div className={"flex-1"}>
                            <p className="text-3xl text-gray-700 font-bold mb-5">
                                CoutCout portfolio
                            </p>
                            <p className="text-gray-500 text-lg">
                                React and Tailwind CSS are in action on this website
                            </p>
                        </div>
                        <div className={"flex-1 inset-y-0 right-0 relative"}>
                            <svg viewBox="0 0 100 80" className={"w-10 h-10 absolute inset-y-5 right-10"} onClick={changeDisplayMenu}>
                                <rect className={"right-0"} width="100" height="10"></rect>
                                <rect y="30" width="50" height="10"></rect>
                                <rect y="60" width="100" height="10"></rect>
                            </svg>
                        </div>
                    </div>
                ) : (
                    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 flex">
                        <div className={"flex-1"}>
                            <p className="text-3xl text-gray-700 font-bold mb-5">
                                Menu
                            </p>
                            <p className="text-gray-500 text-lg">
                                This will be my menu
                            </p>
                        </div>
                        <div className={"flex-1 inset-y-0 right-0 relative"}>
                            <svg viewBox="0 0 100 80" className={"w-10 h-10 absolute inset-y-5 right-10"} onClick={changeDisplayMenu}>
                                <rect className={"right-0"} width="100" height="10"></rect>
                                <rect y="30" width="50" height="10"></rect>
                                <rect y="60" width="100" height="10"></rect>
                            </svg>
                        </div>
                    </div>
                )
            }
        </>
    )
};
