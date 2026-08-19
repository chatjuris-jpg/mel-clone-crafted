import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Posso personalizar os pães de mel?",
    answer:
      "Sim! Personalizamos para casamentos, aniversários e formaturas. Escolha cores, mensagens e formatos especiais.",
  },
  {
    question: "Qual o prazo de produção?",
    answer:
      "Encomendas pequenas (até 50 unidades): 3 a 5 dias úteis. Para eventos maiores, faça o pedido com 15 dias de antecedência.",
  },
  {
    question: "Como faço o pagamento?",
    answer:
      "Aceitamos PIX, cartões de crédito/débito e transferência. Para encomendas grandes, pedimos 50% de sinal.",
  },
  {
    question: "Vocês fazem entrega?",
    answer: "Trabalhamos com Retirada no local ou frete a combinar.",
  },
  {
    question: "Quanto tempo dura o pão de mel?",
    answer:
      "7 dias em temperatura ambiente, 15 dias em geladeira e 90 dias congelado, lembrando que nossos pãezinhos não possuem conservantes.",
  },
  {
    question: "Fazem brindes corporativos?",
    answer:
      "Sim! Embalagens personalizadas com logo da empresa, cores, adesivos/tags especiais e condições para grandes quantidades.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-14 md:py-24 bg-cream relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream to-honey/5" />

    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 md:mb-14"
      >
        <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-honey/15 text-chocolate-dark rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4 border border-honey/20">
          ❓ Dúvidas Frequentes
        </span>
        <h3 className="text-2xl md:text-4xl font-display font-bold text-chocolate-dark mb-2 md:mb-4">
          Perguntas <span className="text-gradient-honey">Frequentes</span>
        </h3>
        <p className="text-chocolate-dark/60 text-sm md:text-base max-w-xl mx-auto px-2">
          Tire suas dúvidas sobre nossos produtos e serviços
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="bg-background rounded-lg md:rounded-xl border border-honey/15 px-4 md:px-6 overflow-hidden shadow-sm hover:shadow-md hover:border-honey/30 transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-chocolate-dark hover:text-honey py-4 md:py-5 text-sm md:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-chocolate-dark/70 pb-4 md:pb-5 leading-relaxed text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
