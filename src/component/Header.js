import { NavLink, Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="van__header">
        <Link className="vanlife" to="/">
          #Vanlife
        </Link>

        <nav className="van__nav">
          <NavLink
            to="host"
            className={({ isActive }) => (isActive ? 'active-link' : null)}
          >
            Host
          </NavLink>

          <NavLink
            to="about"
            className={({ isActive }) => (isActive ? 'active-link' : null)}
          >
            About
          </NavLink>

          <NavLink
            to="vans"
            className={({ isActive }) => (isActive ? 'active-link' : null)}
          >
            Vans
          </NavLink>

          <NavLink
            to="login"
            className={({ isActive }) => (isActive ? 'active-link' : null)}
          >
            Login
          </NavLink>
        </nav>
      </header>
    </>
  );
}
