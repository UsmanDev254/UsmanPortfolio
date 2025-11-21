import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Award, FolderOpen, MessageSquare, BookOpen, Mail } from 'lucide-react';

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'skills', icon: Award, label: 'Skills' },
    { id: 'portfolio', icon: FolderOpen, label: 'Portfolio' },
    { id: 'testimonials', icon: MessageSquare, label: 'Testimonials' },
    { id: 'education', icon: BookOpen, label: 'Education' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-gradient-to-b from-amber-50 to-amber-100 rounded-2xl shadow-xl p-2 border border-amber-200">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-12 h-12 flex items-center justify-center rounded-xl mb-2 last:mb-0 transition-all duration-300 group relative ${
                isActive 
                  ? 'bg-amber-600 text-white shadow-lg' 
                  : 'text-amber-700 hover:bg-amber-200'
              }`}
            >
              <Icon className="w-5 h-5" />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-4 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {item.label}
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-gray-900"></div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}