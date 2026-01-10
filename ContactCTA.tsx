import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section id="contact" className="bg-deepPurple py-24 px-8">
      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-space-grotesk text-4xl font-bold text-white md:text-5xl">
          Have a mission?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-inter text-lg text-off-white/70">
          Let's build the tools to achieve it. We're ready to bridge the gap between your vision and the technology it needs to succeed.
        </p>
        <motion.a
          href="mailto:hello@87px.studio"
          className="group mt-8 inline-flex items-center gap-3 border border-electricTeal bg-electricTeal/10 px-8 py-4 font-space-grotesk font-bold uppercase text-electricTeal transition-colors hover:bg-electricTeal hover:text-deepPurple"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Start the Conversation
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ContactCTA;