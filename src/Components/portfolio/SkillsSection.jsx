import React from 'react';
import { Code, Database, Globe, Layers, Zap, Server } from 'lucide-react';

const iconMap = {
  Code, Database, Globe, Layers, Zap, Server
};

export default function SkillsSection({ skills, languages }) {
  return (
    <section id="skills" className="py-24 pb-0 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Skills & Languages
        </h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Code;
            
            return (
              <div 
                key={index}
                className="group bg-gradient-to-br from-white to-amber-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-amber-200"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-rose-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {skill.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages */}
        {/* <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Languages
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow-md">
                  <span className="text-2xl font-bold text-amber-600">
                    {lang.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-1">
                  {lang.name}
                </h4>
                <p className="text-amber-600 font-medium">
                  {lang.level}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}