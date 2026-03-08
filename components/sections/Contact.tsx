'use client';

import { useTheme } from '@/context/ThemeContext';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const socials: { name: string; icon: IconType; url: string }[] = [
  { name: 'GitHub',   icon: FaGithub,   url: 'https://github.com/alexanderj03' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/alexander-jiw-2a568822a/' },
];

export default function Contact() {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const inputClass = `w-full px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors border ${
    isDarkMode
      ? 'bg-slate-800 text-white border-slate-600 placeholder-gray-400'
      : 'bg-white text-gray-900 border-gray-300 placeholder-gray-400 shadow-sm'
  }`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill out all required fields');
      setStatus('error');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          to_name: 'Alexander',
          from_name: formData.name,
          phone_number: formData.phone || 'Not provided',
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-4xl mx-auto w-full text-center">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center">Get In Touch</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
        </div>
        <p className={`text-center mb-16 text-sm tracking-widest uppercase font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          I'm always open to new opportunities and interesting projects. Let's connect!
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-6 mb-12">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
              className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <social.icon className="w-8 h-8 text-white" />
            </a>
          ))}
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *"
            className={inputClass}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email *"
            className={inputClass}
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone (Optional)"
            className={inputClass}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message *"
            rows={4}
            className={inputClass}
            required
          />
          
          {/* Status messages */}
          {status === 'error' && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
          {status === 'success' && (
            <p className="text-green-500 text-sm">Message sent successfully! I'll get back to you soon.</p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}