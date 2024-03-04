import { IProject } from "../data/projects";

interface CardProps {
  project: IProject;
}

function Card({ project }: CardProps) {
  return (
    <div className="flex h-64 w-full flex-col justify-between rounded-lg border-2 border-neutral-500">
      <div className="group relative h-full">
        {/* Image */}
        <img
          src={project.img}
          alt={project.title}
          className="h-full w-full rounded-t-lg object-cover transition-all ease-in-out group-hover:opacity-5"
        />

        {/* Description  */}
        <div className="absolute inset-0 hidden h-full gap-2 p-4 opacity-0 group-hover:flex group-hover:opacity-100">
          <p className="text-md font-bold text-white">{project.description}</p>
        </div>
      </div>

      <hr className="border-neutral-500" />

      <div className="flex justify-between p-2">
        <h3 className="text-md font-bold">{project.title}</h3>

        <div className="flex gap-2">
          <a
            href={project.code}
            target="_blank"
            className="w-16 rounded px-2 text-center transition-all ease-in-out hover:bg-neutral-100 hover:text-body"
          >
            Code
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="w-16 rounded px-2 text-center transition-all ease-in-out hover:bg-neutral-100 hover:text-body"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
