import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import catalogoCorporativo from "@/assets/catalogo-corporativo.webp";
import catalogoTradicional from "@/assets/catalogo-tradicional.webp";
import catalogoDiaDasMaes from "@/assets/catalogo-dia-das-maes.webp";

const catalogs = [
  {
    title: "Catálogo Corporativo",
    image: catalogoCorporativo,
    buttonLabel: "Ver Catálogo Corporativo",
    href: "/catalogos/catalogo-corporativo.pdf",
  },
  {
    title: "Catálogo Tradicional",
    image: catalogoTradicional,
    buttonLabel: "Ver Catálogo Tradicional",
    href: "/catalogos/catalogo-tradicional.pdf",
  },
  {
    title: "Catálogo Dia das Mães",
    image: catalogoDiaDasMaes,
    buttonLabel: "Ver Catálogo Dia das Mães",
    href: "/catalogos/catalogo-dia-das-maes-2026.pdf",
  },
];

const CatalogSection = () => (
  <section id="catalogos" className="py-14 md:py-24 bg-cream relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-16"
      >
        <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-honey/15 text-chocolate-dark rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4 border border-honey/20">
          📋 Conheça nossas opções
        </span>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-chocolate-dark">
          Nossos <span className="text-gradient-honey">Catálogos</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto">
        {catalogs.map((catalog, index) => (
          <motion.div
            key={catalog.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-background rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-honey/10 hover:border-honey/30"
          >
            <div className="relative overflow-hidden aspect-[4/3] md:aspect-square">
              <img
                src={catalog.image}
                alt={catalog.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 md:p-6 text-center">
              <h3 className="text-lg md:text-xl font-display font-semibold text-chocolate-dark mb-4">
                {catalog.title}
              </h3>
              <Button variant="honey" size="lg" className="w-full group/btn" asChild>
                <a href={catalog.href} target="_blank" rel="noopener noreferrer">
                  {catalog.buttonLabel}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CatalogSection;
