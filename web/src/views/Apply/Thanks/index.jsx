import Layout from '~/views/Layout';
import Image from 'next/image';
import Button from '~/components/Button';
import bannerThanks from '../../../../public/images/thanks-banner.png';

function Thanks() {
  return (
    <Layout>
      <div className="flex items-center justify-center p-6">
        <Image src={bannerThanks} height={300} alt=" banner" />
      </div>
      <h1 className="text-4xl text-white font-bold text-center pb-6">
        Gracias por postular!
      </h1>
      <h2 className="text-1.5xl text-white text-center">
        Tu aplicación ha sido correctamente enviada, nos pondremos en contacto
        contigo lo más antes posible.
      </h2>
      <div className="flex items-center justify-center p-6">
        <Button>
          Volver al inicio
        </Button>
      </div>
    </Layout>
  );
}

export default Thanks;
