import { motion } from "framer-motion";
import { FileDown } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const ResumeSection = () => (
  <section id="resume" className="py-24 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="glass-card glow-border p-12 md:p-16 text-center max-w-2xl mx-auto"
      >
        <motion.p variants={item} className="text-primary font-mono text-sm mb-3">// RESUME</motion.p>
        <motion.h2 variants={item} className="section-heading mb-6">
          Get My Resume
        </motion.h2>
        <motion.p variants={item} className="text-muted-foreground mb-10 max-w-md mx-auto">
          Download my latest resume to learn more about my education, skills, and project experience.
        </motion.p>
        <motion.div variants={item}>
          <a
            href="/SpclCV.pdf"
            className="bg-primary text-primary-foreground font-bold px-8 py-3 text-sm inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <FileDown size={18} strokeWidth={1.25} />
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ResumeSection;
