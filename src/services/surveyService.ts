import { supabase } from '../lib/supabase';

export const surveyService = {
  async addSurveyResponse(data: {
    language: string;
    years_of_experience: string;
    industry: string;
    job_role: string;
    programming_languages: string[];
    frontend_frameworks: string[];
    ai_experience: number;
    topics: string[];
    discovery: string;
    startup_founder: string;
  }): Promise<{ success: boolean; error?: string }> {
    try {
      console.log('Intentando enviar encuesta:', data);

      // Verificar conexión con Supabase
      const { data: testConnection, error: connectionError } = await supabase
        .from('surveys')
        .select('id')
        .limit(1);

      if (connectionError) {
        console.error('Error de conexión con Supabase:', connectionError);
        return { success: false, error: 'Error de conexión con la base de datos' };
      }

      // Insertar encuesta
      const { error: insertError } = await supabase
        .from('surveys')
        .insert([data]);

      if (insertError) {
        console.error('Error insertando respuesta de encuesta:', insertError);
        return { 
          success: false, 
          error: insertError.code === '23505' 
            ? 'Esta encuesta ya fue enviada' 
            : 'Error al guardar la encuesta'
        };
      }

      console.log('Encuesta enviada exitosamente');
      return { success: true };
    } catch (error) {
      console.error('Error inesperado al enviar encuesta:', error);
      return { 
        success: false, 
        error: 'Error inesperado al procesar la encuesta'
      };
    }
  }
}; 