import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function EducationSection({ education }) {
  return (
    <section id="education" className="py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Education
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-amber-200"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-rose-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {edu.institution}
              </h3>
              
              <p className="text-amber-600 font-medium mb-3">
                {edu.degree}
              </p>

              <p className="text-gray-600 font-medium">
                {edu.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}