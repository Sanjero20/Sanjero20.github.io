function Header() {
  return (
    <div className="xs:px-0 container mx-auto flex h-20 items-center justify-between  px-24 text-gray">
      <h1 className="text-3xl font-bold">Angelo Santos</h1>
      <nav>
        <ul className="flex gap-5 text-lg">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
