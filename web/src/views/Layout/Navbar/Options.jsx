import Option from './Option';

function Options() {
  return (
    <div className="justify-between items-center">
      <ul className="flex md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
          <Option title="Inicio" to="/" />
        </li>
        <li>
          <Option title="Nosotros" to="/about/community" />
        </li>
        <li>
          <Option title="Hackathons" to="/hackathons" />
        </li>
        <li>
          <Option title="FAQ" to="/faq" />
        </li>
      </ul>
    </div>
  );
}

export default Options;
