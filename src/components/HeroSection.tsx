import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileDown, Mail } from "lucide-react";

const roles = ["ML Developer", "Data Science Learner", "Future AI Engineer"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (typing) {
      if (displayed.length < currentRole.length) {
        const t = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="max-w-4xl"
        >
          <div className="status-pill mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span>Currently: 3rd Year B.Tech @ LPU | Expected '27</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-6">
            ASHWIN
            <br />
            SIVA KUMAR
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4">
            Architecting Intelligence through Data Science &amp; Machine Learning.
          </p>

          <div className="h-8 mb-10">
            <span className="font-mono text-primary text-sm">
              {">"} {displayed}
              <span className="animate-pulse-glow">_</span>
            </span>
          </div>

          <p className="text-secondary-foreground max-w-xl mb-10 leading-relaxed">
            A motivated B.Tech CSE student specializing in DS & ML, passionate about
            building intelligent systems and solving real-world problems using data.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-primary text-primary-foreground font-semibold px-8 py-3 text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              View Projects
              <ArrowDown size={16} strokeWidth={1.25} />
            </a>
            <a
              href="#resume"
              className="border border-primary/30 text-primary font-semibold px-8 py-3 text-sm hover:bg-primary/10 transition-colors inline-flex items-center gap-2"
            >
              <FileDown size={16} strokeWidth={1.25} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="border border-foreground/10 text-foreground font-semibold px-8 py-3 text-sm hover:border-foreground/30 transition-colors inline-flex items-center gap-2"
            >
              <Mail size={16} strokeWidth={1.25} />
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
