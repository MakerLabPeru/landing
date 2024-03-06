import Image from 'next/image';
import { Button } from '../../components';
import { SocialNav } from "../../components/SocialNav";

const Home = () => (
  <div>
    <div className="absolute right-0">
      <SocialNav />
    </div>

    <main>
      <div>
        <div className="max-w-96">
          <h1 className="text-3xl font-bold text-white">
            Somos una comunidad para APRENDER, ENSEÑAR y COMPARTIR tecnología
          </h1>
        </div>
        <Button href="/">
          Postular
        </Button>
      </div>
      <Image
        src='/images/home-hero-1.png'
        width={500}
        height={500}
        alt='Comunidad de MakerLab'
        style={{
          objectFit: 'cover',
        }}
      />
    </main>

    <div className="bg-[#222222] flex justify-center my-6">
      <div className="max-w-screen-lg flex flex-row space-x-10 items-center py-6">
        <p className="text-white">
          Con el apoyo de:
        </p>
        <Image
          src="/logos/cide.svg"
          alt="logo de CIDE PUCP"
          width={134}
          height={44}
        />
        <Image
          src="/logos/pucp.svg"
          alt="logo PUCP"
          width={174}
          height={58}
        />
        <Image
          src="/logos/equipu.svg"
          alt="logo de Equipu PUCP"
          width={97}
          height={50}
        />
      </div>
    </div>

    <div className="flex justify-center my-10">
      <div className="flex flex-row items-center space-x-7 max-w-screen-lg">
        <div className="flex flex-col space-y-6 w-1/2">
          <h2 className="text-2xl text-white font-bold">
            ¿Quiénes somos?
          </h2>
          <p className="text-white">
            En MakerLab brindamos <b>un espacio propicio para el aprendizaje</b>
            &nbsp;y el intercambio tecnológico: horizontal, autodirigido, abierto
            y libre de estructuras
          </p>
          <Button href="/">
            Conócenos
          </Button>
        </div>
        <Image
          src="/images/home-who-1.png"
          width={496}
          height={394}
          alt="makerlab"
        />
      </div>
    </div>

    <div className="flex justify-center my-10">
      <div className="flex flex-row items-center space-x-7 max-w-screen-lg">
        <Image
          src="/images/home-methodology-1.png"
          width={403}
          height={390}
          alt="makerlab"
        />

        <div className="flex flex-col space-y-6 w-1/2 items-end">
          <h2 className="text-2xl text-white font-bold">
            Nuestra metodología
          </h2>
          <p className="text-white text-right">
            <b>En MakerLab no existen clases.</b><br/>
            Cada uno es libre de ir a su propio ritmo e interés,
            pero siempre va a encontrar apoyo en uno de nuestros Coaches.
          </p>
          <Button href="/">
            Conócenos
          </Button>
        </div>
      </div>
    </div>

  </div>
);

export default Home;
