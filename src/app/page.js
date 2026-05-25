"use client";

import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      name: "DriveFleet",
      desc: "Luxury car rental platform with booking system, authentication and responsive UI.",
      tech: "HTML5, CSS3, React, Next.js, MongoDB, Tailwind CSS, Node.js, Express.js",
      live: "https://my-app-olive-seven-54.vercel.app/",
      color: "from-cyan-500 to-blue-600",
    },
    {
      name: "QurbaniHat",
      desc: "Online livestock marketplace with full-stack functionality and modern design.",
      tech: "React, Next.js, MongoDB, Tailwind CSS, JavaScript(ES6)",
      live: "https://a-08-project-fi4j.vercel.app/",
      color: "from-green-500 to-emerald-600",
    },
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript(ES6)",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "GitHub",
    "Vercel",
  ];

  return (
    <div className="bg-white text-gray-900">

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 bg-white border-b z-50"
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between flex-wrap gap-3">

          <h1 className="font-bold text-lg">MONIMUL</h1>

          <div className="flex gap-4 text-sm flex-wrap">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

        </div>
      </motion.nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-16 sm:py-24">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <p className="text-cyan-600 font-semibold text-sm">
            Full Stack Developer
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mt-4">
            MD. MONIMUL ISLAM
          </h1>

          <p className="text-gray-600 mt-6 max-w-2xl text-sm sm:text-base">
            I build scalable, fast and modern web applications using: Tailwind CSS, JavaScript(ES6), Next.js,
            React, Node.js, express.js and MongoDB.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">

            <a
              href="https://github.com/"
              target="_blank"
              className="bg-black text-white px-6 py-3 rounded-xl text-center hover:scale-105 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="border px-6 py-3 rounded-xl text-center hover:bg-gray-100 transition"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl text-center hover:scale-105 transition"
            >
              Download Resume
            </a>

          </div>

        </motion.div>

      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-16">

        <h2 className="text-2xl sm:text-3xl font-bold mb-6">About Me</h2>

        <p className="text-gray-600 leading-7 text-sm sm:text-base">
          Passionate full stack developer with a love for building clean, user-friendly web applications. I enjoy solving complex problems with elegant code and am always exploring new technologies to stay ahead in the ever-evolving tech landscape.
        </p>

      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-gray-50 py-16">

        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-white border rounded-xl p-3 sm:p-4 text-center hover:scale-105 transition"
              >
                {skill}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-16 sm:py-24">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">

          {projects.map((p, i) => (
            <div
              key={i}
              className="border rounded-2xl p-5 sm:p-6 hover:shadow-xl transition"
            >

              <h3 className="text-xl sm:text-2xl font-bold">
                {p.name}
              </h3>

              <p className="text-gray-600 mt-3 text-sm sm:text-base">
                {p.desc}
              </p>

              <p className="text-cyan-600 mt-3 text-sm">
                {p.tech}
              </p>

              <a
                href={p.live}
                target="_blank"
                className={`inline-block mt-5 px-5 py-3 rounded-xl text-white bg-gradient-to-r ${p.color} hover:scale-105 transition`}
              >
                Live Project
              </a>

            </div>
          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-black text-white py-16 sm:py-20">

        <div className="max-w-4xl mx-auto text-center px-4">

          <h2 className="text-2xl sm:text-3xl font-bold">Contact</h2>

          <p className="mt-4 text-gray-300 text-sm sm:text-base">
            mdmonimul95@gmail.com
          </p>

          <p className="text-gray-300 text-sm sm:text-base">
            +8801744980152
          </p>

        </div>

      </section>

    </div>
  );
}