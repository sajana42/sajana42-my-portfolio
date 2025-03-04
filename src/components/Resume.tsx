import React from "react";  // Removed unnecessary Component import since this is a functional component
import { motion } from "framer-motion";
import { Briefcase, Download, Calendar, ArrowRight } from "lucide-react";
import cv from "../assest/cv/1718258678757.pdf";

export const Resume = () => {
  const experiences = [{
    title: "Electrical Engineer Intern",
    company: "Michelin lanka (private) limited",
    period: "2024 - 2025",
    description: "Leading power systems design and implementation for industrial clients.",
    responsibilities: ["Design and optimization of power distribution systems", "Team leadership and project management", "Technical consultation and client communication"]
  },
  {
    title: "Bank Employee",
    company: "Hatton National Bank PLC · Internship",
    period: "2021 - 2022",
    "description": "Assisted in banking operations, customer service, and financial transactions.",
    "responsibilities": [
    "Processing customer transactions and account management",
    "Providing customer support and resolving inquiries",
    "Assisting with financial documentation and compliance checks"
  ]
  },
];

  return (
    <section id="resume" className="py-20 bg-slate-800/50">
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
              Resume
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Professional experience and achievements
          </p>
          <motion.a
            href={cv}
            download="Sajana_Senanayake_CV.pdf"  // This specifies the filename for download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            Download CV
          </motion.a>
        </motion.div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 rounded-lg p-6 hover:bg-slate-900/70 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-cyan-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <span className="text-cyan-500">•</span>
                    <span className="text-gray-400">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <ArrowRight className="w-4 h-4 text-cyan-500 mt-1" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};