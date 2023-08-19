import Navbar from 'components/ui/core/Navbar/Navbar'
import React from 'react'

export default function Index() {
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
                <Navbar />
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
