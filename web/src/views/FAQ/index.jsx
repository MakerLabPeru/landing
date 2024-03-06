import { Disclosure } from "~/components";

const FAQ = () => (
  <div className="container mt-10 md:mt-16">
    <h1 className="text-3xl font-bold text-white">
      Preguntas frecuentes
    </h1>

    <Disclosure title="¿Qué es MakerLab?">
      MakerLab es una comunidad tecnológica que une a varias personas con la
      misma pasión de aprender y enseñar.
    </Disclosure>
  </div>
);

export default FAQ;
