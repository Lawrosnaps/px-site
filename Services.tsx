import { motion } from 'framer-motion';
import { Code, Film } from 'lucide-react';
import { ReactNode } from 'react';

// Animation variants for the cards to fade in from below
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  items: string[];
}

const ServiceCard = ({ icon, title, description, items }: ServiceCardProps) => (
  <motion.div
    className="flex flex-col gap-4 border border-electricTeal/20 bg-charcoal p-8"
    variants={cardVariants}
  >
    <div className="flex items-center gap-4">
      {icon}
      <h3 className="font-space-grotesk text-2xl font-bold text-white">{title}</h3>
    </div>
    <p className="font-inter text-off-white/70">{description}</p>
    <ul className="mt-2 space-y-2 font-inter text-off-white">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-2">
          <div className="h-px w-3 bg-electricTeal"></div>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="bg-deepPurple py-24 px-8">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          <ServiceCard
            icon={<Code className="h-8 w-8 text-electricTeal" />}
            title="Digital Product"
            description="Engineered solutions that perform under pressure. We build robust, scalable, and user-centric applications."
            items={[
              'Web & Mobile App Development',
              'UI/UX Design & Prototyping',
              'System Architecture',
              'Performance Optimization',
            ]}
          />
          <ServiceCard
            icon={<Film className="h-8 w-8 text-electricTeal" />}
            title="Creative Media"
            description="Compelling narratives that connect and inspire. We produce high-impact media for mission-driven stories."
            items={[
              'Documentary & Brand Films',
              'Content Strategy',
              'Photography & Visuals',
              'Post-Production & Editing',
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;