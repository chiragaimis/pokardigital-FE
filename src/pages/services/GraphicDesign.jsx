import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CTASection from '../../components/CTASection';
import { FaCheckCircle } from 'react-icons/fa';

const GraphicDesign = () => {
  const service = {
    title: 'Graphic Design',
    description: 'Professional graphic design services that elevate your brand identity and create lasting impressions.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80',
    benefits: [
      'Consistent brand identity',
      'Print and digital ready',
      'Unlimited revisions',
      'Fast turnaround',
      'Source files included',
      'Professional quality',
      'Custom illustrations',
      'Brand guidelines'
    ],
    process: [
      { step: 'Brief', desc: 'Understanding your brand, vision, and design requirements' },
      { step: 'Concepts', desc: 'Creating initial design concepts and mood boards' },
      { step: 'Refinement', desc: 'Revisions based on your feedback until perfect' },
      { step: 'Delivery', desc: 'Final files in all required formats with guidelines' }
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
                Start Your Design
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
              Designs That <span className="gradient-text">Stand Out</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Create a memorable brand identity that resonates with your audience
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
              Design <span className="gradient-text">Process</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From concept to final delivery
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

      {/* Design Services Section */}
      <section className="section-padding bg-dark-lighter">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Design Services <span className="gradient-text">We Offer</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Logo Design', desc: 'Unique, memorable logos that define your brand' },
              { title: 'Brand Identity', desc: 'Complete brand packages with guidelines' },
              { title: 'Social Media Graphics', desc: 'Eye-catching posts, stories, and covers' },
              { title: 'Marketing Materials', desc: 'Brochures, flyers, posters, and banners' },
              { title: 'Packaging Design', desc: 'Product packaging that sells' },
              { title: 'Infographics', desc: 'Data visualization that tells your story' },
              { title: 'Business Cards', desc: 'Professional cards that make an impression' },
              { title: 'Presentation Design', desc: 'Stunning slides that captivate audiences' },
              { title: 'UI/UX Design', desc: 'User interfaces that delight users' }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-xl card-hover"
              >
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Work</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A glimpse of designs we've created for our clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
              'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&q=80',
              'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80',
              'https://images.unsplash.com/photo-1600132806608-231446b2e7af?w=600&q=80',
              'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=600&q=80',
              'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=600&q=80'
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl overflow-hidden card-hover"
              >
                <img
                  src={image}
                  alt={`Design work ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
                Why Choose Our <span className="gradient-text">Design Services</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Creative Excellence</h3>
                    <p className="text-gray-400">Award-winning designers with years of experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
                    <p className="text-gray-400">Quick delivery without compromising quality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Unlimited Revisions</h3>
                    <p className="text-gray-400">We work until you're 100% satisfied</p>
                  </div>
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
                src="https://images.unsplash.com/photo-1561070791-36c11767b26a?w=800&q=80"
                alt="Design process"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Elevate Your Brand?"
        description="Let's create stunning designs that make your brand unforgettable."
        buttonText="Get Your Free Design Mockup"
      />
    </div>
  );
};

export default GraphicDesign;
