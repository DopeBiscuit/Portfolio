import React, { useState } from "react";
import { FaTrophy, FaCertificate, FaMedal, FaExternalLinkAlt } from "react-icons/fa";

const achievements = [
  // Certificates
  {
    type: "certificate",
    title: "MIT 6.431x: Probability",
    issuer: "MIT / edX",
    date: "2024",
    link: "https://courses.edx.org/certificates/c6b8335448a443b89f7a289b1ecb4fea",
  },
  {
    type: "certificate",
    title: "MIT 6.86x: Machine Learning",
    issuer: "MIT / edX",
    date: "2024",
    link: "https://courses.edx.org/certificates/0f44b0139bab498b80e2725da36c4343",
  },
  {
    type: "certificate",
    title: "Cisco CCNA",
    issuer: "Cisco",
    date: "2023",
    link: "https://drive.google.com/file/d/1P81ARw3WIPVc-08J171dw1A3QbJKUTMc/view",
  },
  {
    type: "certificate",
    title: "Harvard CS50",
    issuer: "Harvard / edX",
    date: "2022",
    link: "https://courses.edx.org/certificates/fc66b15fe96140f4ae9fce6733f2d109",
  },
  // Awards & Honors
  {
    type: "award",
    title: "2nd Place, ASU AI Engineering Hackathon",
    issuer: "Ain Shams University",
    date: "2024",
    link: "https://www.linkedin.com/posts/abdelrahmanhany2026_final-report-of-qa%C2%B2-activity-7204880108682182656-NUmG?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzhIsEByTSV-wcnzBCnmZH7L9tPR9T8568",
    description:
      "Developed a QA AI-powered proof-of-concept for an Ain Shams Competition.",
  },
  {
    type: "award",
    title: "Climate Data Dashboard & Chatbot (NASA Space Apps)",
    issuer: "NASA Space Apps",
    date: "2024",
    link: "https://www.linkedin.com/posts/abdelrahmanhany2026_spaceapps-activity-7254440208945848322--_w_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzhIsEByTSV-wcnzBCnmZH7L9tPR9T8568",
    description:
      "Built an interactive dashboard with a chatbot to visualize 20-year environmental change patterns.",
  },
  {
    type: "award",
    title: "ECPC '23 — Participant",
    issuer: "Egyptian Collegiate Programming Contest",
    date: "2023",
    link: "https://www.linkedin.com/posts/abdelrahmanhany2026_ecpc-activity-7095552940467191808-AYUU?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzhIsEByTSV-wcnzBCnmZH7L9tPR9T8568",
    description: "Competed in the Egyptian Collegiate Programming Contest.",
  },
  {
    type: "award",
    title: "Nokia Digital Design Hackathon — Participant",
    issuer: "Nokia",
    date: "2025",
    link: "",
    description: "Selected and participated in a competitive digital design hackathon.",
  },
];

const categories = [
  { key: "all", label: "All", icon: FaMedal },
  { key: "certificate", label: "Certificates", icon: FaCertificate },
  { key: "award", label: "Awards & Honors", icon: FaTrophy },
];

export default function Achievements() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all"
    ? achievements
    : achievements.filter((a) => a.type === activeTab);

  // Card icon logic
  const getIcon = (type) =>
    type === "certificate" ? <FaCertificate className="text-blue-400" /> : <FaTrophy className="text-yellow-400" />;

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Achievements & <span className="text-accent-400">Certifications</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognizing my academic, professional, and competitive journey.
          </p>
        </div>
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.key}
                className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold text-sm transition-all duration-200 ${
                  activeTab === cat.key
                    ? "bg-accent-500/20 text-accent-200 shadow"
                    : "bg-gray-800/50 text-gray-300 hover:bg-accent-500/10"
                }`}
                onClick={() => setActiveTab(cat.key)}
              >
                <Icon /> {cat.label}
              </button>
            );
          })}
        </div>
        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
          {filtered.map((a, idx) => (
            <div
              key={a.title + a.date}
              className="relative bg-dark-900/70 border border-dark-700 rounded-2xl p-6 flex flex-col shadow-xl hover:shadow-accent-500/30 transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{getIcon(a.type)}</span>
                <span className={`text-xs px-3 py-1 rounded-full ${
                  a.type === "certificate" ? "bg-blue-900/40 text-blue-300" : "bg-yellow-900/40 text-yellow-200"
                }`}>
                  {a.type === "certificate" ? "Certificate" : "Award"}
                </span>
              </div>
              <div className="mb-2 text-lg font-semibold text-white">{a.title}</div>
              <div className="text-sm text-gray-400 mb-1">
                {a.issuer} &middot; <span className="font-mono">{a.date}</span>
              </div>
              {a.description && (
                <div className="text-gray-300 text-xs mb-2">{a.description}</div>
              )}
              {a.link && (
                <a href={a.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center text-accent-300 hover:text-accent-400 text-sm font-medium transition-colors">
                  <FaExternalLinkAlt className="mr-2" /> View Credential
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}