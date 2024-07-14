const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg overflow-hidden ml-8">
        <div>
          <div className="flex items-center p-8">
            <div>
              <img
                className="w-32 h-32 rounded-full mb-4 ml-8"
                src="./images/B2.jpg"
                alt="Naphatthamon J."
              />
            </div>
            <div className="ml-8">
              <h1 className="text-2xl font-bold">Naphatthamon J.</h1>
              <p className="text-gray-600">Frontend Developer</p>
            </div>
            <a
              href="https://drive.google.com/file/d/1sr3-9oZ8cK-fegP5_nFugsxTHs7v1nwV/view?usp=sharing"
              className="ml-auto hover:bg-black hover:text-white bg-white-600 font-bold py-2 px-4 rounded border border-black mt-4"
            >
              Resume
            </a>
          </div>
          <p className="ml-8 font-bold">Hello World!</p>
          <p className="mt-4 ml-8 text-start text-pretty">
            I am Naphatthamon, a Frontend Developer specializing in writing
            clean, efficient code and creating user-friendly software solutions.
            Proficient in JavaScript languages. I enjoy debugging,
            troubleshooting, and collaborating in agile teams. I am passionate
            about continuous learning and contributing to innovative projects.
          </p>
          <h3 className="font-bold mt-4 ml-8 text-start">Contact Me</h3>
          <div className="mt-4 ml-8">
            <a href="https://linkedin.com" className="text-blue-500 mr-4">
              LinkedIn
            </a>
            <a href="https://github.com" className="text-blue-500 mr-4">
              GitHub
            </a>
            <a href="https://gmail.com" className="text-blue-500 mr-4">
              Gmail
            </a>
          </div>
        </div>
        <div className="px-8 py-4 ">
          <h2 className="font-bold">PROJECTS</h2>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {[...Array(3)].map((_, i) => (
              <a href="https://waywo.io" key={i} className="block">
                <img
                  className="w-full h-32 object-cover"
                  src="./images/Yoga pic 1.jpg"
                  alt="MERN Stack Ecommerce App"
                />
              </a>
            ))}
          </div>
        </div>
        <section className="ml-4 max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Skills</h2>
          <div className="grid grid-cols-5 gap-4">
            {/* Replace icons with appropriate React components or images */}
            <div className="flex items-center">
              <i className="fab fa-html5 text-orange-500 text-4xl mr-2"></i>
              <span className="text-gray-800">HTML/CSS</span>
            </div>
            <div className="flex items-center">
              <i className="fab fa-css3 text-blue-500 text-4xl mr-2"></i>
              <span className="text-gray-800">Tailwind CSS</span>
            </div>
            <div className="flex items-center">
              <i className="fab fa-js text-yellow-500 text-4xl mr-2"></i>
              <span className="text-gray-800">JavaScript</span>
            </div>
            <div className="flex items-center">
              <i className="fab fa-react text-blue-400 text-4xl mr-2"></i>
              <span className="text-gray-800">React</span>
            </div>
            <div className="flex items-center">
              <i className="fab fa-node-js text-green-500 text-4xl mr-2"></i>
              <span className="text-gray-800">Node.js</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-server text-gray-500 text-4xl mr-2"></i>
              <span className="text-gray-800">Express.js</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-code text-purple-500 text-4xl mr-2"></i>
              <span className="text-gray-800">RESTful API</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-database text-indigo-500 text-4xl mr-2"></i>
              <span className="text-gray-800">SQL</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-database text-green-500 text-4xl mr-2"></i>
              <span className="text-gray-800">MongoDB</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-terminal text-gray-500 text-4xl mr-2"></i>
              <span className="text-gray-800">Postman</span>
            </div>
            <div className="flex items-center">
              <i className="fab fa-git-alt text-gray-800 text-4xl mr-2"></i>
              <span className="text-gray-800">Git/GitHub</span>
            </div>
            <div className="flex items-center">
              <i className="fab fa-figma text-pink-500 text-4xl mr-2"></i>
              <span className="text-gray-800">Figma</span>
            </div>
            <div className="flex items-center">
              <i className="fab fa-trello text-sky-500 text-4xl mr-2"></i>
              <span className="text-gray-800">Trello</span>
            </div>
            <div className="flex items-center">
              <i className="fab fa-jira text-green-500 text-4xl mr-2"></i>
              <span className="text-gray-800">Jira</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
