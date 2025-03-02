import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "HND IN ELECTRICAL AND ELECTRONIC ENGINEER(UNDERGRADUATE)",
      school: "Advanced Technological Institute,Labuduwa,Galle Sri Lanka",
      year: "2021 - Present",
      description: "Specialized in Power Systems and Control Engineering",
      achievements: ["Research Excellence Award"]
    },
    {
      degree: "DIPLOMA IN INFORMATION TECHNOLOGY",
      school: "ESOFT Metro campus,Matara",
      year: "2019-2020",
      description: "Focus on Information Technology",
      // No achievements array here
    },
    {
      degree: "OL & Al",
      school: "Sujatha Vidyalaya Matara",
      year: "2011-2019",
      description: "Advanced Power Electronics",
      achievements: ["Top Performance"]
    }
  ];

  return (
    <section id="education" className="py-20">
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
              Education
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My academic journey and achievements
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500"></div>
          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full transform -translate-x-1/2 mt-6"></div>
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                  }`}
                >
                  <div className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800/70 transition-colors">
                    <div className="flex items-center gap-2 text-cyan-500 mb-2">
                      <GraduationCap className="w-5 h-5" />
                      <span className="font-semibold">{item.degree}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.school}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{item.year}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    {/* Add conditional check for achievements */}
                    {item.achievements && item.achievements.length > 0 && (
                      <div className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-cyan-500" />
                            <span className="text-gray-300">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};