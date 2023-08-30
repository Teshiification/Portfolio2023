"use client"
import { cn } from "@/lib/utils";
import { FC } from "react";

export interface CardProps {
    color?: string,
    children?: any,
    width?: number,
    height?: number,
} 

export const Card: FC<CardProps> = (
    props: CardProps,
  ) => {
    const CardProps = {
      color: 'blue',
      width: 40,
      height: 40,
      ...props,
    };

    return ( <div className={cn(`relative flex flex-col rounded-lg p-6`, `bg-${CardProps.color}-500 w-${CardProps.width} h-${CardProps.height}`)}>
        {CardProps?.children}
    </div>
    );
};
