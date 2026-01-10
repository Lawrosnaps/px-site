import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import AtariLines from './AtariLines';

// Framer Motion variants for the container to orchestrate the stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time delay between each child animating in
      delayChildren: 0.3,   // Initial delay before the first child starts
    },
  },
};

// Framer Motion variants for the text elements (children)
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Parallax transformations for the graphic
  const y = useTransform(scrollYProgress, [0, 0.5], ["0%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section id="hero" ref={targetRef} className="relative flex min-h-screen items-center justify-center bg-deepPurple px-8 overflow-hidden">
      {/* Noise Overlay - as per the design system */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>

      <div className="container mx-auto grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Animated Text Content */}
        <motion.div
          className="flex flex-col gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-space-grotesk text-5xl font-bold uppercase tracking-tighter text-white md:text-7xl"
            variants={itemVariants}
          >
            Digital Craft for the Mission.
          </motion.h1>
          <motion.p
            className="font-inter text-lg text-off-white/80 md:text-xl"
            variants={itemVariants}
          >
            87px is a creative studio bridging the gap between empathy and technology.
          </motion.p>
        </motion.div>

        {/* "Atari Lines" graphic with parallax and floating animation */}
        <motion.div
          className="hidden md:flex justify-center items-center"
          style={{ y, opacity, scale }} // Apply scroll-based parallax
        >
          <AtariLines className="text-electricTeal w-full max-w-sm" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;