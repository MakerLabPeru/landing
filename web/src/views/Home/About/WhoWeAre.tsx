import Image from "next/image";
import { Button } from "../../../components";

const WhoWeAre = () => (
  <div className="flex flex-col gap-4 md:flex-row-reverse md:items-center">
    <Image
      src="/images/home-who-1.png"
      width={496}
      height={394}
      alt="Makerlab"
    />
    <div className="flex flex-col gap-4">
      <h2 className="text-white font-bold text-xl">
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
  </div>
);

export default WhoWeAre;
