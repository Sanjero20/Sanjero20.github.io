import Container from "./Container";
import SectionTitle from "./ui/SectionTitle";

import { techStack } from "./data/techstack";

function Skills() {
  return (
    <Container className="flex h-64 flex-col items-center justify-center gap-2 py-4">
      <SectionTitle text="SKILLS" />

      {/* Icons of Programming Languages and Tools */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {techStack.map((icon, index) => (
          <div
            key={index}
            className="flex select-none flex-col items-center gap-2"
          >
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.src}`}
              alt={icon.name}
              className={`h-8 sm:h-10 ${icon.styles}`}
              draggable="false"
            />
            {/* <p className="hidden text-sm sm:block">{icon.name}</p> */}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Skills;
