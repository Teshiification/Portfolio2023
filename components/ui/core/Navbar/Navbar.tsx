'use client'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
    const pages = [
        {
            link: '/',
            title: 'Home',
        },
        {
            link: '#about',
            title: 'About me',
        },
        {
            link: '#projects',
            title: 'Projects',
        },
    ]

    const [showMenu, setShowMenu] = useState<boolean>(false)

    return (
        <>
            <div
                hidden={showMenu}
                onClick={() => {
                    setShowMenu(true)
                }}
                className="absolute lg:hidden top-8 right-8"
            >
                <div className="group grid grid-rows gap-1">
                    <div className="h-1 w-8 bg-vicious-white bg-opacity-60 group-hover:bg-opacity-40 rounded"></div>
                    <div className="h-1 w-12 bg-vicious-white bg-opacity-60 group-hover:bg-opacity-40 rounded"></div>
                    <div className="h-1 w-6 bg-vicious-white bg-opacity-60 group-hover:bg-opacity-40 rounded"></div>
                </div>
            </div>
            <div
                id="navbar"
                className={`absolute ${
                    showMenu || 'hidden'
                } lg:grid w-full lg:w-1/4 h-screen lg:right-20 top-0 bottom-0 bg-vicious-gray lg:bg-vicious-white bg-opacity-80 lg:bg-opacity-10 justify-around text-center font-semibold uppercase`}
            >
                <p
                    hidden={!showMenu}
                    className="h-20 w-full align-middle font-semibold text-xl bg-vicious-primary bg-opacity-20"
                    onClick={() => {
                        setShowMenu(false)
                    }}
                >
                    close menu
                </p>
                <div className="grid gap-10 place-self-center text-xl">
                    {pages.map((item, key) => {
                        return (
                            <Link
                                key={key}
                                href={item.link}
                                className="group text-vicious-secondary hover:text-vicious-primary cursor-pointer"
                            >
                                {item.title}
                                <div className="h-[1px] bg-vicious-white bg-opacity-60 group-hover:bg-opacity-40 rounded w-full"></div>
                            </Link>
                        )
                    })}
                </div>
                <Link
                    href={'#contact'}
                    className="flex mt-10 lg:mt-0 justify-center h-8 w-48 text-vicious-secondary border-2 border-vicious-primary bg-white bg-opacity-20 rounded shadow-3xl hover:bg-opacity-40 cursor-pointer"
                >
                    Contact me
                </Link>
            </div>
            <div className="grid left-0 my-20 ml-10 w-1/3 text-center font-bold gap-4">
                <h1 className="text-6xl text-vicious-white my-4">
                    Danny Sinicco
                </h1>
                <p className="text-xl text-vicious-white mx-8 mb-8">
                    Fullstack Developer
                </p>
            </div>
        </>
    )
}

export default Navbar
