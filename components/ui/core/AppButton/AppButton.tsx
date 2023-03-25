'use client'
import Image from 'next/image'
import { FC, HTMLAttributes, MouseEventHandler, useState } from 'react'

export interface AppButtonProps
    extends JSX.IntrinsicAttributes,
        HTMLAttributes<HTMLElement> {
    /** Overlay and text color style **/
    color?:
        | 'gray'
        | 'red'
        | 'orange'
        | 'yellow'
        | 'green'
        | 'teal'
        | 'blue'
        | 'indigo'
        | 'purple'
        | 'pink'
    imgUrl?: string
    text?: string
    onClick?: MouseEventHandler
}

export const AppButton: FC<AppButtonProps> = (props: AppButtonProps) => {
    props = {
        color: 'blue',
        imgUrl: undefined,
        text: '',
        onClick: () => {
            console.log('click')
        },
        ...props,
    }

    return (
        <div
            className={`group h-20 w-20 rounded-lg relative cursor-pointer ${props.className} bg-slate-600 select-none`}
            onClick={(event) => props.onClick}
        >
            <div
                className={`absolute h-full w-full rounded-lg bg-${props.color}-200 hover:bg-${props.color}-500 bg-opacity-40 group-hover:bg-opacity-60 group-active:bg-opacity-60 z-20`}
            />
            <Image
                src={props.imgUrl || '/images/halle.jpg'}
                alt="Icon"
                fill
                object-fit="cover"
                className="rounded-lg"
            />
            <p
                className={`relative -bottom-10 mt-10 text-${props.color}-500 text-center uppercase font-semibold group-hover:text-${props.color}-200 group-active:text-${props.color}-200`}
            >
                {props.text}
            </p>
        </div>
    )
}
