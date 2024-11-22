import {
  useParams,
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  defer,
  Await,
} from 'react-router-dom';
import { getData } from '../component/getData';
import { Suspense } from 'react';

export function loader() {
  return defer({ vans: getData() });
}

export default function HostVanDetails() {
  const vanPromise = useLoaderData();
  const param = useParams();

  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    fontSize: '17px',
  };

  function renderVans(vans) {
    const foundVan = vans.find((van) => van.id === param.id);

    return (
      <div className="hostvan-detail-box">
        <Link to=".." relative="path">
          &larr;Back to all vans
        </Link>
        <div className="hostvan-detail-type-box">
          <article>
            <img src={foundVan.imgUrl} />
          </article>

          <article>
            <i className={foundVan.type}>{foundVan.type}</i>
            <h2>{foundVan.name}</h2>
            <p>
              <strong>${foundVan.price}</strong>/day
            </p>
          </article>
        </div>

        <nav className="hostvan-detail-nav">
          <NavLink
            to="details"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Details
          </NavLink>

          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Pricing
          </NavLink>

          <NavLink
            to="photo"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Photo
          </NavLink>
        </nav>
        <Outlet context={foundVan} />
      </div>
    );
  }

  return (
    <Suspense fallback={<h2>Loading... van</h2>}>
      <Await resolve={vanPromise.vans}>{renderVans}</Await>
    </Suspense>
  );
}
