import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Newsletter() {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const isEnglish = i18n.language === 'en';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    const language = isEnglish ? 'en' : 'es';
    try {
      const res = await fetch('https://hhvbdncnelyerffeiwrs.functions.supabase.co/add-subscriber', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          language,
          source: window.location.pathname,
        }),
      });

      if (res.ok) {
        // Enviar correo con EmailJS
        const message = `
          <h2>${isEnglish ? 'Newsletter Subscription' : 'Suscripción al Newsletter'}</h2>
          <table class="info-table">
            <tr><th>Email</th><td>${email}</td></tr>
            <tr><th>Idioma</th><td>${language}</td></tr>
          </table>
          <p>${isEnglish ? 'Thank you for subscribing!' : '¡Gracias por suscribirte!'}</p>
        `;
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          language === 'es'
            ? import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ES
            : import.meta.env.VITE_EMAILJS_TEMPLATE_ID_EN,
          { message },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        setStatus('success');
        setEmail('');
        setMessage(
          isEnglish
            ? '🎉 Successfully subscribed! Check your email for confirmation.'
            : '🎉 ¡Suscripción exitosa! Revisa tu email para la confirmación.'
        );
      } else {
        const data = await res.json();
        if (data.error && data.error.includes('duplicate key value')) {
          setStatus('error');
          setMessage(
            isEnglish
              ? 'This email is already subscribed. Try with another one or check your inbox!'
              : 'Este correo ya está suscrito. ¡Intenta con otro o revisa tu bandeja de entrada!'
          );
        } else {
          setStatus('error');
          setMessage(
            isEnglish
              ? 'Oops! Something went wrong. Please try again.'
              : '¡Ups! Algo salió mal. Por favor, inténtalo de nuevo.'
          );
        }
      }
    } catch (error) {
      setStatus('error');
      setMessage(
        isEnglish
          ? 'Network error. Please try again later.'
          : 'Error de red. Por favor, inténtalo más tarde.'
      );
    }
  };

  return (
    <div className="bg-dark-700 rounded-xl p-8 mt-12">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-medium mb-4">
          {t('newsletter.title', '📬 ¡Mantente Actualizado!')}
        </h3>
        <p className="text-gray-400 mb-6">
          {t('newsletter.description', 'Suscríbete para recibir los últimos artículos, tutoriales y conocimientos tecnológicos directamente en tu bandeja de entrada.')}
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('newsletter.emailPlaceholder', 'Tu dirección de email')}
            className="flex-1 px-4 py-2 bg-dark-800 rounded-lg border border-dark-600 focus:border-primary-400 focus:outline-none transition-colors"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center justify-center px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? (
              <div className="inline-flex items-center">
                <span className="animate-spin mr-2">⚡</span>
                <span>{t('newsletter.sending', 'Suscribiendo...')}</span>
              </div>
            ) : (
              <div className="inline-flex items-center">
                <Send size={18} className="mr-2" />
                <span>{t('newsletter.subscribeButton', 'Suscribirse')}</span>
              </div>
            )}
          </button>
        </form>
        {message && (
          <p className={`mt-4 ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
            {message}
          </p>
        )}
        <p className="text-xs text-gray-500 mt-4">
          {t('newsletter.legal', 'Al suscribirte, aceptas recibir emails de newsletter. Puedes darte de baja en cualquier momento.')}
        </p>
      </div>
    </div>
  );
} 