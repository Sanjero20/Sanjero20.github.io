import Container from '../Container';
import Project from './Project';

export type ProjectObj = {
  projectName: string;
  imageSrc: string;
  description: string;
  repository: string;
  site?: string;
};

const projectList: ProjectObj[] = [
  {
    projectName: 'BatStateU OPCR',
    imageSrc: 'opcr.png',
    description:
      'A system that calibrates the office performance sheet of the offices and department heads.',
    repository: 'https://github.com/Sanjero20/bsu-opcr-frontend',
  },
  {
    projectName: 'CV Generator',
    imageSrc: 'cv-generator.png',
    description: '',
    repository: 'https://github.com/Sanjero20/cv-application',
    site: 'https://sanjero20.github.io/cv-application/',
  },
  {
    projectName: 'World Flags',
    imageSrc: 'world-flags.png',
    description: '',
    repository: 'https://github.com/Sanjero20/world-flags',
    site: 'https://sanjero20.github.io/world-flags/',
  },
  {
    projectName: 'Memory Game',
    imageSrc: 'memory-game.png',
    description: '',
    repository: 'https://github.com/Sanjero20/memory-card',
    site: 'https://sanjero20.github.io/memory-card/',
  },
];

function Projects() {
  return (
    <Container id="projects" className="py-2">
      <h1 className="text-2xl font-bold">FEATURED PROJECTS</h1>

      <div className="flex flex-col gap-4">
        {projectList.map((project, index) => {
          return <Project key={index} data={project} />;
        })}
      </div>
    </Container>
  );
}

export default Projects;
