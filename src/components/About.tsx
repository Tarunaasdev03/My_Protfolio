import React from 'react';
import { User, Calendar, GraduationCap, MapPin, Heart } from 'lucide-react';

const About = () => {
  const personalInfo = [
    {
      icon: User,
      label: 'Name',
      value: 'Tarun Suthar'
    },
    {
      icon: Calendar,
      label: 'Date of Birth',
      value: '03/01/2008'
    },
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'BCA 1st year, Maharaja Ganga Singh University'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bikaner, Rajasthan, India'
    }
  ];

  const interests = [
    'Music', 'Photography', 'Coding', 'Collaboration', 'Innovation', 'Learning'
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">About Me</h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Personal Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="bg-black p-3 rounded-lg group-hover:bg-gray-800 transition-colors">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{info.label}</h3>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-semibold text-gray-800">Interests</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-black hover:text-white transition-colors cursor-pointer"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Bio */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-black mb-6">My Story</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    I'm a passionate learner and creator with a deep interest in technology and innovation. 
                    Currently pursuing my BCA degree while gaining hands-on experience as an intern at Linux World.
                  </p>
                  <p>
                    My journey in tech began with a curiosity about how systems work, which led me to explore 
                    DevOps, cloud computing, and automation. I believe in the power of collaboration and 
                    continuous learning to solve complex problems.
                  </p>
                  <p>
                    Beyond coding, I'm passionate about music and photography, which help me maintain a 
                    creative perspective in my technical work. I'm always eager to take on new challenges 
                    and contribute to meaningful projects.
                  </p>
                </div>
              </div>

              <div className="bg-black text-white p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-3">Current Focus</h4>
                <p className="text-gray-300">
                  Exploring the intersection of DevOps practices with AI and machine learning, 
                  while building expertise in cloud infrastructure and automation tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;