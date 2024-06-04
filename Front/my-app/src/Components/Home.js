import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Log from '../Images/Log.png';
import project1 from '../ProjectsImages/project1.png';
import project2 from '../ProjectsImages/project2.png';
import project3 from '../ProjectsImages/project3.png';
import project4 from '../ProjectsImages/project4.png';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ContactForm from './ContactForm';

const projects = [
  { id: 1, name: 'Bazaar-Of-Carthage', image: project1, description: 'The website is an e-commerce platform dedicated to promoting and selling authentic Tunisian products. The products range from traditional handicrafts, clothing, and jewelry to food items like olive oil, spices, and dates. The platform aims to connect local artisans and producers with a global audience, providing a convenient and secure shopping experience.', link: 'https://github.com/Roudaina-Jbeli/Bazaar-Of-Carthage' },
  { id: 2, name: 'Camping Tn', image: project2, description: 'The camping application is designed to enhance the outdoor experience for campers by providing a comprehensive platform where they can connect with fellow campers, share their experiences, and buy essential camping gear. The app aims to create a community of outdoor enthusiasts, offering tools and resources to make camping trips more enjoyable and convenient.', link: 'https://github.com/IyeddAmri/camping' },
  { id: 3, name: 'Handi Home', image: project3, description: 'Handi Home is a comprehensive website designed to help users easily accomplish various home projects and tasks by hand. The site offers a wealth of resources, including step-by-step guides, video tutorials, and articles on a wide range of DIY projects. A unique feature of Handi Home is its integrated chatbot, which assists users in navigating the website, finding relevant content, and providing real-time support.', link: 'https://github.com/S-PROJECT1/senior-project-1' },
  { id: 4, name: 'Chaity Donation', image: project4, description: 'The website, "Tunisia Donation Hub," is designed to facilitate and streamline the process of donating for various causes in Tunisia. It specifically targets individuals who wish to donate hair for cancer patients, as well as those looking to contribute money either online or at events. The platform aims to connect donors with reputable organizations and events, providing a secure and user-friendly experience.', link: 'https://github.com/Ghada000/charity-donation' },
];

const skills = [
  { name: "HTML5", icon: "fab fa-html5" },
  { name: "CSS3", icon: "fab fa-css3-alt" },
  { name: "JavaScript", icon: "fab fa-js" },
  { name: "React.js", icon: "fab fa-react" },
  { name: "Tailwind", icon: "fas fa-feather-alt" },
  { name: "Node.js", icon: "fab fa-node" },
  { name: "MongoDB", icon: "fas fa-database" },
  { name: "Next.js", icon: "fas fa-angle-double-right" },
  { name: "Git", icon: "fab fa-git-alt" },
  { name: "Figma", icon: "fab fa-figma" },
];

const softSkills = [
  { name: "Trello", icon: "fab fa-trello" },
  { name: "Resilience", icon: "fas fa-heartbeat" },
  { name: "Adaptability", icon: "fas fa-shapes" },
  { name: "Communication", icon: "fas fa-comments" },
  { name: "Team Player", icon: "fas fa-users" },
  { name: "Agility", icon: "fas fa-running" },
  { name: "Flexibility", icon: "fas fa-expand-alt" },
  { name: "Problem-Solving", icon: "fas fa-puzzle-piece" },
  { name: "Analytical Thinking", icon: "fas fa-brain" },
];

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <div className="logo">
          <img src={Log} alt="Logo" className="logo-icon" />
        </div>
        <div className="menu-icons">
          <a href="mailto:jbeliroudaina@gmail.com" className="icon icon-mail" title="Send an email"><FaEnvelope /></a>
          <a href="https://github.com/Roudaina-Jbeli" target="_blank" rel="noopener noreferrer" className="icon icon-github" title="GitHub Profile"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/roudaina-jbeli-0a5a782b8/" target="_blank" rel="noopener noreferrer" className="icon icon-linkedin" title="LinkedIn Profile"><FaLinkedin /></a>
        </div>
      </div>
      <div className="content">
        <h1>Welcome,I'm Roudaina Jbeli!</h1>
        <p>
          A dedicated Full Stack Developer with a fervent enthusiasm for crafting innovative web solutions. Experienced in navigating the intricate landscape of web development, adept at seamlessly merging front-end and back-end functionalities to create cohesive digital experiences. Passionate about problem-solving and leveraging technology to address real-world challenges. Continuously seeking opportunities to enhance skills, stay abreast of industry trends, and push the boundaries of what's possible in the digital realm. Dedicated to delivering excellence in every project undertaken, with a keen eye for detail and a relentless pursuit of perfection.
        </p>
      </div>
      <div className="projects">
        <h2>Projects</h2>
        <div className="project-cards">
          {projects.map(project => (
            <div className="card" key={project.id}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} className="card-img-top" alt={project.name} />
              </a>
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="projects">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li className="skills-item" key={index}>
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <div className="name">{skill.name}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="skills">
        <ul className="skills-list">
          {softSkills.map((skill, index) => (
            <li className="skills-item" key={index}>
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <div className="name">{skill.name}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="contact">
        <ContactForm />
      </div>
      <footer>
        ©2024 Jbeliroudaina.com
      </footer>
    </div>
  );
}

export default Home;

