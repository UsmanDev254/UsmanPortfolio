import React from 'react';
import { Briefcase } from 'lucide-react';

export default function ExperienceSection({ experiences }) {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-300 to-rose-300 hidden md:block"></div>

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className="flex gap-8">
                  {/* Timeline Icon */}
                  <div className="hidden md:flex items-start justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-rose-400 flex items-center justify-center shadow-lg">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    {/* Date Badge */}
                    <div className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      {exp.from} - {exp.to} ({exp.duration})
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h3>

                    <p className="text-amber-600 font-medium mb-4">
                      {exp.company}
                    </p>

                    {/* Render description array as a list */}
                    <ul className="list-disc pl-5 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-700 leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}