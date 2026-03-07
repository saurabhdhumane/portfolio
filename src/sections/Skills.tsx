import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative z-10 py-32 px-4 bg-black/40 backdrop-blur-lg border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical <span className="text-cyan-400">Arsenal</span></h2>
          <p className="text-slate-400 text-lg">Tools and technologies I use to build enterprise-grade applications.</p>
        </div>

        {/* Map through the Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="relative">
              
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
              </div>

               {/* Skills Grid for this Category */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all cursor-pointer group shadow-lg shadow-black/20"
                  >
                    <div className={`${skill.color} p-4 rounded-full bg-white/[0.02] group-hover:scale-110 group-hover:bg-white/[0.05] transition-all duration-300`}>
                      {skill.icon}
                    </div>
                    <span className="font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors text-sm md:text-base text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;