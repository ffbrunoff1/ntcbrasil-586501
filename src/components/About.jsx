import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Building, Droplets } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-secondary" />,
      title: 'Confiança',
      description:
        'Produtos de alta qualidade que garantem a segurança e durabilidade de seus projetos.',
    },
    {
      icon: <Building className="h-10 w-10 text-secondary" />,
      title: 'Experiência',
      description:
        'Especialistas em soluções de drenagem para o setor de construção civil.',
    },
    {
      icon: <Droplets className="h-10 w-10 text-secondary" />,
      title: 'Eficiência',
      description:
        'Otimize suas obras com sistemas de drenagem que previnem problemas e reduzem custos.',
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-neutral">
      <motion.div
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Construa com Confiança. Construa com{' '}
            <span className="text-secondary">NTC Brasil.</span>
          </h2>
          <p className="text-lg text-dark-text/80">
            A NTC Brasil é uma empresa especializada em soluções de drenagem no
            setor de construção. Nossa missão é oferecer produtos da mais alta
            qualidade para garantir a segurança e eficiência em seus projetos,
            desde a fundação até o acabamento.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-10"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-primary p-8 rounded-xl shadow-lg text-center flex flex-col items-center"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-secondary/10 p-4 rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-accent mb-3">
                {feature.title}
              </h3>
              <p className="text-dark-text/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
