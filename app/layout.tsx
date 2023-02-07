/* eslint-disable @next/next/no-head-element */
import Link from 'next/link'
import './output.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pages = [
        {
            link: '/',
            title: 'Home',
            button: false,
        },
        {
            link: '/about',
            title: 'About me',
            button: false,
        },
        {
            link: '/projects',
            title: 'Projects',
            button: false,
        },
        {
            link: '/contact',
            title: 'Hire me',
            button: true,
        },
    ]
    return (
        <html>
            <body className="grid grid-rows w-screen h-screen overflow-x-hidden bg-body z-20">
                <nav className="absolute grid justify-around w-1/4 h-screen right-40 top-0 bottom-0 bg-vicious-white bg-opacity-10 rounded my-auto py-4 z-20">
                    <div className="grid gap-10 h-1/2 my-auto text-center font-semibold uppercase">
                        {pages.map((item, key) => {
                            if (!item.button)
                                return (
                                    <Link
                                        key={key}
                                        href={item.link}
                                        className="group text-vicious-secondary hover:text-vicious-primary mt-2 cursor-pointer h-fit"
                                    >
                                        {item.title}
                                        <div className="h-[1px] bg-vicious-white bg-opacity-60 group-hover:bg-opacity-40 rounded w-80"></div>
                                    </Link>
                                )
                            else
                                return (
                                    <Link
                                        key={key}
                                        href={item.link}
                                        className="h-10 text-vicious-secondary bg-vicious-primary bg-opacity-80 rounded-[10px] p-2 shadow-3xl hover:bg-opacity-100 hover:scale-105 cursor-pointer"
                                    >
                                        {item.title}
                                    </Link>
                                )
                        })}
                    </div>
                </nav>
                {children}
                <footer className="flex absolute bottom-0 w-full h-10 justify-around">
                    <Link href="/impressum">Impressum</Link>
                </footer>
            </body>
        </html>
    )
}
