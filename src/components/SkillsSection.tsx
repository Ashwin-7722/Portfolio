import { motion } from "framer-motion";
import { Brain, Code2, Settings2 } from "lucide-react";

const modules = [
  {
    icon: Brain,
    title: "Intelligence",
    subtitle: "ML & Data Science",
    skills: ["Machine Learning", "Data Science", "Predictive Modeling", "Data Analysis", "Statistical Methods"],
  },
  {
    icon: Code2,
    title: "Logic",
    subtitle: "Programming & Tools",
    skills: ["Python", "Scikit-learn", "Pandas", "NumPy", "Git & GitHub"],
  },
  {
    icon: Settings2,
    title: "Infrastructure",
    subtitle: "DevOps & Automation",
    skills: ["Docker", "Selenium", "Data Pipelines", "Model Deployment", "Linux"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const SkillsSection = () => (
  <section id="skills" className="py-24 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
        <motion.p variants={item} className="text-primary font-mono text-sm mb-3">// CAPABILITIES</motion.p>
        <motion.h2 variants={item} className="section-heading mb-16">
          The Stack
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <motion.div key={mod.title} variants={item} className="glass-card glow-border p-8 group">
              <div className="p-3 rounded-xl bg-primary/10 w-fit mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <mod.icon size={24} strokeWidth={1.25} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold tracking-tight mb-1">{mod.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{mod.subtitle}</p>
              <ul className="space-y-3">
                {mod.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-sm text-secondary-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {skill}
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

export default SkillsSection;
