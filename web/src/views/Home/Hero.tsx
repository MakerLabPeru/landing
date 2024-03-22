import Image from "next/image";
import { Button } from "~/components";

const Hero = () => (
  <main className="relative h-80 md:h-96">
    <Image
      fill
      className="grayscale absolute z-0"
      src="/images/home-hero-1.png"
      alt="Comunidad de MakerLab"
      style={{
        objectFit: "cover"
      }}
    />

    <div
      className="h-full md:container md:mx-auto absolute z-10 left-0 right-0 top-0 bottom-10 grid place-items-center">
      <div className="flex flex-col gap-4 m-8">
        <h1 className="text-white text-xl font-semibold md:text-4xl">
          Somos una comunidad para APRENDER, ENSEÑAR y COMPARTIR tecnología
        </h1>
        <Button href="/">
          Postular
        </Button>
      </div>
    </div>
  </main>
);

export default Hero;
