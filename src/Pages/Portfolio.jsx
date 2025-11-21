import React from 'react';
import SideNav from '../Components/portfolio/SideNav';
import HeroSection from '../Components/portfolio/HeroSection';
import AboutSection from '../Components/portfolio/AboutSection';
import ExperienceSection from '../Components/portfolio/ExperienceSection';
import SkillsSection from '../Components/portfolio/SkillsSection';
import PortfolioSection from '../Components/portfolio/PortfolioSection';
import TestimonialsSection from '../Components/portfolio/TestimonialsSection';
import EducationSection from '../Components/portfolio/EducationSection';
import ContactSection from '../Components/portfolio/ContactSection';
import PortfolioImage from '../assets/usman3.jpg'
import Project1 from '../assets/Digital-Marketing-Agency.png'
import Project2 from '../assets/fougito.png'
import Project3 from '../assets/xorbix-technologies.png'
import Project4 from '../assets/arhpez-technologies.png'
import Project5 from '../assets/ebtsusa.png'
import Project6 from '../assets/herold.png'
import Project7 from '../assets/eyecucopy.png'
import Project8 from '../assets/almakkahcargo.png'
import Project9 from '../assets/arabianleader.png'
import Project10 from '../assets/alkareem.png'

// testimonial images 

import CEO1 from '../assets/adeel.jpg'
import CEO2 from '../assets/omar.jpg'
import CEO3 from '../assets/ibrahim.jpg'


