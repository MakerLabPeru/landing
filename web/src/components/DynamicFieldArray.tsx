import {ErrorMessage, Field, FieldArray, useField} from "formik";
import Image from "next/image";
import deleteIcon from "~public/icons/close.svg";
import addIcon from "~public/icons/plus.svg";
import {styles} from "../styles/tailwindGlobals";

interface LinksFieldArrayProps {
  name: string;
}

export const DynamicFieldArray = ({ name }: LinksFieldArrayProps) => {
  const [field] = useField(name);

  return (
    <div className="w-80 md:w-8/12 md:-mt-5">
      <FieldArray name={name}>
        {({ push, remove }) => (
          <div>
            {field.value.map((link: { url: string }, index: number) => (
              <div className="grid grid-cols-1 space-y-2 mt-2 md:space-y-1">
                <div className="flex items-center space-x-2">
                  <Field className={styles.dynamicField} name={`${name}.${index}.url`} />
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
                    <button type="button" onClick={() => push({ url: '' })}>
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
            ))}
          </div>
        )}
      </FieldArray>
    </div>
  );
}
