import {ComponentProps} from 'react';
import Image from 'next/image';
import logoSvg from '~public/makerlab-logo.svg';
import {Link} from '~/components';

type LogoProps = Omit<ComponentProps<typeof Link>, "href"> & Pick<ComponentProps<typeof Image>, 'height'>;

export const Logo = ({height = 40, ...rest}: LogoProps) => (
  <Link href="/" {...rest}>
    <Image className="object-contain" src={logoSvg} {...{height}} alt="MakerLab Perú" />
  </Link>
);
