import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "Email", value: "ashwinsivakumar2005@gmail.com", href: "mailto:ashwin@example.com" },
  { icon: Phone, label: "Phone", value: "+91 7397164376", href: "tel:+917397164376" },
  { icon: Linkedin, label: "LinkedIn", value: "www.linkedin.com/in/ashwin-siva-kumar", href: "www.linkedin.com/in/ashwin-siva-kumar" },
  { icon: Github, label: "GitHub", value: "https://github.com/Ashwin-7722", href: "https://github.com/Ashwin-7722" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Message sent! (placeholder)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
          <motion.p variants={item} className="text-primary font-mono text-sm mb-3">// CONTACT</motion.p>
          <motion.h2 variants={item} className="section-heading mb-16">
            Get In Touch
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact links */}
            <motion.div variants={item} className="space-y-6">
              <p className="text-secondary-foreground leading-relaxed mb-8">
                I'm always open to discussing new projects, collaborations, or opportunities in ML and Data Science.
              </p>
              {contactLinks.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card glow-border p-4 flex items-center gap-4 group block"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <c.icon size={18} strokeWidth={1.25} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono">{c.label}</p>
                    <p className="text-sm text-foreground">{c.value}</p>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Form */}
            <motion.form variants={item} onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: "name" as const, label: "Name", type: "text" },
                { name: "email" as const, label: "Email", type: "email" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="text-xs font-mono text-muted-foreground mb-2 block">{field.label}</label>
                  <input
                    type={field.type}
                    required
                    value={form[field.name]}
                    onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                    placeholder={`Your ${field.label.toLowerCase()}`}
                  />
                </div>
              ))}
              <div>
                <label className="text-xs font-mono text-muted-foreground mb-2 block">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-primary-foreground font-semibold px-8 py-3 text-sm inline-flex items-center gap-2 hover:opacity-90 transition-opacity w-full justify-center"
              >
                <Send size={16} strokeWidth={1.25} />
                Send Message
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
