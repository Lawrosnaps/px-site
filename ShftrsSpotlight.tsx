import { motion } from 'framer-motion';
import { ShieldCheck, CalendarDays, HeartPulse } from 'lucide-react';

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const visualVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
  },
};

const ShftrsSpotlight = () => {
  return (
    <section id="work" className="bg-charcoal py-24 px-8">
      <motion.div
        className="container mx-auto grid grid-cols-1 items-center gap-12 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Text Content */}
        <motion.div className="flex flex-col gap-6" variants={textVariants}>
          <div>
            <span className="font-space-grotesk text-sm font-bold uppercase tracking-widest text-electricTeal">
              Flagship Project
            </span>
            <h2 className="mt-2 font-space-grotesk text-5xl font-bold text-white">SHFTRS</h2>
          </div>
          <p className="font-inter text-lg text-off-white/80">
            A comprehensive wellbeing and rota management application designed specifically for the unique demands faced by British Police officers.
          </p>
          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-4">
              <ShieldCheck className="mt-1 h-6 w-6 flex-shrink-0 text-electricTeal" />
              <div>
                <h4 className="font-space-grotesk font-bold text-white">Duty-Specific Design</h4>
                <p className="font-inter text-off-white/70">Built with a deep understanding of shift patterns, overtime, and officer welfare.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CalendarDays className="mt-1 h-6 w-6 flex-shrink-0 text-electricTeal" />
              <div>
                <h4 className="font-space-grotesk font-bold text-white">Intelligent Rota</h4>
                <p className="font-inter text-off-white/70">Smart calendar integration that simplifies complex scheduling and leave requests.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HeartPulse className="mt-1 h-6 w-6 flex-shrink-0 text-electricTeal" />
              <div>
                <h4 className="font-space-grotesk font-bold text-white">Proactive Wellbeing</h4>
                <p className="font-inter text-off-white/70">Features tools for mental and physical health, tailored to the pressures of the job.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Visual Placeholder */}
        <motion.div className="relative flex h-96 items-center justify-center overflow-hidden rounded-md border border-electricTeal/20 bg-deepPurple/50 md:h-[32rem]" variants={visualVariants}>
        <motion.div className="relative flex h-[32rem] items-center justify-center overflow-hidden rounded-md border border-electricTeal/20 bg-deepPurple/50 md:h-[48rem]" variants={visualVariants}>
          <img
            src="/media/shftrs.png"
            alt="SHFTRS App Interface"
            className="h-full w-full object-cover opacity-90 transition-opacity duration-500 hover:opacity-100"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ShftrsSpotlight;