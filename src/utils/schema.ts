// Schema.org markup para SEO avanzado
export const generateServiceSchema = (vertical: string, config: any) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": config.metaTitle,
    "description": config.metaDescription,
    "provider": {
      "@type": "Person",
      "name": "Richard Guerrero",
      "jobTitle": "AI Developer & Consultant",
      "url": "https://richard-garcia.vercel.app"
    },
    "serviceType": "Artificial Intelligence Automation",
    "areaServed": "Mexico",
    "availableLanguage": ["Spanish", "English"]
  };

  // Esquemas específicos por vertical
  const verticalSchemas = {
    restaurants: {
      ...baseSchema,
      "category": "Restaurant Technology",
      "offers": {
        "@type": "Offer",
        "price": "180-450",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "billingDuration": "P1M",
          "unitText": "monthly"
        }
      },
      "audience": {
        "@type": "BusinessAudience",
        "businessFunction": "Food Service"
      }
    },
    medical: {
      ...baseSchema,
      "category": "Healthcare Technology",
      "offers": {
        "@type": "Offer",
        "price": "270-720",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "billingDuration": "P1M",
          "unitText": "monthly"
        }
      },
      "audience": {
        "@type": "BusinessAudience",
        "businessFunction": "Healthcare"
      },
      "additionalProperty": {
        "@type": "PropertyValue",
        "name": "GDPR Compliant",
        "value": "Yes"
      }
    },
    startup: {
      ...baseSchema,
      "category": "Enterprise Software",
      "offers": {
        "@type": "Offer",
        "price": "720-1800",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "billingDuration": "P1M",
          "unitText": "monthly"
        }
      },
      "audience": {
        "@type": "BusinessAudience",
        "businessFunction": "Technology Startups"
      },
      "additionalProperty": {
        "@type": "PropertyValue",
        "name": "Open Source",
        "value": "Yes"
      }
    }
  };

  return verticalSchemas[vertical as keyof typeof verticalSchemas] || baseSchema;
};

export const generateBreadcrumbSchema = (vertical: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://richard-garcia.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "AI Services",
        "item": "https://richard-garcia.vercel.app/ai-services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": vertical.charAt(0).toUpperCase() + vertical.slice(1),
        "item": `https://richard-garcia.vercel.app/ai-services/${vertical}`
      }
    ]
  };
};

export const generateFAQSchema = (vertical: string) => {
  const faqsByVertical = {
    restaurants: [
      {
        question: "¿Cómo funciona un chatbot para restaurantes?",
        answer: "Nuestro chatbot de IA maneja pedidos automáticamente, gestiona reservas y responde consultas frecuentes 24/7, integrándose directamente con tu sistema POS."
      },
      {
        question: "¿Es seguro para mi restaurante?",
        answer: "Sí, todos los datos se procesan localmente en tu servidor. No hay dependencias externas ni riesgo de filtración de información."
      },
      {
        question: "¿Cuánto tiempo toma implementarlo?",
        answer: "La implementación típica toma 2-4 semanas, incluyendo configuración, integración con tu sistema existente y entrenamiento del personal."
      }
    ],
    medical: [
      {
        question: "¿Es HIPAA compliant?",
        answer: "Sí, nuestro sistema cumple automáticamente con HIPAA ya que todos los datos se procesan localmente en tu infraestructura, sin terceros involucrados."
      },
      {
        question: "¿Puede integrarse con mi sistema actual?",
        answer: "Sí, nos integramos con la mayoría de sistemas de gestión médica (EMR/EHR) existentes a través de APIs estándar."
      }
    ]
  };

  const faqs = faqsByVertical[vertical as keyof typeof faqsByVertical] || [];
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const injectSchema = (schema: object) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}; 