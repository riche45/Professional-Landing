import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, Share2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';

export default function ArticlePage() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  
  // Encontrar el artículo basado en el slug
  const articles = t('articles.featured', { returnObjects: true }) as any[];
  const article = articles.find(a => a.slug === slug);
  const isEnglish = i18n.language === 'en';

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-2xl text-gray-400">{isEnglish ? 'Article not found' : 'Artículo no encontrado'}</h1>
        <Link to="/articles" className="text-primary-400 hover:underline mt-4 inline-block">
          {isEnglish ? '← Back to articles' : '← Volver a artículos'}
        </Link>
      </div>
    );
  }

  // Contenido específico para el artículo sobre LLMs
  const llmContentES = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        Como desarrollador millennial que ha visto la evolución desde Stack Overflow hasta ChatGPT, 
        puedo decir con certeza que los LLMs han cambiado completamente mi flujo de trabajo. 
        Y no, no me avergüenza admitirlo. 🤷‍♂️
      </p>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        La realidad (algo incómoda) de ser dev en 2024
      </h2>

      <p className="mb-6">
        Recordemos los viejos tiempos: pasabas horas buscando en Stack Overflow, 
        copiando y pegando errores en Google, y rezando para que alguien hubiera tenido 
        exactamente el mismo problema que tú. Ahora? "Hey Claude, ¿por qué mi código 
        TypeScript está más roto que mis promesas de año nuevo?" 😅
      </p>

      <h3 className="text-xl font-medium text-white mb-4">
        5 Formas en que los LLMs están cambiando el juego
      </h3>

      <ol className="list-decimal pl-6 space-y-4 mb-8">
        <li>
          <strong className="text-primary-400">Documentación a la carta:</strong> ¿Quién necesita 
          memorizar docs cuando puedes tener una conversación casual con un modelo que conoce 
          toda la documentación de tu stack?
        </li>
        <li>
          <strong className="text-primary-400">Debug terapéutico:</strong> Es como tener un 
          terapeuta que realmente entiende por qué tu código está teniendo una crisis existencial.
        </li>
        <li>
          <strong className="text-primary-400">Pair programming 24/7:</strong> Tu compañero nunca 
          se cansa, no juzga tu código (bueno, tal vez un poco) y está disponible a las 3 AM.
        </li>
        <li>
          <strong className="text-primary-400">Refactoring sin miedo:</strong> "¿Podrías revisar 
          este código y sugerir mejoras?" - La pregunta que ha salvado incontables horas de 
          refactoring.
        </li>
        <li>
          <strong className="text-primary-400">Explicaciones ELI5:</strong> Porque a veces 
          necesitas que alguien te explique ese algoritmo como si tuvieras cinco años... y está bien.
        </li>
      </ol>

      <h3 className="text-xl font-medium text-white mb-4">
        El elefante en la habitación: ¿Nos están haciendo más perezosos?
      </h3>

      <p className="mb-6">
        Spoiler alert: No. Nos están permitiendo enfocarnos en problemas más interesantes que 
        recordar la sintaxis exacta de una regex o cómo centrar un div (aunque esto último 
        sigue siendo un misterio del universo 🎯).
      </p>

      <div className="bg-dark-700 p-6 rounded-lg mb-8">
        <h4 className="text-lg font-medium text-primary-400 mb-4">
          Pro Tip: Cómo usar LLMs sin convertirte en dependiente
        </h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Úsalos como un primer paso, no como la solución final</li>
          <li>Cuestiona y verifica las respuestas</li>
          <li>Aprende de las explicaciones, no solo copies el código</li>
          <li>Mantén tu pensamiento crítico activo</li>
        </ul>
      </div>

      <h3 className="text-xl font-medium text-white mb-4">
        El futuro es ahora, ¿o no?
      </h3>

      <p className="mb-6">
        Los LLMs son como ese amigo que siempre sabe un poco de todo: increíblemente útil, 
        a veces sorprendente, pero no infalible. La clave está en encontrar el balance entre 
        aprovechar su potencial y mantener nuestro criterio como desarrolladores.
      </p>

      <p className="text-gray-400 italic">
        Y sí, este artículo fue escrito con la ayuda de un LLM, porque la ironía es mi 
        pasión. 😎
      </p>
    </div>
  );

  const llmContentEN = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        As a millennial developer who's witnessed the evolution from Stack Overflow to ChatGPT, 
        I can say with certainty that LLMs have completely changed my workflow. 
        And no, I'm not ashamed to admit it. 🤷‍♂️
      </p>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        The (somewhat uncomfortable) reality of being a dev in 2024
      </h2>

      <p className="mb-6">
        Remember the old days: spending hours searching Stack Overflow, 
        copy-pasting errors into Google, and praying someone had exactly 
        the same problem as you? Now? "Hey Claude, why is my TypeScript code 
        more broken than my New Year's resolutions?" 😅
      </p>

      <h3 className="text-xl font-medium text-white mb-4">
        5 Ways LLMs are Changing the Game
      </h3>

      <ol className="list-decimal pl-6 space-y-4 mb-8">
        <li>
          <strong className="text-primary-400">Documentation on Demand:</strong> Who needs 
          to memorize docs when you can have a casual conversation with a model that knows 
          your entire stack's documentation?
        </li>
        <li>
          <strong className="text-primary-400">Therapeutic Debugging:</strong> It's like having 
          a therapist who actually understands why your code is having an existential crisis.
        </li>
        <li>
          <strong className="text-primary-400">24/7 Pair Programming:</strong> Your partner never 
          gets tired, doesn't judge your code (well, maybe a little), and is available at 3 AM.
        </li>
        <li>
          <strong className="text-primary-400">Fearless Refactoring:</strong> "Could you review 
          this code and suggest improvements?" - The question that has saved countless refactoring hours.
        </li>
        <li>
          <strong className="text-primary-400">ELI5 Explanations:</strong> Because sometimes 
          you need someone to explain that algorithm like you're five... and that's okay.
        </li>
      </ol>

      <h3 className="text-xl font-medium text-white mb-4">
        The Elephant in the Room: Are They Making Us Lazy?
      </h3>

      <p className="mb-6">
        Spoiler alert: No. They're allowing us to focus on more interesting problems than 
        remembering the exact syntax of a regex or how to center a div (though the latter 
        remains a mystery of the universe 🎯).
      </p>

      <div className="bg-dark-700 p-6 rounded-lg mb-8">
        <h4 className="text-lg font-medium text-primary-400 mb-4">
          Pro Tip: How to Use LLMs Without Becoming Dependent
        </h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use them as a first step, not the final solution</li>
          <li>Question and verify the answers</li>
          <li>Learn from the explanations, don't just copy the code</li>
          <li>Keep your critical thinking active</li>
        </ul>
      </div>

      <h3 className="text-xl font-medium text-white mb-4">
        The Future is Now, Or Is It?
      </h3>

      <p className="mb-6">
        LLMs are like that friend who always knows a bit of everything: incredibly useful, 
        sometimes surprising, but not infallible. The key is finding the balance between 
        leveraging their potential and maintaining our judgment as developers.
      </p>

      <p className="text-gray-400 italic">
        And yes, this article was written with the help of an LLM, because irony is my 
        passion. 😎
      </p>
    </div>
  );

  const llmContent = slug === 'llms-dev-life-savior' ? (isEnglish ? llmContentEN : llmContentES) : null;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Navegación */}
      <Link 
        to="/articles" 
        className="inline-flex items-center text-gray-400 hover:text-primary-400 mb-8"
      >
        <ArrowLeft size={20} className="mr-2" />
        {t('common.backTo')} {t('articles.title')}
      </Link>

      {/* Cabecera del artículo */}
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 bg-primary-600/90 text-white text-sm rounded-full">
            {article.category}
          </span>
          <div className="flex items-center text-gray-400">
            <Calendar size={16} className="mr-2" />
            <time dateTime={article.date}>{article.date}</time>
          </div>
        </div>

        <h1 className="text-4xl font-medium mb-6">
          {article.title}
        </h1>

        <p className="text-xl text-gray-400">
          {article.description}
        </p>
      </header>

      {/* Imagen destacada */}
      <div className="relative h-[400px] mb-12 rounded-xl overflow-hidden">
        <img
          src={article.imageSrc}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido del artículo */}
      {llmContent}

      {/* Newsletter */}
      <Newsletter />

      {/* Compartir */}
      <div className="mt-12 pt-8 border-t border-dark-700">
        <button 
          onClick={() => {
            const url = window.location.href;
            const title = article.title;
            const text = article.description;
            
            if (navigator.share) {
              navigator.share({
                title,
                text,
                url
              }).catch(console.error);
            } else {
              navigator.clipboard.writeText(url).then(() => {
                alert(isEnglish ? 'Link copied to clipboard!' : '¡Enlace copiado al portapapeles!');
              });
            }
          }}
          className="inline-flex items-center px-4 py-2 bg-dark-700 text-gray-300 rounded-lg hover:bg-dark-600 transition-colors"
        >
          <Share2 size={18} className="mr-2" />
          {isEnglish ? 'Share article' : 'Compartir artículo'}
        </button>
      </div>
    </div>
  );
} 