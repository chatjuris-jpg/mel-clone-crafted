import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ctaBackground from "@/assets/cta-background.webp";

const FinalCTASection = () => (
  <section className="py-16 md:py-28 relative overflow-hidden">
    <img
      src={ctaBackground}
      alt=""
      loading="lazy"
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-chocolate-dark/70 via-chocolate-dark/50 to-chocolate-dark/30" />
    <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-honey/20 rounded-full blur-[100px]" />

    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-honey/20 backdrop-blur-sm rounded-full mb-5 md:mb-8 border border-honey/30"
        >
          <span className="text-4xl md:text-5xl">🍯</span>
        </motion.div>

        <h3 className="text-2xl md:text-5xl lg:text-6xl font-display font-bold text-cream mb-4 md:mb-6 leading-tight px-2">
          Pronto para <span className="text-gradient-honey">adoçar</span> seu momento?
        </h3>

        <p className="text-base md:text-xl text-cream/70 mb-6 md:mb-10 max-w-lg mx-auto leading-relaxed px-4">
          Faça sua encomenda agora e descubra o sabor que conquistou milhares de clientes.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            variant="hero"
            size="xl"
            className="group shadow-2xl w-full sm:w-auto min-h-[56px] text-base"
            asChild
          >
            <a href="https://wa.me/5531993805082" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Fazer meu pedido agora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xs md:text-sm text-cream/40 mt-5 md:mt-8"
        >
          Atendimento de segunda a sábado • Resposta rápida
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
