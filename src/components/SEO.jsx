import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Abdelrahman Hany - Computer & Systems Engineer | Full-Stack Developer",
  description = "Computer & Systems Engineer transitioning to full-stack development. Specializing in embedded systems, automation, Python, React, and modern web technologies. Available for freelance projects.",
  keywords = "Abdelrahman Hany, Computer Engineer, Systems Engineer, Full Stack Developer, Embedded Systems, Python Developer, React Developer, Automation, Freelancer, Portfolio",
  image = "/images/og-preview.png",
  url = "https://dopebiscuit.github.io/Portfolio/",
  type = "website"
}) => {
  const siteTitle = "Abdelrahman Hany Portfolio";
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Abdelrahman Hany" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="theme-color" content="#6366f1" />
      <meta name="msapplication-TileColor" content="#6366f1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Abdelrahman Hany",
          "jobTitle": "Computer & Systems Engineer",
          "description": description,
          "url": url,
          "image": image,
          "sameAs": [
            "https://github.com/DopeBiscuit",
            "https://linkedin.com/in/AbdelrahmanHany2026",
            "https://www.fiverr.com/users/boody_hany",
            "https://www.upwork.com/freelancers/~01e92e0c8b7675915f"
          ],
          "knowsAbout": [
            "Computer Engineering",
            "Systems Engineering", 
            "Full-Stack Development",
            "Embedded Systems",
            "Python Programming",
            "React Development",
            "Automation",
            "Machine Learning"
          ],
          "alumniOf": {
            "@type": "Organization",
            "name": "Ain Shams University"
          },
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "name": "MIT 6.431x: Probability",
              "credentialCategory": "certificate"
            },
            {
              "@type": "EducationalOccupationalCredential", 
              "name": "MIT 6.86x: Machine Learning",
              "credentialCategory": "certificate"
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;