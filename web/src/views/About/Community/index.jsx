import Layout from '~/views/Layout';
import Image from "next/image";
import {about1, about2, about3, about4, about5, learning, timelessness, personalization, community} from "../../../../public";
import ValueIcon from "../../../components/ValueIcon";

const Community = () => (
  <Layout>
    <div className="container mt-10 md:mt-16 divide-y divide-solid md:divide-y md:divide-white">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="col-span-1 flex justify-center md:justify-center">
          <div className="flex items-center">
            <Image
              src={about1}
              className="h-40 w-40 px-2 md:h-48 md:w-48 md:px-4"
              alt=""
            />
          </div>
          <div className="">
            <Image
              src={about2}
              className="h-48 w-44 px-2 md:h-60 md:w-64 md:px-4"
              alt=""
            />
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-bold relative mb-3">
            ¿Por qué hacemos lo que hacemos?
          </h1>
          <p>
            Buscamos crear un mundo más equitativo en oportunidades, mediantes la enseñanza de tecnología.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 md:mt-10 md:grid-cols-2 items-center">
        <div className="p-4 order-last md:order-first">
          <h1 className="text-2xl font-bold relative mb-3">
            ¿Cómo lo hacemos?
          </h1>
          <p>
            En MakerLab no existen clases ni currícula. Eres libre de ir a tu propio ritmo, siempre con el apoyo de un Coach asignado.
            El único requisito es asistir y descubrir la tecnología más afín a cada uno para aprender y compartir este conocimiento en la
            comunidad como Coach Maker.
          </p>
          <div className="flex justify-center items-center h-40 md:h-60">
            <ValueIcon svg={learning} title="Autoaprendizaje"/>
            <ValueIcon svg={timelessness} title="Atemporalidad"/>
            <ValueIcon svg={personalization} title="Personalización"/>
            <ValueIcon svg={community} title="Comunidad"/>
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center mt-5">
          <div className="flex justify-center items-center">
            <div className="">
              <Image
                src={about3}
                className="h-30 w-48 px-2 md:h-40 md:w-64 md:px-4"
                alt=""
              />
            </div>
            <div className="">
              <Image
                src={about4}
                className="h-46 w-40 px-2 md:h-26 md:w-56 md:px-4"
                alt=""
              />
            </div>
          </div>
          <br/>
          <div className="flex justify-center">
            <Image
              src={about5}
              className="h-30 w-2/3 px-2 md:h-60 md:w-96 md:px-4"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 items-center">
        <div className="p-4">
          <h1 className="text-2xl font-bold relative mb-3">
            ¿Qué lo hacemos?
          </h1>
          <p>
            Aprender en comunidad. Irás profundizando en el lenguaje de programación de tu preferencia y trabajando en base a tus propios proyectos si así lo deseas.
            No tenemos ningún tipo de restricción, pues todos son bienvenidos independientemente de su edad, sexo, situación económica o académica.
          </p>
        </div>
      </div>
      <br/>
    </div>
  </Layout>
);

export default Community;
