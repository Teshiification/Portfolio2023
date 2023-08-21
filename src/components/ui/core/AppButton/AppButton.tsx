'use client';

import Image from 'next/image';
import type { FC, HTMLAttributes, MouseEventHandler } from 'react';

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
  props = {
    color: 'blue',
    imgUrl: undefined,
    text: '',
    onClick: () => {
      console.log('click');
    },
    ...props,
  };

  return (
    <div
      className={`group relative h-20 w-20 cursor-pointer rounded-lg ${props.className} select-none bg-slate-600`}
      onClick={(event) => props.onClick}
    >
      <div
        className={`bg- absolute h-full w-full rounded-lg${props.color}-200 hover:bg-${props.color}-500 z-20 bg-opacity-40 group-hover:bg-opacity-60 group-active:bg-opacity-60`}
      />
      <Image
        src={props.imgUrl || '/images/halle.jpg'}
        alt="Icon"
        fill
        object-fit="cover"
        className="rounded-lg"
      />
      <p
        className={`text- relative -bottom-10 mt-10${props.color}-500 group-hover:text- text-center font-semibold uppercase${props.color}-200 group-active:text-${props.color}-200`}
      >
        {props.text}
      </p>
    </div>
  );
};
