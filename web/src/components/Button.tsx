import {ReactNode, ComponentProps} from 'react';
import clsx from 'clsx';
import {Link} from './Link';

type ButtonProps = {
  children: ReactNode;
} & ComponentProps<typeof Link>;

export const Button = ({children, ...rest}: ButtonProps) => (
  <Link {...rest}>
    <button
      type="button"
      className={clsx(
        'bg-red-700 rounded-sm px-5 py-2',
        'text-white font-medium text-sm text-center font-bold',
        'hover:bg-red-800 focus:outline-none',
      )}
    >
      {children}
    </button>
  </Link>
);
