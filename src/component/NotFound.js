import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>The page you are looking for is not found.</h1>
      <Link to="/">Return to home</Link>
    </div>
  );
}
