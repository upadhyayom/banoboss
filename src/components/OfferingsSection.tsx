import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Flame,
  Users,
  UserCheck,
  Clock,
  Zap,
  Package,
  Gift,
  ArrowRight,
} from "lucide-react";

// --- Data Configuration ---

const masteryPrograms = [
  {
    icon: GraduationCap,
    title: "BootCamp",
    description: "5-day intensive mentorship covering everything from store creation to scaling.",
     highlight: null,
    buttonText: "Join Bootcamp",
    href: "https://banoboss.in/product/bb-mastery-program-dropshipping-bootcamp/", // Replace with actual link
  },
  {
    icon: Users,
    title: "Group Mentorship",
    description: "3-month cohort program with live group sessions.",
   
    highlight: "Most Popular"
    buttonText: "Join Cohort",
    href: "https://banoboss.in/product/bb-mastery-program-dropshipping-group-mentorship/", // Replace with actual link
  },
  {
    icon: UserCheck,
    title: "Personal Mentorship",
    description: "1:1 mentorship with customized guidance from beginner to advanced strategies.",
    highlight: "Premium",
    buttonText: "Apply Now",
    href: "https://banoboss.in/product/bb-mastery-program-dropshipping-1-on-1-mentorship/", // Replace with actual link
  },
];

const consultancySessions = [
  {
    icon: Clock,
    title: "QuickFix",
    description: "1-hour focused session to solve urgent business challenges.",
    buttonText: "Book Session",
    href: "https://banoboss.in/product/bb-consultancy-sessions-quickfix-session-1-hour/", // Replace with actual link
  },
  {
    icon: Zap,
    title: "Growth Pack",
    description: "4 intensive sessions over 2 weeks for deeper problem-solving and strategy guidance.",
    buttonText: "Get Growth Pack",
    href: "https://banoboss.in/product/bb-consultancy-sessions-growth-pack-4-sessions/", // Replace with actual link
  },
];

const products = [
  {
    icon: Package,
    title: "Winning Product List",
    description: "Curated list of high-potential dropshipping products ready to test.",
    buttonText: "Buy List",
    href: "https://banoboss.in/product/winning-product-list/", // Replace with actual link
  },
  {
    icon: Gift,
    title: "BB Clarity Program",
    description: "Recorded workshop + bonus resources for fast implementation.",
    buttonText: "Buy Now",
    href: "https://banoboss.in/product/bb-clarity-program/", // Replace with actual link
  },
];

// --- Components ---

const OfferingCard = ({
  icon: Icon,
  title,
  description,
  highlight,
  buttonText,
  href,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  highlight?: string | null;
  buttonText?: string;
  href?: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    // Added 'flex flex-col h-full' to ensure cards stretch and buttons align
    className="relative bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 group flex flex-col h-full"
  >
    {highlight && (
      <span className="absolute -top-3 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
        {highlight}
      </span>
    )}
    
    {/* Content Wrapper - takes up available space */}
    <div className="flex-1">
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h4 className="font-serif font-semibold text-xl text-foreground mb-2">
        {title}
      </h4>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {description}
      </p>
    </div>

    {/* Button Wrapper - Pushed to bottom using mt-auto */}
    {buttonText && href && (
      <div className="mt-auto pt-4 border-t border-border/30">
        <Button 
          className="w-full group-hover:bg-primary/90" 
          variant="secondary" 
          asChild
        >
          <a href={href}>
            {buttonText}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    )}
  </motion.div>
);

const OfferingsSection = () => {
  return (
    <section id="programs" className="section-padding gradient-hero">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
            Explore Our Offerings
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the path that fits your learning style and goals
          </p>
        </motion.div>

        {/* Mastery Programs */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Mastery Programs
              </h3>
              <p className="text-muted-foreground mt-1">
                Complete dropshipping mentorship from beginner to advanced
              </p>
            </div>
            {/* Keeping the Category 'View All' Button */}
            
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {masteryPrograms.map((program, index) => (
              <OfferingCard
                key={program.title}
                {...program}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Consultancy Sessions */}
        <div id="consultancy" className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Consultancy Sessions
              </h3>
              <p className="text-muted-foreground mt-1">
                Personalized consultancy — ask anything, get expert guidance
              </p>
            </div>
             {/* Keeping the Category 'View All' Button */}
            {/* <Button variant="outline" className="group w-fit" asChild>
              <a href="https://mediumturquoise-snail-907786.hostingersite.com/product-category/bb-consultancy-sessions/">
                Book Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button> */}
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {consultancySessions.map((session, index) => (
              <OfferingCard key={session.title} {...session} delay={index * 0.1} />
            ))}
          </div>
        </div>

        {/* BB Products */}
        <div id="products">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                BB Products
              </h3>
              <p className="text-muted-foreground mt-1">
                Instant-access resources to accelerate your business success
              </p>
            </div>
             {/* Keeping the Category 'View All' Button */}
            {/* <Button variant="outline" className="group w-fit" asChild>
              <a href="https://mediumturquoise-snail-907786.hostingersite.com/product-category/bb-products/">
                Get Access Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button> */}
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <OfferingCard key={product.title} {...product} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
