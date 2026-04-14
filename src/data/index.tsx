
export const experiences = [
  {
    title: "MERN Stack Developer",
    company: "Coremagix Software Pvt Ltd.",
    date: "August 2022 - Present",
    isActive: true,
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js","REST APIs", "Tailwind CSS", "JWT", "AWS", "Droplet", "CI/CD"],
    points: [
      "Developing scalable full-stack web applications focusing on clean architecture and highly reusable components.",
      "Designing RESTful APIs and ensuring secure authentication using JWT and role-based access control.",
      "Deploying and managing applications on cloud and VPS environments, including AWS EC2, S3, and DigitalOcean Droplets, using Docker containers and Linux-based server configurations.",
      "Participating in Agile development cycles, conducting code reviews, and supporting CI/CD deployments to ensure smooth and reliable production releases."
    ],
  },
  // {
  //   title: "MERN Stack Developer",
  //   company: "MindScape Technologies Pvt. Ltd.",
  //   date: "July 2022 – Aug 2024",
  //   isActive: false,
  //   techStack: [
  //     "MongoDB",
  //     "Express.js",
  //     "React.js",
  //     "Node.js",
  //     "Tailwind CSS",
  //     "JWT Authentication",
  //     "REST APIs",
  //     "Git"
  //   ],
  //   points: [
  //     <span key="1">
  //       Developed and maintained scalable full-stack web applications using the
  //       <strong className="text-cyan-400"> MERN stack </strong>
  //       including company websites and e-commerce platforms.
  //     </span>,

  //     <span key="2">
  //       Built dynamic <strong className="text-cyan-400">admin and user dashboards</strong>
  //       using React Hooks, reusable components, and Tailwind CSS to improve
  //       UI consistency and application responsiveness.
  //     </span>,

  //     <span key="3">
  //       Implemented secure <strong className="text-cyan-400">JWT-based authentication
  //         and middleware route protection</strong> ensuring role-based access control.
  //     </span>,

  //     <span key="4">
  //       Optimized MongoDB queries and backend logic to improve
  //       <strong className="text-cyan-400">API performance and response times</strong>.
  //     </span>,

  //     <span key="5">
  //       Collaborated with UI/UX designers and QA teams using
  //       <strong className="text-cyan-400">Git-based workflows</strong>
  //       to deliver production-ready features.
  //     </span>
  //   ],
  // }

];

export const projects = [
  {
    title: "Nopelt – AI Powered Conversation Assistant",
    description:
      "AI-based mobile application that generates smart replies for real-life conversations and social media scenarios.",
    tags: [
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "REST APIs",
      "OneSignal",
      "AI Logic"
    ],
    highlights: [
      "Built RESTful APIs using Node.js and Express.js for managing scenarios, replies, and user activity",
      "Designed MongoDB schema for scenarios, response templates, analytics tracking, and user data",
      "Developed mobile interface using React Native for browsing scenarios and generating instant replies",
      "Implemented JWT-based authentication and secure API access",
      "Integrated push notifications using OneSignal for trending scenarios and updates",
      "Designed modular backend architecture with controllers, routes, and middleware"
    ],
    githubUrl: "https://play.google.com/store/apps/details?id=com.saurabh.Nopelt",
    liveUrl: "https://nopelt.com"
  }
,

  {
    title: "IntervueX – Interview Management Mobile App",
    description:
      "A smart mobile application to track interviews, manage job applications, and receive timely reminders to stay organized and reduce interview stress.",
    tags: [
      "React Native",
      "Expo",
      "AsyncStorage",
      "Local Notifications",
      "React Navigation",
      "Mobile UI/UX",
      "State Management"
    ],
    highlights: [
      "Developed a complete interview tracking system with status management (Applied, Scheduled, Completed, Rejected, Selected)",
      "Implemented advanced local notification system with reminders at 30 minutes, 15 minutes, exact time, and post-interview follow-up",
      "Designed calendar-based interview visualization using react-native-calendars for better scheduling",
      "Built dynamic forms with conditional fields for virtual (meeting link) and face-to-face (location link) interviews",
      "Integrated deep linking support to open meeting links or map locations directly from the app",
      "Created dashboard with real-time filtering and insights for interview progress tracking",
      "Focused on clean UI/UX with reusable components, modern design system, and smooth animations"
    ],
    githubUrl: "", // add if available
    liveUrl: " https://intervuex-app.vercel.app/" // add Play Store link here
  }
];
