import {Disclosure} from '~/components';

function FAQ() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Preguntas frecuentes</h1>

      <Disclosure title="¿Qué es MakerLab?">
        MakerLab es una comunidad tecnológica que une a varias personas con la
        misma pasión de aprender y enseñar.
      </Disclosure>
    </>
  );
}

export default FAQ;
