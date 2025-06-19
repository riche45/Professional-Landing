import Newsletter from '../components/Newsletter';

export default function NewsletterPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">Suscríbete a la Newsletter</h1>
      <p className="text-lg text-gray-300 mb-8">Recibe artículos, recursos y novedades sobre desarrollo, IA y productividad directamente en tu correo. Sin spam, solo valor real.</p>
      <Newsletter />
    </div>
  );
} 