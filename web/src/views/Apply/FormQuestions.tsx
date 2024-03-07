import Node from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {TitledField} from '../../components/TitledField';
import {DynamicFieldArray} from '../../components/DynamicFieldArray';
import {styles} from '../../styles/tailwindGlobals';

const formSchema = Yup.object().shape({
  firstName: Yup.string().required('Debes incluir tu nombre'),
  lastName: Yup.string().required('Debes incluir tu apellido'),
  email: Yup.string()
    .email('Correo inválido')
    .required('Debes incluir tu email'),
  institution: Yup.string(),
  links: Yup.array()
    .of(
      Yup.object().shape({
        url: Yup.string().url('Debes incluir un link válido'),
      }),
    )
    .min(1, 'Debes incluir al menos un link personal')
    .max(5, 'No se pueden agregar más de 5 links personales')
    .required('Tiene que colocar al menos un link personal'),
  projectUrl: Yup.string()
    .url('Debes incluir un url válido')
    .required('Debes incluir el enlace al proyecto'),
  reason: Yup.string().required('Debes incluir este campo'),
  topics: Yup.string().required('Debes incluir este campo'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  institution: '',
  links: [
    {
      url: '',
    },
  ],
  projectUrl: '',
  reason: '',
  topics: '',
};

const SectionTitle = ({children}: {children: Node}) => (
  <h2 className="font-bold text-neutral-200 text-3xl">{children}</h2>
);

export const FormQuestions = () => {
  const handleSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className="grid grid-cols-1 items-center gap-y-5">
      <div>
        <SectionTitle>Datos personales</SectionTitle>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
      >
        {({errors, touched}) => (
          <Form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-5">
              <TitledField name="firstName" label="Nombres *" />
              <TitledField name="lastName" label="Apellidos *" />
              <TitledField name="email" label="Correo electrónico *" />
              <TitledField name="institution" label="Centro de estudios" />
            </div>
            <div className="grid grid-cols-1 gap-y-4">
              <SectionTitle>Preguntas</SectionTitle>
              <div>
                <h2>Links personales</h2>
                <p style={{fontSize: '0.85rem', color: 'gray'}}>
                  Puedes incluir uno o varios links personales que desees
                  mostrarnos (GitHub, LinkedIn, página web personal, etc). Nos
                  ayudarás mucho en tu proceso de postulación.
                </p>
              </div>
              <DynamicFieldArray name="links" errors={errors.links} />
              <div>
                <h2>
                  Adjunta el enlace del código de algún programa que hayas
                  desarrollado o que estés desarrollando *
                </h2>
                <p style={{fontSize: '0.85rem', color: 'gray'}}>
                  Nos importa que hayas programado lo suficiente como para que
                  sepas que te gusta hacerlo. Si no tienes un proyecto, puedes
                  escribir un programa pequeño (como una calculadora, un
                  minijuego o lo que tú quieras). No tiene que ser un proyecto
                  grande, lo que importa es que lo hayas desarrollado tú mismo
                  sin usar un framework (ie. Django, Express, etc). Puede estar
                  escrito en cualquier lenguaje de programación. Recomendamos
                  usar un servicio como GithubGist para publicar tu código.
                </p>
              </div>
              <div className="w-11/12 md:w-7/12">
                <Field className={styles.field} name="projectUrl" />
                <ErrorMessage
                  component="a"
                  className={styles.errorMsg}
                  name="projectUrl"
                />
              </div>
              <TitledField
                name="reason"
                label="¿Por qué quieres asistir a MakerLab?"
              />
              <TitledField
                name="topics"
                label="¿Qué quieres aprender durante tu estadia en el MakerLab?"
              />
              <div>
                <button
                  className="mt-2 mb-10 bg-red-700 rounded-sm px-5 py-2 text-white
                  font-medium text-md text-center font-bold
                  hover:bg-red-800 focus:outline-none"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
