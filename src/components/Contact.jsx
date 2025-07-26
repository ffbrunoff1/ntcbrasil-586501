import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const contactInfo = [
    {
      icon: <Phone className="h-7 w-7 text-secondary" />,
      title: 'Telefone',
      value: '+55 44 99104-0774',
      href: 'tel:+5544991040774',
    },
    {
      icon: <Mail className="h-7 w-7 text-secondary" />,
      title: 'Email',
      value: 'ffbrunoff@yahoo.com.br',
      href: 'mailto:ffbrunoff@yahoo.com.br',
    },
    {
      icon: <MapPin className="h-7 w-7 text-secondary" />,
      title: 'Endereço',
      value: 'Padre Lebret 801, G05 Bloco 03',
    },
  ];

  return (
    <section id="contato" className="py-20 md:py-32 bg-neutral">
      <motion.div
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-dark-text/80">
            Tem um projeto em mente ou precisa de uma cotação? Nossa equipe está
            pronta para ajudar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-accent mb-6">
              Informações de Contato
            </h3>
            <p className="text-dark-text/80 mb-8">
              Entre em contato conosco através dos canais abaixo ou preencha o
              formulário ao lado. Responderemos o mais breve possível.
            </p>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-full mr-5 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-accent">
                      {info.title}
                    </h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-dark-text/90 hover:text-secondary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-dark-text/90">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-primary p-8 sm:p-10 rounded-2xl shadow-xl"
            variants={itemVariants}
          >
            <form action="https://formspree.io/f/your_form_id" method="POST">
              <input
                type="hidden"
                name="_replyto"
                value="ffbrunoff@yahoo.com.br"
              />
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-dark-text/80 mb-2"
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-neutral rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-dark-text/80 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-neutral rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-dark-text/80 mb-2"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="w-full px-4 py-3 bg-neutral rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-dark-text/80 mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    required
                    className="w-full px-4 py-3 bg-neutral rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
                  ></textarea>
                </div>
                <div>
                  <motion.button
                    type="submit"
                    className="w-full bg-secondary text-primary font-bold py-4 px-8 rounded-full text-lg hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Enviar Mensagem
                  </motion.button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
