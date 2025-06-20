import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SiUpwork, SiFiverr, SiLinkedin, SiGithub } from "react-icons/si";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const [fieldErrors, setFieldErrors] = useState({});

  // Validation rules
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email' : '';
      case 'subject':
        return value.length < 3 ? 'Subject must be at least 3 characters' : '';
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors({
        ...fieldErrors,
        [name]: ''
      });
    }

    // Clear form status when user makes changes
    if (formStatus.success || formStatus.error) {
      setFormStatus({
        loading: false,
        success: false,
        error: false,
        message: ''
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setFieldErrors({
      ...fieldErrors,
      [name]: error
    });
  };

  const validateForm = () => {
    const errors = {};
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) errors[field] = error;
    });
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please fix the errors above'
      });
      return;
    }

    setFormStatus({
      loading: true,
      success: false,
      error: false,
      message: ''
    });

    try {
      // You can call emailjs.init('YOUR_PUBLIC_KEY') once in your app (not needed for every send in v3+)

      await emailjs.send(
        'service_vnfojcv',    // e.g., 'service_xxxxx'
        'template_5975vav',   // e.g., 'template_xxxxx'
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'zFIw2-vGMFWIVa3tu'     // e.g., 'user_xxxxxxxxx'
      );

      setFormStatus({
        loading: false,
        success: true,
        error: false,
        message: "Thank you! Your message has been sent successfully. I'll get back to you soon."
      });
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Sorry, there was an error sending your message. Please try again or contact me directly via email.'
      });
    }
  };

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      label: 'Email',
      value: 'abdulrahman.hany003@gmail.com',
      link: 'mailto:abdulrahman.hany003@gmail.com'
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      label: 'Phone',
      value: '+20 102 2333 420',
      link: 'tel:+201022333420'
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      label: 'Location',
      value: 'Cairo, Egypt',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/DopeBiscuit',
      icon: <SiGithub className="w-6 h-6" />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/AbdelrahmanHany2026',
      icon: <SiLinkedin className="w-6 h-6" />
    },
    {
      name: 'Fiverr',
      url: 'https://www.fiverr.com/users/boody_hany',
      icon: <SiFiverr className="w-6 h-6" />
    },
    {
      name: 'Upwork',
      url: 'https://www.upwork.com/freelancers/~01e92e0c8b7675915f',
      icon: <SiUpwork className="w-6 h-6" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
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
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to collaborate? Let's discuss your next project or
              explore opportunities together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
              <div>
                <h3 className="heading-3 text-white mb-4 lg:mb-6 mobile-center">
                  Let's Connect
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm lg:text-base lg:mb-8 mobile-center">
                  Whether you're looking for a reliable developer for your next project,
                  need automation solutions, or want to discuss collaboration opportunities,
                  I'm here to help bring your ideas to life.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-3 lg:space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-4 justify-center lg:justify-start"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center text-accent-500 lg:w-12 lg:h-12">
                      {item.icon}
                    </div>
                    <div className="text-center lg:text-left">
                      <p className="text-xs text-gray-400 lg:text-sm">{item.label}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-white hover:text-accent-400 transition-colors text-sm lg:text-base"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm lg:text-base">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4 text-center lg:text-left">
                <h4 className="text-lg font-semibold text-white">Follow Me</h4>
                <div className="flex space-x-4 justify-center lg:justify-start">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:border-accent-500/50 transition-all duration-300 lg:w-12 lg:h-12"
                    >
                      <span className="text-lg lg:text-xl">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Response Time Info */}
              <motion.div
                variants={itemVariants}
                className="glass-effect rounded-lg p-4 border border-accent-500/20"
              >
                <h4 className="text-lg font-semibold text-white mb-2 mobile-center">Response Time</h4>
                <p className="text-gray-300 text-sm mobile-center">
                  I typically respond to messages within 24 hours during business days.
                  For urgent matters, feel free to reach out via phone or WhatsApp.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-6 space-y-4 lg:p-8 lg:space-y-6">
                {/* Form Status Message */}
                {(formStatus.success || formStatus.error) && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-3 p-4 rounded-lg ${formStatus.success
                        ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                        : 'bg-red-500/20 border border-red-500/30 text-red-400'
                      }`}
                  >
                    {formStatus.success ? (
                      <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <ExclamationTriangleIcon className="w-5 h-5 flex-shrink-0" />
                    )}
                    <p className="text-sm">{formStatus.message}</p>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-3 py-2 bg-dark-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors lg:px-4 lg:py-3 ${fieldErrors.name
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-dark-700 focus:border-accent-500'
                        }`}
                      placeholder="John Doe"
                    />
                    {fieldErrors.name && (
                      <p className="text-red-400 text-sm mt-1">{fieldErrors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-3 py-2 bg-dark-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors lg:px-4 lg:py-3 ${fieldErrors.email
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-dark-700 focus:border-accent-500'
                        }`}
                      placeholder="john@example.com"
                    />
                    {fieldErrors.email && (
                      <p className="text-red-400 text-sm mt-1">{fieldErrors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-3 py-2 bg-dark-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors lg:px-4 lg:py-3 ${fieldErrors.subject
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-dark-700 focus:border-accent-500'
                      }`}
                    placeholder="Project Discussion"
                  />
                  {fieldErrors.subject && (
                    <p className="text-red-400 text-sm mt-1">{fieldErrors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    rows={5}
                    className={`w-full px-3 py-2 bg-dark-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors resize-none lg:px-4 lg:py-3 lg:rows-6 ${fieldErrors.message
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-dark-700 focus:border-accent-500'
                      }`}
                    placeholder="Tell me about your project or how we can work together..."
                  />
                  {fieldErrors.message && (
                    <p className="text-red-400 text-sm mt-1">{fieldErrors.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={formStatus.loading}
                  whileHover={{ scale: formStatus.loading ? 1 : 1.02 }}
                  whileTap={{ scale: formStatus.loading ? 1 : 0.98 }}
                  className={`w-full btn-primary flex items-center justify-center gap-2 ${formStatus.loading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                >
                  {formStatus.loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin lg:w-5 lg:h-5" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;