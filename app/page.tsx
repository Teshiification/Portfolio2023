import Image from 'next/image'
import React from 'react'

export default function Index() {
    return (
        <>
            <section
                id="hero"
                className="py-32 h-screen w-screen"
                style={{
                    backgroundImage: `url(/images/portraits/landscape.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="container left-0 my-80">
                    <div className="flex items-center justify-center">
                        <div className="w-full lg:w-3/4 justify-center font-bold">
                            <h1 className="text-6xl text-vicious-white my-4">
                                Danny Sinicco
                            </h1>
                            <p className="text-xl text-vicious-white mx-8 mb-8">
                                Willkommen auf meinem Portfolio
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
