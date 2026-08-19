import { motion } from "framer-motion";

const benefits = [
  { icon: "🍯", title: "Produto Artesanal", description: "Feito à mão com amor" },
  { icon: "🎁", title: "Embalagem Personalizada", description: "Ideal para presente" },
  { icon: "⏰", title: "Sob encomenda", description: "Sempre fresquinho" },
  { icon: "🏢", title: "Corporativo", description: "Brindes exclusivos" },
];

const BenefitsSection = () => (
  <section className="py-10 md:py-20 bg-gradient-to-b from-cream to-cream/90 relative overflow-hidden">
    <div className="hidden md:block absolute top-10 left-10 w-32 h-32 bg-honey/10 rounded-full blur-3xl" />
    <div className="hidden md:block absolute bottom-10 right-10 w-40 h-40 bg-honey/10 rounded-full blur-3xl" />

    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6 md:mb-12"
      >
        <h3 className="text-xl md:text-3xl font-display font-bold text-chocolate-dark">
          Por que escolher a <span className="text-gradient-honey">Melamô</span>?
        </h3>
      </motion.div>

      <div className="flex md:grid md:grid-cols-4 gap-3 md:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none scrollbar-hide">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="flex-shrink-0 w-[140px] md:w-auto snap-start group bg-background rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-honey/10 hover:border-honey/30 text-center"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-honey/20 to-honey/10 rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl md:text-4xl">{benefit.icon}</span>
            </div>
            <h4 className="font-display font-semibold text-chocolate-dark text-xs md:text-base mb-0.5 md:mb-1">
              {benefit.title}
            </h4>
            <p className="text-[10px] md:text-sm text-chocolate-dark/60 leading-tight md:leading-relaxed">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
