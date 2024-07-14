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
        <div className="px-8 py-8 ">
          <h2 className="font-bold">PROJECTS</h2>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {[...Array(6)].map((_, i) => (
              <a href="https://waywo.io" key={i} className="block">
                <img
                  className="w-full h-32 object-cover rounded-md"
                  src="./images/Yoga pic 1.jpg"
                  alt="MERN Stack Ecommerce App"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
