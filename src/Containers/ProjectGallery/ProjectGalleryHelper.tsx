export interface Link {
  displayText: string;
  url: string;
}

export interface Media {
  url: string;
  alt: string;
}


export interface ProjectData {
  id: number;
  mediaList: Media[];
  content: string;
  links: Link[];
  title: string;
  skills: string[];
  previewImage: Media;
  previewText: string;
}

export const Projects: ProjectData[] = [
  {
    id: 1,
    mediaList: [
      {
        url: "https://i.imgur.com/LYXJpbO.png",
        alt: "Chrome Store Page for Workday Extension",
      },
      {
        url: "https://i.imgur.com/4MFgFe1.png",
        alt: "Picture of Workday with the Chrome Extension",
      },
      {
        url: "https://i.imgur.com/FoiLYYS.png",
        alt: "Website Directions Page",
      },
    ],
    links: [
      {
        displayText: "Chrome Web Store",
        url: "https://chromewebstore.google.com/detail/ubc-workday-side-by-side/gonljejijjjmjccdbjokcmmdfmlincmh?hl=en",
      },
      {
        displayText: "GitHub Repository",
        url: "https://github.com/mlool/workday-calendar-extension",
      },
    ],
    title: "UBC Workday Chrome Extension",
    skills: ["React", "TypeScript", "DynamoDB"],
    previewText: 
      "Chrome extension developed with small team to combat Workday's poor UI/UX. 5000+ active users",
    content:
      "Chrome extension & Website developed with small team to combat Workday's poor UI/UX. Extremely well recieved by student body with an active Discord Community and over 5000 users. Open source project maintained by a small group of developers. Extension built on React, TypeScript & CSS. CI/CD pipeline set up with GitHub Actions. The extension allows students to view their course schedule in a more user-friendly format.",
    previewImage: {
      url: "https://i.imgur.com/LYXJpbO.png",
      alt: "Picture of the Workday Chrome Extension",
    },
  },
  {
    id: 2,
    mediaList: [
      {
        url: "https://i.imgur.com/JDyfSYY.png",
        alt: "Picture of directions Page",
      },
      {
        url: "https://i.imgur.com/caEcvLn.png",
        alt: "Picture of the research page",
      },
      {
        url: "https://i.imgur.com/DexeLZ6.png",
        alt: "Picture of the learn more page",
      },
    ],
    links: [
      {
        displayText: "Student Hub Website",
        url: "https://ubcstudenthub.ca",
      }
    ],
    title: "UBC Student Hub",
    skills: ["React", "TypeScript", "DynamoDB", "Node.js"],
    previewText:
      "One stop website for UBC students to socialize, research courses, navigate campus and more. Built as a followup to the UBC Workday Chrome Extension",
    content:
      "UBC Student Hub is a website built using React.js and TypeScript for the frontend and Node.js for the backend communicating with a DynamoDB database. Both are hosted on Digital Ocean. Worked on it with a team of developers, I built the landing, directions and research pages. The directions page plots a students schedule on a map and provides directions between classes using the Google Maps API. The research page allows students to view historical course data, reviews, social media posts, prerequisites and more about a course. The research page is designed to be a user customizable dashboard with a drag and drop interface allowing users to add and remove widgets.",
    previewImage: {
      url: "https://i.imgur.com/PmovuSy.png",
      alt: "Picture of UBC Student Hub Landing Page",
    },
  },
  {
    id: 3,
    mediaList: [
      {
        url: "https://i.imgur.com/Gdv7Aa3.png",
        alt: "Picture of map",
      },
      {
        url: "https://i.imgur.com/GFOTU8H.png",
        alt: "Picture of the settings panel",
      },
      {
        url: "https://i.imgur.com/tixDHIc.png",
        alt: "Picture of the camera popup",
      },
    ],
    links: [
      {
        displayText: "Explore Vancouver Website",
        url: "https://explore-vancouver.netlify.app/map",
      },
      {
        displayText: "Github Repository",
        url: "https://github.com/jaskirat-gill/Explore-Surrey",
      },
    ],
    title: "Explore Vancouver Web App",
    skills: ["React", "JavaScript", "MapBox"],
    previewText:
      "Web App designed to conveniently display data from local Open Data programs",
    content:
      "Explore Vancouver plots data from local Open Data programs on a map of Greater Vancouver. Users can view real time feeds of traffic cameras, restaurant inspections, speed control devices and more. The front end was built with React and JavaScript, and the map was created using MapBox and the app is hosted using Netlify",
    previewImage: {
      url: "https://i.imgur.com/RhzserY.jpeg",
      alt: "Picture of Explore Vancouver Web App",
    },
  },
  {
    id: 4,
    mediaList: [
      {
        url: "",
        alt: "No Images Available",
      },
      {
        url: "",
        alt: "No Images Available",
      },
      {
        url: "",
        alt: "No Images Available",
      },
    ],
    links: [
      {
        displayText: "GitHub Repository",
        url: "https://github.com/jaskirat-gill/poppy-streets",
      },
    ],
    title: "Poppy Streets Freelance Project",   
    skills: ["Python", "MySQL", "JavaScript"],
    previewText: 
      "Web App designed to honor the stories of Canadian Veterans",
    content:
      "Freelance project on the request of a member of the military. Richmond BC has a program where some street signs are named after veterans commemorating their service with a poppy on the sign. The website was built to share the stories of these veterans by showing these signs on a map and displaying biographies of who that sign is for. The website was built using Python, MySQL, and JavaScript. Unfortunately, no pictures are available",
    previewImage: {
      url: "https://i.imgur.com/kuNxTU5.png",
      alt: "Repository",
    },
  },
];
