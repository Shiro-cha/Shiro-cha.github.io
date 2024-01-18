// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import CLI from "./images/CLI.jpeg";


// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/2VSdbhKq.jpeg";
import HeroDark from "./images/2VSdbhKq.jpeg";
// If you change the import names above then you need to change the export names below


export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "Shiro-cha";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="uiw:linkedin" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "As a student in information systems and processing, I have acquired skills in network and web techniques. Passionate about information technology, I am convinced that digital will be the heart of tomorrow. ";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-typescript" className="display-4" />,
    name: "JavaScript/TypeScript",
  },
  {
    id: 2,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 3,
    skill: <Icon icon="tabler:brand-react-native" className="display-4" />,
    name: "React Native",
  },
  {
    id: 4,
    skill: <Icon icon="mdi:angular" className="display-4" />,
    name: "Angular",
  },
  {
    id: 5,
    skill: <Icon icon="file-icons:electron" className="display-4" />,
    name: "Electron",
  },
  {
    id: 6,
    skill: <Icon icon="mdi:nodejs" className="display-4" />,
    name: "Node.js",
  },
  {
    id: 7,
    skill: <Icon icon="teenyicons:docker-outline" className="display-4" />,
    name: "Docker",
  },
  {
    id: 8,
    skill: <Icon icon="mdi:symfony" className="display-4" />,
    name: "Symfony",
  },
  {
    id: 9,
    skill: <Icon icon="mdi:language-java" className="display-4" />,
    name: "Java",
  },
  {
    id: 10,
    skill: <Icon icon="mdi:language-cpp" className="display-4" />,
    name: "C++",
  },
  {
    id: 11,
    skill: <Icon icon="tabler:brand-mysql" className="display-4" />,
    name: "MySQL",
  },
  {
    id: 12,
    skill: <Icon icon="carbon:database-postgresql" className="display-4" />,
    name: "PostgreSQL",
  },
  {
    id: 13,
    skill: <Icon icon="simple-icons:mongodb" className="display-4" />,
    name: "MongoDB",
  },
  {
    id: 14,
    skill: <Icon icon="mdi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 15,
    skill: <Icon icon="fa6-brands:aws" className="display-4" />,
    name: "AWS",
  },
];


// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://cvdesignr.com/p/659f8904c01d6";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["joella-generator", "node-like-ovy", "ananaPeer-bluetooth","jereo","stp","Search-tool","VoGit-front","TeaCherS-client"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "joella-generator",
    image: CLI,
  },
  {
    name: "jereo",
    image: CLI,
  },
  {
    name: "stp",
    image: CLI,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xbjnlqro";
