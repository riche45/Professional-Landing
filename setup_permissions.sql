-- Resetear permisos existentes
REVOKE ALL ON TABLE public.subscribers FROM anon, authenticated;

-- Dar permisos básicos a la tabla
GRANT ALL ON TABLE public.subscribers TO postgres;
GRANT SELECT, INSERT, UPDATE ON TABLE public.subscribers TO authenticated;
GRANT SELECT, INSERT ON TABLE public.subscribers TO anon;

-- Habilitar RLS
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Crear políticas de seguridad
DROP POLICY IF EXISTS "Allow anonymous insert" ON public.subscribers;
DROP POLICY IF EXISTS "Allow authenticated read" ON public.subscribers;
DROP POLICY IF EXISTS "Allow authenticated update" ON public.subscribers;

CREATE POLICY "Allow anonymous insert" 
ON public.subscribers
FOR INSERT 
TO anon
WITH CHECK (true);

CREATE POLICY "Allow authenticated read" 
ON public.subscribers
FOR SELECT 
TO authenticated
USING (true);

CREATE POLICY "Allow authenticated update" 
ON public.subscribers
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Verificar que la tabla existe y tiene la estructura correcta
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT FROM information_schema.tables 
    WHERE table_schema = 'public' 
    AND table_name = 'subscribers'
  ) THEN
    CREATE TABLE public.subscribers (
      id SERIAL PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      language TEXT NOT NULL,
      source TEXT,
      status TEXT DEFAULT 'active',
      subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  END IF;
END $$;

-- Crear tabla surveys
CREATE TABLE IF NOT EXISTS public.surveys (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  language TEXT NOT NULL,
  years_of_experience TEXT NOT NULL,
  industry TEXT NOT NULL,
  job_role TEXT NOT NULL,
  programming_languages TEXT[] NOT NULL,
  frontend_frameworks TEXT[] NOT NULL,
  ai_experience INTEGER NOT NULL,
  topics TEXT[] NOT NULL,
  discovery TEXT NOT NULL,
  startup_founder TEXT NOT NULL
);

-- Dar permisos básicos a la tabla
GRANT ALL ON TABLE public.surveys TO postgres;
GRANT SELECT, INSERT ON TABLE public.surveys TO anon;
GRANT SELECT, INSERT ON TABLE public.surveys TO authenticated;

-- Habilitar RLS
ALTER TABLE public.surveys ENABLE ROW LEVEL SECURITY;

-- Crear políticas de seguridad
DROP POLICY IF EXISTS "Allow anonymous insert" ON public.surveys;
CREATE POLICY "Allow anonymous insert" ON public.surveys FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated read" ON public.surveys;
CREATE POLICY "Allow authenticated read" ON public.surveys FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "Allow authenticated update" ON public.surveys;
CREATE POLICY "Allow authenticated update" ON public.surveys FOR UPDATE TO authenticated USING (true) WITH CHECK (true); 