import Container from "./Container";

function Hero() {
  return (
    <Container
      id="home"
      className="mt-[-5rem] flex h-screen flex-col items-center justify-center"
    >
      {/* Profile Picture */}
      <img
        className="mx-auto w-60 rounded-full p-4 sm:h-72 sm:w-72 "
        src="./oreki.webp"
        alt="profile"
      />

      {/* Description */}
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">
          Hi, I'm Angelo Santos
        </h1>

        <em className="text-sm sm:text-xl">
          I love building things for the web
        </em>
      </div>
    </Container>
  );
}

export default Hero;
