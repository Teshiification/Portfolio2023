import Link from 'next/link'
import { FC, HTMLAttributes, MouseEventHandler, useState } from 'react'

export interface DashboardItemProps
    extends JSX.IntrinsicAttributes,
        HTMLAttributes<HTMLElement> {
    data?: any
}

export const DashboardItem: FC<DashboardItemProps> = (
    props: DashboardItemProps
) => {
    props = {
        color: 'blue',
        data: [],
        ...props,
    }

    return (
        <Link
            href={`halle/${props.data?.id}`}
            className={`relative h-24 w-24 p-2 rounded-lg cursor-pointer bg-vicious-gray select-none ${props.className}`}
        >
            <p>{props.data?.amount.length}</p>
            <p className="text-xs text-vicious-white text-opacity-60">
                {props.data?.name}
            </p>
        </Link>
    )
}
