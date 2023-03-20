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
            <body className="bg-body w-screen overflow-x-hidden scrollbar-thumb-vicious-primary scrollbar scrollbar-thumb-rounded-full scrollbar-track-vicious-black">
                {children}
            </body>
        </html>
    )
}
