"use client";

import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "WordPress"
  ];

  return (
    <section id="about" className="py-16  sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
      <div className=" mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-around gap-8 md:gap-12 lg:gap-16">
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full max-w-sm lg:max-w-none flex justify-around"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <img
                src="/logo.jpg"
                alt="Mohamed Thabet"
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl object-cover transition-all duration-500 group-hover:scale-[1.02] shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right: Text */}
          <div className="flex-1 w-full max-w-2xl flex flex-col gap-5 md:gap-6 lg:gap-7">
            {/* Animated Gradient Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-white via-indigo-400 to-sky-400 text-transparent bg-clip-text leading-tight"
            >
              About Me
            </motion.h2>
            
            {/* Animated Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
            >
              I'm <span className="text-white font-semibold">Mohamed Thabet</span>, a passionate Frontend Developer specializing in <span className="text-indigo-400 font-medium">React</span>, <span className="text-indigo-400 font-medium">Next.js</span>, and modern web technologies. I craft dynamic, responsive, and interactive web applications with a focus on performance and usability.
            </motion.p>
            
            {/* Animated Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed"
            >
              I constantly learn and adopt new tools to create cutting-edge digital solutions that bring ideas to life.
            </motion.p>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap gap-2 sm:gap-3 mt-2"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.7 + index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-indigo-500/10 to-sky-500/10 border border-indigo-500/30 rounded-lg text-indigo-400 font-medium text-xs sm:text-sm backdrop-blur-sm hover:border-indigo-400/50 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;