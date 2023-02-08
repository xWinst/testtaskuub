import { NavLink } from 'react-router-dom';

const getClass = ({ isActive }) => (isActive ? 'active' : 'link');

const Header = () => {
  return (
    <header className="header">
      <nav className="nav justify-content-center">
        <NavLink to="/" className={getClass}>
          Про себе
        </NavLink>
        <NavLink to="/gallery" className={getClass}>
          Галерея
        </NavLink>
        <NavLink to="/contacts" className={getClass}>
          Контакти
        </NavLink>
        <NavLink to="/messages" className={getClass}>
          Повідомлення
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
