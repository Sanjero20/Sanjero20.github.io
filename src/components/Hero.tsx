import Container from './Container';

function Hero() {
  return (
    <Container className="flex-col">
      <img
        className="mx-auto w-60 rounded-full p-4 sm:h-72 sm:w-72 "
        src="./oreki.webp"
        alt="profile"
      />

      <div className="flex-col text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">
          Hi, I'm Angelo Santos
        </h1>
        <h2 className="text-sm sm:text-xl">
          A front-end web developer based in the Philippines
        </h2>
      </div>
    </Container>
  );
}

export default Hero;
