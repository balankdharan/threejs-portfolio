import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <hr className="border-slate-200" />
      <div className="footer-container">
        <p className="text-slate-500">
          © {new Date().getFullYear()} <strong>Balan K Dharan</strong>. Made
          with React and Three.js.
        </p>
        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((item) =>
            item.link.startsWith("http") ? (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                title={item.name}
              >
                <img
                  src={item.iconUrl}
                  alt={item.name}
                  className="w-6 h-6 object-contain"
                />
              </a>
            ) : (
              <Link key={item.name} to={item.link} title={item.name}>
                <img
                  src={item.iconUrl}
                  alt={item.name}
                  className="w-6 h-6 object-contain"
                />
              </Link>
            ),
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
