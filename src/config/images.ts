// Importar la imagen directamente desde src
import avatarImage from '../images/profile/foto-rg.jpeg';

export const images = {
  profile: {
    // Para la imagen principal, usamos la importación directa
    avatar: avatarImage,
    // Para el resto, usamos rutas absolutas desde la raíz
    banner: '/images/profile/banner.jpg',
    fallback: '/images/profile/fallback.jpg',
  },
  articles: {
    defaultCover: '/images/articles/default-cover.jpg',
    placeholder: '/images/articles/placeholder.jpg',
  },
  projects: {
    defaultCover: '/images/projects/default-cover.jpg',
    placeholder: '/images/projects/placeholder.jpg',
  },
  blog: {
    defaultCover: '/images/blog/default-cover.jpg',
    placeholder: '/images/blog/placeholder.jpg',
  },
  social: {
    github: '/images/social/github.svg',
    linkedin: '/images/social/linkedin.svg',
    twitter: '/images/social/twitter.svg',
    instagram: '/images/social/instagram.svg',
  },
} as const;

// Helper function to get image URL
export const getImageUrl = (path: string) => {
  // If it's an external URL (starts with http:// or https://)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // For internal URLs, ensure they start with a forward slash
  return path.startsWith('/') ? path : `/${path}`;
};

// Type for image paths
export type ImagePath = typeof images[keyof typeof images];

// Export default
export default images; 