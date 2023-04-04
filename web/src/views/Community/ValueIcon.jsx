import React from "react";
import Image from "next/image";

const ValueIcon = ({ svg, title }) => (
  <div className="flex flex-col items-center">
    <Image
      src={svg}
      className="h-14 w-14 md:h-20 md:w-36 "
      alt=""
    />
    <div className="mt-2 p-1 text-xs md:text-base text-center">{title}</div>
  </div>
);

export default ValueIcon;

