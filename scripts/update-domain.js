#!/usr/bin/env node

// Script para actualizar dominio en todos los archivos
const fs = require('fs');
const path = require('path');

const OLD_DOMAIN = 'tu-app-vercel.vercel.app';
const NEW_DOMAIN = process.argv[2];

if (!NEW_DOMAIN) {
  console.error('❌ Uso: node scripts/update-domain.js nuevo-dominio.com');
  process.exit(1);
}

const filesToUpdate = [
  'public/sitemap.xml',
  'public/robots.txt',
  'src/utils/schema.ts',
  'index.html'
];

function updateFile(filePath, oldDomain, newDomain) {
  try {
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️  Archivo no encontrado: ${filePath}`);
      return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const updatedContent = content.replace(new RegExp(oldDomain, 'g'), newDomain);
    
    if (content !== updatedContent) {
      fs.writeFileSync(filePath, updatedContent);
      console.log(`✅ Actualizado: ${filePath}`);
    } else {
      console.log(`ℹ️  Sin cambios: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error actualizando ${filePath}:`, error.message);
  }
}

console.log(`🚀 Actualizando dominio de ${OLD_DOMAIN} a ${NEW_DOMAIN}...`);

filesToUpdate.forEach(file => {
  updateFile(file, OLD_DOMAIN, NEW_DOMAIN);
});

console.log('\n📋 Pasos adicionales manuales:');
console.log('1. Actualizar Google Analytics ID en index.html');
console.log('2. Actualizar Google Tag Manager ID en index.html');
console.log('3. Configurar dominio personalizado en Vercel');
console.log('4. Actualizar DNS records');
console.log('5. Subir sitemap a Google Search Console');

console.log('\n🎯 URLs importantes a verificar:');
console.log(`- https://${NEW_DOMAIN}/sitemap.xml`);
console.log(`- https://${NEW_DOMAIN}/robots.txt`);
console.log(`- https://${NEW_DOMAIN}/ai-services/restaurants`);

console.log('\n✅ ¡Actualización de dominio completada!'); 