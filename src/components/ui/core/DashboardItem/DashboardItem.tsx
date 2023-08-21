import Link from 'next/link';
import type { FC, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface DashboardItemProps
  extends JSX.IntrinsicAttributes,
    HTMLAttributes<HTMLElement> {
  data?: {
    id: string;
    name: string;
    amount: any[];
  };
}

export const DashboardItem: FC<DashboardItemProps> = (
  props: DashboardItemProps,
) => {
  const dashboardProps = {
    color: 'blue',
    ...props,
  };

  return (
    <Link
      href={`/halle/${dashboardProps.data?.id}`}
      className={cn(
        'relative h-24 w-24 cursor-pointer select-none rounded-lg bg-vicious-gray p-2',
        dashboardProps.className,
      )}
    >
      <p>{dashboardProps.data?.amount?.length}</p>
      <p className="text-xs text-vicious-white text-opacity-60">
        {dashboardProps.data?.name}
      </p>
    </Link>
  );
};
