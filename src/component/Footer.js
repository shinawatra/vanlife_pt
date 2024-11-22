export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="van__footer">
      <p>
        &copy; <span className="year">{date}</span> #VANLIFE
      </p>
    </footer>
  );
}
