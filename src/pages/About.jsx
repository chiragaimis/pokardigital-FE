import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import { FaAward, FaUsers, FaRocket, FaHeart } from 'react-icons/fa';
import meetPic from '../assets/images/Meet_Pic.jpeg';
import chiragPic from '../assets/images/Chirag_Pic.jpeg';

const About = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '5+', label: 'Years Experience' }
  ];

  const values = [
    {
      icon: FaAward,
      title: 'Excellence',
      desc: 'We strive for excellence in every project, delivering quality that exceeds expectations.'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      desc: 'Your success is our success. We work as an extension of your team.'
    },
    {
      icon: FaRocket,
      title: 'Innovation',
      desc: 'We stay ahead of trends, bringing cutting-edge solutions to your business.'
    },
    {
      icon: FaHeart,
      title: 'Passion',
      desc: 'We love what we do, and it shows in the results we deliver.'
    }
  ];

  const team = [
    {
      name: 'Meet Patel',
      role: 'CEO & Founder',
      image: meetPic
    },
        {
      name: 'Chirag Chandratre',
      role: 'CEO & Founder',
      image: chiragPic
    },
   
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        subtitle="About Pokar Digital"
        title={<>Building Digital Excellence <span className="gradient-text">Since 2019</span></>}
        description="We're a team of passionate digital experts dedicated to helping businesses thrive in the digital age."
        buttonText="Work With Us"
        showSecondaryButton={true}
        secondaryButtonText="View Services"
        secondaryButtonLink="/services"
      />

      {/* Stats Section */}
      <section className="section-padding bg-dark-lighter">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
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
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                Founded in 2019, Pokar Digital started with a simple mission: to help businesses harness the power of digital technology to achieve extraordinary growth.
              </p>
              <p className="text-gray-400 text-lg mb-6">
                What began as a small team of passionate developers and designers has grown into a full-service digital agency serving clients worldwide. We've completed over 500 projects, helped 200+ businesses scale, and built lasting partnerships along the way.
              </p>
              <p className="text-gray-400 text-lg">
                Today, we're proud to be a trusted partner for businesses of all sizes, from ambitious startups to established enterprises. Our commitment to excellence, innovation, and client success remains stronger than ever.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Our team"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-dark-lighter">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-8 rounded-xl text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The talented people behind your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl overflow-hidden card-hover"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Work Together?"
        description="Let's create something amazing. Join the 200+ businesses that trust Pokar Digital."
        buttonText="Start Your Project"
      />
    </div>
  );
};

export default About;
