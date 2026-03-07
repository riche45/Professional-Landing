import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, Share2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';
import Total90ImageCarousel from '../components/Total90ImageCarousel.tsx';

export default function ArticlePage() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  
  // Encontrar el artículo basado en el slug
  const articles = t('articles.featured', { returnObjects: true }) as any[];
  const tutorials = t('tutorials.featured', { returnObjects: true }) as any[];
  const memes = t('humor.featured', { returnObjects: true }) as any[];
  const allContent = [...articles, ...tutorials, ...memes];
  const article = allContent.find(a => a.slug === slug);
  const isEnglish = i18n.language === 'en';

  // Determinar la sección de regreso y el texto
  let backToPath = '/articles';
  let backToText = isEnglish ? 'Back to articles' : 'Volver a artículos';
  if (tutorials.some(a => a.slug === slug)) {
    backToPath = '/tutorials';
    backToText = isEnglish ? 'Back to tutorials' : 'Volver a tutoriales';
  } else if (memes.some(a => a.slug === slug)) {
    backToPath = '/memes';
    backToText = isEnglish ? 'Back to memes' : 'Volver a memes';
  }

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-2xl text-gray-400">{isEnglish ? 'Article not found' : 'Artículo no encontrado'}</h1>
        <Link to={backToPath} className="text-primary-400 hover:underline mt-4 inline-block">
          {backToText}
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

  // Contenido específico para el artículo sobre Agentes de IA
  const aiAgentsContentES = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        2025 será recordado como el año en que los agentes de IA dejaron de ser una promesa futurista y se convirtieron en una realidad cotidiana. Desde asistentes personales que gestionan nuestra agenda hasta agentes autónomos que negocian, programan y resuelven problemas complejos, su impacto es innegable.
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        ¿Qué es un agente de IA y por qué ahora?
      </h2>
      <p className="mb-6">
        Un agente de IA es mucho más que un chatbot: es un sistema capaz de percibir su entorno, razonar, tomar decisiones y actuar de forma autónoma para alcanzar objetivos definidos. Gracias a los avances en modelos de lenguaje, visión computacional y aprendizaje por refuerzo, estos agentes ahora pueden interactuar con humanos y sistemas de manera fluida y proactiva.
      </p>
      <h3 className="text-xl font-medium text-white mb-4">
        5 formas en que los agentes de IA están transformando nuestra vida profesional
      </h3>
      <ol className="list-decimal pl-6 space-y-2">
        <li><strong className="text-primary-400">Automatización inteligente:</strong> Los agentes pueden encargarse de tareas repetitivas, desde responder correos hasta programar reuniones, liberando tiempo para el trabajo creativo.</li>
        <li><strong className="text-primary-400">Asistencia personalizada:</strong> Analizan tu contexto y preferencias para anticipar necesidades, sugerir recursos o incluso aprender de tus hábitos para optimizar tu día.</li>
        <li><strong className="text-primary-400">Colaboración hombre-máquina:</strong> Los equipos híbridos (humanos + agentes) resuelven problemas complejos más rápido y con menos errores.</li>
        <li><strong className="text-primary-400">Toma de decisiones basada en datos:</strong> Los agentes procesan grandes volúmenes de información en tiempo real, ayudando a tomar decisiones informadas y estratégicas.</li>
        <li><strong className="text-primary-400">Aprendizaje y adaptación continua:</strong> Los agentes evolucionan con cada interacción, adaptándose a nuevos retos y contextos sin intervención humana directa.</li>
      </ol>
      <h3 className="text-xl font-medium text-white mb-4">
        El impacto en la vida diaria y el futuro del trabajo
      </h3>
      <p className="mb-6">
        Imagina un mundo donde tu agente de IA no solo te recuerda tus tareas, sino que negocia contratos, aprende tus preferencias de salud, te recomienda oportunidades de crecimiento y protege tu privacidad digital. El potencial es enorme, pero también plantea retos éticos y de seguridad que debemos abordar colectivamente.
      </p>
      <h4 className="text-lg font-medium text-primary-400 mb-4">
        Pro Tip: Cómo aprovechar los agentes de IA de forma responsable
      </h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>Define límites claros y revisa las acciones automáticas de tus agentes.</li>
        <li>Prioriza la transparencia y la explicabilidad en las decisiones automatizadas.</li>
        <li>Actualiza tus habilidades digitales para colaborar eficazmente con agentes.</li>
        <li>Participa en la conversación ética sobre el uso de IA en tu sector.</li>
      </ul>
      <h3 className="text-xl font-medium text-white mb-4">
        Conclusión: El año de los agentes, el inicio de una nueva era
      </h3>
      <p className="mb-6">
        Los agentes de IA no vienen a reemplazarnos, sino a potenciarnos. Quienes aprendan a integrarlos y a trabajar con ellos tendrán una ventaja competitiva y una vida profesional más rica y eficiente. El futuro ya está aquí, y es colaborativo.
      </p>
      <p className="text-gray-400 italic">
        ¿Ya tienes tu propio agente de IA? Comparte tu experiencia y sigamos aprendiendo juntos. 🤖🚀
      </p>
    </div>
  );

  const aiAgentsContentEN = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        2025 will be remembered as the year AI agents stopped being a futuristic promise and became an everyday reality. From personal assistants managing our schedules to autonomous agents negotiating, coding, and solving complex problems, their impact is undeniable.
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        What is an AI agent and why now?
      </h2>
      <p className="mb-6">
        An AI agent is much more than a chatbot: it's a system capable of perceiving its environment, reasoning, making decisions, and acting autonomously to achieve defined goals. Thanks to advances in language models, computer vision, and reinforcement learning, these agents can now interact with humans and systems in a fluid and proactive way.
      </p>
      <h3 className="text-xl font-medium text-white mb-4">
        5 ways AI agents are transforming our professional lives
      </h3>
      <ol className="list-decimal pl-6 space-y-2">
        <li><strong className="text-primary-400">Intelligent automation:</strong> Agents handle repetitive tasks, from answering emails to scheduling meetings, freeing up time for creative work.</li>
        <li><strong className="text-primary-400">Personalized assistance:</strong> They analyze your context and preferences to anticipate needs, suggest resources, or even learn your habits to optimize your day.</li>
        <li><strong className="text-primary-400">Human-machine collaboration:</strong> Hybrid teams (humans + agents) solve complex problems faster and with fewer errors.</li>
        <li><strong className="text-primary-400">Data-driven decision making:</strong> Agents process large volumes of information in real time, helping you make informed, strategic decisions.</li>
        <li><strong className="text-primary-400">Continuous learning and adaptation:</strong> Agents evolve with every interaction, adapting to new challenges and contexts without direct human intervention.</li>
      </ol>
      <h3 className="text-xl font-medium text-white mb-4">
        The impact on daily life and the future of work
      </h3>
      <p className="mb-6">
        Imagine a world where your AI agent not only reminds you of tasks, but negotiates contracts, learns your health preferences, recommends growth opportunities, and protects your digital privacy. The potential is huge, but it also raises ethical and security challenges we must address together.
      </p>
      <h4 className="text-lg font-medium text-primary-400 mb-4">
        Pro Tip: How to leverage AI agents responsibly
      </h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>Set clear boundaries and review your agents' automated actions.</li>
        <li>Prioritize transparency and explainability in automated decisions.</li>
        <li>Update your digital skills to collaborate effectively with agents.</li>
        <li>Engage in the ethical conversation about AI use in your field.</li>
      </ul>
      <h3 className="text-xl font-medium text-white mb-4">
        Conclusion: The year of agents, the start of a new era
      </h3>
      <p className="mb-6">
        AI agents are not here to replace us, but to empower us. Those who learn to integrate and work with them will have a competitive advantage and a richer, more efficient professional life. The future is here, and it's collaborative.
      </p>
      <p className="text-gray-400 italic">
        Do you already have your own AI agent? Share your experience and let's keep learning together. 🤖🚀
      </p>
    </div>
  );

  // NUEVO: contenido para agentes de IA
  const aiAgentsContent = slug === 'ai-agents-impact-2025' || slug === 'agentes-ia-impacto-2025'
    ? (isEnglish ? aiAgentsContentEN : aiAgentsContentES)
    : null;

  // Contenido específico para el artículo sobre Tesla
  const teslaContentES = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        Tesla ha revolucionado la industria automotriz, pero no precisamente por su diseño. Sus modelos, a menudo criticados por su estética poco inspiradora, esconden bajo el capó un potencial energético que podría cambiar el rumbo de la movilidad eléctrica.
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        ¿Por qué los Tesla no ganan concursos de belleza?
      </h2>
      <p className="mb-6">
        Admitámoslo: si los Tesla desfilaran en una pasarela, probablemente no se llevarían el premio al más guapo. Líneas simples, frentes inexpresivos y una falta de atrevimiento que contrasta con la innovación de su tecnología. ¿Ironía? Mucha.
      </p>
      <h3 className="text-xl font-medium text-white mb-4">
        3 razones para amar un Tesla (aunque no te enamore a primera vista)
      </h3>
      <ol className="list-decimal pl-6 space-y-2 mb-8">
        <li><strong className="text-primary-400">Baterías y autonomía:</strong> Tesla sigue liderando en eficiencia energética y autonomía real. Puedes recorrer cientos de kilómetros sin preocuparte por quedarte tirado.</li>
        <li><strong className="text-primary-400">Red de supercargadores:</strong> Viajar largo ya no es un problema. La infraestructura de carga rápida es, sencillamente, envidiable.</li>
        <li><strong className="text-primary-400">Actualizaciones OTA:</strong> Tu coche mejora mientras duermes. ¿Quién necesita un facelift cuando puedes tener nuevas funciones cada mes?</li>
      </ol>
      <h3 className="text-xl font-medium text-white mb-4">
        El futuro: ¿veremos un Tesla bonito?
      </h3>
      <p className="mb-6">
        Ojalá el equipo de diseño de Tesla se inspire pronto y nos sorprenda con un modelo que no solo sea eficiente, sino también digno de portada de revista. Porque si logran unir vanguardia estética y tecnología, no habrá quien los detenga.
      </p>
      <p className="text-gray-400 italic">
        Mientras tanto, seguiremos soñando con un Tesla que enamore a la vista tanto como al planeta. 🚗⚡
      </p>
    </div>
  );

  const teslaContentEN = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        Tesla has revolutionized the automotive industry, but not exactly for its looks. Its models, often criticized for their uninspired aesthetics, hide under the hood an energy potential that could change the course of electric mobility.
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        Why don't Teslas win beauty contests?
      </h2>
      <p className="mb-6">
        Let's be honest: if Teslas walked a runway, they probably wouldn't win any beauty awards. Simple lines, expressionless fronts, and a lack of boldness that contrasts with their technological innovation. Ironic? Absolutely.
      </p>
      <h3 className="text-xl font-medium text-white mb-4">
        3 reasons to love a Tesla (even if it's not love at first sight)
      </h3>
      <ol className="list-decimal pl-6 space-y-2 mb-8">
        <li><strong className="text-primary-400">Batteries and range:</strong> Tesla still leads in energy efficiency and real-world range. You can drive for hundreds of kilometers without worrying about running out of juice.</li>
        <li><strong className="text-primary-400">Supercharger network:</strong> Long trips are no longer a problem. The fast-charging infrastructure is simply enviable.</li>
        <li><strong className="text-primary-400">OTA updates:</strong> Your car gets better while you sleep. Who needs a facelift when you get new features every month?</li>
      </ol>
      <h3 className="text-xl font-medium text-white mb-4">
        The future: will we see a beautiful Tesla?
      </h3>
      <p className="mb-6">
        Hopefully Tesla's design team will soon be inspired and surprise us with a model that's not only efficient, but also worthy of a magazine cover. If they manage to combine cutting-edge aesthetics and technology, no one will be able to stop them.
      </p>
      <p className="text-gray-400 italic">
        In the meantime, we'll keep dreaming of a Tesla that's as pleasing to the eye as it is to the planet. 🚗⚡
      </p>
    </div>
  );

  const teslaContent = slug === 'tesla-feos-potencial' || slug === 'tesla-ugly-potential'
    ? (isEnglish ? teslaContentEN : teslaContentES)
    : null;

  // Contenido específico para el artículo sobre DeepSeek
  const deepseekContentES = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        La llegada de DeepSeek, un modelo open source de IA desarrollado en China, ha encendido la mecha de una nueva etapa en la guerra tecnológica global. ¿Estamos ante el inicio de una nueva hegemonía o solo un capítulo más en la batalla entre gigantes?
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        DeepSeek vs. el mundo: ¿quién dominará la IA?
      </h2>
      <p className="mb-6">
        El mercado de la inteligencia artificial se ha convertido en un tablero de ajedrez geopolítico. OpenAI y Claude lideran en Occidente, Google intenta recuperar terreno con cada nuevo lanzamiento, y ahora DeepSeek irrumpe con fuerza desde Asia, apostando por la apertura y la colaboración global.
      </p>
      <h3 className="text-xl font-medium text-white mb-4">
        4 claves del impacto de DeepSeek
      </h3>
      <ol className="list-decimal pl-6 space-y-2 mb-8">
        <li><strong className="text-primary-400">Open source real:</strong> DeepSeek apuesta por la transparencia y la comunidad, desafiando el modelo cerrado de sus competidores.</li>
        <li><strong className="text-primary-400">Innovación acelerada:</strong> La competencia obliga a todos a moverse más rápido, beneficiando a usuarios y empresas.</li>
        <li><strong className="text-primary-400">Guerra de narrativas:</strong> ¿Será la IA dominada por valores occidentales, chinos o una mezcla global?</li>
        <li><strong className="text-primary-400">El usuario gana:</strong> Más opciones, más control y, potencialmente, una IA más ética y diversa.</li>
      </ol>
      <h3 className="text-xl font-medium text-white mb-4">
        Conclusión: ¿quién ganará?
      </h3>
      <p className="mb-6">
        La verdadera batalla apenas comienza. DeepSeek es una señal de que el futuro de la IA será más abierto, competitivo y global. El ganador será quien logre equilibrar innovación, ética y colaboración internacional.
      </p>
      <p className="text-gray-400 italic">
        ¿Tú a quién le apuestas en esta guerra de titanes? 🌏🤖
      </p>
    </div>
  );

  const deepseekContentEN = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        The arrival of DeepSeek, an open source AI model developed in China, has ignited a new phase in the global tech war. Is this the start of a new hegemony or just another chapter in the battle of the giants?
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        DeepSeek vs. the World: Who Will Dominate AI?
      </h2>
      <p className="mb-6">
        The AI market has become a geopolitical chessboard. OpenAI and Claude lead in the West, Google tries to catch up with every new release, and now DeepSeek bursts in from Asia, betting on openness and global collaboration.
      </p>
      <h3 className="text-xl font-medium text-white mb-4">
        4 Key Impacts of DeepSeek
      </h3>
      <ol className="list-decimal pl-6 space-y-2 mb-8">
        <li><strong className="text-primary-400">True open source:</strong> DeepSeek bets on transparency and community, challenging the closed models of its competitors.</li>
        <li><strong className="text-primary-400">Accelerated innovation:</strong> Competition forces everyone to move faster, benefiting users and businesses.</li>
        <li><strong className="text-primary-400">Narrative war:</strong> Will AI be dominated by Western, Chinese, or global values?</li>
        <li><strong className="text-primary-400">The user wins:</strong> More options, more control, and potentially a more ethical and diverse AI.</li>
      </ol>
      <h3 className="text-xl font-medium text-white mb-4">
        Conclusion: Who Will Win?
      </h3>
      <p className="mb-6">
        The real battle is just beginning. DeepSeek signals that the future of AI will be more open, competitive, and global. The winner will be the one who balances innovation, ethics, and international collaboration.
      </p>
      <p className="text-gray-400 italic">
        Who are you betting on in this war of titans? 🌏🤖
      </p>
    </div>
  );

  const deepseekContent = slug === 'deepseek-guerra-ia' || slug === 'deepseek-ai-war'
    ? (isEnglish ? deepseekContentEN : deepseekContentES)
    : null;

  // Contenido específico para el artículo sobre founder vs emprendedor
  const founderContentES = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        ¿Qué fue primero, el founder o el emprendedor? El dilema existencial de toda startup. Algunos dicen que basta con tener una idea y una cuenta de LinkedIn para autoproclamarse founder. Otros, que primero hay que sobrevivir a la jungla del emprendimiento antes de poner "CEO" en la bio.
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        ¿Se nace founder o se hace?
      </h2>
      <p className="mb-6">
        En el ecosistema tech, la línea es tan difusa como la diferencia entre un MVP y un producto terminado. ¿Eres founder si tienes un pitch deck y un logo? ¿O necesitas al menos un par de rechazos de inversores y noches sin dormir para ganarte el título?
      </p>
      <h3 className="text-xl font-medium text-white mb-4">
        3 señales de que ya eres founder (aunque no lo sepas)
      </h3>
      <ol className="list-decimal pl-6 space-y-2 mb-8">
        <li><strong className="text-primary-400">Tu LinkedIn tiene más títulos que tu currículum real.</strong></li>
        <li><strong className="text-primary-400">Has dicho "disruptivo" en una reunión y nadie te corregido.</strong></li>
        <li><strong className="text-primary-400">Tienes un pitch preparado para cada café, Uber o reunión familiar.</strong></li>
      </ol>
      <h3 className="text-xl font-medium text-white mb-4">
        Conclusión: ¿huevo, gallina o pitch deck?
      </h3>
      <p className="mb-6">
        La verdad es que no importa el orden: lo importante es lanzarse, equivocarse y, sobre todo, reírse del proceso. Porque en el fondo, todos somos un poco founder y un poco emprendedor… aunque sea solo en Twitter.
      </p>
      <p className="text-gray-400 italic">
        ¿Y tú, qué fuiste primero? 🐣🚀
      </p>
    </div>
  );

  const founderContentEN = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        Which came first, the founder or the entrepreneur? The existential dilemma of every startup. Some say all you need is an idea and a LinkedIn account to call yourself a founder. Others claim you must survive the wild world of entrepreneurship before you can put "CEO" in your bio.
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        Born founder or made founder?
      </h2>
      <p className="mb-6">
        In the tech ecosystem, the line is as blurry as the difference between an MVP and a finished product. Are you a founder if you have a pitch deck and a logo? Or do you need at least a couple of investor rejections and sleepless nights to earn the title?
      </p>
      <h3 className="text-xl font-medium text-white mb-4">
        3 signs you're already a founder (even if you don't know it)
      </h3>
      <ol className="list-decimal pl-6 space-y-2 mb-8">
        <li><strong className="text-primary-400">Your LinkedIn has more titles than your actual résumé.</strong></li>
        <li><strong className="text-primary-400">You've said "disruptive" in a meeting and no one corrected you.</strong></li>
        <li><strong className="text-primary-400">You have a pitch ready for every coffee, Uber ride, or family gathering.</strong></li>
      </ol>
      <h3 className="text-xl font-medium text-white mb-4">
        Conclusion: chicken, egg, or pitch deck?
      </h3>
      <p className="mb-6">
        The truth is, the order doesn't matter: what matters is jumping in, making mistakes, and—above all—laughing at the process. Because deep down, we're all a bit founder and a bit entrepreneur… even if it's just on Twitter.
      </p>
      <p className="text-gray-400 italic">
        So, which were you first? 🐣🚀
      </p>
    </div>
  );

  const founderContent = slug === 'founder-vs-emprendedor' || slug === 'founder-vs-entrepreneur'
    ? (isEnglish ? founderContentEN : founderContentES)
    : null;

  // Contenido específico para el tutorial sobre prompts con Claude
  const promptsBookContentES = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        ¿Alguna vez te has preguntado cómo hacer que la IA resuelva exactamente lo que necesitas? En este tutorial, te cuento mi experiencia colaborando con Claude para crear una guía de prompts que cualquier persona pueda usar, desde recetas de cocina hasta soluciones para errores críticos en el backend.
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        El arte y la ciencia de los prompts
      </h2>
      <p className="mb-6">
        Enviar un prompt a la IA es como darle instrucciones a un asistente: cuanto más claras y detalladas sean, mejores resultados obtendrás. A continuación, te comparto algunos ejemplos prácticos que te ayudarán a entender cómo funciona.
      </p>
      <h3 className="text-xl font-medium text-white mb-4">
        Ejemplos prácticos
      </h3>
      <ol className="list-decimal pl-6 space-y-4 mb-8">
        <li>
          <strong className="text-primary-400">Receta de cocina:</strong> "Claude, necesito una receta rápida y saludable para una cena de 30 minutos. ¿Qué me sugieres?"
        </li>
        <li>
          <strong className="text-primary-400">Solución de errores en el backend:</strong> "Claude, estoy teniendo un error 500 en mi API. El log muestra un problema de conexión a la base de datos. ¿Cómo puedo solucionarlo?"
        </li>
        <li>
          <strong className="text-primary-400">Generación de contenido:</strong> "Claude, ayúdame a escribir un párrafo introductorio para un artículo sobre inteligencia artificial."
        </li>
      </ol>
      <h3 className="text-xl font-medium text-white mb-4">
        Conclusión
      </h3>
      <p className="mb-6">
        La clave está en ser específico y claro con tus prompts. Con la guía adecuada, cualquiera puede aprovechar el poder de la IA para resolver problemas cotidianos y profesionales.
      </p>
      <p className="text-gray-400 italic">
        ¿Tienes algún ejemplo de prompt que te haya funcionado? ¡Compártelo en los comentarios! 🚀
      </p>
    </div>
  );

  const promptsBookContentEN = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        Have you ever wondered how to make AI solve exactly what you need? In this tutorial, I share my experience collaborating with Claude to create a prompts guide that anyone can use, from cooking recipes to solving critical backend errors.
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        The art and science of prompts
      </h2>
      <p className="mb-6">
        Sending a prompt to AI is like giving instructions to an assistant: the clearer and more detailed they are, the better the results. Below, I share some practical examples to help you understand how it works.
      </p>
      <h3 className="text-xl font-medium text-white mb-4">
        Practical examples
      </h3>
      <ol className="list-decimal pl-6 space-y-4 mb-8">
        <li>
          <strong className="text-primary-400">Cooking recipe:</strong> "Claude, I need a quick and healthy dinner recipe for 30 minutes. What do you suggest?"
        </li>
        <li>
          <strong className="text-primary-400">Backend error solution:</strong> "Claude, I'm getting a 500 error in my API. The log shows a database connection issue. How can I fix it?"
        </li>
        <li>
          <strong className="text-primary-400">Content generation:</strong> "Claude, help me write an introductory paragraph for an article about artificial intelligence."
        </li>
      </ol>
      <h3 className="text-xl font-medium text-white mb-4">
        Conclusion
      </h3>
      <p className="mb-6">
        The key is to be specific and clear with your prompts. With the right guide, anyone can leverage the power of AI to solve everyday and professional problems.
      </p>
      <p className="text-gray-400 italic">
        Do you have any prompt examples that worked for you? Share them in the comments! 🚀
      </p>
    </div>
  );

  const promptsBookContent = slug === 'writing-prompts-book-claude' ? (isEnglish ? promptsBookContentEN : promptsBookContentES) : null;

  // Contenido específico para el tutorial sobre bot personal con IA
  const botTutorialContentES = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        ¿Te imaginas tener un asistente personal que nunca duerme y siempre está listo para ayudarte? En este tutorial aprenderás a crear tu primer bot personal con IA, ideal para automatizar tareas diarias, enviar recordatorios y hasta responder mensajes por ti.
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        ¿Por qué crear un bot personal?
      </h2>
      <p className="mb-6">
        Los bots personales pueden ahorrarte tiempo, reducir errores y ayudarte a mantenerte organizado. No necesitas ser un experto en IA: solo ganas de experimentar y automatizar tu vida.
      </p>
      <h3 className="text-xl font-medium text-white mb-4">
        Plataformas fáciles para empezar
      </h3>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Zapier / Make (Integromat):</strong> Automatiza tareas conectando apps como Gmail, Google Calendar, Slack y más, sin programar.</li>
        <li><strong>Telegram Bots:</strong> Crea bots personalizados para enviar recordatorios, responder mensajes o consultar información. Puedes usar <a href="https://core.telegram.org/bots/api" target="_blank" rel="noopener noreferrer" className="text-primary-400 underline">la API de Telegram</a> o plataformas como Manybot.</li>
        <li><strong>Notion + IA:</strong> Usa integraciones para que tu bot gestione tareas o notas inteligentes en Notion.</li>
      </ul>
      <h3 className="text-xl font-medium text-white mb-4">
        Ejemplo técnico: Bot de recordatorios en Telegram (Node.js)
      </h3>
      <pre className="bg-dark-700 rounded-lg p-4 text-sm overflow-x-auto mb-6"><code>{`const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot('TU_TOKEN', { polling: true });
bot.onText(/\/recordar (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const tarea = match[1];
  bot.sendMessage(chatId, \`¡Te recordaré: \${tarea}!\`);
  // Aquí puedes programar lógica para enviar el recordatorio más tarde
});`}</code></pre>
      <h3 className="text-xl font-medium text-white mb-4">
        Conclusión
      </h3>
      <p className="mb-6">
        Crear tu propio bot es el primer paso para entrar al mundo de la automatización personal. ¡Atrévete a probar y comparte tus resultados!
      </p>
      <p className="text-gray-400 italic">
        ¿Qué tarea te gustaría automatizar primero? 🤖✨
      </p>
    </div>
  );

  const botTutorialContentEN = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        Imagine having a personal assistant that never sleeps and is always ready to help! In this tutorial, you'll learn how to build your first personal AI bot—perfect for automating daily tasks, sending reminders, and even replying to messages for you.
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        Why build a personal bot?
      </h2>
      <p className="mb-6">
        Personal bots can save you time, reduce errors, and help you stay organized. You don't need to be an AI expert—just have the desire to experiment and automate your life.
      </p>
      <h3 className="text-xl font-medium text-white mb-4">
        Easy-to-use platforms to get started
      </h3>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Zapier / Make (Integromat):</strong> Automate tasks by connecting apps like Gmail, Google Calendar, Slack, and more—no coding required.</li>
        <li><strong>Telegram Bots:</strong> Create custom bots to send reminders, reply to messages, or fetch information. You can use <a href="https://core.telegram.org/bots/api" target="_blank" rel="noopener noreferrer" className="text-primary-400 underline">the Telegram API</a> or platforms like Manybot.</li>
        <li><strong>Notion + AI:</strong> Use integrations so your bot can manage tasks or smart notes in Notion.</li>
      </ul>
      <h3 className="text-xl font-medium text-white mb-4">
        Technical example: Telegram reminder bot (Node.js)
      </h3>
      <pre className="bg-dark-700 rounded-lg p-4 text-sm overflow-x-auto mb-6"><code>{`const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot('YOUR_TOKEN', { polling: true });
bot.onText(/\/remind (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const task = match[1];
  bot.sendMessage(chatId, \`I'll remind you: \${task}!\`);
  // Here you can add logic to send the reminder later
});`}</code></pre>
      <h3 className="text-xl font-medium text-white mb-4">
        Conclusion
      </h3>
      <p className="mb-6">
        Building your own bot is the first step into the world of personal automation. Dare to try it and share your results!
      </p>
      <p className="text-gray-400 italic">
        What task would you like to automate first? 🤖✨
      </p>
    </div>
  );

  const botTutorialContent = slug === 'crear-bot-personal-ia' || slug === 'build-personal-ai-bot'
    ? (isEnglish ? botTutorialContentEN : botTutorialContentES)
    : null;

  // Contenido extendido para el meme-artículo ingenio-dev-meme / resourceful-dev-meme
  const memeContentES = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        ¿Quién no ha diluido el último chorrito de shampoo con agua para que rinda una semana más? Así es la vida del dev en modo MVP: cuando el presupuesto es mínimo y el deadline era para ayer, la creatividad se convierte en tu mejor framework.
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        El arte de sobrevivir con lo mínimo (y reírse en el intento)
      </h2>
      <p className="mb-6">
        En el mundo startup, el MVP no es solo un producto: es una filosofía de vida. Si puedes hacer que funcione con un Excel, ¿para qué gastar en una base de datos? Si el botón no tiene animación, ¡es porque es minimalista! Y si el deploy falla, siempre puedes decir que es "beta cerrada".
      </p>
      <h3 className="text-xl font-medium text-white mb-4">
        3 trucos de ingenio dev para el MVP definitivo
      </h3>
      <ol className="list-decimal pl-6 space-y-2 mb-8">
        <li>
          <strong className="text-primary-400">El refrito del sprint:</strong> Si el sprint se acaba, pero el feature no, simplemente cambia el nombre y di que es "fase 2".
        </li>
        <li>
          <strong className="text-primary-400">El placeholder filosófico:</strong> ¿No hay logo? Pon un emoji. ¿No hay copy? "Próximamente". El usuario lo entenderá (o eso esperamos).
        </li>
        <li>
          <strong className="text-primary-400">El bug como feature:</strong> Si algo no funciona, di que es "parte de la experiencia" o que "fomenta la creatividad del usuario".
        </li>
      </ol>
      <h3 className="text-xl font-medium text-white mb-4">
        Conclusión: Si hay MVP, hay esperanza
      </h3>
      <p className="mb-6">
        La verdadera magia del dev escaso de recursos no está en el código, sino en la capacidad de transformar la escasez en ingenio y el caos en risas. Porque al final, todos hemos diluido un sprint… y aún queda MVP.
      </p>
      <p className="text-gray-400 italic">
        ¿Cuál ha sido tu mayor "ingenio dev" para sacar adelante un MVP? ¡Cuéntalo y ríete del proceso! 😂🚀
      </p>
    </div>
  );

  const memeContentEN = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        Who hasn't added water to the last bit of shampoo to make it last another week? That's the dev life in MVP mode: when the budget is gone and the deadline was yesterday, creativity becomes your best framework.
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        The art of surviving with the bare minimum (and laughing about it)
      </h2>
      <p className="mb-6">
        In the startup world, MVP isn't just a product—it's a way of life. If you can make it work with a spreadsheet, why pay for a database? If the button has no animation, it's "minimalist"! And if the deploy fails, just say it's a "closed beta".
      </p>
      <h3 className="text-xl font-medium text-white mb-4">
        3 resourceful dev tricks for the ultimate MVP
      </h3>
      <ol className="list-decimal pl-6 space-y-2 mb-8">
        <li>
          <strong className="text-primary-400">The sprint remix:</strong> If the sprint ends but the feature doesn't, just rename it and call it "phase 2".
        </li>
        <li>
          <strong className="text-primary-400">The philosophical placeholder:</strong> No logo? Use an emoji. No copy? "Coming soon." The user will get it (hopefully).
        </li>
        <li>
          <strong className="text-primary-400">The bug-as-feature:</strong> If something doesn't work, say it's "part of the experience" or that it "encourages user creativity".
        </li>
      </ol>
      <h3 className="text-xl font-medium text-white mb-4">
        Conclusion: If there's MVP, there's hope
      </h3>
      <p className="mb-6">
        The real magic of the resourceful dev isn't in the code, but in the ability to turn scarcity into ingenuity and chaos into laughter. Because in the end, we've all diluted a sprint… and there's still MVP left.
      </p>
      <p className="text-gray-400 italic">
        What's your greatest "dev hack" to get an MVP out the door? Share it and laugh about the process! 😂🚀
      </p>
    </div>
  );

  const memeContent = slug === 'ingenio-dev-meme' || slug === 'resourceful-dev-meme'
    ? (isEnglish ? memeContentEN : memeContentES)
    : null;

  // Contenido extendido para el tutorial 'De la idea al MVP: Cómo lanzar intencionalmente tu propia startup'
  const startupMvpContentES = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        Lanzar una startup no es cuestión de suerte, sino de método. El MVP (Producto Mínimo Viable) es tu mejor aliado para validar ideas, aprender rápido y ahorrar recursos. Aquí tienes una guía práctica y realista para pasar de la hipótesis a la acción.
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        1. Define el problema y tu hipótesis
      </h2>
      <p className="mb-6">
        Todo gran producto nace de un problema real. ¿Qué dolor quieres resolver? Escribe tu hipótesis en una frase simple y concreta. Ejemplo: "Los freelancers pierden tiempo gestionando facturas manualmente".
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        2. Crea una solución mínima (¡de verdad!)
      </h2>
      <p className="mb-6">
        No construyas un castillo: haz lo mínimo que permita a un usuario resolver el problema. Puede ser un formulario, un Excel, un chatbot o una landing con un botón de "probar". Lo importante es que funcione, no que sea perfecto.
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        3. Lanza y aprende rápido
      </h2>
      <p className="mb-6">
        Comparte tu MVP con usuarios reales lo antes posible. Observa, pregunta, escucha. ¿Usan tu solución? ¿Dónde se atascan? ¿Pagan por ella? Cada feedback es oro para iterar.
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        4. Itera, pivota o descarta
      </h2>
      <p className="mb-6">
        Si tu hipótesis se valida, ¡sigue mejorando! Si no, ajusta la propuesta o prueba con otro segmento. El fracaso rápido es aprendizaje barato.
      </p>
      <h3 className="text-xl font-medium text-white mb-4">
        Herramientas y consejos prácticos
      </h3>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Landing Pages:</strong> Prueba ideas con Carrd, Webflow o Notion.</li>
        <li><strong>Formularios:</strong> Google Forms, Typeform o Tally para captar leads y validar interés.</li>
        <li><strong>No-code:</strong> Glide, Softr o Zapier para prototipos funcionales sin programar.</li>
        <li><strong>Feedback:</strong> Habla con usuarios, no te enamores del código.</li>
      </ul>
      <h3 className="text-xl font-medium text-white mb-4">
        Conclusión: El MVP es solo el comienzo
      </h3>
      <p className="mb-6">
        No esperes a tenerlo todo perfecto. Lanza, aprende y evoluciona. El verdadero éxito está en la velocidad de aprendizaje, no en la cantidad de features. ¡Atrévete a lanzar tu MVP y cuéntame cómo te va!
      </p>
      <p className="text-gray-400 italic">
        ¿Ya tienes una idea? El mejor momento para empezar es ahora. 🚀
      </p>
    </div>
  );

  const startupMvpContentEN = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        Launching a startup isn't about luck—it's about method. The MVP (Minimum Viable Product) is your best ally to validate ideas, learn fast, and save resources. Here's a practical, realistic guide to go from hypothesis to action.
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        1. Define the problem and your hypothesis
      </h2>
      <p className="mb-6">
        Every great product starts with a real problem. What pain do you want to solve? Write your hypothesis in a simple, concrete sentence. Example: "Freelancers waste time managing invoices manually."
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        2. Build a truly minimal solution
      </h2>
      <p className="mb-6">
        Don't build a castle: do the minimum that lets a user solve the problem. It could be a form, a spreadsheet, a chatbot, or a landing page with a "try it" button. What matters is that it works—not that it's perfect.
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        3. Launch and learn fast
      </h2>
      <p className="mb-6">
        Share your MVP with real users as soon as possible. Watch, ask, listen. Do they use your solution? Where do they get stuck? Will they pay for it? Every feedback is gold for iteration.
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        4. Iterate, pivot, or discard
      </h2>
      <p className="mb-6">
        If your hypothesis is validated, keep improving! If not, adjust your proposal or try another segment. Failing fast is cheap learning.
      </p>
      <h3 className="text-xl font-medium text-white mb-4">
        Tools and practical tips
      </h3>
      <ul className="list-disc pl-6 mb-6">
        <li><strong>Landing Pages:</strong> Test ideas with Carrd, Webflow, or Notion.</li>
        <li><strong>Forms:</strong> Google Forms, Typeform, or Tally to capture leads and validate interest.</li>
        <li><strong>No-code:</strong> Glide, Softr, or Zapier for functional prototypes without coding.</li>
        <li><strong>Feedback:</strong> Talk to users—don't fall in love with your code.</li>
      </ul>
      <h3 className="text-xl font-medium text-white mb-4">
        Conclusion: MVP is just the beginning
      </h3>
      <p className="mb-6">
        Don't wait for perfection. Launch, learn, and evolve. Real success is in the speed of learning, not the number of features. Dare to launch your MVP and let me know how it goes!
      </p>
      <p className="text-gray-400 italic">
        Got an idea? The best time to start is now. 🚀
      </p>
    </div>
  );

  const startupMvpContent = slug === 'lanzar-startup-intencional' || slug === 'launch-intentional-startup'
    ? (isEnglish ? startupMvpContentEN : startupMvpContentES)
    : null;

  // Contenido extendido para el meme-artículo de privacidad y ética de los gigantes tech
  const privacyEthicsMemeContentES = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        En la era digital, la privacidad es el nuevo oro. Pero, ¿quién cuida realmente nuestros datos? Este meme lo resume todo: Microsoft intentando justificarse, Google admitiendo que espía "solo en la web", Apple preguntando si los usuarios lo saben y Linux… bueno, Linux ni enterado.
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        El dilema ético: ¿Hasta dónde pueden llegar las empresas?
      </h2>
      <p className="mb-6">
        Los gigantes tecnológicos manejan más información sobre nosotros de la que imaginamos. ¿Dónde está el límite entre mejorar productos y vulnerar la privacidad? ¿Es suficiente con aceptar los términos y condiciones?
      </p>
      <h3 className="text-xl font-medium text-white mb-4">
        3 reflexiones para usuarios y desarrolladores
      </h3>
      <ol className="list-decimal pl-6 space-y-2 mb-8">
        <li><strong className="text-primary-400">Transparencia real:</strong> No basta con avisos legales. Las empresas deben explicar de forma clara y sencilla qué datos recogen y para qué.</li>
        <li><strong className="text-primary-400">Ética por diseño:</strong> La privacidad debe ser parte del producto desde el inicio, no un parche después de un escándalo.</li>
        <li><strong className="text-primary-400">El poder del usuario:</strong> Exigir opciones, informarse y, si es posible, elegir alternativas open source o más respetuosas.</li>
      </ol>
      <h3 className="text-xl font-medium text-white mb-4">
        Conclusión: Entre la risa y la alarma
      </h3>
      <p className="mb-6">
        Reírnos de los memes es sano, pero no olvidemos que la privacidad y la ética digital son temas serios. Como usuarios y creadores, tenemos el reto de exigir y construir un internet más justo y transparente.
      </p>
      <p className="text-gray-400 italic">
        ¿Tú qué opinas? ¿Somos cómplices, víctimas o simplemente espectadores? 🕵️‍♂️🔒
      </p>
    </div>
  );

  const privacyEthicsMemeContentEN = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        In the digital age, privacy is the new gold. But who really protects our data? This meme says it all: Microsoft trying to explain, Google admitting it "only spies on the web," Apple asking if users know, and Linux… well, Linux didn't even know spying was a thing.
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        The ethical dilemma: How far can companies go?
      </h2>
      <p className="mb-6">
        Tech giants handle more information about us than we imagine. Where's the line between improving products and violating privacy? Is it enough to just accept the terms and conditions?
      </p>
      <h3 className="text-xl font-medium text-white mb-4">
        3 reflections for users and developers
      </h3>
      <ol className="list-decimal pl-6 space-y-2 mb-8">
        <li><strong className="text-primary-400">Real transparency:</strong> Legal notices aren't enough. Companies must clearly and simply explain what data they collect and why.</li>
        <li><strong className="text-primary-400">Ethics by design:</strong> Privacy should be part of the product from the start, not a patch after a scandal.</li>
        <li><strong className="text-primary-400">User power:</strong> Demand options, get informed, and—if possible—choose open source or more respectful alternatives.</li>
      </ol>
      <h3 className="text-xl font-medium text-white mb-4">
        Conclusion: Between laughter and alarm
      </h3>
      <p className="mb-6">
        Laughing at memes is healthy, but let's not forget that privacy and digital ethics are serious topics. As users and creators, we have the challenge to demand and build a fairer, more transparent internet.
      </p>
      <p className="text-gray-400 italic">
        What do you think? Are we accomplices, victims, or just spectators? 🕵️‍♂️🔒
      </p>
    </div>
  );

  const privacyEthicsMemeContent = slug === 'privacidad-etica-gigantes' || slug === 'privacy-ethics-giants'
    ? (isEnglish ? privacyEthicsMemeContentEN : privacyEthicsMemeContentES)
    : null;

  // Contenido extendido para el meme-artículo de clientes exigentes vs presupuesto
  const clientBudgetMemeContentES = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        Todos hemos tenido ese cliente: quiere un Jaguar, pero el presupuesto da para un Fiat… ¡y ni siquiera incluye el adorno! Este meme es el resumen perfecto de la paradoja dev: expectativas de lujo, presupuesto de supervivencia.
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        Cuando el brief es un Ferrari y el pago es un patinete
      </h2>
      <p className="mb-6">
        "Quiero una landing page con IA, blockchain, animaciones 3D y que cargue en 0.2 segundos. Mi presupuesto: $50 y visibilidad en redes."
      </p>
      <h3 className="text-xl font-medium text-white mb-4">
        3 lecciones para devs (y clientes con humor)
      </h3>
      <ol className="list-decimal pl-6 space-y-2 mb-8">
        <li><strong className="text-primary-400">Expectativas realistas:</strong> No todo proyecto necesita microservicios, ni todo cliente puede pagar un Jaguar. ¡Y está bien!</li>
        <li><strong className="text-primary-400">Comunicación honesta:</strong> Explica el valor real de tu trabajo y negocia entregables alcanzables.</li>
        <li><strong className="text-primary-400">Disfruta el proceso:</strong> Si toca hacer magia con poco, al menos ríete del resultado y aprende para la próxima.</li>
      </ol>
      <h3 className="text-xl font-medium text-white mb-4">
        Conclusión: El arte de sobrevivir (y reír) en tech
      </h3>
      <p className="mb-6">
        La próxima vez que te pidan un unicornio con presupuesto de pony, comparte este meme. Porque en el fondo, todos hemos sido el perro sobre el Fiat… ¡y seguimos rodando!
      </p>
      <p className="text-gray-400 italic">
        ¿Cuál ha sido tu proyecto más "Jaguar con presupuesto de Fiat"? Cuéntalo y ríete del proceso. 🚗🐶
      </p>
    </div>
  );

  const clientBudgetMemeContentEN = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        We've all had that client: wants a Jaguar, but the budget is for a Fiat… and not even the hood ornament! This meme perfectly sums up the dev paradox: luxury expectations, survival budget.
      </p>
      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        When the brief is a Ferrari and the pay is a scooter
      </h2>
      <p className="mb-6">
        "I want a landing page with AI, blockchain, 3D animations, and it must load in 0.2 seconds. My budget: $50 and exposure on social media."
      </p>
      <h3 className="text-xl font-medium text-white mb-4">
        3 lessons for devs (and clients with humor)
      </h3>
      <ol className="list-decimal pl-6 space-y-2 mb-8">
        <li><strong className="text-primary-400">Realistic expectations:</strong> Not every project needs microservices, and not every client can pay for a Jaguar. And that's okay!</li>
        <li><strong className="text-primary-400">Honest communication:</strong> Explain the real value of your work and negotiate achievable deliverables.</li>
        <li><strong className="text-primary-400">Enjoy the process:</strong> If you have to work magic with little, at least laugh at the result and learn for next time.</li>
      </ol>
      <h3 className="text-xl font-medium text-white mb-4">
        Conclusion: The art of surviving (and laughing) in tech
      </h3>
      <p className="mb-6">
        Next time you're asked for a unicorn on a pony budget, share this meme. Because deep down, we've all been the dog on the Fiat… and we keep rolling!
      </p>
      <p className="text-gray-400 italic">
        What's your most "Jaguar on a Fiat budget" project? Share it and laugh about it. 🚗🐶
      </p>
    </div>
  );

  // Contenido específico para el artículo TOTAL 90
  const total90ContentES = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        Este verano me propuse unir mi profesión con mi hobby: el fútbol. Quería entender los partidos 
        más allá de la intuición y las emociones. El resultado: construí una app de predicciones 
        impulsada por IA que bauticé "TOTAL 90". ⚽️🧠
      </p>

      {/* Carrusel de imágenes TOTAL 90 */}
      <div className="mb-8">
        <h2 className="text-2xl font-medium text-primary-400 mb-6">
          🖥️ TOTAL 90 en Acción - Capturas de Pantalla
        </h2>
        <Total90ImageCarousel isEnglish={false} />
      </div>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        ¿Qué hace TOTAL 90 hoy?
      </h2>

      <div className="bg-dark-700 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-medium text-white mb-4">🎯 Características principales:</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-primary-400 text-lg flex-shrink-0">⚽</span>
            <div>
              <strong className="text-primary-400 block mb-1">Predicción 1X2</strong>
              <span className="text-gray-300 text-sm">Probabilidades por liga con análisis de calidad del partido</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-primary-400 text-lg flex-shrink-0">📊</span>
            <div>
              <strong className="text-primary-400 block mb-1">Análisis de goles</strong>
              <span className="text-gray-300 text-sm">HT/ST/total, BTTS y Over/Under usando los últimos 5 partidos (GF/GC)</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-primary-400 text-lg flex-shrink-0">📈</span>
            <div>
              <strong className="text-primary-400 block mb-1">Visualizaciones claras</strong>
              <span className="text-gray-300 text-sm">UI simple en Streamlit + Plotly para entender lo importante sin perderse en la data</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-primary-400 text-lg flex-shrink-0">💎</span>
            <div>
              <strong className="text-primary-400 block mb-1">Modelo Freemium</strong>
              <span className="text-gray-300 text-sm">Acceso abierto para probar + modo Premium con insights más profundos</span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        Stack Tecnológico: De Google Colab al Mundo Real
      </h2>

      <p className="mb-6">
        La app está construida con un stack robusto pero accesible. Todo comenzó en <strong className="text-primary-400">Google Colab</strong> 
        para el prototipado y análisis exploratorio de datos, donde pude experimentar rápidamente con diferentes algoritmos y visualizaciones.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-dark-700 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-white mb-4">🐍 Backend & ML</h3>
          <ul className="space-y-2 text-gray-300">
            <li><strong className="text-primary-400">Python:</strong> Core del proyecto</li>
            <li><strong className="text-primary-400">Scikit-learn:</strong> Algoritmo SVC (Support Vector Classifier)</li>
            <li><strong className="text-primary-400">Pandas & NumPy:</strong> Procesamiento de datos</li>
            <li><strong className="text-primary-400">APIs deportivas:</strong> Datos de temporadas recientes</li>
            <li><strong className="text-primary-400">Web Scraping:</strong> Datos históricos complementarios</li>
          </ul>
        </div>
        <div className="bg-dark-700 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-white mb-4">📊 Frontend & Viz</h3>
          <ul className="space-y-2 text-gray-300">
            <li><strong className="text-primary-400">Streamlit:</strong> Interfaz rápida y funcional</li>
            <li><strong className="text-primary-400">Plotly:</strong> Gráficos interactivos</li>
            <li><strong className="text-primary-400">Google Colab:</strong> Desarrollo y prototipado</li>
            <li><strong className="text-primary-400">Localhost:</strong> Actualmente en desarrollo</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        El Algoritmo SVC: ¿Por qué Support Vector Classifier?
      </h2>

      <p className="mb-6">
        Después de experimentar con varios algoritmos, elegí <strong className="text-primary-400">SVC (Support Vector Classifier)</strong> 
        por su capacidad para manejar datos de alta dimensionalidad y su robustez en problemas de clasificación multiclase como 1X2.
      </p>

      <div className="bg-dark-700 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-medium text-white mb-4">🧠 ¿Por qué SVC funciona para fútbol?</h3>
        <ul className="space-y-3">
          <li>
            <strong className="text-primary-400">Separación no lineal:</strong> Los resultados de fútbol no siguen patrones lineales simples
          </li>
          <li>
            <strong className="text-primary-400">Manejo de ruido:</strong> Perfecto para datos deportivos con muchas variables impredecibles
          </li>
          <li>
            <strong className="text-primary-400">Clasificación multiclase:</strong> Victoria local, empate, victoria visitante (1X2)
          </li>
          <li>
            <strong className="text-primary-400">Generalización:</strong> Evita el overfitting con datos históricos limitados
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        Casos de Uso: Colombia vs Bolivia
      </h2>

      <p className="mb-6">
        La verdadera prueba llegó con las eliminatorias. Usé TOTAL 90 para analizar Colombia vs Bolivia, 
        y los resultados fueron fascinantes. La app no solo predijo probabilidades, sino que identificó 
        patrones en el rendimiento ofensivo y defensivo que no eran obvios a simple vista.
      </p>

      <div className="bg-primary-900/30 border border-primary-500/30 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-medium text-white mb-4">⚠️ Disclaimer Importante</h3>
        <p className="text-gray-300">
          TOTAL 90 es una herramienta educativa para análisis deportivo y comprensión de patrones en el fútbol. 
          <strong className="text-primary-400"> No es asesoría financiera</strong> y no debe usarse como base única para decisiones de apuestas.
        </p>
      </div>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        Roadmap: Lo que viene
      </h2>

      <div className="space-y-4 mb-8">
        <div className="flex items-start">
          <span className="text-green-400 mr-3 font-bold">✓</span>
          <div>
            <strong className="text-white">Algoritmo SVC implementado</strong>
            <p className="text-gray-400">Predicciones 1X2 con probabilidades de goles</p>
          </div>
        </div>
        <div className="flex items-start">
          <span className="text-green-400 mr-3 font-bold">✓</span>
          <div>
            <strong className="text-white">Visualizaciones Plotly</strong>
            <p className="text-gray-400">Gráficos interactivos para análisis de tendencias</p>
          </div>
        </div>
        <div className="flex items-start">
          <span className="text-yellow-400 mr-3 font-bold">🔄</span>
          <div>
            <strong className="text-white">Deploy en producción</strong>
            <p className="text-gray-400">Finales de septiembre 2025 - Acceso público</p>
          </div>
        </div>
        <div className="flex items-start">
          <span className="text-gray-400 mr-3 font-bold">⏳</span>
          <div>
            <strong className="text-white">Modo Premium</strong>
            <p className="text-gray-400">Insights avanzados y análisis más profundos</p>
          </div>
        </div>
        <div className="flex items-start">
          <span className="text-gray-400 mr-3 font-bold">⏳</span>
          <div>
            <strong className="text-white">API pública - muy pronto</strong>
            <p className="text-gray-400">Para desarrolladores que quieran integrar predicciones</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        Lecciones Aprendidas: Build in Public
      </h2>

      <p className="mb-6">
        Una de las decisiones más importantes fue hacer este proyecto "build in public". Compartir el proceso, 
        los desafíos y los pequeños wins ha sido increíblemente valioso tanto para mí como para la comunidad.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-dark-700 p-4 rounded-lg">
          <h4 className="text-white font-medium mb-2">💡 Insight técnico:</h4>
          <p className="text-gray-300">
            Los datos de fútbol son más ruidosos de lo que esperaba. La clave estuvo en el feature engineering: 
            crear variables que capturen el "momentum" del equipo en los últimos 5 partidos.
          </p>
        </div>
        <div className="bg-dark-700 p-4 rounded-lg">
          <h4 className="text-white font-medium mb-2">🎯 Insight de producto:</h4>
          <p className="text-gray-300">
            La simplicidad en la UI es crucial. Los usuarios quieren insights rápidos, no perderse en 
            tablas complejas. Streamlit + Plotly resultó ser la combinación perfecta.
          </p>
        </div>
        <div className="bg-dark-700 p-4 rounded-lg">
          <h4 className="text-white font-medium mb-2">🚀 Insight de negocio:</h4>
          <p className="text-gray-300">
            El modelo freemium permite que la gente pruebe la herramienta sin fricción, mientras que 
            el modo premium puede ofrecer análisis más sofisticados para usuarios avanzados.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary-600/20 to-blue-600/20 p-8 rounded-xl mb-8">
        <h2 className="text-2xl font-medium text-white mb-4">
          🚀 ¿Quieres ser Beta Tester?
        </h2>
        <p className="text-gray-300 mb-6">
          TOTAL 90 está en sus fases finales de desarrollo. Si amas el fútbol + data y quieres acceso 
          anticipado para probar la herramienta antes del lanzamiento oficial, ¡me encantaría tu feedback!
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://www.linkedin.com/in/richard-garcia-vizcaino"
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Contactar en LinkedIn
          </a>
          <a 
            href="mailto:richardlisongarcia@gmail.com"
            className="px-6 py-3 bg-dark-700 text-gray-300 rounded-lg hover:bg-dark-600 transition-colors"
          >
            Enviar Email
          </a>
        </div>
      </div>

      <p className="text-lg text-gray-300 italic">
        Si conoces a alguien que ame fútbol + data, ¡compártelo! El poder de TOTAL 90 está en la comunidad 
        que lo usa y mejora. ⚽️📊
      </p>
    </div>
  );

  const total90ContentEN = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        This summer I set out to unite my profession with my hobby: football. I wanted to understand 
        matches beyond intuition and emotions. The result: I built an AI-powered prediction app 
        that I named "TOTAL 90". ⚽️🧠
      </p>

      {/* Carrusel de imágenes TOTAL 90 */}
      <div className="mb-8">
        <h2 className="text-2xl font-medium text-primary-400 mb-6">
          🖥️ TOTAL 90 in Action - Screenshots
        </h2>
        <Total90ImageCarousel isEnglish={true} />
      </div>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        What does TOTAL 90 do today?
      </h2>

      <div className="bg-dark-700 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-medium text-white mb-4">🎯 Main features:</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-primary-400 text-lg flex-shrink-0">⚽</span>
            <div>
              <strong className="text-primary-400 block mb-1">1X2 Prediction</strong>
              <span className="text-gray-300 text-sm">League probabilities with match quality analysis</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-primary-400 text-lg flex-shrink-0">📊</span>
            <div>
              <strong className="text-primary-400 block mb-1">Goals Analysis</strong>
              <span className="text-gray-300 text-sm">HT/ST/total, BTTS and Over/Under using last 5 matches (GF/GC)</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-primary-400 text-lg flex-shrink-0">📈</span>
            <div>
              <strong className="text-primary-400 block mb-1">Clear Visualizations</strong>
              <span className="text-gray-300 text-sm">Simple UI in Streamlit + Plotly to understand what matters without getting lost in data</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-primary-400 text-lg flex-shrink-0">💎</span>
            <div>
              <strong className="text-primary-400 block mb-1">Freemium Model</strong>
              <span className="text-gray-300 text-sm">Open access to try + Premium mode with deeper insights</span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        Tech Stack: From Google Colab to the Real World
      </h2>

      <p className="mb-6">
        The app is built with a robust yet accessible stack. It all started in <strong className="text-primary-400">Google Colab</strong> 
        for prototyping and exploratory data analysis, where I could quickly experiment with different algorithms and visualizations.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-dark-700 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-white mb-4">🐍 Backend & ML</h3>
          <ul className="space-y-2 text-gray-300">
            <li><strong className="text-primary-400">Python:</strong> Project core</li>
            <li><strong className="text-primary-400">Scikit-learn:</strong> SVC (Support Vector Classifier) algorithm</li>
            <li><strong className="text-primary-400">Pandas & NumPy:</strong> Data processing</li>
            <li><strong className="text-primary-400">Sports APIs:</strong> Recent data</li>
            <li><strong className="text-primary-400">Web Scraping:</strong> Complementary historical data</li>
          </ul>
        </div>
        <div className="bg-dark-700 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-white mb-4">📊 Frontend & Viz</h3>
          <ul className="space-y-2 text-gray-300">
            <li><strong className="text-primary-400">Streamlit:</strong> Fast and functional interface</li>
            <li><strong className="text-primary-400">Plotly:</strong> Interactive charts</li>
            <li><strong className="text-primary-400">Google Colab:</strong> Development and prototyping</li>
            <li><strong className="text-primary-400">Localhost:</strong> Currently in development</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        The SVC Algorithm: Why Support Vector Classifier?
      </h2>

      <p className="mb-6">
        After experimenting with various algorithms, I chose <strong className="text-primary-400">SVC (Support Vector Classifier)</strong> 
        for its ability to handle high-dimensional data and its robustness in multiclass classification problems like 1X2.
      </p>

      <div className="bg-dark-700 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-medium text-white mb-4">🧠 Why SVC works for football?</h3>
        <ul className="space-y-3">
          <li>
            <strong className="text-primary-400">Non-linear separation:</strong> Football results don't follow simple linear patterns
          </li>
          <li>
            <strong className="text-primary-400">Noise handling:</strong> Perfect for sports data with many unpredictable variables
          </li>
          <li>
            <strong className="text-primary-400">Multiclass classification:</strong> Home win, draw, away win (1X2)
          </li>
          <li>
            <strong className="text-primary-400">Generalization:</strong> Avoids overfitting with limited historical data
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        Use Cases: Colombia vs Bolivia
      </h2>

      <p className="mb-6">
        The real test came with the qualifiers. I used TOTAL 90 to analyze Colombia vs Bolivia, 
        and the results were fascinating. The app not only predicted probabilities but identified 
        patterns in offensive and defensive performance that weren't obvious at first glance.
      </p>

      <div className="bg-primary-900/30 border border-primary-500/30 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-medium text-white mb-4">⚠️ Important Disclaimer</h3>
        <p className="text-gray-300">
          TOTAL 90 is an educational tool for sports analysis and understanding football patterns. 
          <strong className="text-primary-400"> It is not financial advice</strong> and should not be used as the sole basis for betting decisions.
        </p>
      </div>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        Roadmap: What's Coming
      </h2>

      <div className="space-y-4 mb-8">
        <div className="flex items-start">
          <span className="text-green-400 mr-3 font-bold">✓</span>
          <div>
            <strong className="text-white">SVC Algorithm implemented</strong>
            <p className="text-gray-400">1X2 predictions with probabilities of goals</p>
          </div>
        </div>
        <div className="flex items-start">
          <span className="text-green-400 mr-3 font-bold">✓</span>
          <div>
            <strong className="text-white">Plotly Visualizations</strong>
            <p className="text-gray-400">Interactive charts for trend analysis</p>
          </div>
        </div>
        <div className="flex items-start">
          <span className="text-yellow-400 mr-3 font-bold">🔄</span>
          <div>
            <strong className="text-white">Production Deploy</strong>
            <p className="text-gray-400">End of September 2025 - Public access</p>
          </div>
        </div>
        <div className="flex items-start">
          <span className="text-gray-400 mr-3 font-bold">⏳</span>
          <div>
            <strong className="text-white">Premium Mode</strong>
            <p className="text-gray-400">Advanced insights and deeper analysis</p>
          </div>
        </div>
        <div className="flex items-start">
          <span className="text-gray-400 mr-3 font-bold">⏳</span>
          <div>
            <strong className="text-white">Public API - very soon</strong>
            <p className="text-gray-400">For developers wanting to integrate predictions</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        Lessons Learned: Building in Public
      </h2>

      <p className="mb-6">
        One of the most important decisions was to make this project "build in public". Sharing the process, 
        challenges, and small wins has been incredibly valuable both for me and the community.
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-dark-700 p-4 rounded-lg">
          <h4 className="text-white font-medium mb-2">💡 Technical insight:</h4>
          <p className="text-gray-300">
            Football data is noisier than expected. The key was in feature engineering: 
            creating variables that capture team "momentum" in the last 5 matches.
          </p>
        </div>
        <div className="bg-dark-700 p-4 rounded-lg">
          <h4 className="text-white font-medium mb-2">🎯 Product insight:</h4>
          <p className="text-gray-300">
            Simplicity in UI is crucial. Users want quick insights, not to get lost in 
            complex tables. Streamlit + Plotly turned out to be the perfect combination.
          </p>
        </div>
        <div className="bg-dark-700 p-4 rounded-lg">
          <h4 className="text-white font-medium mb-2">🚀 Business insight:</h4>
          <p className="text-gray-300">
            The freemium model allows people to try the tool without friction, while 
            premium mode can offer more sophisticated analysis for advanced users.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary-600/20 to-blue-600/20 p-8 rounded-xl mb-8">
        <h2 className="text-2xl font-medium text-white mb-4">
          🚀 Want to be a Beta Tester?
        </h2>
        <p className="text-gray-300 mb-6">
          TOTAL 90 is in its final development phases. If you love football + data and want early 
          access to test the tool before the official launch, I'd love your feedback!
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://www.linkedin.com/in/richard-garcia-vizcaino" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Contact on LinkedIn
          </a>
          <a 
            href="mailto:richardlisongarcia@gmail.com" 
            className="px-6 py-3 bg-dark-700 text-gray-300 rounded-lg hover:bg-dark-600 transition-colors"
          >
            Send Email
          </a>
        </div>
      </div>

      <p className="text-lg text-gray-300 italic">
        If you know someone who loves football + data, share it! TOTAL 90's power lies in the community 
        that uses and improves it. ⚽️📊
      </p>
    </div>
  );

  const total90Content = slug === 'total-90-football-ai-app'
    ? (isEnglish ? total90ContentEN : total90ContentES)
    : null;

  const clientBudgetMemeContent = slug === 'cliente-exigente-presupuesto' || slug === 'demanding-client-budget'
    ? (isEnglish ? clientBudgetMemeContentEN : clientBudgetMemeContentES)
    : null;

  const covidContentES = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
        La pandemia de COVID-19 no fue solo un evento que vi en las noticias. Fue algo que viví en carne propia,
        desde la cama en mi casa, luchando contra una enfermedad que me llevó al límite. Esa experiencia me obligó
        a replantearme todo: mi carrera, mis prioridades, y sobre todo, cómo podía usar lo que sé para que otros no
        pasaran por lo mismo.
      </p>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        Cuando el COVID dejó de ser una noticia y se convirtió en mi realidad
      </h2>

      <p className="mb-6">
        Recuerdo perfectamente el momento en que todo cambió. La fiebre que no cedía, la dificultad para respirar,
        y la sensación de que tu cuerpo está librando una batalla que no sabes si va a ganar. Me encontré gravemente
        enfermo. Los hospitales estaban colapsados, los médicos agotados, y yo era uno más en una estadística que
        crecía cada día.
      </p>

      <p className="mb-6">
        En esos días de incertidumbre, entre la fiebre y el silencio de mi habitación, empecé a pensar
        en lo que podría hacer diferente si salía de esta. No hablo solo de "vivir más", sino de desarrollar mis habilidades
        para algo que realmente importara. Cuando me recuperé, esa idea se quedó conmigo como una deuda
        pendiente.
      </p>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        De paciente a investigador: canalizando la frustración en código
      </h2>

      <p className="mb-6">
        Años después, encontré un dataset en Kaggle con 5,856 radiografías de tórax: casos normales y casos de
        neumonía (incluyendo COVID-19). Y algo hizo clic. ¿Y si pudiera construir un sistema que ayudara a detectar
        la enfermedad automáticamente? No para reemplazar a los médicos, sino para darles una herramienta que les
        ahorrara tiempo cuando más lo necesitaban.
      </p>

      <p className="mb-6">
        El problema era real: durante la pandemia, los radiólogos analizaban más de 500 radiografías al día,
        trabajando turnos de 12+ horas. La fatiga llevaba a errores, y un falso negativo podía significar enviar
        a un paciente enfermo a casa. Yo había sido ese paciente. Sabía lo que se sentía.
      </p>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        La arquitectura: ResNet34 + Transfer Learning
      </h2>

      <p className="mb-6">
        Elegí PyTorch como framework y ResNet34 como arquitectura base, aplicando Transfer Learning desde ImageNet
        (1.2 millones de imágenes). La idea era simple pero poderosa: tomar una red neuronal que ya "sabe ver"
        el mundo y enseñarle a ver radiografías de tórax.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-8">
        <h4 className="text-lg font-medium text-primary-400 mb-4">Stack Tecnológico</h4>
        <ul className="space-y-2 text-gray-300">
          <li><strong className="text-white">Framework:</strong> PyTorch 2.0+</li>
          <li><strong className="text-white">Arquitectura:</strong> ResNet34 (Transfer Learning desde ImageNet)</li>
          <li><strong className="text-white">Data Augmentation:</strong> Albumentations (transformaciones seguras para imágenes médicas)</li>
          <li><strong className="text-white">Optimización:</strong> Adam + ReduceLROnPlateau</li>
          <li><strong className="text-white">Regularización:</strong> Class Weights para manejar desbalanceo</li>
          <li><strong className="text-white">Interpretabilidad:</strong> Grad-CAM</li>
          <li><strong className="text-white">Hardware:</strong> GPU Tesla T4 (Kaggle)</li>
        </ul>
      </div>

      <p className="mb-6">
        El pipeline procesaba las radiografías en formato JPEG (1024×1024), las redimensionaba a 224×224,
        aplicaba normalización con estadísticas de ImageNet y augmentaciones cuidadosas: flip horizontal,
        rotación ±10°, ajustes de brillo y contraste. Nunca flip vertical, porque una radiografía invertida
        no tiene sentido anatómico.
      </p>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        99.5% de sensibilidad: por qué esta métrica importa más que la accuracy
      </h2>

      <p className="mb-6">
        El modelo alcanzó un 84% de accuracy general, pero la métrica que realmente importa en un contexto de
        screening médico es la <strong className="text-white">sensibilidad: 99.5%</strong>. De 390 casos reales
        de neumonía/COVID en el set de test, el modelo detectó 388. Solo 2 casos se le escaparon.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-8">
        <h4 className="text-lg font-medium text-primary-400 mb-4">Resultados clave</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary-400">99.5%</p>
            <p className="text-sm text-gray-400">Sensibilidad</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">84%</p>
            <p className="text-sm text-gray-400">Accuracy</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">98.6%</p>
            <p className="text-sm text-gray-400">NPV</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">58.1%</p>
            <p className="text-sm text-gray-400">Especificidad</p>
          </div>
        </div>
      </div>

      <p className="mb-6">
        ¿Por qué aceptar una especificidad del 58.1%? Porque en contexto de pandemia y urgencias, la filosofía
        es clara: <strong className="text-white">"Mejor prevenir que lamentar"</strong>. Los 98 falsos positivos
        se confirman con un test PCR (costo: ~$20). Los 2 falsos negativos son 2 pacientes potencialmente enviados
        a casa con COVID. Un modelo más "conservador" con 95% de especificidad tendría 50 falsos negativos.
      </p>

      <p className="mb-6">
        La pregunta no es "¿cuántas PCR extras podemos evitar?" sino "¿cuántas vidas podemos salvar?".
        48 detecciones adicionales frente al modelo conservador. Ese número no es abstracto cuando has estado
        del otro lado de la camilla.
      </p>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        Grad-CAM: cuando la IA te muestra que está mirando donde debe
      </h2>

      <p className="mb-6">
        Un modelo de IA que dice "neumonía" sin explicar por qué es una caja negra. Y los médicos no confían
        en cajas negras. Por eso implementé Grad-CAM (Gradient-weighted Class Activation Mapping), una técnica
        que genera mapas de calor mostrando qué regiones de la radiografía usa el modelo para tomar su decisión.
      </p>

      <p className="mb-6">
        Los resultados fueron validadores: el modelo se enfocaba en las regiones basales de los pulmones,
        detectaba patrones de "ground-glass" típicos de neumonía viral, y evaluaba ambos pulmones. No miraba
        bordes, marcas ni artefactos. Estaba viendo lo que un radiólogo experimentado vería.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-8">
        <h4 className="text-lg font-medium text-primary-400 mb-4">Lo que el modelo aprendió a detectar</h4>
        <ul className="space-y-2 text-gray-300">
          <li>✅ Opacidades pulmonares y consolidaciones</li>
          <li>✅ Patrones ground-glass (típicos de COVID)</li>
          <li>✅ Distribución bilateral (evalúa ambos pulmones)</li>
          <li>✅ Foco en regiones basales (zona típica de neumonía)</li>
          <li>✅ Ignora artefactos y marcas externas</li>
          <li>✅ Limita su atención al parénquima pulmonar</li>
        </ul>
      </div>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        Reflexión: cuando el dolor se convierte en propósito
      </h2>

      <p className="mb-6">
        Este proyecto no es solo un ejercicio técnico. Es la forma en que canalicé una de las experiencias
        más difíciles de mi vida. El COVID me enseñó que la tecnología no es un fin en sí misma; es una
        herramienta que cobra sentido cuando resuelve problemas reales, cuando ayuda a personas reales.
      </p>

      <p className="mb-6">
        Un sistema así, desplegado en urgencias, podría reducir un 58% la carga de trabajo de los radiólogos.
        En telemedicina rural, podría dar un diagnóstico preliminar en menos de un segundo donde no hay
        especialistas. En investigación retrospectiva, podría procesar miles de radiografías históricas
        identificando casos no diagnosticados.
      </p>

      <p className="mb-8">
        Pero más allá de los números, este proyecto me recuerda por qué elegí esta profesión. No por las
        tecnologías de moda ni por los frameworks del momento, sino por la posibilidad de construir algo
        que importe. Algo que, quizás, le ahorre a alguien ese momento de incertidumbre en una cama
        de hospital.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-8">
        <h4 className="text-lg font-medium text-primary-400 mb-4">Explora el proyecto</h4>
        <p className="text-gray-300 mb-4">
          El código fuente completo, los resultados y la documentación están disponibles en GitHub.
        </p>
        <a
          href="https://github.com/riche45/COVID-Pneumonia-Detection"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Ver en GitHub →
        </a>
      </div>

      <p className="text-lg text-gray-300 italic">
        Si este proyecto te resonó o conoces a alguien en el ámbito médico que podría beneficiarse de
        herramientas como esta, compártelo. La IA en salud avanza cuando la comunidad se involucra. 🏥🤖
      </p>
    </div>
  );

  const covidContentEN = (
    <div className="prose prose-invert max-w-none">
      <p className="text-xl text-gray-300 mb-8">
      The COVID-19 pandemic wasn't just something I saw on the news. It was something I experienced firsthand,

        from my bed at home, battling an illness that pushed me to my limits. That experience forced
        me to rethink everything: my career, my priorities, and above all, how I could use what I know so
        others wouldn't have to go through the same thing.
      </p>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        When COVID stopped being news and became my reality
      </h2>

      <p className="mb-6">
        I remember the exact moment everything changed. The fever that wouldn't break, the difficulty breathing,
        and the feeling that your body is fighting a battle you're not sure it's going to win. I was seriously ill.
        Hospitals were overwhelmed, doctors were exhausted, and I was just another number in a statistic that
        grew every day.
      </p>

      <p className="mb-6">
      In those uncertain days, between the fever and the silence of my room, I began to think
      about what I could do differently if I made it through this. I'm not just talking about "living longer," but about developing my skills
      for something that truly mattered. When I recovered, that idea stayed with me like an unfinished task.
      </p>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        From patient to researcher: channeling frustration into code
      </h2>

      <p className="mb-6">
        Years later, I found a dataset on Kaggle with 5,856 chest X-rays: normal cases and pneumonia cases
        (including COVID-19). And something clicked. What if I could build a system that helped detect the
        disease automatically? Not to replace doctors, but to give them a tool that saved them time when they
        needed it most.
      </p>

      <p className="mb-6">
        The problem was real: during the pandemic, radiologists were analyzing over 500 X-rays per day,
        working 12+ hour shifts. Fatigue led to errors, and a false negative could mean sending a sick
        patient home. I had been that patient. I knew what it felt like.
      </p>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        The architecture: ResNet34 + Transfer Learning
      </h2>

      <p className="mb-6">
        I chose PyTorch as my framework and ResNet34 as the base architecture, applying Transfer Learning
        from ImageNet (1.2 million images). The idea was simple but powerful: take a neural network that
        already "knows how to see" the world and teach it to see chest X-rays.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-8">
        <h4 className="text-lg font-medium text-primary-400 mb-4">Tech Stack</h4>
        <ul className="space-y-2 text-gray-300">
          <li><strong className="text-white">Framework:</strong> PyTorch 2.0+</li>
          <li><strong className="text-white">Architecture:</strong> ResNet34 (Transfer Learning from ImageNet)</li>
          <li><strong className="text-white">Data Augmentation:</strong> Albumentations (medical-safe transforms)</li>
          <li><strong className="text-white">Optimization:</strong> Adam + ReduceLROnPlateau</li>
          <li><strong className="text-white">Regularization:</strong> Class Weights for imbalance handling</li>
          <li><strong className="text-white">Interpretability:</strong> Grad-CAM</li>
          <li><strong className="text-white">Hardware:</strong> GPU Tesla T4 (Kaggle)</li>
        </ul>
      </div>

      <p className="mb-6">
        The pipeline processed X-rays in JPEG format (1024×1024), resized them to 224×224, applied ImageNet
        normalization and careful augmentations: horizontal flip, ±10° rotation, brightness and contrast
        adjustments. Never vertical flip — an inverted X-ray makes no anatomical sense.
      </p>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        99.5% sensitivity: why this metric matters more than accuracy
      </h2>

      <p className="mb-6">
        The model achieved 84% overall accuracy, but the metric that truly matters in a medical screening
        context is <strong className="text-white">sensitivity: 99.5%</strong>. Out of 390 real pneumonia/COVID
        cases in the test set, the model detected 388. Only 2 cases slipped through.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-8">
        <h4 className="text-lg font-medium text-primary-400 mb-4">Key Results</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary-400">99.5%</p>
            <p className="text-sm text-gray-400">Sensitivity</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">84%</p>
            <p className="text-sm text-gray-400">Accuracy</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">98.6%</p>
            <p className="text-sm text-gray-400">NPV</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">58.1%</p>
            <p className="text-sm text-gray-400">Specificity</p>
          </div>
        </div>
      </div>

      <p className="mb-6">
        Why accept 58.1% specificity? Because in the context of a pandemic and emergency rooms, the philosophy
        is clear: <strong className="text-white">"Better safe than sorry."</strong> The 98 false positives are
        confirmed with a PCR test (cost: ~$20). The 2 false negatives are 2 patients potentially sent home with
        COVID. A more "conservative" model with 95% specificity would have 50 false negatives instead.
      </p>

      <p className="mb-6">
        The question isn't "how many extra PCRs can we avoid?" but "how many lives can we save?" 48 additional
        detections compared to the conservative model. That number isn't abstract when you've been on the other
        side of the hospital bed.
      </p>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        Grad-CAM: when AI shows you it's looking where it should
      </h2>

      <p className="mb-6">
        An AI model that says "pneumonia" without explaining why is a black box. And doctors don't trust black
        boxes. That's why I implemented Grad-CAM (Gradient-weighted Class Activation Mapping), a technique that
        generates heatmaps showing which regions of the X-ray the model uses to make its decision.
      </p>

      <p className="mb-6">
        The results were validating: the model focused on the basal regions of the lungs, detected
        "ground-glass" patterns typical of viral pneumonia, and evaluated both lungs. It didn't look at edges,
        markings, or artifacts. It was seeing what an experienced radiologist would see.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-8">
        <h4 className="text-lg font-medium text-primary-400 mb-4">What the model learned to detect</h4>
        <ul className="space-y-2 text-gray-300">
          <li>✅ Pulmonary opacities and consolidations</li>
          <li>✅ Ground-glass patterns (typical of COVID)</li>
          <li>✅ Bilateral distribution (evaluates both lungs)</li>
          <li>✅ Focus on basal regions (typical pneumonia zone)</li>
          <li>✅ Ignores artifacts and external markings</li>
          <li>✅ Limits attention to lung parenchyma</li>
        </ul>
      </div>

      <h2 className="text-2xl font-medium text-primary-400 mb-6">
        Reflection: when pain becomes purpose
      </h2>

      <p className="mb-6">
        This project isn't just a technical exercise. It's how I channeled one of the most difficult
        experiences of my life. COVID taught me that technology isn't an end in itself — it's a tool that
        gains meaning when it solves real problems, when it helps real people.
      </p>

      <p className="mb-6">
        A system like this, deployed in emergency rooms, could reduce radiologists' workload by 58%. In
        rural telemedicine, it could provide a preliminary diagnosis in under a second where there are no
        specialists. In retrospective research, it could process thousands of historical X-rays identifying
        undiagnosed cases.
      </p>

      <p className="mb-8">
        But beyond the numbers, this project reminds me why I chose this profession. Not for the trendy
        technologies or the frameworks of the moment, but for the possibility of building something that
        matters. Something that might spare someone that moment of uncertainty in a hospital bed.
      </p>

      <div className="bg-dark-800 rounded-lg p-6 mb-8">
        <h4 className="text-lg font-medium text-primary-400 mb-4">Explore the project</h4>
        <p className="text-gray-300 mb-4">
          The complete source code, results, and documentation are available on GitHub.
        </p>
        <a
          href="https://github.com/riche45/COVID-Pneumonia-Detection"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          View on GitHub →
        </a>
      </div>

      <p className="text-lg text-gray-300 italic">
        If this project resonated with you or you know someone in the medical field who could benefit from
        tools like this, share it. AI in healthcare advances when the community gets involved. 🏥🤖
      </p>
    </div>
  );

  const covidContent = slug === 'deteccion-covid19-ia' || slug === 'covid19-ai-detection'
    ? (isEnglish ? covidContentEN : covidContentES)
    : null;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Navegación */}
      <Link 
        to={backToPath}
        className="inline-flex items-center text-gray-400 hover:text-primary-400 mb-8"
      >
        <ArrowLeft size={20} className="mr-2" />
        {backToText}
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
      {aiAgentsContent}
      {teslaContent}
      {deepseekContent}
      {founderContent}
      {total90Content}
      {promptsBookContent}
      {botTutorialContent}
      {memeContent}
      {startupMvpContent}
      {privacyEthicsMemeContent}
      {clientBudgetMemeContent}
      {covidContent}

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