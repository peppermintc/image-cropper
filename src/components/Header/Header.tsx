import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="header-container">
      <Link className="menu-item" to="/">
        Home
      </Link>
      <Link className="menu-item" to="/instruction">
        Instruction
      </Link>
    </nav>
  );
};

export default Header;
