import { useOutletContext } from 'react-router-dom';

export default function Details() {
  const van = useOutletContext();

  return (
    <div className="details-box">
      <p>
        <strong>Name: </strong>
        {van.name}
      </p>
      <p>
        <strong>Type: </strong>
        {van.type}
      </p>
      <p>
        <strong>Description: </strong>
        {van.description}
      </p>
      <p>
        <strong>Visibility: </strong>
        {van.visibility}
      </p>
    </div>
  );
}
