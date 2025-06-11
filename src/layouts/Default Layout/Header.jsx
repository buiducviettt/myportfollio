import { useEffect, useState } from 'react';
import Images from '../../assets/image/Images';
import { Link } from 'react-router-dom';

const Header = ({ onAboutClick, onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={Images.logo} alt="Logo" />
          </a>
        </div>
        <nav className="nav_bar">
          <ul>
            <li>
              <Link to="/" onClick={onAboutClick}>
                About
              </Link>
            </li>
            <li>
              <Link to="/" onClick={onContactClick}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
