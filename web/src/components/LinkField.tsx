import {ErrorMessage, Field} from "formik";
import Image from "next/image";
import {styles} from "../styles/tailwindGlobals";
import deleteIcon from "../../public/icons/close.svg";
import addIcon from "../../public/icons/plus.svg";

interface LinkFieldProps {
  name: string;
  index: number;
  remove: (obj: number) => void;
  push: (obj: unknown) => void;
}

export const LinkField = ({name, index, remove, push}: LinkFieldProps) => (
  <div className="grid grid-cols-1 space-y-2 mt-2 md:space-y-1">
    <div className="flex items-center space-x-2">
      <Field className={styles.dynamicField} name={`${name}.${index}.url`}/>
      {index !== 0 && (
        <button
          type="button"
          className="p-1 text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800"
          onClick={() => remove(index)}
        >
          <Image
            src={deleteIcon}
            className="w-8 px-1 md:w-14 md:px-3"
            alt="Delete"
          />
        </button>
      )}
      {index === 0 && (
        <button type="button" onClick={() => push({url: ''})}>
          <Image
            src={addIcon}
            className="h-10 w-10 px-2 md:h-16 md:w-16 md:px-4"
            alt="Add"
          />
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
)
