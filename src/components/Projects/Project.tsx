import { ProjectObj } from './Projects';

type ProjectProps = {
  data: ProjectObj;
};

function Project({ data }: ProjectProps) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-bold">{data.projectName}</h1>

      <div className="flex flex-col md:flex md:flex-row md:gap-4">
        <img
          src={`./projects/${data.imageSrc}`}
          alt={data.imageSrc}
          className="w-full rounded-lg lg:w-1/2"
        />

        {/* Project Details */}
        <section className="flex flex-col gap-2">
          {/* Description */}
          <p className="text-justify">{data.description}</p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 text-center text-sm font-bold lg:justify-start">
            <a
              href={data.repository}
              target="_blank"
              className="w-32 rounded-3xl bg-white px-4 py-2 text-black hover:cursor-pointer"
            >
              Repository
            </a>

            {data.site && (
              <a
                href={data.site}
                target="_blank"
                className="w-32 rounded-3xl bg-primary px-4 py-2 hover:cursor-pointer"
              >
                Live Preview
              </a>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Project;
