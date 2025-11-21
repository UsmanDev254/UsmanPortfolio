import React from 'react';
// import { ExternalLink } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function PortfolioSection({ projects }) {
  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl font-bold text-gray-300">
                      {project.name.charAt(0)}
                    </div>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <NavLink to={project.projectUrl} target='blank'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg></NavLink>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                  {project.name}
                </h3>
                <div className="portfolio-tags">
                  {project.tags?.map((tag, idx) => (
                    <span key={idx} className="badge">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}