import { motion } from "framer-motion";
import { MousePointer, MessageCircle, Heart } from "lucide-react";

const steps = [
  {
    icon: MousePointer,
    step: "1",
    title: "Escolha",
    titleFull: "Escolha seus sabores",
    description: "Navegue pelo catálogo e escolha suas combinações favoritas",
  },
  {
    icon: MessageCircle,
    step: "2",
    title: "Fale conosco",
    titleFull: "Fale conosco",
    description: "Entre em contato pelo WhatsApp para confirmar seu pedido",
  },
  {
    icon: Heart,
    step: "3",
    title: "Receba",
    titleFull: "Receba com carinho",
    description: "Retirada no local ou frete a combinar",
  },
];

const HowItWorksSection = () => (
  <section id="como-funciona" className="py-14 md:py-24 bg-background relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-honey/30 to-transparent" />

    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-16"
      >
        <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-honey/15 text-chocolate-dark rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4 border border-honey/20">
          ✨ Simples e rápido
        </span>
        <h3 className="text-2xl md:text-4xl font-display font-bold text-chocolate-dark">
          Como <span className="text-gradient-honey">Funciona</span>
        </h3>
      </motion.div>

      <div className="grid grid-cols-3 gap-3 md:gap-8 max-w-5xl mx-auto">
        {steps.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative"
          >
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-honey/40 to-honey/10" />
            )}

            <div className="bg-cream/50 rounded-xl md:rounded-2xl p-4 md:p-8 text-center border border-honey/10 hover:border-honey/30 hover:shadow-lg transition-all duration-300">
              <div className="relative inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 mb-3 md:mb-6 bg-gradient-to-br from-honey to-honey-dark rounded-xl md:rounded-2xl shadow-lg">
                <item.icon className="w-6 h-6 md:w-8 md:h-8 text-chocolate-dark" />
                <span className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 bg-chocolate-dark text-cream rounded-full flex items-center justify-center font-bold text-xs md:text-sm shadow-md">
                  {item.step}
                </span>
              </div>

              <h4 className="text-sm md:text-xl font-display font-semibold text-chocolate-dark mb-1 md:mb-3">
                <span className="md:hidden">{item.title}</span>
                <span className="hidden md:inline">{item.titleFull}</span>
              </h4>
              <p className="text-chocolate-dark/70 text-[10px] md:text-sm leading-tight md:leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
