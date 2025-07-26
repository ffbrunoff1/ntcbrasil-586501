import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const navLinks = [
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Produto', href: '#produto' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <motion.footer
      className="bg-accent text-neutral"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#hero">
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753050492607_0.png"
                alt="NTC Brasil Logo"
                className="h-14 w-auto mb-4 bg-white p-2 rounded"
              />
            </a>
            <p className="max-w-xs text-neutral/80">
              Soluções de alta performance em drenagem para a construção civil.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Contato</h3>
            <ul className="space-y-3 text-neutral/80">
              <li>+55 44 99104-0774</li>
              <li>ffbrunoff@yahoo.com.br</li>
              <li>Padre Lebret 801, G05 Bloco 03</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral/20 text-center text-neutral/60">
          <p>
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
