import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-url-polyfill/auto';

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fnbqsulyfkvxudqiepaf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuYnFzdWx5Zmt2eHVkcWllcGFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyOTAzNjAsImV4cCI6MTk4Mzg2NjM2MH0.L6ks1tSUeZ4MQ25OlyJXDlaXcQhE-71Q7_vq5Fl2Mf8';

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      storage: AsyncStorage, // can use @react-native-async-storage/async-storage
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  });

  const handleLogin = async () => {
      let { user, error } = await supabase.auth.signIn({
        provider: 'google'
      });
      return (user, error)
    };

  const handleSignUp = async ()=>{
    
  }


export {supabase, handleLogin, supabaseUrl};