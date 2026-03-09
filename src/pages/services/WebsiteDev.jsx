import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CTASection from '../../components/CTASection';
import { FaCheckCircle } from 'react-icons/fa';

const WebsiteDev = () => {
  const service = {
    title: 'Website Development',
    description: 'Custom websites built with modern technologies. Fast, responsive, and optimized for conversions.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
    benefits: [
      'Mobile-first responsive design',
      'SEO optimized from day one',
      'Lightning-fast load times',
      'Conversion-focused UX',
      'Easy content management',
      'Secure and scalable',
      'Cross-browser compatibility',
      'Analytics integration'
    ],
    process: [
      { step: 'Discovery', desc: 'Understanding business goals, target audience, and technical requirements' },
      { step: 'Design', desc: 'Creating wireframes, mockups, and interactive prototypes' },
      { step: 'Development', desc: 'Building with modern tech stack and best practices' },
      { step: 'Launch', desc: 'Testing, deployment, training, and ongoing support' }
    ]
  };

  const technologies = [
    'React', 'Next.js', 'Vue.js', 'Node.js', 'WordPress',
    'Tailwind CSS', 'TypeScript', 'Vercel'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/90 to-dark"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">{service.title}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              {service.description}
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Start Your Website
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-dark-lighter">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Websites That <span className="gradient-text">Convert</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Modern, fast, and built to turn visitors into customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3 glass p-6 rounded-xl"
              >
                <FaCheckCircle className="text-primary text-xl flex-shrink-0 mt-1" />
                <p className="text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Development <span className="gradient-text">Process</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From concept to launch, we've got you covered
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass p-8 rounded-xl h-full">
                  <div className="text-6xl font-bold gradient-text mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.step}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-dark-lighter">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Modern <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We use cutting-edge tools to build fast, scalable websites
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass px-6 py-3 rounded-full text-lg font-medium hover:bg-white/10 transition-colors"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Types Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Website Types <span className="gradient-text">We Build</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Business Websites', desc: 'Professional corporate sites that establish credibility' },
              { title: 'E-commerce Stores', desc: 'Online stores with seamless shopping experiences' },
              { title: 'Landing Pages', desc: 'High-converting pages for campaigns and products' },
              { title: 'Portfolio Sites', desc: 'Showcase your work with stunning visuals' },
              { title: 'SaaS Platforms', desc: 'Complex web applications with user dashboards' },
              { title: 'Blogs & Content Sites', desc: 'SEO-optimized content management systems' }
            ].map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-xl card-hover"
              >
                <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                <p className="text-gray-400">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Launch Your Dream Website?"
        description="Let's build a website that not only looks amazing but drives real business results."
        buttonText="Get Your Free Consultation"
      />
    </div>
  );
};

export default WebsiteDev;
