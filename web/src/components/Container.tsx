import { ComponentPropsWithoutRef, ReactNode } from "react";
import clsx from "clsx";

type ComponentProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<'div'>;

const Container = ({children, className, ...rest}: ComponentProps) => (
  <div
    className={clsx("md:mx-auto px-10 md:max-w-[1024px]", className)}
    {...rest}
  >
    {children}
  </div>
)

export default Container;
