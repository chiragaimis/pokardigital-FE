import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CTASection from '../../components/CTASection';
import { FaCheckCircle } from 'react-icons/fa';

const SocialMedia = () => {
  const service = {
    title: 'Social Media Content Creation',
    description: 'Transform your social presence with content that captivates, engages, and converts. We create scroll-stopping posts tailored to your brand voice.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80',
    benefits: [
      'Increased engagement rates by up to 300%',
      'Consistent brand voice across all platforms',
      'Data-driven content strategy',
      'Professional graphics and copywriting',
      'Platform-optimized content',
      'Monthly content calendar',
      'Trending topic integration',
      'Hashtag research and optimization'
    ],
    process: [
      { step: 'Discovery', desc: 'Understanding your brand, audience, and goals through in-depth consultation' },
      { step: 'Strategy', desc: 'Creating a comprehensive content calendar and posting schedule aligned with your objectives' },
      { step: 'Creation', desc: 'Designing eye-catching graphics and writing compelling copy that resonates' },
      { step: 'Optimization', desc: 'A/B testing and performance analysis to continuously improve results' }
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
                Get Started Today
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
              Why Choose Our <span className="gradient-text">Social Media Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Stand out in the crowded social media landscape with content that drives real results
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
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A proven methodology that delivers consistent, high-quality content
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

      {/* Results Section */}
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
                Real Results, <span className="gradient-text">Real Growth</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                Our social media content creation services have helped businesses across industries achieve remarkable growth. From increasing engagement to driving conversions, we deliver measurable results.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="glass p-6 rounded-xl">
                  <div className="text-4xl font-bold gradient-text mb-2">300%</div>
                  <div className="text-gray-400">Avg. Engagement Increase</div>
                </div>
                <div className="glass p-6 rounded-xl">
                  <div className="text-4xl font-bold gradient-text mb-2">2M+</div>
                  <div className="text-gray-400">Content Impressions</div>
                </div>
              </div>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Start Growing Today
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Social media analytics"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Social Media?"
        description="Let's create content that stops the scroll and drives real business results."
        buttonText="Get Your Free Strategy Session"
      />
    </div>
  );
};

export default SocialMedia;
