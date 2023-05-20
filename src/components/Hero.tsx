function Hero() {
  return (
    <div className="container mx-auto flex items-center justify-center gap-20 px-24">
      <img className="h-72 rounded-lg" src="./oreki.webp"></img>

      <div className="flex flex-col font-bold">
        <h1 className="text-5xl">Hi, I'm Angelo Santos</h1>
        <h2 className="text-xl">
          A front-end web developer based in the Philippines
        </h2>
        <br />
      </div>
    </div>
  );
}

export default Hero;
