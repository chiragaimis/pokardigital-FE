import { FaInstagram, FaVideo, FaCode, FaLaptopCode, FaRobot, FaCog, FaPaintBrush } from 'react-icons/fa';

export const servicesData = [
  {
    id: 'social-media',
    title: 'Social Media Content Creation',
    icon: FaInstagram,
    shortDesc: 'Engaging content that stops the scroll and drives conversions',
    description: 'Transform your social presence with content that captivates, engages, and converts. We create scroll-stopping posts tailored to your brand voice.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    benefits: [
      'Increased engagement rates by up to 300%',
      'Consistent brand voice across all platforms',
      'Data-driven content strategy',
      'Professional graphics and copywriting',
      'Platform-optimized content'
    ],
    process: [
      { step: 'Discovery', desc: 'Understanding your brand, audience, and goals' },
      { step: 'Strategy', desc: 'Creating a content calendar and posting schedule' },
      { step: 'Creation', desc: 'Designing graphics and writing compelling copy' },
      { step: 'Optimization', desc: 'A/B testing and performance analysis' }
    ],
    link: '/services/social-media'
  },
  {
    id: 'social-management',
    title: 'Social Media Management',
    icon: FaInstagram,
    shortDesc: 'Full-service social media management that grows your brand',
    description: 'Let us handle your entire social media presence while you focus on your business. From strategy to execution, we do it all.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    benefits: [
      'Save 20+ hours per week',
      'Consistent posting schedule',
      'Community engagement and growth',
      'Monthly analytics reports',
      'Crisis management support'
    ],
    process: [
      { step: 'Audit', desc: 'Analyzing your current social media presence' },
      { step: 'Planning', desc: 'Developing comprehensive social strategy' },
      { step: 'Execution', desc: 'Daily posting, engagement, and monitoring' },
      { step: 'Reporting', desc: 'Monthly insights and optimization recommendations' }
    ],
    link: '/services/social-management'
  },
  {
    id: 'video-editing',
    title: 'Post Production & Video Editing',
    icon: FaVideo,
    shortDesc: 'Cinematic video editing that tells your story',
    description: 'Professional video editing services that transform raw footage into compelling visual stories that engage and convert.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    benefits: [
      'Cinematic quality production',
      'Fast turnaround times',
      'Color grading and audio mixing',
      'Motion graphics and VFX',
      'Platform-specific optimization'
    ],
    process: [
      { step: 'Brief', desc: 'Understanding your vision and requirements' },
      { step: 'Editing', desc: 'Cutting, color grading, and effects' },
      { step: 'Review', desc: 'Client feedback and revisions' },
      { step: 'Delivery', desc: 'Final export in all required formats' }
    ],
    link: '/services/video-editing'
  },
  {
    id: 'web-development',
    title: 'Website Development',
    icon: FaCode,
    shortDesc: 'Lightning-fast websites that convert visitors into customers',
    description: 'Custom websites built with modern technologies. Fast, responsive, and optimized for conversions.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    benefits: [
      'Mobile-first responsive design',
      'SEO optimized from day one',
      'Lightning-fast load times',
      'Conversion-focused UX',
      'Easy content management'
    ],
    process: [
      { step: 'Discovery', desc: 'Understanding business goals and requirements' },
      { step: 'Design', desc: 'Creating wireframes and visual designs' },
      { step: 'Development', desc: 'Building with modern tech stack' },
      { step: 'Launch', desc: 'Testing, deployment, and training' }
    ],
    link: '/services/web-development'
  },
  {
    id: 'software-development',
    title: 'Software Development',
    icon: FaLaptopCode,
    shortDesc: 'Custom software solutions that scale with your business',
    description: 'Enterprise-grade software development tailored to your unique business needs. Scalable, secure, and maintainable.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    benefits: [
      'Custom-built for your workflow',
      'Scalable architecture',
      'Cloud-native solutions',
      'API integrations',
      'Ongoing support and maintenance'
    ],
    process: [
      { step: 'Analysis', desc: 'Deep dive into your business processes' },
      { step: 'Architecture', desc: 'Designing scalable system architecture' },
      { step: 'Development', desc: 'Agile development with regular updates' },
      { step: 'Deployment', desc: 'Launch, monitoring, and optimization' }
    ],
    link: '/services/software-development'
  },
  {
    id: 'bot-development',
    title: 'Bot Development',
    icon: FaRobot,
    shortDesc: 'Intelligent bots that automate customer interactions',
    description: 'AI-powered chatbots and automation bots that handle customer queries 24/7, improving satisfaction and reducing costs.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
    benefits: [
      '24/7 customer support',
      'Reduce support costs by 60%',
      'Instant response times',
      'Multi-platform integration',
      'Natural language processing'
    ],
    process: [
      { step: 'Requirements', desc: 'Identifying automation opportunities' },
      { step: 'Design', desc: 'Conversation flow and logic design' },
      { step: 'Development', desc: 'Building and training the bot' },
      { step: 'Integration', desc: 'Deploying across your platforms' }
    ],
    link: '/services/bot-development'
  },
  {
    id: 'automation',
    title: 'Automation Solutions',
    icon: FaCog,
    shortDesc: 'Streamline operations and eliminate repetitive tasks',
    description: 'Custom automation solutions that save time, reduce errors, and let your team focus on what matters most.',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80',
    benefits: [
      'Save 15+ hours per week',
      'Eliminate human errors',
      'Seamless tool integrations',
      'Real-time notifications',
      'Scalable workflows'
    ],
    process: [
      { step: 'Assessment', desc: 'Identifying repetitive tasks and bottlenecks' },
      { step: 'Design', desc: 'Mapping automation workflows' },
      { step: 'Implementation', desc: 'Building and testing automations' },
      { step: 'Optimization', desc: 'Monitoring and continuous improvement' }
    ],
    link: '/services/automation'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    icon: FaPaintBrush,
    shortDesc: 'Stunning visuals that make your brand unforgettable',
    description: 'Professional graphic design services that elevate your brand identity and create lasting impressions.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    benefits: [
      'Consistent brand identity',
      'Print and digital ready',
      'Unlimited revisions',
      'Fast turnaround',
      'Source files included'
    ],
    process: [
      { step: 'Brief', desc: 'Understanding your brand and vision' },
      { step: 'Concepts', desc: 'Creating initial design concepts' },
      { step: 'Refinement', desc: 'Revisions based on your feedback' },
      { step: 'Delivery', desc: 'Final files in all required formats' }
    ],
    link: '/services/graphic-design'
  }
];
