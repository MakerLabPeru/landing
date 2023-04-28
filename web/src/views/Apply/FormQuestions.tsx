import Image from "next/image";
import deleteIcon from "~public/icons/close.svg";
import addIcon from "~public/icons/plus.svg";
import {Form, Formik, Field, ErrorMessage, FieldArray} from "formik";
import * as Yup from 'yup';

const styles = {
  label: 'block text-gray-700 text-sm font-bold pt-2 pb-1',
  field:
    'bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none',
  dynamicField:
    'bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none',
  button:
    ' bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600',
  errorMsg: 'text-red-500 text-sm',
}

export const FormQuestions = () => {
  const formSchema = Yup.object().shape({
    firstName: Yup.string().required('Campo obligatorio'),
    lastName: Yup.string().required('Campo obligatorio'),
    email: Yup.string().email('Correo inválido').required('Campo obligatorio'),
    institution:  Yup.string().required('Campo obligatorio'),
    links: Yup.array()
      .of(
        Yup.object().shape({
          url: Yup.string().required('Campo obligatorio'),
        })
      )
      .required('Tiene que colocar al menos 1 link'),
    projectUrl:  Yup.string().required('Campo obligatorio'),
    reason:  Yup.string().required('Campo obligatorio'),
    topics:  Yup.string().required('Campo obligatorio'),
  })

  const initialValues = {
    firstName: "",
    lastName: "",
    email:  "",
    institution:  "",
    links: [
      {
        url: ''
      }
    ],
    projectUrl: '',
    reason: '',
    topics: ''
  };

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <div className="grid grid-cols-1 items-center gap-y-5">
      <div>
        <h1 className="text-3xl font-bold">Datos personales</h1>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-5">
              <div>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label className={styles.label} htmlFor="firstName">Nombres *</label>
                <Field className={styles.field} id="firstName" name="firstName"/>
                <ErrorMessage component='a' className={styles.errorMsg} name='firstName' />
              </div>
              <div>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label className={styles.label} htmlFor="lastName">Apellidos *</label>
                <Field className={styles.field} id="lastName" name="lastName"/>
                <ErrorMessage component='a' className={styles.errorMsg} name='lastName' />
              </div>
              <div>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label className={styles.label} htmlFor="email">Correo electrónico *</label>
                <Field className={styles.field} id="email" name="email"/>
                <ErrorMessage component='a' className={styles.errorMsg} name='email' />
              </div>
              <div>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label className={styles.label} htmlFor="institution">Centro de estudios *</label>
                <Field className={styles.field} id="institution" name="institution"/>
                <ErrorMessage component='a' className={styles.errorMsg} name='institution' />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-y-4">
              <h1 className="text-3xl font-bold mt-5">Preguntas</h1>
              <div>
                <h2>Link personal *</h2>
                <p style={{fontSize:"0.85rem", color:"gray"}}>
                  Incluye cualquier link personal que tengas (Github, LinkedIn, pagina web personal, etc)
                </p>
              </div>
              <div className="w-80 md:w-8/12 md:-mt-5">
                <FieldArray name="links">
                  {({ push, remove }) => (
                    <div>
                      {values.links.map((link, index) => (
                        <div className="grid grid-cols-1 space-y-2 mt-2 md:-space-y-2">
                          <div className="flex items-center space-x-2">
                            <Field className={styles.dynamicField} name={`links.${index}.url`}/>
                            {
                              index !== 0 && (
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
                              )
                            }
                            {
                              index === 0 && (
                                <button type="button" onClick={() => push({ url: '' })}>
                                  <Image
                                    src={addIcon}
                                    className="h-10 w-10 px-2 md:h-16 md:w-16 md:px-4"
                                    alt="Add"
                                  />
                                </button>
                              )
                            }
                          </div>
                          <div>
                            <ErrorMessage
                              name={`links.${index}.url`}
                              component='div'
                              className={styles.errorMsg}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </FieldArray>
              </div>
              <div>
                <h2>Adjunta el enlace del código de algún programa que hayas desarrollado o que estés desarrollando *</h2>
                <p style={{fontSize:"0.85rem", color:"gray"}}>
                  Nos importa que hayas programado lo suficiente como para que sepas que te gusta hacerlo.
                  Si no tienes un proyecto, puedes escribir un programa pequeño (como una calculadora, un minijuego o lo
                  que tú quieras). No tiene que ser un proyecto grande, lo que importa es que lo hayas desarrollado tú
                  mismo sin usar un framework (ie. Django, Express, etc). Puede estar escrito en cualquier lenguaje de
                  programación. Recomendamos usar un servicio como GithubGist para publicar tu código.
                </p>
              </div>
              <div className="w-11/12 md:w-7/12">
                <Field className={styles.field} name="projectUrl"/>
                <ErrorMessage component='a' className={styles.errorMsg} name='projectUrl' />
              </div>
              <div>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label className={styles.label} htmlFor="reason">¿Por qué quieres asistir a MakerLab?</label>
                <Field className={styles.field} name="reason"/>
                <ErrorMessage component='a' className={styles.errorMsg} name='reason' />
              </div>
              <div>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label className={styles.label} htmlFor="topics">¿Qué quieres aprender durante tu estadia en el MakerLab?</label>
                <Field className={styles.field} name="topics"/>
                <ErrorMessage component='a' className={styles.errorMsg} name='topics' />
              </div>
              <div>
                <button
                  className="mt-2 mb-10 bg-red-700 rounded-sm px-5 py-2 text-white
                  font-medium text-md text-center font-bold
                  hover:bg-red-800 focus:outline-none"
                  type="submit">
                  Enviar
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
