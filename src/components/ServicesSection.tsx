import { motion } from "framer-motion";
import { Cpu, BarChart3, Wrench } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "ML Model Development",
    items: ["Build predictive models", "Classification & regression", "Custom model architectures"],
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Reporting",
    items: ["Data preprocessing & cleaning", "Exploratory data analysis", "Visual reporting & dashboards"],
  },
  {
    icon: Wrench,
    title: "Model Optimization",
    items: ["Hyperparameter tuning", "Feature engineering", "Model evaluation & selection"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const ServicesSection = () => (
  <section id="services" className="py-24 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
        <motion.p variants={item} className="text-primary font-mono text-sm mb-3">// SERVICES</motion.p>
        <motion.h2 variants={item} className="section-heading mb-16">
          What I Build
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <motion.div key={s.title} variants={item} className="glass-card glow-border p-8">
              <div className="p-3 rounded-xl bg-primary/10 w-fit mb-6">
                <s.icon size={24} strokeWidth={1.25} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight mb-4">{s.title}</h3>
              <ul className="space-y-3">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-secondary-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
