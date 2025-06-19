import { Github, Linkedin, Twitter, Mail, Globe, BookOpen, ExternalLink, Calendar, Link2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Links() {
  const { t } = useTranslation();
  const linksData = [
    {
      category: t('links.categories.social'),
      links: [
        {
          icon: <Linkedin size={24} />, name: 'LinkedIn', url: 'https://linkedin.com', desc: t('links.social.linkedin')
        },
        {
          icon: <Github size={24} />, name: 'GitHub', url: 'https://github.com/riche45', desc: t('links.social.github')
        },
        {
          icon: <Twitter size={24} />, name: 'Twitter/X', url: 'https://x.com/codeand0', desc: t('links.social.twitter')
        },
        {
          icon: <ExternalLink size={24} />, name: 'Instagram', url: 'https://instagram.com/_richard_gavi_', desc: t('links.social.instagram')
        }
      ]
    },
    {
      category: t('links.categories.projects'),
      links: [
        {
          icon: <Globe size={24} />, name: 'Portfolio 2025', url: 'https://github.com/riche45/web3-portfolio', desc: t('links.projects.portfolio')
        },
        {
          icon: <Github size={24} />, name: 'Automatizaciones', url: 'https://github.com/riche45/', desc: t('links.projects.automation')
        }
      ]
    },
    {
      category: t('links.categories.personal'),
      links: [
        {
          icon: <BookOpen size={24} />, name: 'Blog', url: '/articles', desc: t('links.personal.blog')
        },
        {
          icon: <Mail size={24} />, name: 'Newsletter', url: '/newsletter', desc: t('links.personal.newsletter')
        }
      ]
    },
    {
      category: t('links.categories.resources'),
      links: [
        {
          icon: <BookOpen size={24} />, name: 'De cero a uno', url: 'https://www.amazon.com/s?k=de+cero+a+uno&crid=1YHR9K31XHVDV&sprefix=de+cero+a%2Caps%2C397&ref=nb_sb_ss_p13n-pd-dpltr-ranker_1_9', desc: t('links.resources.zeroToOne')
        },
        {
          icon: <BookOpen size={24} />, name: 'The Pragmatic Programmer', url: 'https://www.amazon.com/s?k=pragmatic&__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3K888WB5W2CVB&sprefix=pragmatic%2Caps%2C323&ref=nb_sb_noss_1', desc: t('links.resources.pragmatic')
        },
        {
          icon: <Globe size={24} />, name: 'Curso FullStack U. Helsinki', url: 'https://fullstackopen.com/es/', desc: t('links.resources.fullstack')
        },
        {
          icon: <ExternalLink size={24} />, name: 'VSCode', url: 'https://code.visualstudio.com/', desc: t('links.resources.vscode')
        },
        {
          icon: <ExternalLink size={24} />, name: 'Figma', url: 'https://figma.com', desc: t('links.resources.figma')
        },
        {
          icon: <ExternalLink size={24} />, name: 'Notion', url: 'https://notion.so', desc: t('links.resources.notion')
        }
      ]
    },
    {
      category: t('links.categories.contact'),
      links: [
        {
          icon: <Mail size={24} />, name: 'Email', url: 'mailto:richardlisongarcia@gmail.com', desc: t('links.contact.email')
        },
        {
          icon: <Calendar size={24} />, name: 'Agendar Reunión', url: '/conexiones', desc: t('links.contact.meeting')
        }
      ]
    }
  ];

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Links & Recursos</h1>
      {linksData.map((cat) => (
        <div key={cat.category} className="mb-10">
          <h2 className="text-2xl font-semibold text-primary-400 mb-4">{cat.category}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {cat.links.map((link) => (
              <div key={link.name} className="flex items-center bg-dark-800 rounded-lg p-4 gap-4 shadow hover:shadow-lg transition-shadow">
                <div className="text-primary-400">{link.icon}</div>
                <div className="flex-1">
                  <div className="font-medium text-lg">{link.name}</div>
                  <div className="text-gray-400 text-sm mb-2">{link.desc}</div>
                  {link.url.startsWith('/') ? (
                    <RouterLink to={link.url} className="inline-flex items-center gap-1 text-primary-400 hover:underline text-sm">
                      <Link2 size={16} /> Abrir
                    </RouterLink>
                  ) : (
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary-400 hover:underline text-sm">
                      <Link2 size={16} /> Abrir
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 