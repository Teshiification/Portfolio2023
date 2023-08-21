'use client';

import Image from 'next/image';
import type { FC, HTMLAttributes, MouseEventHandler } from 'react';

import { cn } from '@/lib/utils';

export interface AppButtonProps
  extends JSX.IntrinsicAttributes,
    HTMLAttributes<HTMLElement> {
  /** Overlay and text color style * */
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
    | 'pink';
  imgUrl?: string;
  text?: string;
  onClick?: MouseEventHandler;
}

export const AppButton: FC<AppButtonProps> = (props: AppButtonProps) => {
  const buttonProps = {
    color: 'blue',
    imgUrl: undefined,
    text: '',
    onClick: () => {},
    ...props,
  };

  return (
    <div
      className={`group relative h-20 w-20 cursor-pointer rounded-lg ${buttonProps.className} select-none bg-slate-600`}
      onClick={() => buttonProps.onClick}
    >
      <div
        className={cn(
          `bg- absolute h-full w-full rounded-lg z-20 bg-opacity-40 group-hover:bg-opacity-60 group-active:bg-opacity-60`,
          `${buttonProps.color}-200 hover:bg-${buttonProps.color}-500`,
        )}
      />
      <Image
        src={buttonProps.imgUrl || '/images/halle.jpg'}
        alt="Icon"
        fill
        object-fit="cover"
        className="rounded-lg"
      />
      <p
        className={cn(
          `text- relative -bottom-10 mt-10 group-hover:text- text-center font-semibold uppercase`,
          `${buttonProps.color}-500 ${buttonProps.color}-200 group-active:text-${buttonProps.color}-200`,
        )}
      >
        {props.text}
      </p>
    </div>
  );
};
