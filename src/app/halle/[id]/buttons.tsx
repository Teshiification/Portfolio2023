import type { FC } from 'react';

import { addStorageItemEntryById } from '../../../lib/prisma/storageItems';

export interface ButtonProps {
  id: number;
}

export const AddItem: FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      className="h-8 w-8 rounded bg-green-500 text-center align-middle font-semibold text-vicious-white"
      onClick={() => addStorageItemEntryById(props.id)}
    >
      +
    </button>
  );
};

export const DeleteItem: FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      className="h-8 w-8 rounded bg-red-500 text-center align-middle font-semibold text-vicious-white"
      disabled
    >
      -
    </button>
  );
};
