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
                <nav className="absolute flex justify-around w-full py-4 h-20 z-40 bg-vicious-white bg-opacity-20">
                    <div className="text-xl font-semibold text-vicious-primary cursor-default">
                        Danny Sinicco
                    </div>
                    <div className="flex gap-10">
                        <Link
                            href="/"
                            className="text-vicious-secondary hover:text-vicious-primary mt-2 cursor-pointer"
                        >
                            Home
                        </Link>
                        <Link
                            href="/aboutme"
                            className="text-vicious-secondary hover:text-vicious-primary mt-2 cursor-pointer"
                        >
                            About me
                        </Link>
                    </div>
                    <Link
                        href="/contact"
                        className="h-10 text-vicious-secondary bg-vicious-primary rounded-[10px] hover:bg-opacity-80 mt-2 justify-self-end uppercase p-2 shadow-3xl cursor-pointer"
                    >
                        Let's Talk
                    </Link>
                </nav>
                {children}
            </body>
        </html>
    )
}
