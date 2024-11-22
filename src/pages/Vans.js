import { getData } from '../component/getData';
import {
  Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await,
} from 'react-router-dom';
import { Suspense } from 'react';

export function loader() {
  return defer({ vans: getData() });
}

export default function Vans() {
  const vanPromise = useLoaderData();
  const [searchParam, setSearchParam] = useSearchParams();

  const typeFilter = searchParam.get('type');

  function renderVans(vans) {
    const filterVans = typeFilter
      ? vans.filter((van) => van.type === typeFilter)
      : vans;

    const displayVan = filterVans.map((van) => {
      return (
        <Link
          to={`${van.id}`}
          key={van.id}
          state={{ search: `?${searchParam.toString()}`, type: typeFilter }}
        >
          <section key={van.id} className="van-box">
            <img src={van.imgUrl} alt="Van photo" />
            <article className="van__inner">
              <h2>{van.name}</h2>
              <p>
                <strong>${van.price}</strong>/day
              </p>
            </article>
            <i className={van.type}>{van.type}</i>
          </section>
        </Link>
      );
    });

    return (
      <>
        <div className="van-links">
          <button
            onClick={() => {
              setSearchParam({ type: 'Simple' });
            }}
            className={typeFilter === 'Simple' ? 'Simple' : null}
          >
            Simple
          </button>

          <button
            onClick={() => {
              setSearchParam({ type: 'Luxury' });
            }}
            className={typeFilter === 'Luxury' ? 'Luxury' : null}
          >
            Luxury
          </button>

          <button
            onClick={() => {
              setSearchParam({ type: 'Rugged' });
            }}
            className={typeFilter === 'Rugged' ? 'Rugged' : null}
          >
            Rugged
          </button>

          <button
            onClick={() => {
              setSearchParam({});
            }}
            className="clear-filter-link"
          >
            Clear filters
          </button>
        </div>
        <div className="van-con">{displayVan}</div>
      </>
    );
  }

  return (
    <div className="van-main">
      <h1>Explore our van options</h1>
      <Suspense fallback={<h2>Loading... vans</h2>}>
        <Await resolve={vanPromise.vans}>{renderVans}</Await>
      </Suspense>
    </div>
  );
}
