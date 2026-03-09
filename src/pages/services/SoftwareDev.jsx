import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CTASection from '../../components/CTASection';
import { FaCheckCircle } from 'react-icons/fa';

const SoftwareDev = () => {
  const service = {
    title: 'Software Development',
    description: 'Enterprise-grade software development tailored to your unique business needs. Scalable, secure, and maintainable.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',
    benefits: [
      'Custom-built for your workflow',
      'Scalable architecture',
      'Cloud-native solutions',
      'API integrations',
      'Ongoing support and maintenance',
      'Agile development methodology',
      'Security-first approach',
      'Comprehensive documentation'
    ],
    process: [
      { step: 'Analysis', desc: 'Deep dive into your business processes and requirements' },
      { step: 'Architecture', desc: 'Designing scalable, secure system architecture' },
      { step: 'Development', desc: 'Agile development with regular updates and demos' },
      { step: 'Deployment', desc: 'Launch, monitoring, optimization, and ongoing support' }
    ]
  };

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
                Discuss Your Project
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
              Enterprise-Grade <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Software that scales with your business and adapts to your needs
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
              Our <span className="gradient-text">Methodology</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Agile development that delivers value at every sprint
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

      {/* Solutions Section */}
      <section className="section-padding bg-dark-lighter">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Software Solutions <span className="gradient-text">We Build</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'CRM Systems', desc: 'Custom customer relationship management platforms' },
              { title: 'ERP Solutions', desc: 'Enterprise resource planning for streamlined operations' },
              { title: 'Inventory Management', desc: 'Real-time tracking and automated workflows' },
              { title: 'Booking Systems', desc: 'Appointment scheduling and resource management' },
              { title: 'Analytics Dashboards', desc: 'Data visualization and business intelligence' },
              { title: 'Mobile Applications', desc: 'Native and cross-platform mobile apps' }
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-xl card-hover"
              >
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-400">{solution.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Cutting-Edge <span className="gradient-text">Technology Stack</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                We leverage the latest technologies to build robust, scalable software solutions that stand the test of time.
              </p>
              <div className="space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <p className="text-gray-400">Node.js, Python, .NET, PHP</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <p className="text-gray-400">React, Vue, Next.js</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Database</h4>
                  <p className="text-gray-400">PostgreSQL, MongoDB, MySQL</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Cloud</h4>
                  <p className="text-gray-400">AWS, Google Cloud, Docker</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80"
                alt="Software development"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Build Your Custom Software?"
        description="Let's transform your business processes with software built specifically for you."
        buttonText="Schedule a Discovery Call"
      />
    </div>
  );
};

export default SoftwareDev;
