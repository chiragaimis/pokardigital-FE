import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-xl p-8 card-hover group"
    >
      <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="text-3xl text-white" />
      </div>
      
      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
      <p className="text-gray-400 mb-6">{service.shortDesc}</p>
      
      <Link
        to={service.link}
        className="inline-flex items-center space-x-2 text-primary hover:text-primary-light transition-colors group"
      >
        <span>Learn More</span>
        <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
