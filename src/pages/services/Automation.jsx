import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CTASection from '../../components/CTASection';
import { FaCheckCircle } from 'react-icons/fa';

const Automation = () => {
  const service = {
    title: 'Automation Solutions',
    description: 'Custom automation solutions that save time, reduce errors, and let your team focus on what matters most.',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1200&q=80',
    benefits: [
      'Save 15+ hours per week',
      'Eliminate human errors',
      'Seamless tool integrations',
      'Real-time notifications',
      'Scalable workflows',
      'Cost reduction',
      'Improved productivity',
      'Data synchronization'
    ],
    process: [
      { step: 'Assessment', desc: 'Identifying repetitive tasks and bottlenecks in your workflow' },
      { step: 'Design', desc: 'Mapping automation workflows and integration points' },
      { step: 'Implementation', desc: 'Building and testing automations with your tools' },
      { step: 'Optimization', desc: 'Monitoring performance and continuous improvement' }
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
                Automate Your Workflow
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
              Work Smarter, <span className="gradient-text">Not Harder</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Eliminate repetitive tasks and focus on growing your business
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
              Automation <span className="gradient-text">Process</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From manual to automated in four simple steps
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

      {/* Automation Types Section */}
      <section className="section-padding bg-dark-lighter">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We <span className="gradient-text">Automate</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Email Automation', desc: 'Automated email sequences, follow-ups, and notifications' },
              { title: 'Data Entry', desc: 'Sync data between apps, CRMs, and spreadsheets' },
              { title: 'Social Media', desc: 'Scheduled posting, engagement tracking, and reporting' },
              { title: 'Lead Management', desc: 'Capture, qualify, and route leads automatically' },
              { title: 'Invoice & Billing', desc: 'Automated invoicing, payment reminders, and reconciliation' },
              { title: 'Report Generation', desc: 'Automated reports and dashboards from multiple sources' }
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

      {/* Integrations Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Seamless <span className="gradient-text">Integrations</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Connect all your favorite tools and apps
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Zapier', 'Make', 'Google Workspace', 'Microsoft 365', 'Slack',
              'HubSpot', 'Salesforce', 'Mailchimp', 'Stripe', 'QuickBooks',
              'Shopify', 'WordPress', 'Airtable', 'Notion', 'Trello'
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass px-6 py-3 rounded-full text-lg font-medium hover:bg-white/10 transition-colors"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="section-padding bg-dark-lighter">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Measurable <span className="gradient-text">ROI</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Our automation solutions deliver tangible results that impact your bottom line.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="glass p-6 rounded-xl">
                  <div className="text-4xl font-bold gradient-text mb-2">15+</div>
                  <div className="text-gray-400">Hours Saved/Week</div>
                </div>
                <div className="glass p-6 rounded-xl">
                  <div className="text-4xl font-bold gradient-text mb-2">90%</div>
                  <div className="text-gray-400">Error Reduction</div>
                </div>
                <div className="glass p-6 rounded-xl">
                  <div className="text-4xl font-bold gradient-text mb-2">3x</div>
                  <div className="text-gray-400">Faster Processing</div>
                </div>
                <div className="glass p-6 rounded-xl">
                  <div className="text-4xl font-bold gradient-text mb-2">$50K+</div>
                  <div className="text-gray-400">Avg. Annual Savings</div>
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Automation dashboard"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Automate Your Business?"
        description="Stop wasting time on repetitive tasks. Let's build automation that works for you."
        buttonText="Get Your Free Automation Audit"
      />
    </div>
  );
};

export default Automation;
