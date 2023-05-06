import {ErrorMessage, Field} from "formik";
import {styles} from "../styles/tailwindGlobals";

interface TitledFieldProps {
  name: string;
  label: string;
}

export const TitledField = ({name, label}: TitledFieldProps) => (
    <div>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <Field className={styles.field} name={name}/>
      <ErrorMessage component='a' className={styles.errorMsg} name={name} />
    </div>
  )
