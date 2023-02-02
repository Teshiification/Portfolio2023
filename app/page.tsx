import React from 'react'
import Seperator from '../components/seperator'
import SkillSet from '../components/skillset'

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
                <Seperator color={'#29323C'} className="rotate-180 bottom-0" />
            </section>

            <section
                id="skills"
                className="grid grid-rows w-screen bg-body"
            ></section>

            <section
                id="projects"
                className="grid grid-rows w-screen h-1/2 bg-vicious-primary"
            >
                <Seperator color={'#29323C'} />
            </section>
        </>
    )
}
