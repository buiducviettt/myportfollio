import Images from '../../assets/image/Images';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={Images.logo} alt="Logo" />
        </div>

        <nav className="nav_bar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
