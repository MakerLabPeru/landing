import clsx from 'clsx';
import {ReactNode} from 'react';
import useMeasure from 'react-use-measure';
import {useSpring, animated} from 'react-spring';
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
  const [ref, bounds] = useMeasure();
  const {isOpen} = useDisclosure();
  const {
    theme: {colors},
  } = useTailwindConfig();

  const triggerStyleSpring = useSpring({
    backgroundColor: isOpen ? colors.primary['600'] : colors.slate['50'],
    color: isOpen ? colors.gray['50'] : colors.zinc['900'],
  });
  const targetStyleSpring = useSpring({
    height: isOpen ? bounds.height : 0,
    opacity: isOpen ? 1 : 0,
  });

  return (
    <section>
      <Trigger
        openClass="bg-primary-600 text-gray-50"
        closedClass="bg-slate-100 text-zinc-900"
      >
        <animated.header
          className="flex justify-between items-center p-4 md:px-8 md:py-6 text-lg"
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
