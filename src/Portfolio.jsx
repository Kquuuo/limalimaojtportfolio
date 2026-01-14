import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Briefcase, GraduationCap, User } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: "PiJob",
      description: "Built a full-stack e-commerce application with Python, HTML/CSS, and SQLite. Implemented user authentication and home page where user can post job application or find job opportunities.",
      tech: ["Python", "HTML/CSS", "SQLite"],
      image: "/images/pijob.png",
      github: "https://github.com/AllenPetaluna/Professional-Networking-System"
    },
    {
      title: "Taskify",
      description: "Developed a task management tool with real-time updates using WebSockets. Features include drag-and-drop, team collaboration, and notifications.",
      tech: ["JavaScript","React", "Vite", "Java", "HTML/CSS", "MySQL"],
      image: "/images/taskify.png",
      github: "https://github.com/felraine/Taskify-Project"
    },
    {
      title: "FilipinoExplorer",
      description: "An interactive, game-based e-learning platform designed to improve engagement, enhance language skills, and provide a structured approach to learning Filipino",
      tech: ["React", "Vite","Tailwind.css", "API Integration", "Java", "PostgreSQL"],
      image: "/images/filipino_explorers.png",
      github: "https://github.com/AbarquezMyk/Capstone_FilipinoExplorers"
    },
    {
      title: "E-Vents",
      description: "A web-based Ticket Management System designed to streamline the organization and tracking of event participation. The platform allows event organizers to efficiently manage tickets, monitor attendance, and coordinate activities, all from a centralized dashboard. Allows user to buy tickets.",
      tech: ["React", "Vite","Tailwind CSS", "API Integration", "Java", "MySQL"],
      image: "/images/e-vents.jpg",
      github: "https://github.com/villamorbudz/E-vents"
    },
    {
      title: "Quizzard",
      description: "Created an interactive weather dashboard that displays current conditions and forecasts using OpenWeather API with data visualization.",
      tech: ["Java", "IntelliJ", "HTML/CSS", "JavaScript"],
      image: "https://via.placeholder.com/800x500/808080/808080",
      github: "#"
    },
    {
      title: "Red-Matrix Notes-App",
      description: "A blockchain-based notes app where users can securely create, update, and delete notes, with every action recorded on the Cardano blockchain for transparency and immutability.",
      tech: ["Java", "React", "Vite", "Tailwind CSS", "Blockfrost API"],
      image: "https://via.placeholder.com/800x500/808080/808080",
      github: "#"
    },
    {
      title: "Notes App - Mobile",
      description: "A mobile notes app that allows users to securely create, update, and delete notes with easy organization and optional cloud sync.",
      tech: ["Kotlin", "Firebase", "Android Studio"],
      image: "https://via.placeholder.com/800x500/808080/808080",
      github: "#"
    }
  ];

  const skills = [
    { category: "Programming Languages", items: ["Java", "Python", "JavaScript", "Kotlin", "TypeScript", "C", "PHP"] },
    { category: "Frontend", items: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "TypeScript"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "MySQL", "PostgreSQL", "REST APIs"] },
    { category: "Tools", items: ["Git", "VS Code", "Figma", "Postman", "Swagger", "Netlify", "Vercel"] },
    { category: "Soft Skills", items: ["Team Collaboration", "Problem Solving", "Communication", "Quick Learner"] }
  ];

  const experience = [
    {
      title: "Information Technology Student",
      school: "Cebu Institute of Technology - University",
      period: "2022 - Present",
      description: "Pursuing Bachelor's degree in Information Technology. Relevant coursework: Data Structures, Web Development, Database Systems."
    }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white w-full overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-purple-500/20 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              OJT Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-purple-400 transition-colors font-medium ${
                    activeSection === section ? 'text-purple-400' : 'text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2 bg-slate-900/95">
              {['home', 'about', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 capitalize hover:bg-purple-900/30 rounded text-white"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
             
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Renato Limalima Jr.
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8">
            Aspiring Developer | IT Student
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Passionate about creating innovative web applications and solving complex problems through code. 
            Seeking internship opportunities to learn and contribute to meaningful projects.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#contact" className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get In Touch
            </a>
            <a href="#projects" className="border border-purple-400 hover:bg-purple-900/30 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Projects
            </a>
          </div>
          <div className="flex justify-center space-x-6 mt-8">
            <a href="https://github.com/Kquuuo" className="hover:text-purple-400 transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="space-y-8 mb-12">
            <div className="flex items-start space-x-3">
              <User className="text-purple-400 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
                <p className="text-gray-300">
                  I'm an Information Technology student with a passion for web development and technology. 
                  I love turning ideas into reality through clean, efficient code and creating user-friendly applications.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Code className="text-purple-400 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">What I Do</h3>
                <p className="text-gray-300">
                  I build responsive web applications using modern technologies. From frontend interfaces 
                  to backend APIs, I enjoy working on all aspects of web development.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <GraduationCap className="text-purple-400 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">Learning Journey</h3>
                <p className="text-gray-300">
                  Constantly expanding my skillset through online courses, personal projects, and school projects. 
                  Always eager to learn new technologies and best practices.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Skills</h3>
            <div className="space-y-6">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm">
                  <h4 className="font-semibold text-purple-400 mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span key={i} className="bg-purple-900/30 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-lg overflow-hidden backdrop-blur-sm hover:transform hover:scale-105 transition-transform">
                <div className="relative h-48 overflow-hidden bg-slate-700">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-purple-900/40 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} className="flex items-center space-x-1 text-purple-400 hover:text-purple-300">
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience & Education</h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border-l-4 border-purple-500">
                <div className="flex items-start space-x-3">
                  <Briefcase className="text-purple-400 mt-1" size={24} />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-purple-400">{exp.school}</p>
                    <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm currently looking for internship opportunities! Feel free to reach out if you'd like to connect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:limalimarenatojr@gmail.com" className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              <Mail size={20} />
              <span>Email Me</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Renato Limalima Jr. limalimarenatojr@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}