export default function Portfolio() {
  // Portfolio Data
  const portfolioData = {
    hero: {
      name: "Mr. Usman Ali",
      title: "Front-End Web Developer",
      intro: "I am specialized in creating dynamic and responsive web solutions that deliver outstanding user experiences. With a strong focus on both functionality and design, I ensure every project meets the highest standards of quality and performance.",
      profileImage: PortfolioImage,
      phone: "+923087246381",
      whatsapp: "+923087246381",
      resume: "https://drive.google.com/file/d/1JRBz0ID8IUp6llLf5WxAXWoXipdSZNZa/view?usp=drive_link"
    },

    about: {
      birthday: "1st January 2000",
      marital: "Single",
      location: "Islamabad, Pakistan",
      email: "usmanali474.official@gmail.com",
      phone: "+923087246381",
      bio: "Hello! I'm Usman Ali, a Junior Front-End Developer with 1 year of hands-on experience designing and developing high-performance, scalable web applications. Skilled in React.js, Next.js, TypeScript, and JavaScript, with a strong focus on building responsive, user-centric interfaces using modern UI/UX and component-based architecture. Previously worked as a WordPress Developer for 2 years, specializing in custom theme development, plugin customization, performance optimization, and secure website development.",
      coreSkills: [
        {
          category: "Languages & Programming:",
          skills: "JavaScript, TypeScript"
        },
        {
          category: "Frontend Frameworks & Libraries:",
          skills: "React.js, Next.js"
        },
        {
          category: "Markup & Styling:",
          skills: "HTML5, CSS3, Tailwind CSS, Bootstrap 5, Material UI, Ant Design"
        },
        {
          category: "State Management:",
          skills: "Redux Toolkit, RTK Query"
        },
        {
          category: "API & Integration:",
          skills: "RESTful APIs, API Integration"
        },
        {
          category: "Tools & Platforms:",
          skills: "Git, GitHub, VS Code, Postman, ClickUp"
        },
        {
          category: "CMS & Ecommerce:",
          skills: "WordPress, WooCommerce, Shopify"
        },
        {
          category: "Optimization:",
          skills: "SEO, Page Speed Optimization, Responsive Design"
        },
        {
          category: "Design Tools:",
          skills: "Photoshop, Adobe XD, Figma"
        },
        {
          category: "Additional:",
          skills: "Clean, semantic coding, cross-browser compatibility"
        },
        {
          category: "Soft Skills:",
          skills: "Attention to Details, Analytical Thinking, Punctuality, Quick Learning, Self-Motivation, Strong Communication"
        },
        {
          category: "Languages:",
          skills: "Urdu (Native) , English (Intermediate)"
        }
      ],
    },

    experiences: [
      {
        from: "JAN 2025",
        to: "Present",
        duration: "1 YEAR",
        company: "Arhpez Technologies",
        title: "Front-End Web Developer",
        description: [
          "Transitioned to a Front-End Developer role at Arhpez Technologies, gaining 1 year of hands-on experience in React.js and Next.js.",
          "Developed and maintained 2 client-focused local projects using component-based architecture, SSR, and scalable front-end structures.",
          "Successfully deployed both projects on Vercel, ensuring high performance and optimized load times.",
          "Utilized Git and GitHub for version control, maintaining clean commit histories and organized repositories."        ]
      },
      {
        from: "JUNE 2023",
        to: "DEC 2024",
        duration: "1.6 YEARS",
        company: "Arhpez Technologies",
        title: "WordPress Developer",
        description: [
          "Developed custom WordPress websites using CPTs, custom fields, and theme/plugin customization.",
          "Optimized websites for speed, SEO, and security using industry best practices.",
          "Worked on multiple client websites ranging from landing pages to full-scale business websites.",
          "Troubleshot and resolved technical issues, while providing continuous support to clients.",
          "Improved website visibility through SEO-focused development and content structuring."
        ]
      },
      {
        from: "APRIL 2022",
        to: "MAY 2023",
        duration: "1 YEAR",
        company: "Webfoxs",
        title: "WordPress & Shopify Developer",
        description: [
          "Designed and developed responsive WordPress and Shopify websites across multiple industries.",
          "Implemented custom post types, custom fields, WooCommerce setups, and Shopify store configurations.",
          "Created SEO-optimized, mobile-responsive websites with high performance and clean UI.",
          "Provided long-term maintenance, updates, and optimizations for client websites."
        ]
      }
    ],

    skills: [
      { title: "Web Designing", subtitle: "HTML5, CSS3, Tailwind CSS, Bootstrap 5, Material UI, Ant Design", icon: "Code" },
      { title: "Languages & Programming", subtitle: "JavaScript, TypeScript", icon: "Globe" },
      { title: "Frameworks & Libraries", subtitle: " React.js, Next.js, jQuery", icon: "Code" },
      { title: "State Management", subtitle: "Redux Toolkit, RTK Query", icon: "Code" },
      { title: "API & Integration", subtitle: "REST APIs, Third-party Integrations", icon: "Zap" },
      { title: "Tools & Platforms", subtitle: "Git, GitHub, VS Code, Postman, ClickUp", icon: "Zap" },
      { title: "CMS & Ecommerce", subtitle: "WordPress, WooCommerce, Shopify", icon: "Code" },
      { title: "WordPress", subtitle: "Theme Customization", icon: "Code" },
      { title: "Page Builders", subtitle: "Elementor Pro, WP Bakery, Divi etc", icon: "Layers" },
      { title: "Google SEO", subtitle: "On Page SEO, Page Speed Optimization", icon: "Zap" },
      { title: "Soft Skills", subtitle: "Punctuality, Quick Learning, Self-Motivation, Strong Communication", icon: "Code" },
      { title: "Languages", subtitle: "Urdu (Native) , English (Intermediate)", icon: "Server" }
    ],

    languages: [
      { name: "English", level: "Advanced" },
      { name: "Urdu", level: "Advanced" },
      { name: "Hindi", level: "Basic" }
    ],

    projects: [
      { name: "Vicky Media", image: Project1 ,projectUrl: "https://vickymediaproject.vercel.app/" ,tags: ['React JS', 'Next JS'] },
      { name: "Fougito Web App", image: Project2 ,projectUrl: "https://fougitoproject.vercel.app/" ,tags: ['React JS', 'Next JS'] },
      { name: "Alkareem PK", image: Project10, projectUrl: "https://alkareem.pk/" ,tags: ['Shopify', 'Ecommerce Store'] },
      { name: "Ektow PK", image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=640&h=480&fit=crop", projectUrl: "https://ektow.com/" ,tags: ['Shopify', 'Ecommerce Store'] },
      { name: "Xorbix Technologies", image: Project3 ,projectUrl: "https://xorbix.com/", tags: ['WordPress', 'Elementor', 'ACF'] },
      { name: "Herold Collections", image: Project6 ,projectUrl: "https://ecom.kinnadu.com/", tags: ['WordPress', 'WooCommerce', 'ACF'] },
      { name: "EBTS USA", image: Project5 ,projectUrl: "https://ebtsusa.com/", tags: ['WordPress', 'Elementor', 'ACF'] },
      { name: "EyecueCopy", image:Project7 ,projectUrl: "https://eyecuecopy.com/", tags: ['WordPress', 'Elementor'] },
      { name: "Almakkah Cargo", image:Project8 ,projectUrl: "https://almakkahcargo.com/", tags: ['WordPress' , 'Elementor', 'Transport'] },
      { name: "Arabian Leader", image:Project9 ,projectUrl: "https://thearabianleaders.com/", tags: ['WordPress' , 'Elementor', 'News'] },
      { name: "Arhpez Technologies", image: Project4 ,projectUrl: "https://www.arhpez.com/", tags: ['WordPress', 'Elementor', 'ACF'] }
    ],

    testimonials: [
      {
        name: "Adeel Rauf",
        position: "COO of Webfoxs",
        text: "I can highly recommend Usman. I really appreciate his work and his fast replies when things are urgent. I worked with him on several WordPress related Projects and i was always impressed by his quality of work. I am happy to work with him in the future again.",
        image:CEO1
      },
      {
        name: "Irfan Raja",
        position: "CEO of Kontempo Digital",
        text: "Incredible, I cant recommend him enough! If you need a competent developer who will go the extra mile, look no further. Even if I thought this project is impossible to do, he had everything under control. Thank you so much, I will definitely come back!",
        image:CEO2
      },
      {
        name: "Yasir Shaukat",
        position: "Founder & CEO at TechLeadz",
        text: "It was a pretty advanced project and it was done perfectly. Communication was great and the salesman was very knowledgeable. I would absolutely recommend this seller for both simple and extensive projects.",
        image:CEO3
      }
    ],

    education: [
      {
        institution: "GOVT College Sahiwal",
        degree: "Fsc (Pre-Engineering)",
        period: "2016-2018"
      },
      {
        institution: "GOVT Degree College Mian Channu",
        degree: "BSc Computer Science",
        period: "2018-2020"
      }
    ],

    contact: {
      email: "usmanali474.official@gmail.com",
      phone: "+92 3087246381",
      linkedin: "https://www.linkedin.com/in/usman-malik-a64880230/"
    }
  };

  return (
    <div className="relative">
      {/* Side Navigation */}
      <SideNav />

      {/* Main Content */}
      <div className="w-full">
        <HeroSection data={portfolioData.hero} />
        <AboutSection data={portfolioData.about} />
        <ExperienceSection experiences={portfolioData.experiences} />
        <SkillsSection skills={portfolioData.skills} languages={portfolioData.languages} />
        <PortfolioSection projects={portfolioData.projects} />
        <TestimonialsSection testimonials={portfolioData.testimonials} />
        <EducationSection education={portfolioData.education} />
        <ContactSection contact={portfolioData.contact} />
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 {portfolioData.hero.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}