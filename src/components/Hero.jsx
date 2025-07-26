import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-secondary text-primary"
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1753050830776_og92528y9w_Captura_de_Tela_2025-06-02_a_s_15.28.01.png')",
          filter: 'blur(5px)',
          transform: 'scale(1.1)',
        }}
      ></div>
      <motion.div
        className="relative container mx-auto px-6 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-shadow-lg"
          variants={itemVariants}
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
        >
          Aumentando a eficiência dos seus projetos com soluções em drenagem de
          alta qualidade.
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-shadow-md"
          variants={itemVariants}
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}
        >
          A NTC Brasil oferece produtos de ponta para garantir a segurança e a
          eficiência que sua obra precisa.
        </motion.p>
        <motion.div variants={itemVariants}>
          <a
            href="#produto"
            className="bg-primary text-secondary font-bold py-4 px-10 rounded-full text-lg hover:bg-neutral transition-all duration-300 transform hover:scale-105 shadow-xl inline-block"
          >
            Conheça nosso produto
          </a>
        </motion.div>
      </motion.div>
      <motion.a
        href="#sobre"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown className="text-primary h-8 w-8" />
      </motion.a>
    </section>
  );
}
