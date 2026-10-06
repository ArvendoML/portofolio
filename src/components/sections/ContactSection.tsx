'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/icons';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SocialButton } from '@/components/ui/SocialButton';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 bg-accent/30 relative">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <SectionHeader 
            title="Get in Touch" 
            description="I'm currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open. I'll try my best to get back to you!" 
            align="center"
          />
          
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <SocialButton 
              href="mailto:hello@example.com" 
              icon={<Mail className="w-5 h-5 text-primary" />} 
              label="hello@example.com" 
              variant="outline" 
            />
            <SocialButton 
              href="https://github.com" 
              icon={<Github className="w-5 h-5 text-primary" />} 
              label="github.com" 
              variant="outline"
            />
            <SocialButton 
              href="https://linkedin.com" 
              icon={<Linkedin className="w-5 h-5 text-primary" />} 
              label="linkedin.com" 
              variant="outline"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
