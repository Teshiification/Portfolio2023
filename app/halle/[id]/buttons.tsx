import { FC } from 'react'
import { addStorageItemEntryById } from '../../../lib/prisma/storageItems'

export interface ButtonProps {
    id: number
}

export const AddItem: FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <button
            className="bg-green-500 text-vicious-white font-semibold align-middle text-center rounded w-8 h-8"
            onClick={() => addStorageItemEntryById(props.id)}
        >
            +
        </button>
    )
}

export const DeleteItem: FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <button
            className="bg-red-500 text-vicious-white font-semibold align-middle text-center rounded w-8 h-8"
            disabled
        >
            -
        </button>
    )
}
