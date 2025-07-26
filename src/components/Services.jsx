import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
export default function Services() {
  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
    },
  };
  const contentVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };
  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };
  const features = [
    'Separação de camadas de solo',
    'Filtração e controle de erosão',
    'Drenagem eficiente de água',
    'Proteção de geomembranas',
    'Reforço e estabilização de solos',
  ];
  return (
    <section id="produto" className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Nosso Produto Destaque
          </h2>
          <p className="text-lg text-dark-text/80">
            Soluções inovadoras e duráveis para os desafios da engenharia
            moderna.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.img
            src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1753051062369_ck5apzux8pv_geotextil_1.jpg"
            alt="Rolo de Geotêxtil"
            className="w-full h-auto rounded-2xl shadow-2xl object-cover aspect-square"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageVariants}
          />
          <motion.div
            className="flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={contentVariants}
          >
            <motion.h3
              className="text-3xl font-bold text-accent mb-4"
              variants={itemVariants}
            >
              Geotêxtil de Alta Performance
            </motion.h3>
            <motion.p
              className="text-dark-text/80 mb-6"
              variants={itemVariants}
            >
              O geotêxtil é um produto versátil e altamente durável utilizado em
              obras de engenharia civil e ambiental. Fabricado a partir de
              fibras sintéticas de alta resistência, ele desempenha funções
              essenciais como separação, filtração, drenagem e proteção de
              solos.
            </motion.p>
            <motion.ul className="space-y-3 mb-8" variants={itemVariants}>
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle2 className="h-6 w-6 text-secondary mr-3 flex-shrink-0" />
                  <span className="text-dark-text/90">{feature}</span>
                </li>
              ))}
            </motion.ul>
            <motion.div className="mt-auto" variants={itemVariants}>
              <a
                href="#contato"
                className="bg-secondary text-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
              >
                Solicite uma Cotação
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
