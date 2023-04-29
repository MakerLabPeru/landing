import interview from "~public/icons/interview.svg";
import check from "~public/icons/check.svg";
import list from "~public/icons/list.svg";
import {useState} from "react";
import Image from 'next/image';

interface CircleIconProps {
  icon: string;
  message: string;
}

export const CircleIcon = ({icon, message}: CircleIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    list: {
      src: list,
      className: "w-8/12 md:w-8/12"
    },
    interview: {
      src: interview,
      className: "w-9/12 md:w-9/12"
    },
    check: {
      src: check,
      className: "w-9/12 md:w-7/12"
    }
  }

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`rounded-full h-20 w-20 md:h-28 md:w-28 flex items-center justify-center transition-colors duration-100 ${
        isHovered ? 'bg-red-700' : 'bg-gray-600'
      }`}>
        <Image
          style={{filter: 'invert(1)'}}
          alt={icon}
          {...variants[icon]}
        />
      </div>
      <div>
        {isHovered && (
          <div className={`absolute left-1/2 transform text-center w-56 md:translate-y-16 md:-translate-x-24 ${
            icon === 'list' ? '-translate-x-10 translate-y-12' :
              icon === 'interview' ? '-translate-x-24 translate-y-12' :
                '-translate-x-48 translate-y-12'
          }`}>
            <div className="bg-gray-600 text-white rounded-md py-2 px-4">
              <p style={{fontSize: "0.85rem"}}>{message}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
