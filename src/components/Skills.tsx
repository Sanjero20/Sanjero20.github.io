import Container from './Container';

type Stack = {
  name: string;
  src: string;
  styles?: string;
};

const stack: Stack[] = [
  {
    name: 'HTML',
    src: 'html5/html5-original.svg',
  },
  {
    name: 'CSS',
    src: 'css3/css3-original.svg',
  },
  {
    name: 'Javascript',
    src: 'javascript/javascript-original.svg',
  },
  {
    name: 'Typescript',
    src: 'typescript/typescript-original.svg',
  },
  {
    name: 'Sass',
    src: 'sass/sass-original.svg',
  },
  {
    name: 'Tailwind',
    src: 'tailwindcss/tailwindcss-plain.svg',
  },
  {
    name: 'React',
    src: 'react/react-original.svg',
  },
  {
    name: 'NextJS',
    src: 'nextjs/nextjs-line.svg',
    styles: 'invert',
  },
  {
    name: 'Python',
    src: 'python/python-original.svg',
  },
  {
    name: 'Git',
    src: 'git/git-original.svg',
  },
  {
    name: 'Github',
    src: 'github/github-original.svg',
    styles: 'invert',
  },
  {
    name: 'VSCode',
    src: 'vscode/vscode-original.svg',
  },
];

function Skills() {
  return (
    <Container className="flex flex-col  items-center gap-2">
      <h1 className="text-3xl font-bold">SKILLS</h1>
      {/* Icons of Programming Languages and Tools */}

      <div className="flex flex-wrap items-center justify-center gap-4">
        {stack.map((icon, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.src}`}
              alt={icon.name}
              className={`h-8 sm:h-10 ${icon.styles}`}
            />
            <p className="hidden text-sm sm:block">{icon.name}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Skills;
