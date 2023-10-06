import logo from '../assets/logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" />
    </header>
  );
};

export default Header;