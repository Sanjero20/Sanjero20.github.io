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
    description: "Familiarize your knowledge about the Philippine geography.",
    code: "https://github.com/Sanjero20/geo-trainer",
    live: "https://geo-trainer-ph.vercel.app/",
  },
  {
    img: "/assets/message-board.png",
    title: "Mini Message Board",
    description: "Simple message board application.",
    code: "https://github.com/Sanjero20/mini-message-board",
    live: "https://mini-message-board-bsor.onrender.com/",
  },
  {
    img: "/assets/dash-scheduler.png",
    title: "Dash Scheduler",
    description: "Track and manage faculty schedules.",
    code: "https://github.com/Sanjero20/dash-scheduler",
    live: "",
  },
  {
    img: "/assets/cv-application.png",
    title: "CV Application",
    description: "Create your own CV and download it as PDF.",
    code: "https://github.com/Sanjero20/cv-application",
    live: "https://sanjero20.github.io/cv-application/",
  },
  {
    img: "/assets/simon-game.png",
    title: "SIMON Game",
    description: "Memorize the sequence of colors and repeat it.",
    code: "https://github.com/Sanjero20/simon-game-js",
    live: "https://sanjero20.github.io/simon-game-js/",
  },
  {
    img: "/assets/etch-sketch.png",
    title: "Etch A Sketch",
    description: "Draw and sketch anything you want.",
    code: "https://github.com/Sanjero20/etch-a-sketch",
    live: "https://sanjero20.github.io/etch-a-sketch/",
  },
];
