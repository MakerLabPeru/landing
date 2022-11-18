import {useRouter} from 'next/router';
import {useCallback} from 'react';

function Button({children, to = '/'}) {
  const router = useRouter();
  const handleClick = useCallback((e) => {
    e.preventDefault();
    router.push(to);
  }, [router, to]);

  return (
    <button
      onClick={handleClick}
      type="button"
      className="text-white bg-red-700 hover:bg-red-800 focus:outline-none font-medium rounded-sm text-sm px-5 py-2.5 text-center"
    >
      {children}
    </button>
  );
}

export default Button;
