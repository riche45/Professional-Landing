import { Github, Linkedin } from 'lucide-react';
import { cn } from '../utils/cn';

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className }: SocialLinksProps) {
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/riche45', label: 'GitHub' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46L20 4"/></svg>, href: 'https://x.com/codeand0', label: 'X' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/richard-garcia-vizcaino', label: 'LinkedIn' },
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