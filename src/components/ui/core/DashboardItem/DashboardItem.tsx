import Link from 'next/link';
import type { FC, HTMLAttributes } from 'react';

export interface DashboardItemProps
  extends JSX.IntrinsicAttributes,
    HTMLAttributes<HTMLElement> {
  data?: any;
}

export const DashboardItem: FC<DashboardItemProps> = (
  props: DashboardItemProps,
) => {
  props = {
    color: 'blue',
    data: [],
    ...props,
  };

  return (
    <Link
      href={`halle/${props.data?.id}`}
      className={`relative h-24 w-24 cursor-pointer select-none rounded-lg bg-vicious-gray p-2 ${props.className}`}
    >
      <p>{props.data?.amount.length}</p>
      <p className="text-xs text-vicious-white text-opacity-60">
        {props.data?.name}
      </p>
    </Link>
  );
};
