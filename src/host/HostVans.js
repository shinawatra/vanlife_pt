import { Link, useLoaderData, defer, Await } from 'react-router-dom';
import { getData } from '../component/getData';
import { Suspense } from 'react';

export function loader() {
  return defer({ vans: getData() });
}

export default function HostVans() {
  const vanPromise = useLoaderData();

  return (
    <Suspense fallback={<h2>Loading... vans</h2>}>
      <Await resolve={vanPromise.vans}>
        {(vans) => {
          const foundVan = vans
            .filter((van) => van.id <= 3)
            .map((fVan) => {
              return (
                <Link to={`../vans/${fVan.id}`} key={fVan.id}>
                  <div className="host-filter-vans">
                    <div className="f-van">
                      <img
                        src={fVan.imgUrl}
                        alt="Van photo"
                        className="fvan-img"
                      />
                    </div>
                    <article className="type-name-box">
                      <i className={`${fVan.type}`}>{fVan.type}</i>
                      <h2>{fVan.name}</h2>
                      <p>
                        <strong>${fVan.price}</strong>/day
                      </p>
                    </article>
                  </div>
                </Link>
              );
            });

          return (
            <div className="host-van-box">
              <h1> Your listed vans</h1>
              {foundVan}
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
}
