import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
  faGithub,
  faFigma,
  faTrello,
  faJira,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg overflow-hidden ml-8">
        <div>
          <div className="flex flex-col items-center mt-4 md:flex md:flex-row md:items-center md:pr-8">
            <div>
              <img
                className="w-32 h-32 rounded-full mb-4 ml-8"
                src="./images/B2.jpg"
                alt="Naphatthamon J."
              />
            </div>
            <div className="ml-8 ">
              <h1 className="text-2xl font-bold">Naphatthamon J.</h1>
              <p className="text-gray-600 text-center md:text-start">
                Frontend Developer
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/1sr3-9oZ8cK-fegP5_nFugsxTHs7v1nwV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="items-center md:ml-auto hover:bg-black hover:text-white bg-white-600 font-bold py-2 px-4 rounded border border-black mt-4"
            >
              Resume
            </a>
          </div>
          <p className="ml-8 font-bold">Hello World!</p>
          <p className="mt-4 mx-8 text-start text-gray-700 ">
            I am Naphatthamon, a Frontend Developer specializing in writing
            clean, efficient code and creating user-friendly software solutions.
            Proficient in JavaScript languages. I enjoy debugging,
            troubleshooting, and collaborating in agile teams. I am passionate
            about continuous learning and contributing to innovative projects.
          </p>
          <h3 className="font-bold mt-4 ml-8 text-start">Contact Me</h3>
          <div className="mt-4 ml-8">
            <a
              href="https://linkedin.com/in/naphatthamon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mr-4"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Suaiki93"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mr-4"
            >
              GitHub
            </a>
            <a href="mailto:example@gmail.com" className="text-blue-500 mr-4">
              Gmail
            </a>
          </div>
        </div>
        <div className="px-8 py-4 ">
          <h2 className="font-bold">PROJECTS</h2>
          <div className="md:flex items-center justify-center">
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:h-45 md:mr-2 my-6">
                <img
                  src="./images/project.png"
                  alt="mockup"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 text-center md:ml-4">
                Kick It Up Shoes Shop <br />
                MERN Stack CRUD E-commerce <br />
                Web Application
              </h3>
            </div>
          </div>
        </div>
        <section className="ml-8 max-w-4xl mx-auto mb-8 ">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Skills</h2>
          <div className="grid grid-cols-5 gap-3 md:col-span-5 md:flex justify-center mb-4">
            {/* Centered Favicon */}
            <FontAwesomeIcon
              icon={faHtml5}
              className="text-4xl text-orange-500 mx-2"
            />
            <FontAwesomeIcon
              icon={faCss3}
              className="text-4xl text-blue-500 mx-2"
            />
            <FontAwesomeIcon
              icon={faJs}
              className="text-4xl text-yellow-500 mx-2"
            />
            <FontAwesomeIcon
              icon={faReact}
              className="text-4xl text-blue-300 mx-2"
            />
            <FontAwesomeIcon
              icon={faNodeJs}
              className="text-4xl text-green-500 mx-2"
            />
            <FontAwesomeIcon
              icon={faGit}
              className="text-4xl text-blue-700 mx-2"
            />
            <FontAwesomeIcon
              icon={faGithub}
              className="text-4xl text-gray-800 mx-2"
            />
            <FontAwesomeIcon
              icon={faFigma}
              className="text-4xl text-purple-500 mx-2"
            />
            <FontAwesomeIcon
              icon={faTrello}
              className="text-4xl text-blue-600 mx-2"
            />
            <FontAwesomeIcon
              icon={faJira}
              className="text-4xl text-blue-700 mx-2"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
