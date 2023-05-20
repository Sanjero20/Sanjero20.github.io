import Container from './Container';

function Header() {
  return (
    <Container className="flex h-20 items-center justify-between ">
      <img className="w-40 invert" src="/logo.webp" />
      <nav className="hidden md:flex">
        <ul className="flex gap-5 text-lg">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </Container>
  );
}

export default Header;
