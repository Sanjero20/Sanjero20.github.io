import Container from "./Container";
import { projects } from "./data/projects";
import Card from "./ui/Card";

function Projects() {
  return (
    <Container id="projects" className="flex h-full flex-col gap-2 py-4">
      <h1 className="text-3xl font-bold">Projects</h1>

      <div className="grid h-full gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </Container>
  );
}

export default Projects;
