import {ErrorMessage, Field} from "formik";
import useId from "@accessible/use-id";
import {styles} from "../styles/tailwindGlobals";

interface TitledFieldProps {
  name: string;
  label: string;
}

export const TitledField = ({name, label}: TitledFieldProps) => {
  const id = useId();
  return (
    <div>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <Field className={styles.field} name={name}/>
      <ErrorMessage component='a' className={styles.errorMsg} name={name}/>
    </div>
  )
}
