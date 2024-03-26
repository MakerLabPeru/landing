import clsx from 'clsx';
import {ComponentProps, forwardRef} from 'react';
import {Link} from '~/components';
import {useNavContext} from './NavContext';

type NavItemProps = {
  href?: string;
  active?: boolean;
} & ComponentProps<'div'> & {
  ref: ComponentProps<typeof Link>["ref"]
};

export const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(
  ({href, active = false, children, className, ...rest}, ref) => {
    const {isSection} = useNavContext() ?? {};

    const content = (
      <div
        className={clsx([
          className,
          'flex justify-between items-center select-none',
          'py-2 px-6 md:px-4',
          'md:pb-2 md:border-b-2',
          'text-white font-bold text-xl md:text-base',
          active && !isSection ? 'md:border-primary' : 'md:border-transparent',
        ])}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );

    if (href) {
      return <Link {...{href, ref}}>{content}</Link>;
    }

    return content;
  },
);
