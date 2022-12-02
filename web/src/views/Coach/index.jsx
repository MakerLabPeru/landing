import {useRouter} from 'next/router';
import Layout from '~/views/Layout';

function Coach() {
  const router = useRouter();
  const {coach} = router.query;

  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">Coach {coach}!</h1>
    </Layout>
  );
}

export default Coach;
