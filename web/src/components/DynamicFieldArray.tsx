import {ErrorMessage, FieldArray, useField} from "formik";
import {styles} from "../styles/tailwindGlobals";
import {LinkField} from "./LinkField";

interface LinksFieldArrayProps {
  name: string;
  errors: unknown;
}

export const DynamicFieldArray = ({name, errors}: LinksFieldArrayProps) => {
  const [field] = useField(name);

  return (
    <div className="w-80 md:w-8/12 md:-mt-5">
      <FieldArray name={name}>
        {({push, remove}) => (
          <div>
            {field.value.map((link: { url: string }, index: number) => (
              <LinkField
                name={name}
                index={index}
                push={push}
                remove={remove}
                key={
                  /* eslint-disable-next-line react/no-array-index-key */
                  index
                }
              />
            ))}
          </div>
        )}
      </FieldArray>
      {typeof errors === 'string' ? (
        <div>
          <ErrorMessage
            name="links"
            component="div"
            className={styles.errorMsg}
          />
        </div>
      ) : null}
    </div>
  );
}
