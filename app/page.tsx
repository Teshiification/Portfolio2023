import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Seperator from '../components/seperator'

export default function Index() {
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

    const projects = [
        {
            title: 'Portfolio 2023',
            text: 'My new Portfolio',
            link: '',
            type: 'github',
        },
        {
            title: 'Portfolio 2020 - 2023',
            text: 'My old Portfolio',
            link: '',
            type: 'github',
        },
        {
            title: 'Portfolio Marcel Sturm',
            text: 'Customer Portfolio',
            link: '',
            type: 'github',
        },
    ]
    return (
        <div className="grid gap-16">
            <section
                id="hero"
                className="h-screen pt-10 bg-vicious-black bg-opacity-60"
                style={{
                    backgroundImage: `url(/images/portraits/landscape.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply',
                }}
            >
                <div
                    id="navbar"
                    className="absolute hidden lg:grid w-1/4 h-screen lg:right-20 top-0 bottom-0 bg-vicious-white bg-opacity-10 justify-around text-center font-semibold uppercase items-center"
                >
                    <div className="grid gap-10">
                        {pages.map((item, key) => {
                            return (
                                <Link
                                    key={key}
                                    href={item.link}
                                    className="group text-vicious-secondary hover:text-vicious-primary cursor-pointer"
                                >
                                    {item.title}
                                    <div className="h-[1px] bg-vicious-white bg-opacity-60 group-hover:bg-opacity-40 rounded w-40"></div>
                                </Link>
                            )
                        })}
                    </div>
                    <Link
                        href={'#job'}
                        className="h-8 w-48 text-vicious-secondary border-2 border-vicious-primary bg-white bg-opacity-20 rounded shadow-3xl hover:bg-opacity-40 cursor-pointer"
                    >
                        Hire me
                    </Link>
                </div>
                <div className="grid left-0 my-20 ml-10 w-1/3 text-center font-bold gap-4">
                    <h1 className="text-6xl text-vicious-white my-4">
                        Danny Sinicco
                    </h1>
                    <p className="text-xl text-vicious-white mx-8 mb-8">
                        Design & Programming
                    </p>
                </div>
            </section>

            <section id="about" className="h-1/2">
                <div
                    id="container"
                    className="grid lg:flex justify-between bg-vicious-gray lg:w-1/2 mx-auto rounded p-4"
                >
                    <div
                        id="img_container_gradient"
                        className="p-1 shrink-0 rounded bg-gradient-to-br from-vicious-primary to-vicious-secondary w-48 h-48"
                    >
                        <div
                            id="img_container"
                            className="rounded w-full h-full"
                            style={{
                                backgroundImage: `url(/images/portraits/me-zoomed.jpg)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                    </div>
                    <p className="text-vicious-white p-4 w-full h-full">
                        Seite noch in Bearbeitung
                    </p>
                </div>
            </section>
            <section id="projects" className="h-screen"></section>
        </div>
    )
}
