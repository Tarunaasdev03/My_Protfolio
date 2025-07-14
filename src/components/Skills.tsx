import React from 'react';
import { 
  Server, 
  Code, 
  Settings, 
  Cloud, 
  GitBranch, 
  Brain, 
  Cpu, 
  Workflow,
  Terminal,
  Container,
  Zap,
  Database
} from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'Linux', icon: Terminal, color: 'hover:bg-white' },
    { name: 'Python', icon: Code, color: 'hover:bg-blue-500' },
    { name: 'Jenkins', icon: Settings, color: 'hover:bg-red-500' },
    { name: 'Docker', icon: Container, color: 'hover:bg-blue-400' },
    { name: 'Kubernetes', icon: Workflow, color: 'hover:bg-purple-500' },
    { name: 'Git & GitHub', icon: GitBranch, color: 'hover:bg-gray-600' },
    { name: 'AWS Cloud', icon: Cloud, color: 'hover:bg-orange-500' },
    { name: 'Machine Learning', icon: Brain, color: 'hover:bg-green-500' },
    { name: 'Generative AI & Agentic AI', icon: Cpu, color: 'hover:bg-pink-500' },
    { name: 'LangChain', icon: Zap, color: 'hover:bg-indigo-500' },
    { name: 'Flask', icon: Server, color: 'hover:bg-teal-500' },
    { name: 'Streamlit', icon: Database, color: 'hover:bg-emerald-500' },
    { name: 'CI/CD', icon: Workflow, color: 'hover:bg-violet-500' }
  ];

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Skills & Tools</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
            <p className="text-gray-400 mt-6 text-lg">
              Technologies I work with to build amazing solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group relative bg-gray-900 hover:bg-white ${skill.color} text-white hover:text-black p-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white rounded-full transform scale-0 group-hover:scale-110 transition-transform duration-300"></div>
                    <skill.icon className="w-10 h-10 relative z-10 group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-sm font-semibold text-center leading-tight">
                    {skill.name}
                  </h3>
                </div>
                
                {/* 3D Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-20 rounded-xl group-hover:opacity-0 transition-opacity"></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
              <p className="text-gray-400 text-lg">
                Technology evolves rapidly, and I'm committed to continuous learning and staying updated 
                with the latest tools and best practices in DevOps and cloud computing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;