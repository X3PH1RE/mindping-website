
import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface UserProfile {
  id: string;
  email: string;
  role: 'free' | 'pro';
  subscription_status: string;
  subscription_id?: string;
  created_at: string;
  updated_at: string;
}

export const useProfile = (user: User | null) => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    fetchProfile();
  }, [user]);

  const fetchProfile = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error && error.code === 'PGRST116') {
        // Profile doesn't exist, create it
        const { data: newProfile, error: insertError } = await supabase
          .from('profiles')
          .insert({
            id: user.id,
            email: user.email,
            role: 'free'
          })
          .select()
          .single();

        if (insertError) {
          console.error('Error creating profile:', insertError);
        } else {
          setProfile(newProfile);
        }
      } else if (error) {
        console.error('Error fetching profile:', error);
      } else {
        setProfile(data);
      }
    } catch (error) {
      console.error('Error in fetchProfile:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateRole = async (role: 'free' | 'pro', subscriptionId?: string) => {
    if (!user) return false;

    try {
      const { data, error } = await supabase
        .from('profiles')
        .update({
          role,
          subscription_status: role === 'pro' ? 'active' : 'inactive',
          subscription_id: subscriptionId || null
        })
        .eq('id', user.id)
        .select()
        .single();

      if (error) {
        console.error('Error updating profile:', error);
        return false;
      }

      setProfile(data);
      return true;
    } catch (error) {
      console.error('Error in updateRole:', error);
      return false;
    }
  };

  return {
    profile,
    loading,
    updateRole,
    fetchProfile,
    isPro: profile?.role === 'pro'
  };
};
