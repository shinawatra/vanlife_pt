import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="van__about">
      <section className="about__inner">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>Add adventure to your life by joining the #vanlife movement.</p>
        <p>Rent the perfect van to make your perfect road tripp.</p>
        <Link className="about__find" to="/vans">
          Find your van
        </Link>
      </section>
    </div>
  );
}
