import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CTASection from '../../components/CTASection';
import { FaCheckCircle } from 'react-icons/fa';

const BotDev = () => {
  const service = {
    title: 'Bot Development',
    description: 'AI-powered chatbots and automation bots that handle customer queries 24/7, improving satisfaction and reducing costs.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80',
    benefits: [
      '24/7 customer support',
      'Reduce support costs by 60%',
      'Instant response times',
      'Multi-platform integration',
      'Natural language processing',
      'Seamless human handoff',
      'Analytics and insights',
      'Continuous learning'
    ],
    process: [
      { step: 'Requirements', desc: 'Identifying automation opportunities and use cases' },
      { step: 'Design', desc: 'Conversation flow mapping and logic design' },
      { step: 'Development', desc: 'Building and training the bot with AI/ML' },
      { step: 'Integration', desc: 'Deploying across your platforms and channels' }
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
                Build Your Bot
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
              Intelligent Bots <span className="gradient-text">That Work 24/7</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Automate customer interactions and scale your support without scaling your team
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
              Bot Development <span className="gradient-text">Process</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From concept to deployment in weeks, not months
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

      {/* Bot Types Section */}
      <section className="section-padding bg-dark-lighter">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Types of Bots <span className="gradient-text">We Build</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Customer Support Bots', desc: 'Handle FAQs, troubleshooting, and ticket creation' },
              { title: 'Sales Bots', desc: 'Qualify leads, schedule demos, and close deals' },
              { title: 'E-commerce Bots', desc: 'Product recommendations and order tracking' },
              { title: 'Booking Bots', desc: 'Appointment scheduling and calendar management' },
              { title: 'Social Media Bots', desc: 'Automated responses on Facebook, Instagram, WhatsApp' },
              { title: 'Internal Bots', desc: 'HR, IT support, and workflow automation' }
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

      {/* Platforms Section */}
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
                Multi-Platform <span className="gradient-text">Integration</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Deploy your bot across all major platforms and reach customers wherever they are.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Website', 'Facebook Messenger', 'WhatsApp', 'Instagram', 'Telegram', 'Slack', 'Discord', 'SMS'].map((platform, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="glass p-4 rounded-lg text-center font-medium"
                  >
                    {platform}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                alt="AI chatbot"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Automate Your Customer Support?"
        description="Let's build an intelligent bot that handles queries 24/7 and delights your customers."
        buttonText="Get Your Bot Demo"
      />
    </div>
  );
};

export default BotDev;
