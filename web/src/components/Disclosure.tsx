import clsx from 'clsx';
import {useRef, ReactNode} from 'react';
import useSize from '@react-hook/size';
import usePrevious from '@react-hook/previous';
import {useSpring, animated} from '@react-spring/web';
import {MdKeyboardArrowUp} from 'react-icons/md';
import {
  Disclosure,
  Trigger,
  Target,
  useDisclosure,
} from '@accessible/disclosure';

import {useTailwindConfig} from '~/hooks';

type DisclosureProps = {
  open: boolean;
  title: string;
  children: ReactNode;
};

type DisclosureContentProps = Omit<DisclosureProps, 'open'>;

const DisclosureContent = ({title, children}: DisclosureContentProps) => {
  const ref = useRef(null);
  const [width, height] = useSize(ref);
  const previousWidth = usePrevious(width);
  const {isOpen} = useDisclosure();
  const {
    theme: {colors},
  } = useTailwindConfig();

  const immediate = !width || width !== previousWidth;

  const triggerStyleSpring = useSpring({
    backgroundColor: isOpen ? colors.primary['600'] : colors.slate['50'],
    color: isOpen ? colors.gray['50'] : colors.zinc['900'],
    immediate,
  });
  const targetStyleSpring = useSpring({
    height: isOpen ? height || 'unset' : 0,
    opacity: isOpen ? 1 : 0,
    immediate,
  });

  return (
    <section>
      <Trigger
        openClass="bg-primary-600 text-gray-50"
        closedClass="bg-slate-100 text-zinc-900"
      >
        <animated.header
          className="flex justify-between items-center p-4 md:px-8 md:py-6 text-lg focus:outline-none"
          style={triggerStyleSpring}
        >
          <h3>{title}</h3>
          <MdKeyboardArrowUp
            className={clsx('transition-transform text-xl', {
              'rotate-0': isOpen,
              'rotate-180': !isOpen,
            })}
          />
        </animated.header>
      </Trigger>

      <Target>
        <animated.div
          className="overflow-hidden visible"
          style={targetStyleSpring}
        >
          <div ref={ref} className="p-4 md:p-8 bg-gray-50">
            {children}
          </div>
        </animated.div>
      </Target>
    </section>
  );
};

const DisclosureComp = ({open, ...rest}: DisclosureProps) => (
  <Disclosure {...{open}}>
    <DisclosureContent {...rest} />
  </Disclosure>
);

export default DisclosureComp;
