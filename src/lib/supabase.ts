import "expo-sqlite/localStorage/install";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fwdstpfrnejisceiaxpv.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3ZHN0cGZybmVqaXNjZWlheHB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3OTQ4NzUsImV4cCI6MjA5NTM3MDg3NX0.b20MjaaFx6QSwvTLvDZAUi4lOPGUM8wlqp_Nb16C5hY";

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: localStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});