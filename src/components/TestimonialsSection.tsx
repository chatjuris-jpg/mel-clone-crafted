import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import feedback1 from "@/assets/feedback-1.webp";
import feedback2 from "@/assets/feedback-2.webp";
import feedback3 from "@/assets/feedback-3.webp";
import feedback4 from "@/assets/feedback-4.webp";
import feedback5 from "@/assets/feedback-5.webp";
import feedback6 from "@/assets/feedback-6.webp";
import feedback7 from "@/assets/feedback-7.webp";
import feedback8 from "@/assets/feedback-8.webp";

const feedbacks = [
  { image: feedback1, alt: "Feedback de cliente 1" },
  { image: feedback2, alt: "Feedback de cliente 2" },
  { image: feedback3, alt: "Feedback de cliente 3" },
  { image: feedback4, alt: "Feedback de cliente 4" },
  { image: feedback5, alt: "Feedback de cliente 5" },
  { image: feedback6, alt: "Feedback de cliente 6" },
  { image: feedback7, alt: "Feedback de cliente 7" },
  { image: feedback8, alt: "Feedback de cliente 8" },
];

const TestimonialsSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="depoimentos" className="py-14 md:py-24 bg-chocolate-dark relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="hidden md:block absolute top-20 left-20 w-64 h-64 bg-honey/10 rounded-full blur-[100px]" />
      <div className="hidden md:block absolute bottom-20 right-20 w-80 h-80 bg-honey/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-honey/20 text-honey rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4 border border-honey/30">
            ⭐ Clientes satisfeitos
          </span>
          <h3 className="text-2xl md:text-4xl font-display font-bold text-cream mb-2 md:mb-4">
            O que dizem <span className="text-gradient-honey">sobre nós</span>
          </h3>
          <p className="text-cream/60 text-sm md:text-base max-w-lg mx-auto px-2">
            Mais de 50 mil pãezinhos entregues e muitos sorrisos conquistados
          </p>
        </motion.div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {feedbacks.map((fb, index) => (
            <motion.div
              key={fb.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setSelected(index)}
            >
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-cream/10 group-hover:border-honey/40 transition-all duration-300">
                <img
                  src={fb.image}
                  alt={fb.alt}
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-2xl w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-10 right-0 md:-top-4 md:-right-12 text-cream/80 hover:text-cream transition-colors"
                aria-label="Fechar"
              >
                <X className="w-7 h-7" />
              </button>
              <img
                src={feedbacks[selected]!.image}
                alt={feedbacks[selected]!.alt}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TestimonialsSection;
