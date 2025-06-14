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

  const clientBudgetMemeContent = slug === 'cliente-exigente-presupuesto' || slug === 'demanding-client-budget'
    ? (isEnglish ? clientBudgetMemeContentEN : clientBudgetMemeContentES)
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
      {promptsBookContent}
      {botTutorialContent}
      {memeContent}
      {startupMvpContent}
      {privacyEthicsMemeContent}
      {clientBudgetMemeContent}

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