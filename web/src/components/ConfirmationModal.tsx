import clsx from 'clsx';
import {ReactNode, ComponentPropsWithoutRef} from 'react';
import {Button} from '@accessible/button';
import {Modal, Target} from '@accessible/modal';
import {MdOutlineClose} from 'react-icons/md';

type ConfirmationModalProps = {
  isOpen: boolean;
  content: ReactNode;
  onConfirmation?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
};

const BaseButton = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<'button'>) => (
  <Button>
    <button
      className={clsx('rounded min-w-32 p-3 focus:outline-none', className)}
      type="button"
      {...props}
    >
      {children}
    </button>
  </Button>
);

const ConfirmationButton = ({onClick}: {onClick: () => void}) => (
  <BaseButton
    className="bg-primary text-gray-50 hover:bg-primary-600"
    {...{onClick}}
  >
    Aceptar
  </BaseButton>
);

const CancelButton = ({onClick}: {onClick: () => void}) => (
  <BaseButton
    className="border-primary border-2 text-primary hover:bg-gray-200 hover-border-primary-700"
    {...{onClick}}
  >
    Cancel
  </BaseButton>
);

const CloseButton = ({onClick}: {onClick: () => void}) => (
  <Button>
    <button className="absolute right-3 top-3 text-xl focus:outline-none" type="button" {...{onClick}}>
      <MdOutlineClose className="text-neutral-700" />
    </button>
  </Button>
);

const ConfirmationModal = ({
  isOpen,
  content,
  onConfirmation,
  onCancel,
  onClose = onCancel,
}: ConfirmationModalProps) => (
  <Modal open={isOpen}>
    <div
      className={clsx('fixed w-screen h-screen inset-0 bg-black/30', {
        hidden: !isOpen,
      })}
      aria-hidden="true"
    />
    <Target>
      <div className="rounded-md bg-gray-50 p-6">
        <CloseButton />
        <div className="p-4 text-center">{content}</div>
        <div className="flex justify-between p-2 text-lg gap-6">
          <CancelButton onClick={onCancel} />
          <ConfirmationButton onClick={onConfirmation} />
        </div>
      </div>
    </Target>
  </Modal>
);

export default ConfirmationModal;
