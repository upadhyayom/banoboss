import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", phone: "", email: "", query: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-cream-dark">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
              Book a Free Call
            </h2>
            <p className="text-muted-foreground text-lg">
              Get personalized guidance on your e-commerce journey. Our team will
              help you understand the best path for you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card p-8 md:p-10 rounded-2xl shadow-elevated space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground flex items-center gap-2"
                >
                  <MessageSquare size={16} className="text-primary" />
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-foreground flex items-center gap-2"
                >
                  <Phone size={16} className="text-primary" />
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 12345 67890"
                  required
                  className="h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground flex items-center gap-2"
              >
                <Mail size={16} className="text-primary" />
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="query"
                className="text-sm font-medium text-foreground"
              >
                What's your query?
              </label>
              <Textarea
                id="query"
                name="query"
                value={formData.query}
                onChange={handleChange}
                placeholder="Tell us about your e-commerce goals..."
                rows={4}
                required
                className="resize-none"
              />
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  Submit
                  <Send size={18} className="ml-2" />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
