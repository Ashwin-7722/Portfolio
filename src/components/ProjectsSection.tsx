import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import projectExpense from "@/assets/project-expense.jpg";
import projectSentiment from "@/assets/project-sentiment.jpg";
import projectChurn from "@/assets/project-churn.jpg";
import projectEda from "@/assets/project-eda.jpg";

const projects = [
  {
    title: "Expense Prediction System",
    year: "2024",
    status: "Build Status: Active",
    version: "v1.0",
    image: projectExpense,
    description:
      "A machine learning model that predicts user expenses and provides a detailed analytical report with practical financial insights using regression techniques.",
    features: ["Expense prediction using ML", "Data analysis & visualization", "Practical financial insights"],
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    github: "#",
  },
  {
    title: "Sentiment Analysis Engine",
    year: "2024",
    status: "Build Status: Active",
    version: "v1.2",
    image: projectSentiment,
    description:
      "An NLP-based sentiment analysis tool that classifies text data into positive, negative, and neutral categories with high accuracy using pre-trained models.",
    features: ["Text preprocessing & tokenization", "Multi-class sentiment classification", "Visualization with word clouds"],
    stack: ["Python", "NLTK", "TextBlob", "Scikit-learn", "WordCloud"],
    github: "#",
  },
  {
    title: "Customer Churn Predictor",
    year: "2025",
    status: "Build Status: Active",
    version: "v1.0",
    image: projectChurn,
    description:
      "A predictive analytics model that identifies customers likely to churn using classification algorithms, enabling proactive retention strategies.",
    features: ["Feature engineering & selection", "Model comparison (RF, XGBoost, LR)", "ROC-AUC evaluation metrics"],
    stack: ["Python", "XGBoost", "Pandas", "Seaborn", "Scikit-learn"],
    github: "#",
  },
  {
    title: "EDA & Data Visualization Toolkit",
    year: "2024",
    status: "Build Status: Active",
    version: "v2.0",
    image: projectEda,
    description:
      "A comprehensive exploratory data analysis project covering multiple real-world datasets with automated insights, statistical summaries, and interactive visualizations.",
    features: ["Automated statistical profiling", "Correlation heatmaps & distribution plots", "Outlier detection & data cleaning"],
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Plotly"],
    github: "#",
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

const ProjectsSection = () => (
  <section id="projects" className="py-24 md:py-32">
    <div className="container mx-auto px-4">
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
        <motion.p variants={item} className="text-primary font-mono text-sm mb-3">// PROJECTS</motion.p>
        <motion.h2 variants={item} className="section-heading mb-16">
          Technical Ledger
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <motion.div key={proj.title} variants={item} className="glass-card glow-border flex flex-col group overflow-hidden">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <span className="absolute top-3 right-3 status-pill text-xs">{proj.status}</span>
              </div>

              <div className="p-8 flex flex-col flex-1">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="font-display text-xl font-semibold tracking-tight">{proj.title}</h3>
                  <div className="flex gap-3 mt-2">
                    <span className="font-mono text-xs text-muted-foreground">{proj.year}</span>
                    <span className="font-mono text-xs text-muted-foreground">|</span>
                    <span className="font-mono text-xs text-primary">{proj.version}</span>
                  </div>
                </div>

                {/* Body */}
                <p className="text-secondary-foreground text-sm leading-relaxed mb-6">{proj.description}</p>

                <ul className="space-y-2 mb-6">
                  {proj.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {proj.stack.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex gap-3">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <Github size={16} strokeWidth={1.25} />
                      Source Code
                    </a>
                  )}
                  <a href="#" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors opacity-0 group-hover:opacity-100">
                    <ExternalLink size={16} strokeWidth={1.25} />
                    View Documentation
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
