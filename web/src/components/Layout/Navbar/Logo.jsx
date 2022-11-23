import Image from 'next/image';
import logoSvg from '../../../../public/makerlab-logo.svg';

function Logo() {
  return <Image src={logoSvg} height={40} alt="MakerLab Perú" />;
}

export default Logo;
