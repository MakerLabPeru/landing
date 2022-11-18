import {Disclosure} from '~/components';

import Layout from '../Layout';

function FAQ() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">
        Preguntas frecuentes
      </h1>

      <Disclosure title="¿Qué es MakerLab?">
        MakerLab es una comunidad tecnológica que une a varias
        personas con la misma pasión de aprender y enseñar.
      </Disclosure>
    </Layout>
  );
}

export default FAQ;
