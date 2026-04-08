import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { servicesData } from '../data/servicesData';
import { FaCheckCircle, FaRocket, FaUsers, FaChartLine } from 'react-icons/fa';

const Home = () => {
  const features = [
    { icon: FaRocket, title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality' },
    { icon: FaUsers, title: 'Expert Team', desc: 'Seasoned professionals in every field' },
    { icon: FaChartLine, title: 'Proven Results', desc: 'Data-driven strategies that deliver ROI' },
    { icon: FaCheckCircle, title: 'Full Support', desc: '24/7 support for all your needs' }
  ];

  const testimonials = [
    {
      name: 'Aadit Shah',
      role: 'Director of Shriji Wealth',
      content: 'Pokar Digital transformed our online presence. Our engagement increased by 300% in just 3 months!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80'
    }
  ];

  const process = [
    { number: '01', title: 'Discovery', desc: 'We understand your goals and challenges' },
    { number: '02', title: 'Strategy', desc: 'Custom plan tailored to your needs' },
    { number: '03', title: 'Execution', desc: 'Expert implementation with precision' },
    { number: '04', title: 'Growth', desc: 'Continuous optimization for results' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        subtitle="Welcome to Pokar Digital"
        title={<>We Build <span className="gradient-text">Digital Growth Engines</span></>}
        description="Transform your business with cutting-edge digital solutions. From social media to software development, we deliver results that matter."
        buttonText="Start Your Project"
        showSecondaryButton={true}
        secondaryButtonText="View Our Work"
        secondaryButtonLink="/services"
      />

      {/* About Preview */}
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
                Your Partner in <span className="gradient-text">Digital Success</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                We're not just another digital agency. We're growth partners who understand that your success is our success. With a team of experts across all digital disciplines, we deliver comprehensive solutions that drive real business results.
              </p>
              <p className="text-gray-400 text-lg mb-8">
                From startups to enterprises, we've helped hundreds of businesses scale their digital presence and achieve their goals.
              </p>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 glass p-6 rounded-xl">
                <p className="text-4xl font-bold gradient-text">2+</p>
                <p className="text-gray-400">Projects Completed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          
          <h2 className="text-4xl font-bold text-center mb-10">
            Our <span className="gradient-text">Resources</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* PDF 1 */}
            <div className="glass p-6 rounded-xl text-center hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-4">
                Database Solution
              </h3>

              <p className="text-gray-400 mb-6">
                Complete guide for database architecture and solutions.
              </p>

              <a
                href="/DataBase_Solution.pdf"
                target="_blank"
                className="btn-primary block"
              >
                View PDF
              </a>

              <a
                href="/DataBase_Solution.pdf"
                download
                className="btn-secondary mt-3 block"
              >
                Download PDF
              </a>
            </div>

            {/* PDF 2 */}
            <div className="glass p-6 rounded-xl text-center hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-4">
                Practical Solutions
              </h3>

              <p className="text-gray-400 mb-6">
                Real-world practical solutions for business growth.
              </p>

              <a
                href="/PRACTICAL_SOLUTIONS.pdf"
                target="_blank"
                className="btn-primary block"
              >
                View PDF
              </a>

              <a
                href="/PRACTICAL_SOLUTIONS.pdf"
                download
                className="btn-secondary mt-3 block"
              >
                Download PDF
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive digital solutions designed to accelerate your growth and maximize your ROI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 6).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                View All Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-dark-lighter">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">Pokar Digital</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </motion.div>
              );
            })}
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
              A proven methodology that ensures success at every step
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass p-8 rounded-xl h-full">
                  <div className="text-6xl font-bold gradient-text mb-4">{step.number}</div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-dark-lighter">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Don't just take our word for it - hear from businesses we've helped grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-xl"
              >
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Build Your Digital Growth Engine?"
        description="Let's transform your business together. Get started with a free consultation today."
        buttonText="Get Started Now"
      />
    </div>
  );
};

export default Home;
