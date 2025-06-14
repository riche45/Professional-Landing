import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key must be defined');
}

// Log de configuración (solo en desarrollo)
if (import.meta.env.DEV) {
  console.log('Supabase Config:', {
    url: supabaseUrl,
    hasAnonKey: !!supabaseAnonKey
  });
}

const options = {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  db: {
    schema: 'public'
  },
  global: {
    headers: {
      'X-Client-Info': 'supabase-js/2.50.0',
    },
  }
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, options);

// Tipos para la base de datos
export type Subscriber = {
  id: number;
  email: string;
  language: string;
  subscribed_at: string;
  status: 'active' | 'unsubscribed';
  source: string;
} 