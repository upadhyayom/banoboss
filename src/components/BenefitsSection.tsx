import { motion } from "framer-motion";
import {
  Wrench,
  ShieldCheck,
  HeartHandshake,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    icon: Wrench,
    title: "Practical Skills",
    description: "Hands-on, results-driven learning.",
  },
  {
    icon: ShieldCheck,
    title: "Confidence",
    description: "Take action with expert guidance.",
  },
  {
    icon: HeartHandshake,
    title: "Support & Mentorship",
    description: "Help whenever you need it.",
  },
  {
    icon: TrendingUp,
    title: "Real Earnings",
    description: "Apply what you learn to see results.",
  },
  {
    icon: Sparkles,
    title: "Freedom",
    description: "Be your own boss.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
            How We Help You Succeed
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to build a thriving e-commerce business
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group relative bg-secondary/50 hover:bg-primary p-6 rounded-2xl text-center transition-all duration-300 hover:shadow-elevated"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 group-hover:bg-primary-foreground/20 rounded-xl flex items-center justify-center transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary-foreground mb-2 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 text-sm transition-colors duration-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
