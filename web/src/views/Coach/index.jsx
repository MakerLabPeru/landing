import {useRouter} from 'next/router';

const Coach = () => {
  const router = useRouter();
  const {coach} = router.query;

  return (
    <h1 className="text-3xl font-bold underline">Coach {coach}!</h1>
  );
}

export default Coach;
