import React from 'react';
const Home = () => {
  return (
    <section className="container mx-auto mt-8 px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img 
            src="../../assets/images/Foto.png" 
            alt="Profile Image" 
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full profile-image shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2">
          <div className="info-container text-center md:text-left">
            <p className="text-tertiary mb-2">Hello, I'm</p>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Jesús Alejandro Hernandez Alonso
            </h1>
            <p className="text-secondary text-xl mb-6">Full-stack Developer</p>
            
            <p className="text-tertiary mb-6 leading-relaxed">
              I am a versatile Full Stack Developer with extensive experience
              in building web and mobile applications. My skill set includes proficiency in programming languages
              such as TypeScript, JavaScript, Dart, and SQL, as well as expertise in frameworks like Angular,
              Flutter, Laravel, and Node.js. I specialize in creating responsive, user-centric designs utilizing
              modern tools like Tailwind CSS, Bootstrap, and Figma.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-6">
              <a 
                className="btn bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center"
                href="assets/Resumé.pdf" 
                download
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg>
                Download CV
              </a>
              
              <a 
                className="btn border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center"
                href="mailto:alejandro.hdz.alonso.dev@gmail.com"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
                Contact Info
              </a>
            </div>
          </div>
        </div>
      </div>

      
    </section>
    

    
  );
};

export default Home;