import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleScroll = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) => {
  // first prevent the default behavior
  e.preventDefault();
  // get the href and remove everything before the hash (#)
  const { href } = e.currentTarget;
  const targetId = href.replace(/.*#/, '');
  // get the element by id and use scrollIntoView
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: 'smooth',
  });
};
