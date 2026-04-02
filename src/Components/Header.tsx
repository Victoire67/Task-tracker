export default function Header() {
  return (
    <header className="flex p-8">
      <h1 className="text-2xl font-bold">
        task<span className="text-blue-600">Tracker</span>
      </h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Completed</li>
          <li>Stats</li>
        </ul>
      </nav>
    </header>
  );
}
