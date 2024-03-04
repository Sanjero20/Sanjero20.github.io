export interface IProject {
  img: string;
  title: string;
  description: string;
  code: string;
  live: string;
}

export const projects: IProject[] = [
  {
    img: "/assets/geo-trainer.png",
    title: "Geo Trainer PH",
    description: "Sample Description",
    code: "https://github.com/Sanjero20/geo-trainer",
    live: "https://geo-trainer-ph.vercel.app/",
  },
  {
    img: "/assets/message-board.png",
    title: "Mini Message Board",
    description: "",
    code: "https://github.com/Sanjero20/mini-message-board",
    live: "https://mini-message-board-bsor.onrender.com/",
  },
  {
    img: "/assets/dash-scheduler.png",
    title: "Dash Scheduler",
    description: "",
    code: "https://github.com/Sanjero20/dash-scheduler",
    live: "",
  },
  {
    img: "/assets/cv-application.png",
    title: "CV Application",
    description: "",
    code: "https://github.com/Sanjero20/cv-application",
    live: "https://sanjero20.github.io/cv-application/",
  },
  {
    img: "/assets/simon-game.png",
    title: "SIMON Game",
    description: "",
    code: "https://github.com/Sanjero20/simon-game-js",
    live: "https://sanjero20.github.io/simon-game-js/",
  },
  {
    img: "/assets/etch-sketch.png",
    title: "Etch A Sketch",
    description: "",
    code: "https://github.com/Sanjero20/etch-a-sketch",
    live: "https://sanjero20.github.io/etch-a-sketch/",
  },
];
