import Image from "next/image";
import { Button } from "~/components";

const OurMethodology = () => (
  <div className="flex flex-col gap-4 md:flex-row md:items-center">
    <Image
      src="/images/home-methodology-1.png"
      width={403}
      height={390}
      alt="Makerlab"
    />
    <div className="flex flex-col gap-4 items-end">
      <h2 className="text-white font-bold text-xl text-right">
        Nuestra metodología
      </h2>
      <p className="text-white text-right">
        <b>En MakerLab no existen clases.</b><br/>
        Cada uno es libre de ir a su propio ritmo e interés, pero siempre va a encontrar apoyo en uno de nuestros Coaches.
      </p>
      <Button href="/">
        Conócenos
      </Button>
    </div>
  </div>
);

export default OurMethodology;
