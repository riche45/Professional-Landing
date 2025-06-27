// Automatización SEO Guerrilla
// Ejecutar en browser console

// 1. Auditoría automática de meta tags
function auditMetaTags() {
  const results = {
    title: document.title,
    titleLength: document.title.length,
    description: document.querySelector('meta[name="description"]')?.content || 'MISSING',
    descriptionLength: document.querySelector('meta[name="description"]')?.content?.length || 0,
    keywords: document.querySelector('meta[name="keywords"]')?.content || 'MISSING',
    canonical: document.querySelector('link[rel="canonical"]')?.href || 'MISSING',
    ogTitle: document.querySelector('meta[property="og:title"]')?.content || 'MISSING',
    ogDescription: document.querySelector('meta[property="og:description"]')?.content || 'MISSING',
    ogImage: document.querySelector('meta[property="og:image"]')?.content || 'MISSING'
  };
  
  console.table(results);
  
  // Validaciones
  if (results.titleLength > 60) console.warn('⚠️ Title too long');
  if (results.descriptionLength > 160) console.warn('⚠️ Description too long');
  if (results.description === 'MISSING') console.error('❌ Missing description');
  
  return results;
}

// 2. Generador automático de keywords
function generateKeywords(vertical, business) {
  const templates = {
    restaurants: [
      `chatbot ${business}`,
      `automatización ${business}`,
      `pedidos online ${business}`,
      `sistema pos ${business}`,
      `bot whatsapp ${business}`
    ],
    medical: [
      `asistente médico ${business}`,
      `sistema citas ${business}`,
      `automatización consultorio ${business}`,
      `HIPAA compliant ${business}`,
      `telemedicina ${business}`
    ],
    dental: [
      `software dental ${business}`,
      `citas dentales ${business}`,
      `automatización clínica ${business}`,
      `recordatorios pacientes ${business}`
    ]
  };
  
  return templates[vertical] || [];
}

// 3. Checker de velocidad
function checkPageSpeed() {
  const start = performance.now();
  
  window.addEventListener('load', () => {
    const loadTime = performance.now() - start;
    const metrics = {
      loadTime: Math.round(loadTime),
      domElements: document.querySelectorAll('*').length,
      images: document.images.length,
      scripts: document.scripts.length,
      stylesheets: document.styleSheets.length
    };
    
    console.log('📊 Page Speed Metrics:');
    console.table(metrics);
    
    if (loadTime > 3000) console.warn('⚠️ Page too slow');
    if (metrics.images > 50) console.warn('⚠️ Too many images');
  });
}

// 4. Extractor de competitors
function extractCompetitorKeywords(url) {
  // Usar en console de página competidora
  const title = document.title;
  const description = document.querySelector('meta[name="description"]')?.content;
  const headings = Array.from(document.querySelectorAll('h1, h2, h3')).map(h => h.textContent);
  
  console.log('🔍 Competitor Analysis:');
  console.log('Title:', title);
  console.log('Description:', description);
  console.log('Headings:', headings);
  
  return { title, description, headings };
}

// 5. Bulk meta tag generator
function generateBulkMetaTags(verticals) {
  const templates = {
    title: '{vertical} con IA | Automatización {business} | Richard Guerrero',
    description: 'Automatiza tu {business} con IA local. {benefit}. Sin dependencias externas. Desde ${price}/mes. Demo gratuito.',
    keywords: '{vertical}, IA, automatización, {business}, chatbot, {location}'
  };
  
  verticals.forEach(v => {
    const meta = {
      title: templates.title.replace('{vertical}', v.name).replace('{business}', v.business),
      description: templates.description.replace('{business}', v.business).replace('{benefit}', v.benefit).replace('{price}', v.price),
      keywords: templates.keywords.replace('{vertical}', v.name).replace('{business}', v.business).replace('{location}', v.location)
    };
    
    console.log(`--- ${v.name.toUpperCase()} ---`);
    console.log('Title:', meta.title);
    console.log('Description:', meta.description);
    console.log('Keywords:', meta.keywords);
    console.log('');
  });
}

// Exportar funciones
window.SEOGuerrilla = {
  auditMetaTags,
  generateKeywords,
  checkPageSpeed,
  extractCompetitorKeywords,
  generateBulkMetaTags
};

console.log('🚀 SEO Guerrilla Tools Loaded!');
console.log('Usage: SEOGuerrilla.auditMetaTags()'); 