import {ErrorMessage, Field} from 'formik';
import {MdAdd, MdRemove} from 'react-icons/md';
import {styles} from '../styles/tailwindGlobals';

interface LinkFieldProps {
  name: string;
  index: number;
  remove: (obj: number) => void;
  push: (obj: unknown) => void;
}

export const LinkField = ({name, index, remove, push}: LinkFieldProps) => {
  const buttonClass =
    'className="p-1 text-neutral-50 hover:text-neutral-200 focus:outline-none focus:text-neutral-200"';
  return (
    <div className="grid grid-cols-1 space-y-2 mt-2 md:space-y-1">
      <div className="flex items-center space-x-2">
        <Field className={styles.dynamicField} name={`${name}.${index}.url`} />
        {index !== 0 && (
          <button
            type="button"
            className={buttonClass}
            onClick={() => remove(index)}
          >
            <MdRemove className="w-8 px-1 md:w-14 md:px-3" />
          </button>
        )}
        {index === 0 && (
          <button
            type="button"
            className={buttonClass}
            onClick={() => push({url: ''})}
          >
            <MdAdd className="h-10 w-10 px-2 md:h-16 md:w-16 md:px-4" />
          </button>
        )}
      </div>
      <div>
        <ErrorMessage
          name={`${name}.${index}.url`}
          component="div"
          className={styles.errorMsg}
        />
      </div>
    </div>
  );
};
