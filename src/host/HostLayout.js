import { Outlet, NavLink } from 'react-router-dom';

function HostLayout() {
  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#121212',
    fontSize: '17px',
  };
  return (
    <div className="host-layout-box">
      <nav className="host-layout-nav">
        <NavLink
          to="."
          style={({ isActive }) => (isActive ? activeStyle : null)}
          end={true}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Income
        </NavLink>

        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Vans
        </NavLink>

        <NavLink
          to="review"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Review
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default HostLayout;
