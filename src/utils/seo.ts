// Utilidades SEO y Analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const updateMetaTags = (title: string, description: string, keywords: string[]) => {
  // Título
  document.title = title;
  
  // Meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  } else {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', description);
    document.head.appendChild(metaDescription);
  }
  
  // Keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) {
    metaKeywords.setAttribute('content', keywords.join(', '));
  } else {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', keywords.join(', '));
    document.head.appendChild(metaKeywords);
  }
};

export const trackPageView = (vertical: string, config: any) => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: config.metaTitle,
      page_location: window.location.href,
      vertical_type: vertical,
      service_category: config.pricing.includes('$1000') ? 'premium' : 'small_business'
    });
  }
};

export const trackCTAClick = (vertical: string, ctaType: string) => {
  if (window.gtag) {
    window.gtag('event', 'cta_click', {
      vertical_type: vertical,
      cta_type: ctaType,
      event_category: 'engagement'
    });
  }
};

export const trackLeadGeneration = (vertical: string, source: string) => {
  if (window.gtag) {
    window.gtag('event', 'generate_lead', {
      vertical_type: vertical,
      lead_source: source,
      event_category: 'conversion',
      value: 1
    });
  }
}; 