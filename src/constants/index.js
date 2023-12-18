import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  graph,
  speech_icon,
  Microsoft,
  TensorFlow,
  Pytorch,
  Python,
  c_sharp,
  c,
  visual_decor,
  recommendation,
  streamlit,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning",
    icon: meta,
  },
  {
    title: "Data Scientist",
    icon: graph,
  },
  {
    title: "NLP",
    icon: speech_icon,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "Tensorflow",
    icon: TensorFlow,
  },
  {
    name: "Pytorch",
    icon: Pytorch,
  },
  {
    name: "C#",
    icon: c_sharp,
  },
  {
    name: "c++",
    icon: c,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Streamlit",
    icon: streamlit,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Microsoft",
    icon: Microsoft,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2023",
    points: [
      "Developed robust Data Loss Prevention (DLP) policies, bolstering security against unauthorized access.",
      "Engineered a Dynamic Link Library (DLL) for recommending Sensitive Information Types (SIT), enhancing data protection.",
      "Recognized with an internship certificate from Microsoft for innovative contributions in integrating DL models for enhanced data security.",
      "Technologies Used:- c#, Python, REST APIs , Deep Learninig, Microsoft Cognitive Services, XAML",
    ],
  },
  {
    title: "Machine Learning Engineer",
    company_name: "Fiverr",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2023 - Present",
    points: [
      "Expert in developing custom AI/ML models, leveraging GPT, DALL-E, and Stable Diffusion.",
      "Proficient in designing secure RESTful APIs for seamless integration.",
      "Experienced in deploying models on cloud platforms or local servers for scalability and security.",
      "Specialized in integrating AI/ML models into websites for enhanced user experiences.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Felvin",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Hemal proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Hemal does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Hemal optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Visual Decor",
    description:
      "Created an AI platform for virtual interior and exterior staging and redesign.",
    tags: [
      {
        name: "html/css/javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Stable Diffusion",
        color: "green-text-gradient",
      },
      {
        name: "ML: Tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: visual_decor,
    source_code_link: "https://github.com/The1one1/aiai.studio.git",
  },
  {
    name: "DressMate",
    description:
      "Clothing recommendation with personalized styling and a virtual try-on feature",
    tags: [
      {
        name: "Streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "green-text-gradient",
      },
      {
        name: "Keras",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/The1one1/DressMate.git",
  },
  {
    name: "Movie Recommendation System",
    description:
      "Created a movie recommendation system using the MovieLens dataset",
    tags: [
      {
        name: "Streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "orange-text-gradient",
      }
    ],
    image: recommendation,
    source_code_link: "https://github.com/The1one1/Movie_Recommendation_System.git",
  },
];

export { services, technologies, experiences, projects };
