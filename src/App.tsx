import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Facebook, Download, Code2, Server, Wrench, ExternalLink, Menu, X, ChevronDown, Sparkles, Zap, Target, Rocket, Brain, Palette, Terminal } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/John Albert Alcance Resume (1).pdf';
    link.download = 'John_Albert_Alcance_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const languages = [
    'JavaScript',
    'TypeScript',
    'Python',
    'SQL',
    'HTML',
    'CSS'
  ];

  const frontendStack = [
    'React',
    'Tailwind CSS',
    'Vite'
  ];

  const backendStack = [
    'Node.js',
    'Supabase',
    'Firebase',
    'Flask'
  ];

  const dataAndML = [
    'Pandas',
    'NumPy',
    'Seaborn',
    'Matplotlib',
    'TensorFlow'
  ];

  const devTools = [
    'Git',
    'ESLint',
    'PostCSS',
    'VS Code',
    'Cursor'
  ];

  const designTools = [
    'Figma',
    'Canva',
    'Adobe Photoshop',
    'Adobe Premiere Pro'
  ];

  const projects = [
    {
      title: 'Automated Deployment Pipeline',
      description: 'Built a comprehensive CI/CD pipeline that reduced deployment time by 70% and automated testing across multiple environments.',
      tech: ['Docker', 'Jenkins', 'AWS'],
      link: '#',
      icon: Rocket
    },
    {
      title: 'Inventory Management System',
      description: 'Developed a full-stack application for real-time inventory tracking with automated reordering and analytics dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      link: '#',
      icon: Target
    },
    {
      title: 'Data Processing Automation',
      description: 'Created Python scripts to automate data extraction, transformation, and loading processes, saving 20+ hours per week.',
      tech: ['Python', 'Pandas', 'Automation'],
      link: '#',
      icon: Zap
    }
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Cursor Spotlight */}
      <div
        className="cursor-spotlight"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
      
      {/* Header Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700/50' : 'bg-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-red-500 rounded-lg shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Albert</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${
                    activeSection === item.id
                      ? 'text-purple-400'
                      : 'text-slate-300 hover:text-purple-400'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-red-500 transition-all duration-300 ${
                      activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 rounded-lg font-medium text-left transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      : 'text-slate-300 hover:bg-slate-800/50 hover:text-purple-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/background.png)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-900/95"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-red-900/20"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-red-500/20 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-slide-up">
              Hi, I'm <span className="relative inline-block">
                <span 
                  className="font-bold inline-block"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7 0%, #ef4444 50%, #a855f7 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    boxDecorationBreak: 'clone',
                    WebkitBoxDecorationBreak: 'clone',
                  }}
                >
                  Albert
                </span>
                <span className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500/50 to-red-500/50 -rotate-1 transform translate-y-1"></span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-6 animate-slide-up animation-delay-200">
              A developer who aims to automate systems and streamline workflows
            </p>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-400">
              I specialize in building efficient, scalable solutions that transform complex processes into seamless automated systems.
              With a passion for clean code and innovative problem-solving, I help businesses optimize their operations through technology.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-up animation-delay-600">
            <a
              href="https://www.facebook.com/albertalcance.ecnaclatrebla/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 hover:scale-105 border border-white/20 hover:border-purple-400/50"
            >
              <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Facebook</span>
            </a>
            <a
              href="https://www.linkedin.com/in/john-albert-alcance-4453b5308/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 hover:scale-105 border border-white/20 hover:border-purple-400/50"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href="mailto:jalbertalcance@gmail.com"
              className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 hover:scale-105 border border-white/20 hover:border-purple-400/50"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Gmail</span>
            </a>
            <a
              href="mailto:johnalcance02@outlook.com"
              className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 hover:scale-105 border border-white/20 hover:border-purple-400/50"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Outlook</span>
            </a>
          </div>

          <div className="animate-slide-up animation-delay-800">
            <button
              onClick={handleResumeDownload}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-red-600 to-purple-600 text-white text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 via-purple-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce flex justify-center w-full">
            <button
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors group"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-800/50 backdrop-blur-sm relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-red-500 mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a passionate developer with a strong focus on automation and efficiency. 
                My journey in software development has been driven by the desire to solve complex problems 
                and create solutions that make a real impact.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                With expertise spanning both frontend and backend technologies, I bring a holistic approach 
                to building applications. I believe in writing clean, maintainable code and following best 
                practices to ensure scalability and performance.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                and continuously learning to stay at the forefront of industry trends.
              </p>
            </div>
            <div className="relative">
  <div className="bg-gradient-to-br from-purple-900/50 to-red-900/50 backdrop-blur-md rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-transform duration-300 border border-purple-500/20">
    <div className="grid grid-cols-2 gap-6">

      <div className="text-center p-4 bg-slate-900/50 backdrop-blur-sm rounded-lg shadow-md border border-purple-500/20">
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-400 mb-2">
          300+
        </div>
        <div className="text-sm text-slate-300">Internship Hours</div>
      </div>

      <div className="text-center p-4 bg-slate-900/50 backdrop-blur-sm rounded-lg shadow-md border border-purple-500/20">
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-cyan-400 mb-2">
          10+
        </div>
        <div className="text-sm text-slate-300">Projects Built</div>
      </div>

      <div className="text-center p-4 bg-slate-900/50 backdrop-blur-sm rounded-lg shadow-md border border-purple-500/20">
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
          IT
        </div>
        <div className="text-sm text-slate-300">Admin Internship</div>
      </div>

      <div className="text-center p-4 bg-slate-900/50 backdrop-blur-sm rounded-lg shadow-md border border-purple-500/20">
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400 mb-2">
          ∞
        </div>
        <div className="text-sm text-slate-300">Learning & Improving</div>
      </div>

    </div>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-red-500 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <div className="group bg-gradient-to-br from-purple-900/40 to-red-900/40 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-500/30 hover:border-purple-400/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-red-500 rounded-lg group-hover:scale-110 transition-transform group-hover:rotate-6 shadow-lg">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((tool, index) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm text-slate-200 rounded-lg text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-default hover:bg-purple-500/20 hover:text-purple-300 border border-slate-700/50 hover:border-purple-500/50"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend Stack */}
            <div className="group bg-gradient-to-br from-red-900/40 to-cyan-900/40 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-red-500/30 hover:border-red-400/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-red-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform group-hover:rotate-6 shadow-lg">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Frontend Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {frontendStack.map((tool, index) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm text-slate-200 rounded-lg text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-default hover:bg-red-500/20 hover:text-red-300 border border-slate-700/50 hover:border-red-500/50"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Stack */}
            <div className="group bg-gradient-to-br from-cyan-900/40 to-purple-900/40 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-cyan-500/30 hover:border-cyan-400/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform group-hover:rotate-6 shadow-lg">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Backend Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {backendStack.map((tool, index) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm text-slate-200 rounded-lg text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-default hover:bg-cyan-500/20 hover:text-cyan-300 border border-slate-700/50 hover:border-cyan-500/50"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Data & ML */}
            <div className="group bg-gradient-to-br from-purple-900/40 to-red-900/40 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-500/30 hover:border-purple-400/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-red-500 rounded-lg group-hover:scale-110 transition-transform group-hover:rotate-6 shadow-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Data & ML</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {dataAndML.map((tool, index) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm text-slate-200 rounded-lg text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-default hover:bg-purple-500/20 hover:text-purple-300 border border-slate-700/50 hover:border-purple-500/50"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Dev Tools */}
            <div className="group bg-gradient-to-br from-red-900/40 to-orange-900/40 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-red-500/30 hover:border-red-400/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg group-hover:scale-110 transition-transform group-hover:rotate-6 shadow-lg">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Dev Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {devTools.map((tool, index) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm text-slate-200 rounded-lg text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-default hover:bg-red-500/20 hover:text-red-300 border border-slate-700/50 hover:border-red-500/50"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Design Tools */}
            <div className="group bg-gradient-to-br from-red-900/40 to-purple-900/40 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-red-500/30 hover:border-red-400/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-red-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform group-hover:rotate-6 shadow-lg">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Design Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {designTools.map((tool, index) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm text-slate-200 rounded-lg text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-default hover:bg-red-500/20 hover:text-red-300 border border-slate-700/50 hover:border-red-500/50"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-red-500 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={index}
                  className="group bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-slate-700/50 hover:border-purple-500/50 relative overflow-hidden"
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-red-500/0 group-hover:from-purple-500/10 group-hover:to-red-500/10 transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-br from-purple-500 to-red-500 rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-red-400 transition-all">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-full text-xs font-medium hover:bg-purple-500/20 hover:text-purple-300 transition-colors cursor-default border border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-400 hover:from-purple-300 hover:to-red-300 font-medium group/link"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4 text-purple-400 group-hover/link:text-red-400 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-12"></div>
          
          <p className="text-lg text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:jalbertalcance@gmail.com"
              className="group flex items-center gap-4 p-6 bg-slate-800/50 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border border-slate-700/50 hover:border-purple-500/50"
            >
              <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-red-500 transition-all">
                <Mail className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-red-400 transition-all">Email</div>
                <div className="text-sm text-slate-400">jalbertalcance@gmail.com</div>
              </div>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 bg-slate-800/50 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border border-slate-700/50 hover:border-purple-500/50"
            >
              <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-red-500 transition-all">
                <Linkedin className="w-6 h-6 text-purple-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-red-400 transition-all">LinkedIn</div>
                <div className="text-sm text-slate-400">Connect with me</div>
              </div>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-md text-white rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-2 hover:scale-105 border border-slate-700/50 hover:border-purple-500/50"
            >
              <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Facebook</span>
            </a>
            <a
              href="https://www.facebook.com/albertalcance.ecnaclatrebla/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-md text-white rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-2 hover:scale-105 border border-slate-700/50 hover:border-purple-500/50"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">GitHub</span>
            </a>
            <button
              onClick={handleResumeDownload}
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-red-600 to-purple-600 text-white rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-2 hover:scale-105"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span className="font-medium">Download Resume</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-950 border-t border-slate-800 text-white text-center">
        <p className="text-slate-400">
          © 2024 Albert. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}

export default App;
