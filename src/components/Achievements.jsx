import React, { useState } from "react";
import { FaCertificate, FaTrophy, FaLaptopCode, FaExternalLinkAlt, FaUsers, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const achievements = [
  // Certificates
  {
    type: "certificate",
    title: "MIT 6.431x: Probability",
    issuer: "MIT / edX",
    date: "2024",
    link: "https://courses.edx.org/certificates/c6b8335448a443b89f7a289b1ecb4fea",
    category: "Academic",
    featured: true
  },
  {
    type: "certificate",
    title: "MIT 6.86x: Machine Learning",
    issuer: "MIT / edX", 
    date: "2024",
    link: "https://courses.edx.org/certificates/0f44b0139bab498b80e2725da36c4343",
    category: "Academic",
    featured: true
  },
  {
    type: "certificate",
    title: "Cisco CCNA",
    issuer: "Cisco",
    date: "2023", 
    link: "https://drive.google.com/file/d/1P81ARw3WIPVc-08J171dw1A3QbJKUTMc/view",
    category: "Professional"
  },
  {
    type: "certificate",
    title: "Harvard CS50",
    issuer: "Harvard / edX",
    date: "2022",
    link: "https://courses.edx.org/certificates/fc66b15fe96140f4ae9fce6733f2d109",
    category: "Academic"
  },
  
  // Competition Awards & Honors
  {
    type: "award",
    title: "2nd Place - ASU AI Engineering Hackathon",
    issuer: "Ain Shams University",
    date: "2024",
    link: "https://www.linkedin.com/posts/abdelrahmanhany2026_final-report-of-qa%C2%B2-activity-7204880108682182656-NUmG?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzhIsEByTSV-wcnzBCnmZH7L9tPR9T8568",
    description: "Developed a QA AI-powered proof-of-concept for an Ain Shams Competition.",
    category: "Competition",
    featured: true
  },
  {
    type: "award",
    title: "Climate Data Dashboard & Chatbot",
    issuer: "NASA Space Apps Challenge",
    date: "2024",
    link: "https://www.linkedin.com/posts/abdelrahmanhany2026_spaceapps-activity-7254440208945848322--_w_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzhIsEByTSV-wcnzBCnmZH7L9tPR9T8568",
    description: "Built an interactive dashboard with a chatbot to visualize 20-year environmental change patterns.",
    category: "Hackathon",
    featured: true
  },
  {
    type: "award",
    title: "ECPC '23 Participant",
    issuer: "Egyptian Collegiate Programming Contest",
    date: "2023",
    link: "https://www.linkedin.com/posts/abdelrahmanhany2026_ecpc-activity-7095552940467191808-AYUU?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzhIsEByTSV-wcnzBCnmZH7L9tPR9T8568",
    description: "Competed in the Egyptian Collegiate Programming Contest.",
    category: "Competition"
  },
  {
    type: "award",
    title: "Nokia Digital Design Hackathon",
    issuer: "Nokia",
    date: "2025",
    link: "",
    description: "Selected to participate in a competitive digital design hackathon.",
    category: "Hackathon"
  },
  
  // Volunteering
  {
    type: "volunteer",
    title: "GDG Cairo Volunteer",
    issuer: "Google Developer Groups",
    date: "2023",
    link: "https://www.linkedin.com/posts/abdelrahmanhany2026_devfest2023-devfestcairo2023-devfestcairo-activity-7147205799709257728-XiBo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzhIsEByTSV-wcnzBCnmZH7L9tPR9T8568",
    description: "Assisted with event logistics, attendee guidance, and technical session support at the GDG Cairo developer conference.",
    category: "Community"
  }
];

const categories = [
  { key: "featured", label: "Featured", icon: FaTrophy },
  { key: "all", label: "Show All", icon: FaChevronDown },
  { key: "certificate", label: "Certificates", icon: FaCertificate },
  { key: "award", label: "Awards", icon: FaTrophy },
  { key: "volunteer", label: "Community", icon: FaUsers },
];

const typeConfig = {
  certificate: {
    icon: FaCertificate,
    color: "blue",
    bgClass: "bg-blue-900/40",
    textClass: "text-blue-300",
    iconClass: "text-blue-400"
  },
  award: {
    icon: FaTrophy,
    color: "yellow", 
    bgClass: "bg-yellow-900/40",
    textClass: "text-yellow-200",
    iconClass: "text-yellow-400"
  },
  volunteer: {
    icon: FaUsers,
    color: "green",
    bgClass: "bg-green-900/40", 
    textClass: "text-green-200",
    iconClass: "text-green-400"
  }
};

export default function Achievements() {
  const [activeTab, setActiveTab] = useState("featured");

  // Simplified filtering - no complex state interactions
  const getFilteredAchievements = () => {
    let filtered;
    
    switch (activeTab) {
      case "featured":
        filtered = achievements.filter(a => a.featured);
        break;
      case "all":
        filtered = achievements;
        break;
      case "certificate":
        filtered = achievements.filter(a => a.type === "certificate");
        break;
      case "award":
        filtered = achievements.filter(a => a.type === "award");
        break;
      case "volunteer":
        filtered = achievements.filter(a => a.type === "volunteer");
        break;
      default:
        filtered = achievements.filter(a => a.featured);
    }
    
    // Sort to show featured items first
    return filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(b.date) - new Date(a.date);
    });
  };

  const filteredAchievements = getFilteredAchievements();
  const featuredCount = achievements.filter(a => a.featured).length;
  const totalCount = achievements.length;

  const getIcon = (type) => {
    const config = typeConfig[type];
    if (!config) return null;
    const Icon = config.icon;
    return <Icon className={config.iconClass} />;
  };

  const getTypeLabel = (type) => {
    switch(type) {
      case 'certificate': return 'Certificate';
      case 'award': return 'Award';
      case 'volunteer': return 'Community';
      default: return type;
    }
  };

  // Simple tab change handler - no complex logic
  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };

  // Get description text based on current state
  const getDescriptionText = () => {
    switch (activeTab) {
      case "featured":
        return `Showcasing my top ${featuredCount} achievements. Click "Show All" to explore everything!`;
      case "all":
        return `Exploring all ${filteredAchievements.length} achievements and certifications.`;
      case "certificate":
        return `${filteredAchievements.length} professional and academic certificates.`;
      case "award":
        return `${filteredAchievements.length} competition awards and honors.`;
      case "volunteer":
        return `${filteredAchievements.length} community contributions and volunteering activities.`;
      default:
        return "Showcasing my achievements and certifications.";
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Achievements & <span className="text-accent-400">Certifications</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {getDescriptionText()}
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((cat) => {
            const Icon = cat.key === "all" && activeTab === "all" ? FaChevronUp : cat.icon;
            const isActive = activeTab === cat.key;
            const isShowAll = cat.key === "all";
            
            return (
              <button
                key={cat.key}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-accent-500/20 text-accent-200 shadow-lg border border-accent-500/30"
                    : isShowAll
                    ? "bg-gradient-to-r from-accent-500/10 to-primary-500/10 text-accent-300 hover:from-accent-500/20 hover:to-primary-500/20 border border-accent-500/20"
                    : "bg-dark-800/50 text-gray-300 hover:bg-accent-500/10 hover:text-accent-300 border border-dark-700"
                }`}
                onClick={() => handleTabChange(cat.key)}
              >
                <Icon className="text-lg" /> 
                {cat.label}
                {cat.key === "all" && (
                  <span className="ml-1 text-xs bg-accent-500/20 px-2 py-0.5 rounded-full">
                    {totalCount}
                  </span>
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          key={activeTab} // Force re-render on tab change
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {filteredAchievements.map((achievement, idx) => {
            const config = typeConfig[achievement.type];
            if (!config) return null; // Safety check
            
            return (
              <motion.div
                key={`${achievement.title}-${achievement.date}-${idx}`} // More stable key
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative bg-dark-900/70 backdrop-blur-sm border border-dark-700 rounded-2xl p-6 flex flex-col shadow-xl hover:shadow-accent-500/20 transition-all duration-300 hover:transform hover:scale-[1.02] hover:border-accent-500/30 ${
                  achievement.featured ? 'ring-1 ring-accent-500/20' : ''
                }`}
              >
                {/* Featured Badge */}
                {achievement.featured && (
                  <div className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    Featured
                  </div>
                )}

                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{getIcon(achievement.type)}</span>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${config.bgClass} ${config.textClass}`}>
                    {getTypeLabel(achievement.type)}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                    {achievement.title}
                  </h3>
                  
                  <div className="text-sm text-gray-400 mb-3 flex items-center gap-2">
                    <span className="font-medium">{achievement.issuer}</span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <span className="font-mono text-accent-300">{achievement.date}</span>
                  </div>

                  {achievement.description && (
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {achievement.description}
                    </p>
                  )}
                </div>

                {/* Link */}
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-300 hover:text-accent-400 text-sm font-medium transition-colors duration-200 mt-auto"
                  >
                    <FaExternalLinkAlt className="mr-2 text-xs" /> 
                    View Credential
                  </a>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quick Expand Button (shown only in featured mode) */}
        {activeTab === "featured" && (
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => handleTabChange("all")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-500/10 to-primary-500/10 hover:from-accent-500/20 hover:to-primary-500/20 text-accent-300 rounded-full border border-accent-500/20 transition-all duration-300 hover:scale-105"
            >
              <FaChevronDown className="text-sm" />
              View All {totalCount} Achievements
            </button>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400">
                {achievements.filter(a => a.type === 'certificate').length}
              </div>
              <div className="text-gray-400 text-sm">Certificates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">
                {achievements.filter(a => a.type === 'award').length}
              </div>
              <div className="text-gray-400 text-sm">Awards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">
                {achievements.filter(a => a.type === 'volunteer').length}
              </div>
              <div className="text-gray-400 text-sm">Community</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}