import {
  Link,
  useParams,
  useLoaderData,
  useLocation,
  defer,
  Await,
} from 'react-router-dom';
import { getData } from '../component/getData';
import { Suspense } from 'react';

export function loader() {
  return defer({ vans: getData() });
}

export default function VanDetail() {
  const vanPromise = useLoaderData();
  const { id } = useParams();
  const location = useLocation();

  const search = location.state?.search || '';
  const allVans = location.state?.type || 'all';

  function rendervans(vans) {
    const foundVan = vans.find((van) => van.id === id);

    return (
      <div className="van-detail-box">
        <Link to={`..${search}`} relative="path" className="back-link">
          &larr; Back to {allVans.toLowerCase()} vans
        </Link>
        <div className="detail-box">
          <div>
            <img
              src={foundVan.imgUrl}
              alt="Van Photo"
              className="detail-van-img"
            />
            <i className={foundVan.type}>{foundVan.type}</i>
            <h2>{foundVan.name}</h2>
            <p>
              <strong>${foundVan.price}</strong>/day
            </p>
            <p>{foundVan.description}</p>
          </div>
          <Link className="detail-rent-van">Rent this van</Link>
        </div>
      </div>
    );
  }

  return (
    <Suspense>
      <Await resolve={vanPromise.vans}>{rendervans}</Await>;
    </Suspense>
  );
}
