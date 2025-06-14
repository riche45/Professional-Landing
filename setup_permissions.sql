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