import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote:
      "I was nervous to invest time and money at first, but attending the BootCamp was the best decision I've made. The sessions were live, everything was practical, and I finally feel confident to launch my store!",
    author: "Rohit S.",
    rating: 5,
  },
  {
    quote:
      "I've attended many online courses before, but this is different. Every doubt was cleared, and I could implement things immediately. I feel grateful and motivated after just the first session!",
    author: "Priya K.",
    rating: 5,
  },
  {
    quote:
      "The group mentorship kept me accountable and consistent. With every class, I could see my business growing. Highly recommended for anyone serious about dropshipping.",
    author: "Ankit R.",
    rating: 5,
  },
  {
    quote:
      "I didn't know where to start, but the programs walk you step by step. By the end of the week, I had a store ready to sell. Practical, live, and results-driven — exactly what I needed.",
    author: "Vikram T.",
    rating: 5,
  },
  {
    quote:
      "Personal mentorship was exactly what I needed. The guidance was tailored, and I finally understood how to scale my store. Feeling so empowered and confident now!",
    author: "Shreya M.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="section-padding bg-card overflow-hidden">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Real stories from real entrepreneurs
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/30 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-foreground/90 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <p className="font-semibold text-primary">— {testimonial.author}</p>
            </motion.div>
          ))}
        </div>

        {/* Second row for desktop */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.slice(3, 5).map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-secondary/30 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-foreground/90 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <p className="font-semibold text-primary">— {testimonial.author}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-secondary/30 p-8 rounded-2xl relative"
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground/90 mb-6 leading-relaxed italic">
              "{testimonials[currentIndex].quote}"
            </p>
            <p className="font-semibold text-primary">
              — {testimonials[currentIndex].author}
            </p>
          </motion.div>

          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
