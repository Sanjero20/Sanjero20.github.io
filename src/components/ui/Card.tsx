import { IProject } from "../data/projects";

interface CardProps {
  project: IProject;
}

function Card({ project }: CardProps) {
  return (
    <div className="flex h-64 w-full flex-col justify-between rounded-lg border-2 border-neutral-500">
      <div className="h-full"></div>

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
