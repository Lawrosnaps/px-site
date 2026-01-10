import { motion } from 'framer-motion';

const logos = [
  { name: 'Green Space SOS', src: '/media/greenspacesos.png' },
  { name: 'Round XII', src: '/media/roundxii.png' },
  { name: 'Lyons', src: '/media/LYONS.png' },
];

const LogoCloud = () => {
  return (
    <section className="bg-deepPurple py-12 border-b border-white/5">
      <div className="container mx-auto px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-space-grotesk text-sm font-bold uppercase tracking-widest text-off-white/40 mb-10"
        >
          Trusted by Mission-Driven Teams
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-12 md:h-16 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;