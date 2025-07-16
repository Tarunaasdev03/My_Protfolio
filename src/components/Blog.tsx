import React from 'react';
import { ExternalLink, BookOpen, Calendar, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Automate Folder Backup with Flask API and cURL on Linux',
      description: 'A step-by-step guide to automating folder backups on Linux using a Flask API and cURL commands.',
      url: 'https://medium.com/@aasdevtarun/automate-folder-backup-with-flask-api-and-curl-on-linux-e307e0c61d09'
    },
    {
      title: 'How Samsung Leverages AWS to Power Innovation at Scale',
      description: 'An in-depth look at how Samsung uses AWS cloud services to drive innovation and scalability.',
      url: 'https://medium.com/@aasdevtarun/how-samsung-leverages-aws-to-power-innovation-at-scale-efe6766901a9'
    },
    {
      title: 'Top 5 Popular GUI Programs in Linux That Make Desktop Use a Breeze',
      description: 'Discover the top 5 GUI programs in Linux that enhance desktop usability and productivity.',
      url: 'https://medium.com/@aasdevtarun/top-5-popular-gui-programs-in-linux-that-make-desktop-use-a-breeze-391eca35f626'
    },
    {
      title: 'Why Companies Use Docker: A Case Study on Real-World Benefits',
      description: 'Explore the practical reasons and real-world benefits of using Docker in modern companies.',
      url: 'https://medium.com/@aasdevtarun/why-companies-use-docker-a-case-study-on-real-world-benefits-9a3077c34252'
    }
  ];

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Blog</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
            <p className="text-gray-300 mt-6 text-lg">
              Insights, tutorials, and thoughts on development, automation, and technology
            </p>
          </div>

          {/* Blog List as Cards with Titles and Descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <a
                key={index}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-900 rounded-xl shadow p-8 hover:shadow-lg transition-all cursor-pointer hover:bg-gray-800"
              >
                <div className="text-2xl font-semibold text-white mb-2">{post.title}</div>
                <div className="text-gray-300 text-base">{post.description}</div>
              </a>
            ))}
            {/* Writing & Sharing Knowledge Card */}
            <div className="bg-gray-900 rounded-xl shadow p-8 flex flex-col items-center justify-center col-span-1 md:col-span-2 mt-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Writing & Sharing Knowledge</h3>
              <p className="text-gray-300 text-lg text-center max-w-2xl">
                I write about development, automation, and technology to share knowledge with the community. 
                Follow me on Medium for more insights and tutorials.
              </p>
              <div className="mt-6">
                <a
                  href="https://medium.com/@aasdevtarun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <span>Follow on Medium</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog; 