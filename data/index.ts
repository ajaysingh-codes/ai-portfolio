export const navItems = [
  { name: "Home", link: "#home", logo: "/ajay.png" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize collaborative development, fostering open communication and feedback",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Adaptable to diverse work environments and schedules",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for software development and cloud computing",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently developing a Drupal CMS site for FSU - College of Medicine",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Custom Sentiment Analysis App",
    des: "Idea: Developed a Flask-based web app that uses the OpenAI API and the NLTK toolkit to analyze textual data and provide detailed sentiment scores, using HTML and CSS for a responsive User Interface.",
    skills: ["Python", "Flask", "HTML", "CSS", "OpenAI API"],
    img: "/p2.png",
    iconLists: ["/python.svg", "/flask.svg", "/html.svg", "/css.svg", "/chatgpt.svg"],
    link: "https://github.com/ajaysingh-codes/flask-news-sentiment",
  },
  {
    id: 2,
    title: "EduControl - A Student Management System",
    des: "Idea: Our team developed a comprehensive school management system using React.js, Node.js, Tailwind CSS, and MySQL, integrating REST APIs for seamless operations and utilizing Postman for API validation.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/nodejs-icon.svg", "/getpostman-icon.svg", "/mysql.svg"],
    link: "https://github.com/Edward-Vong/studentManagement",
  },
];

export const skills = [
  {
    id: 1,
    name: "Python",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    id: 3,
    name: "PHP",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  },
  {
    id: 2,
    name: "JavaScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    id: 4,
    name: "React.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 5,
    name: "Node.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    id: 6,
    name: "AWS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    id: 7,
    name: "Docker",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    id: 7,
    name: "Figma",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Drupal Developer/UX Designer",
    company: "Florida State University College of Medicine",
    desc: "Engineered Figma prototypes and coordinated workflows to transition designs to Drupal CMS, partnering with stakeholders for data-driven project goals",
    className: "md:col-span-2",
    date: "May 2024 - Present",
    thumbnail: "/fsu-logo-2.svg",
  },
  {
    id: 2,
    title: "SWE Fellow",
    company: "Headstarter AI",
    desc: "Engineered Figma prototypes and coordinated workflows to transition designs to Drupal CMS, partnering with stakeholders for data-driven project goals",
    className: "md:col-span-2",
    date: "Jul 2024 - Sept 2024",
    thumbnail: "/headstarter-logo.avif",
  },

  {
    id: 3,
    title: "AI Programmer (Prompt Engineer)",
    company: "SJSU Department of Innovation and Leadership",
    desc: "Integrated AI solutions and optimized research processes, increasing project efficiency by 60% and reducing paper assessment time by 89%.",
    className: "md:col-span-2", // change to md:col-span-2
    date: "Feb 2024 - Jun 2024",
    thumbnail: "/sjsu-logo.png",
  },
  {
    id: 3,
    title: "Research Assistant",
    company: "Kestrel Institute",
    desc: "Conducted research on Generative AI and Self-Organizing Systems, supporting projects and participating in Neurosymbolic AI workshops.",
    className: "md:col-span-2", // change to md:col-span-2
    date: "Jul 2023 - Apr 2024",
    thumbnail: "/kestrel-logo.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/ajaysingh-codes",
  },
  {
    id: 2,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/ajay-singh-dev/",
  },
];
