import { motion } from "framer-motion";
import { GraduationCap, Lightbulb, Rocket, Code2, Trophy } from "lucide-react";

const timeline = [
  { year: "2023", label: "Started B.Tech CSE (DS & ML)", detail: "Lovely Professional University — Began foundational courses in Python, Statistics & Linear Algebra" },
  { year: "2023", label: "First Data Science Project", detail: "Built an EDA toolkit analyzing real-world datasets with Pandas & Matplotlib" },
  { year: "2024", label: "ML Project: Expense Prediction", detail: "Developed a regression model predicting user expenses with financial insights" },
  { year: "2024", label: "150+ DSA Problems Solved", detail: "Strengthened problem-solving skills across arrays, trees, graphs, DP on LeetCode & GFG", highlight: true },
  { year: "2024", label: "NLP & Sentiment Analysis", detail: "Built a sentiment classification engine using NLTK and Scikit-learn" },
  { year: "2025", label: "Customer Churn Predictor", detail: "Created a classification model using XGBoost with ROC-AUC evaluation" },
  { year: "2025", label: "Expanding into DevOps & AI", detail: "Learning Docker, Selenium, Advanced ML — exploring deep learning frameworks" },
  { year: "2027", label: "Expected Graduation", detail: "B.Tech Computer Science Engineering (DS & ML)" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
        <motion.p variants={item} className="text-primary font-mono text-sm mb-3">// ABOUT</motion.p>
        <motion.h2 variants={item} className="section-heading mb-12">
          The Operator
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div variants={item} className="space-y-6 text-secondary-foreground leading-relaxed">
            <p>
              I'm a 3rd-year B.Tech Computer Science Engineering student at Lovely Professional University,
              specializing in Data Science and Machine Learning. My focus is on building systems that learn
              from data and deliver real-world impact.
            </p>
            <p>
              With hands-on experience in Python, ML frameworks, and data analysis pipelines, I approach
              every problem with a curiosity-driven mindset. I believe in learning by building — every
              project is a chance to push boundaries.
            </p>
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-1 gap-4">
            {[
              { icon: GraduationCap, title: "Education", desc: "B.Tech CSE (DS & ML) — LPU, Class of 2027" },
              { icon: Lightbulb, title: "Focus", desc: "Machine Learning, Predictive Modeling, Data Analysis" },
              { icon: Rocket, title: "Mission", desc: "Build intelligent systems that solve meaningful problems" },
              { icon: Code2, title: "DSA", desc: "150+ problems solved on LeetCode & GeeksforGeeks" },
              { icon: Trophy, title: "Learner", desc: "Constantly upskilling — DevOps, NLP, Deep Learning" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass-card p-5 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon size={20} strokeWidth={1.25} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm mb-1">{title}</h3>
                  <p className="text-muted-foreground text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div variants={item}>
          <h3 className="font-display text-lg font-semibold mb-8 tracking-tight">Journey Timeline</h3>
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <div key={`${t.year}-${i}`} className="flex gap-6 items-start">
                  <div className={`w-[15px] h-[15px] rounded-full border-2 ${t.highlight ? 'border-accent bg-accent/20' : 'border-primary bg-background'} mt-1 shrink-0 relative z-10`} />
                  <div>
                    <span className="font-mono text-primary text-xs">{t.year}</span>
                    <h4 className={`font-display font-semibold text-sm ${t.highlight ? 'text-accent' : ''}`}>{t.label}</h4>
                    <p className="text-muted-foreground text-sm">{t.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
