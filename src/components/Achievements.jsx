import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const achievements = [
    {
      id: 1,
      title: '2nd Place - ASU AI Engineering Hackathon',
      year: '2024',
      description: 'Developed a QA AI-powered proof-of-concept for an Ain Shams Competition, showcasing innovative problem-solving and AI implementation skills.',
      category: 'Competition',
      icon: '🏆',
      link: 'https://www.linkedin.com/posts/abdelrahmanhany2026_final-report-of-qa²-activity-7204880108682182656-NUmG'
    },
    {
      id: 2,
      title: 'MIT 6.431x: Probability - Certificate',
      year: '2024',
      description: 'Completed advanced probability course from MIT, building strong mathematical foundations for machine learning and data science applications.',
      category: 'Education',
      icon: '📚',
      link: 'https://courses.edx.org/certificates/c6b8335448a443b89f7a289b1ecb4fea'
    },
    {
      id: 3,
      title: 'MIT 6.86x: Machine Learning - Certificate',
      year: '2024',
      description: 'Successfully completed MIT\'s comprehensive machine learning course, gaining expertise in algorithms, neural networks, and practical ML applications.',
      category: 'Education',
      icon: '🤖',
      link: 'https://courses.edx.org/certificates/0f44b0139bab498b80e2725da36c4343'
    },
    {
      id: 4,
      title: 'Climate Data Dashboard - NASA Space Apps',
      year: '2024',
      description: 'Built an interactive dashboard with chatbot to visualize 20-year environmental change patterns using NASA data and APIs.',
      category: 'Hackathon',
      icon: '🌍',
      link: 'https://www.linkedin.com/posts/abdelrahmanhany2026_spaceapps-activity-7254440208945848322--_w_'
    },
    {
      id: 5,
      title: 'Computer Vision Engineer - ASU ROAR',
      year: '2025',
      description: 'Selected as Computer Vision Engineer for ASU ROAR team competing in European Rover Challenge, developing autonomous navigation systems.',
      category: 'Professional',
      icon: '🚀',
      link: 'https://roverchallenge.eu/team/asu-roar-2025/'
    },
    {
      id: 6,
      title: 'ECPC \'23 Participant',
      year: '2023',
      description: 'Competed in the Egyptian Collegiate Programming Contest, demonstrating algorithmic problem-solving skills under pressure.',
      category: 'Competition',
      icon: '💻',
      link: 'https://www.linkedin.com/posts/abdelrahmanhany2026_ecpc-activity-7095552940467191808-AYUU'
    },
    {
      id: 7,
      title: 'Cisco CCNA Certification',
      year: '2023',
      description: 'Earned Cisco Certified Network Associate certification, validating networking fundamentals and infrastructure knowledge.',
      category: 'Certification',
      icon: '🌐',
      link: 'https://drive.google.com/file/d/1P81ARw3WIPVc-08J171dw1A3QbJKUTMc/view'
    },
    {
      id: 8,
      title: 'Harvard CS50 Certificate',
      year: '2022',
      description: 'Completed Harvard\'s introduction to computer science course, building foundational programming and problem-solving skills.',
      category: 'Education',
      icon: '🎓',
      link: 'https://courses.edx.org/certificates/fc66b15fe96140f4ae9fce6733f2d109'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const getCategoryColor = (category) => {
    const colors = {
      Competition: 'from-yellow-500 to-orange-500',
      Education: 'from-blue-500 to-purple-500',
      Hackathon: 'from-green-500 to-teal-500',
      Professional: 'from-pink-500 to-red-500',
      Certification: 'from-indigo-500 to-blue-500',
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Achievements & <span className="gradient-text">Recognition</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A collection of milestones, certifications, and recognitions 
              that mark my journey in technology
            </p>
          </div>

          {/* Achievement Carousel */}
          <div className="relative">
            <div className="glass-effect rounded-2xl p-8 min-h-[400px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Achievement Info */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="text-6xl">{achievements[currentIndex].icon}</div>
                        <div>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(achievements[currentIndex].category)} text-white`}>
                            {achievements[currentIndex].category}
                          </span>
                          <div className="text-sm text-gray-400 mt-1">
                            {achievements[currentIndex].year}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white">
                        {achievements[currentIndex].title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {achievements[currentIndex].description}
                      </p>
                      
                      {achievements[currentIndex].link && (
                        <a
                          href={achievements[currentIndex].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors"
                        >
                          View Details
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>

                    {/* Achievement Visual */}
                    <div className="hidden md:block">
                      <div className="w-full h-64 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-xl flex items-center justify-center">
                        <div className="text-8xl opacity-50">
                          {achievements[currentIndex].icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 glass-effect rounded-full flex items-center justify-center text-white hover:border-accent-500/50 transition-all duration-300"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 glass-effect rounded-full flex items-center justify-center text-white hover:border-accent-500/50 transition-all duration-300"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-accent-500 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">8+</div>
              <div className="text-sm text-gray-400">Achievements</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">4</div>
              <div className="text-sm text-gray-400">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">2</div>
              <div className="text-sm text-gray-400">Competitions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">2024</div>
              <div className="text-sm text-gray-400">Latest Award</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;