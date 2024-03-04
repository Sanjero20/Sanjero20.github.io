import Container from "./Container";

function Header() {
  return (
    <div className="sticky top-0 bg-body shadow">
      <Container className="flex h-20 items-center justify-between">
        <img className="w-1/3 invert sm:w-40" src="/logo.webp" />

        <nav className="hidden md:flex">
          <ul className="flex gap-5 text-lg">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contacts</a>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
}

export default Header;
