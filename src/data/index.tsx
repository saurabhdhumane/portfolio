
export const experiences = [
  {
    title: "MERN Stack Developer",
    company: "Codereach Software Pvt Ltd.",
    date: "Nov 2024 - Present",
    isActive: true,
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "CI/CD"],
    points: [
      "Developing scalable full-stack web applications focusing on clean architecture and highly reusable components.",
      "Designing RESTful APIs and ensuring secure authentication using JWT and role-based access control.",
      "Managing CI/CD deployments and conducting rigorous code reviews to ensure reliable production releases.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company: "Globalion Technology Solutions Pvt. Ltd.",
    date: "Oct 2023 – Sep 2024",
    isActive: false,
    techStack: ["React Hooks", "Tailwind CSS", "REST APIs", "Payment Gateways"],
    points: [
      <span key="1">
        Integrated complex RESTful APIs and payment gateways, achieving a{" "}
        <strong className="text-cyan-400">30% reduction</strong> in application
        errors.
      </span>,
      "Built responsive admin and user dashboards with React Hooks and Tailwind CSS, vastly improving usability.",
      <span key="3">
        Collaborated directly with UI/UX teams supporting{" "}
        <strong className="text-cyan-400">zero-downtime</strong> releases.
      </span>,
    ],
  },
  {
    title: "MERN Stack Developer",
    company: "Sofrego Private Limited",
    date: "Jun 2022 – Aug 2023",
    isActive: false,
    techStack: ["MERN Stack", "Git", "GitHub", "Postman", "Agile"],
    points: [
      "Built secure, high-performance full-stack applications from the ground up using the MERN stack.",
      "Optimized MongoDB schemas and complex queries to drastically reduce backend latency.",
      "Operated in Agile sprints, maintaining clean code standards using Git and GitHub.",
    ],
  },
];

export const projects = [
  {
    title: "Smart Insurance Platform",
    description:
      "A massive full-stack web application designed to manage customer onboarding, policy lifecycles, and automated claims processing through a highly secure architecture.",
    tags: ["React.js", "Node.js", "MongoDB", "JWT Auth"],
    githubUrl: "https://github.com/yourusername/insurance-app",
    liveUrl: "https://yourinsuranceapp.com",
  },
  {
    title: "Digital Banking App",
    description:
      "A highly secure, robust digital banking platform facilitating real-time account management, instantaneous fund transfers, and immutable transaction histories.",
    tags: ["React.js", "Express.js", "Mongoose", "REST Architecture"],
    githubUrl: "https://github.com/yourusername/banking-app",
    liveUrl: "https://yourbankingapp.com",
  },
];
