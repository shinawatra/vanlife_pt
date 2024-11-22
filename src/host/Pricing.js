import { useOutletContext } from 'react-router-dom';

export default function Pricing() {
  const van = useOutletContext();
  return (
    <div>
      <p>
        <strong>Price:</strong> ${van.price}.00
      </p>
    </div>
  );
}
