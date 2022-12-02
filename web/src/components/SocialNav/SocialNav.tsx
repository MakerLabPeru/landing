import {FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter} from 'react-icons/fa';
import {SocialButton} from './SocialButton';

const SOCIAL_DATA = [
  {href: 'https://www.facebook.com/makerlabperu', icon: FaFacebookF},
  {href: 'https://www.linkedin.com/company/makerlab-per%C3%BA', icon: FaLinkedinIn},
  {href: 'https://www.youtube.com/channel/UCGzB0HrShJYiy_JwWB4zcgg', icon: FaYoutube},
  {href: 'https://twitter.com/makerlab_peru', icon: FaTwitter},
];

const SocialNav = () => (
  <div className="bg-primary text-gray-50 inline-flex flex-col py-3 gap-1">
    {SOCIAL_DATA.map(({href, icon}) => (
      <SocialButton key={href} {...{href, icon}} />
    ))}
  </div>
);

export default SocialNav;
