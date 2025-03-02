import React from "react";
import { motion } from "framer-motion";
import { Zap, Brain, BookOpen, Coffee } from "lucide-react"; // Added Zap to imports

export const About = () => {
  const highlights = [{
    icon: <Zap className="w-6 h-6 text-cyan-500" />, // Replaced empty div with Zap icon
    title: "Power Systems",
    description: "Specialized in electrical power distribution and control systems"
  }, {
    icon: <Brain className="w-6 h-6 text-cyan-500" />,
    title: "Circuit Design",
    description: "Expert in analog and digital circuit design"
  }, {
    icon: <BookOpen className="w-6 h-6 text-cyan-500" />,
    title: "Research",
    description: "Passionate about emerging technologies and innovation"
  }, {
    icon: <Coffee className="w-6 h-6 text-cyan-500" />,
    title: "Problem Solver",
    description: "Analytical thinker with strong troubleshooting abilities"
  }];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full h-[400px] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" 
                  alt="Engineer working" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 rounded-lg"></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-cyan-500">
              Professional Summary
            </h3>
            <p className="text-gray-300">
              As an Electronic & Electrical Engineer with a passion for
              innovation, I specialize in developing cutting-edge solutions for
              complex technical challenges. My expertise spans across power
              systems, circuit design, and control systems.
            </p>
            <p className="text-gray-300">
              With a strong foundation in both theoretical concepts and
              practical applications, I strive to bridge the gap between
              innovative ideas and real-world implementation.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-slate-800/50 rounded-lg"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    {item.icon}
                    <h4 className="font-semibold text-white">{item.title}</h4>
                  </div>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};