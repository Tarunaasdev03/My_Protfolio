import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Linkedin, 
  Github, 
  Instagram, 
  MapPin, 
  Send,
  User,
  MessageCircle 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9116938045',
      link: 'tel:+919116938045'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'suthartarun07@gmail.com',
      link: 'mailto:suthartarun07@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bikaner, Rajasthan, India',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/tarun-suthar-845257364',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/Tarunaasdev03',
      color: 'hover:text-gray-600'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://instagram.com/tarun_suthar_03',
      color: 'hover:text-pink-600'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
            <p className="text-gray-700 mt-6 text-lg">
              Let's connect and discuss opportunities to collaborate
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-black p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group"
                    >
                      <div className="bg-white p-3 rounded-lg group-hover:bg-gray-200 transition-colors">
                        <info.icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{info.label}</h4>
                        <p className="text-sm text-gray-300">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-black p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
                <div className="flex space-x-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-white p-4 rounded-lg text-black hover:bg-gray-200 transition-all transform hover:scale-110 ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
                <p className="text-gray-300 mt-4 text-sm">
                  Connect with me on social media for updates and insights
                </p>
              </div>

              {/* Availability */}
              <div className="bg-black p-8 rounded-xl border border-gray-800 text-white">
                <h3 className="text-2xl font-bold mb-4">Availability</h3>
                <div className="space-y-2 text-gray-300">
                  <p>✅ Open to internship opportunities</p>
                  <p>✅ Available for freelance projects</p>
                  <p>✅ Interested in collaboration</p>
                  <p>✅ Quick response time</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-black p-12 rounded-xl border border-gray-800 flex flex-col justify-center min-h-full">
              <h3 className="text-4xl font-extrabold text-white mb-8">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={8}
                      required
                      className="w-full min-h-[160px] pl-10 pr-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-transparent resize-none"
                      placeholder="Tell me about your project or just say hi!"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2 transform hover:scale-105 mt-4"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              © 2024 Tarun Suthar. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;