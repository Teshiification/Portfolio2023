import React from 'react'

export default function Index() {
    return (
        <>
            <section
                id="hero"
                className="py-32 h-screen w-screen bg-vicious-black "
                style={{
                    backgroundImage: `url(/images/portraits/landscape.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'lighten',
                }}
            >
                <div className="container left-0 my-80">
                    <div className="w-1/3 text-center font-bold ml-60">
                        <h1 className="text-6xl text-vicious-white my-4">
                            Danny Sinicco
                        </h1>
                        <p className="text-xl text-vicious-white mx-8 mb-8">
                            Designer & Programmierer
                        </p>
                        <h2 className="text-2xl text-vicious-white mx-8 mb-8">
                            Willkommen auf meinem Portfolio
                        </h2>
                    </div>
                </div>
            </section>
        </>
    )
}
