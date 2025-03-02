import React from "react";
import { motion } from "framer-motion";
import { Zap, Cpu, Database, Radio, Server, Wifi } from "lucide-react"; // Added Zap to imports

export const Skills = () => {
  const technicalSkills = [{
    category: "Power Systems",
    skills: [{
      name: "Circuit Design",
      level: 90
    }, {
      name: "Power Distribution",
      level: 85
    }, {
      name: "Control Systems",
      level: 80
    }],
    icon: <Zap className="w-6 h-6" /> // Replaced empty div with Zap icon
  }, {
    category: "Electronics",
    skills: [{
      name: "PCB Design",
      level: 85
    }, {
      name: "Microcontrollers",
      level: 90
    }, {
      name: "Embedded Systems",
      level: 80
    }],
    icon: <Cpu className="w-6 h-6" />
  }, {
    category: "Communications",
    skills: [{
      name: "RF Systems",
      level: 75
    }, {
      name: "Signal Processing",
      level: 80
    }, {
      name: "Wireless Protocols",
      level: 85
    }],
    icon: <Radio className="w-6 h-6" />
  }];

  const tools = [{
    name: "AutoCAD",
    icon: <Server />
  }, {
    name: "MATLAB",
    icon: <Database />
  }, {
    name: "PSpice",
    icon: <Wifi />
  }];

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
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
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Expertise in various aspects of electronic and electrical engineering
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {technicalSkills.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 p-6 rounded-lg"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-500">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.category}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyan-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Tools & Software
          </h3>
          <div className="flex justify-center flex-wrap gap-4">
            {tools.map((tool, idx) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 bg-slate-900/50 px-4 py-2 rounded-full"
              >
                <span className="text-cyan-500">{tool.icon}</span>
                <span className="text-gray-300">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};