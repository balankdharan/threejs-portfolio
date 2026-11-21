import { NavLink } from "react-router-dom";

const links = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
        title="Home"
      >
        <p className="blue-gradient_text">DN</p>
      </NavLink>
      <nav className="flex sm:text-lg gap-5 sm:gap-7 font-medium">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black-500 hover:text-blue-500"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
