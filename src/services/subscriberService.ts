import { supabase } from '../lib/supabase';
import type { Subscriber } from '../lib/supabase';

export const subscriberService = {
  async addSubscriber(email: string, language: string, source: string = 'newsletter'): Promise<boolean> {
    try {
      console.log('Attempting to add subscriber:', { email, language, source });
      
      // Verificar si el email ya existe
      const { data: existingSubscriber, error: searchError } = await supabase
        .from('subscribers')
        .select('id, status')
        .eq('email', email)
        .single();

      if (searchError) {
        console.error('Error searching subscriber:', searchError);
        return false;
      }

      if (existingSubscriber) {
        console.log('Subscriber exists:', existingSubscriber);
        
        if (existingSubscriber.status === 'unsubscribed') {
          // Reactivar suscripción
          const { error: updateError } = await supabase
            .from('subscribers')
            .update({ status: 'active', language })
            .eq('id', existingSubscriber.id);
          
          if (updateError) {
            console.error('Error reactivating subscriber:', updateError);
            return false;
          }
          console.log('Subscriber reactivated successfully');
          return true;
        }
        return true; // Ya está suscrito y activo
      }

      console.log('Creating new subscriber...');
      
      // Crear nuevo suscriptor
      const { error: insertError } = await supabase
        .from('subscribers')
        .insert([
          {
            email,
            language,
            source,
            status: 'active',
            subscribed_at: new Date().toISOString(),
          },
        ]);

      if (insertError) {
        console.error('Error inserting subscriber:', insertError);
        return false;
      }

      console.log('Subscriber created successfully');
      return true;
    } catch (error) {
      console.error('Unexpected error adding subscriber:', error);
      return false;
    }
  },

  async unsubscribe(email: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('subscribers')
        .update({ status: 'unsubscribed' })
        .eq('email', email);

      if (error) {
        console.error('Error unsubscribing:', error);
        return false;
      }
      
      console.log('Unsubscribed successfully:', email);
      return true;
    } catch (error) {
      console.error('Error unsubscribing:', error);
      return false;
    }
  },

  async getActiveSubscribers(): Promise<Subscriber[]> {
    try {
      const { data, error } = await supabase
        .from('subscribers')
        .select('*')
        .eq('status', 'active')
        .order('subscribed_at', { ascending: false });

      if (error) {
        console.error('Error fetching subscribers:', error);
        throw error;
      }
      
      console.log('Active subscribers fetched:', data?.length || 0);
      return data || [];
    } catch (error) {
      console.error('Error getting subscribers:', error);
      return [];
    }
  }
}; 