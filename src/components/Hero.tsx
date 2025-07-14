import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = ['DevOps Engineer', 'Cloud Enthusiast', 'Linux Expert', 'Python Developer'];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, titles]);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-wider" style={{fontFamily: 'monospace'}}>
              ᴛᴀʀᴜɴ
            </h1>
            <div className="text-2xl md:text-3xl text-gray-300">
              <span className="text-white">{displayText}</span>
              <span className="animate-pulse text-white">|</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Passionate about cloud infrastructure, automation, and building scalable systems. 
              Currently exploring the intersection of DevOps and AI.
            </p>
          </div>

          {/* Right Side - Photo Only */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center border-4 border-white overflow-hidden">
                <img 
                  src={profileImg} 
                  alt="Tarun Suthar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <a
              href="/resume.pdf"
              download
              className="group bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-all transform hover:scale-105 flex items-center space-x-3"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span className="group-hover:animate-pulse">Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;