import Link from 'next/link';

function Option({title, to}) {
  return (
    <Link
      href={to}
      className="text-white rounded md:bg-transparent md:text-white-700 md:p-0"
      aria-current="page"
    >
      {title}
    </Link>
  );
}

export default Option;
