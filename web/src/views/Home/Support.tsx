import Image from "next/image";

const Support = () => (
  <div className="bg-[#222222]">
    <div className="p-4 flex flex-col items-center">
      <p className="m-2 text-white text-base font-semibold">
        Con el apoyo de:
      </p>
      <div className="m-2 flex flex-col gap-4 md:flex-row md:gap-6">
        <Image
          src="/logos/pucp.svg"
          alt="logo PUCP"
          width={174}
          height={58}
        />
        <Image
          src="/logos/pucp.svg"
          alt="logo PUCP"
          width={174}
          height={58}
        />
        <Image
          src="/logos/pucp.svg"
          alt="logo PUCP"
          width={174}
          height={58}
        />
      </div>
    </div>
  </div>
);

export default Support;
