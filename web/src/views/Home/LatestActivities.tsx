import Image from "next/image";
import { Button } from "../../components";

const LatestActivities = () => (
  <div className="">
    <div className="">
      <Image
        src="/images/home-methodology-1.png"
        width={403}
        height={390}
        alt="makerlab"
      />

      <div className="">
        <h2 className="">
          Nuestra metodología
        </h2>
        <p className="">
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
);

export default LatestActivities;
