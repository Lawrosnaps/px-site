import { motion } from 'framer-motion';

const AtariLines = ({ className }: { className?: string }) => {
  return (
    <motion.svg
      width="222"
      height="42"
      viewBox="0 0 222 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0, x: 50 }}
      animate={{
        opacity: 1,
        x: 0,
        y: ["0rem", "-0.75rem", "0rem"], // Subtle floating animation
      }}
      transition={{
        x: { duration: 0.8, delay: 0.7, ease: "easeOut" },
        opacity: { duration: 0.8, delay: 0.7, ease: "easeOut" },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5, // Start after the main text animation finishes
        },
      }}
    >
      <path d="M1 1H201V21" stroke="currentColor" strokeWidth="2" />
      <path d="M1 11H211V31" stroke="currentColor" strokeWidth="2" />
      <path d="M1 21H221V41" stroke="currentColor" strokeWidth="2" />
    </motion.svg>
  );
};

export default AtariLines;