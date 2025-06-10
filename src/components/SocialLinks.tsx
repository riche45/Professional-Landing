import { Github, Twitter, Linkedin } from 'lucide-react';
import { cn } from '../utils/cn';

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className }: SocialLinksProps) {
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: 'https://x.com', label: 'Twitter/X' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <div className={cn("flex gap-4", className)}>
      {socialLinks.map((link) => (
        <a 
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}