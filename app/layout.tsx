/* eslint-disable @next/next/no-head-element */
import Link from 'next/link'
import './output.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body className="grid grid-rows w-screen h-screen overflow-x-hidden bg-body z-20">
                <nav className="absolute grid justify-around w-1/4 h-screen right-40 top-0 bottom-0 bg-vicious-white bg-opacity-10 rounded my-auto py-4 z-20">
                    <div className="grid gap-10 h-1/2 my-auto text-center font-semibold uppercase">
                        <Link
                            href="/"
                            className="group text-vicious-secondary hover:text-vicious-primary mt-2 cursor-pointer h-fit"
                        >
                            Home
                            <div className="h-[1px] bg-vicious-white bg-opacity-60 group-hover:bg-opacity-40 rounded w-80"></div>
                        </Link>
                        <Link
                            href="/"
                            className="group text-vicious-secondary hover:text-vicious-primary mt-2 cursor-pointer h-fit"
                        >
                            About me
                            <div className="h-[1px] bg-vicious-white bg-opacity-60 group-hover:bg-opacity-40 rounded w-80"></div>
                        </Link>
                        <Link
                            href="/contact"
                            className="h-10 text-vicious-secondary bg-vicious-primary rounded-[10px] hover:bg-opacity-80 mt-2  p-2 shadow-3xl cursor-pointer"
                        >
                            Let's Talk
                        </Link>
                    </div>
                </nav>
                {children}
            </body>
        </html>
    )
}
