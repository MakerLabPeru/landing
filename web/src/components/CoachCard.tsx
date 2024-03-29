import clsx from 'clsx';
import {ComponentPropsWithoutRef} from 'react';
import Image from 'next/image';
import {GoPlus} from 'react-icons/go';

type CoachCardProps = {
  img: string;
  name: string;
  title: string;
} & ComponentPropsWithoutRef<'a'>;

export default ({img, title, name, ...rest}: CoachCardProps) => (
  <a
    className={clsx(
      'w-54 h-54 bg-gray-900 flex flex-col rounded select-none cursor-pointer',
    )}
    {...rest}
  >
    <div className="flex-1 flex items-center justify-end">
      <h6 className="text-zinc-50 px-4 text-xs">{title}</h6>
    </div>

    <div className="flex-none flex justify-center">
      <Image
        className="rounded-full"
        src={img}
        alt=""
        width={136}
        height={136}
      />
    </div>

    <div className="flex-1 flex items-center justify-end">
      <h5 className="text-zinc-50 px-4 flex-1 font-bold text-sm">{name}</h5>

      <div
        // Min height as aspect-ratio fallback
        className={clsx(
          'mkl-btn bg-primary-600 h-full flex-none',
          'aspect-square min-w-[40px] text-zinc-50 flex rounded-tl rounded-br'
        )}
        role="button"
      >
        <GoPlus className="flex-1 h-full p-2 hover:bg-stone-700" />
      </div>
    </div>
  </a>
);
