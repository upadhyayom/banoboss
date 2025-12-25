import { motion } from "framer-motion";
import {
  Instagram,
  Youtube,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "@/assets/banoboss-logo.png";

const footerLinks = {
  programs: [
    { label: "BootCamp", href: "#programs" },
    { label: "Group Mentorship", href: "#programs" },
    { label: "Personal Mentorship", href: "#programs" },
  ],
  services: [
    { label: "QuickFix Session", href: "https://mediumturquoise-snail-907786.hostingersite.com/product/bb-consultancy-sessions-quickfix-session-1-hour/" },
    { label: "Growth Pack", href: "https://mediumturquoise-snail-907786.hostingersite.com/product/bb-mastery-program-dropshipping-1-on-1-mentorship/" },
    { label: "BB Products", href: "#products" },
  ],
  company: [
    { label: "Privacy Policy", href: "https://banoboss.in/privacy-policy/" },
    { label: "Returns and Refunds Policy", href: "https://banoboss.in/refund-policy/" },
    { label: "Shipping Policy", href: "https://banoboss.in/shipping-policy/" },
    { label: "Terms and Conditions", href: "https://banoboss.in/terms-and-condition/" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: MessageCircle, href: "#", label: "WhatsApp" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding !py-12 md:!py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={logo}
                alt="BanoBoss"
                className="h-10 mb-4 brightness-0 invert"
              />
              <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-sm mb-6">
                Empowering entrepreneurs with practical skills and mentorship to
                build successful e-commerce businesses.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:hello@banoboss.in"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Mail size={16} />
                  hello@banoboss.in
                </a>
                <a
                  href="tel:+911234567890"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Phone size={16} />
                  +91 12345 67890
                </a>
                
              </div>
            </motion.div>
          </div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-serif font-semibold text-lg mb-4">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-serif font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-serif font-semibold text-lg mb-4">Policy Links</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} BanoBoss.in. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
