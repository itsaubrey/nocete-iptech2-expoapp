import "react-native-url-polyfill/auto";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient, Session } from "@supabase/supabase-js";

import Login from "./src/components/login";
import UserScreen from "./src/components/user";
import HomeScreen from "./src/components/HomeScreen";

export const supabaseUrl = "https://fwdstpfrnejisceiaxpv.supabase.co";
export const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3ZHN0cGZybmVqaXNjZWlheHB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3OTQ4NzUsImV4cCI6MjA5NTM3MDg3NX0.b20MjaaFx6QSwvTLvDZAUi4lOPGUM8wlqp_Nb16C5hY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export default function App() {
  const [screen, setScreen] = useState<"login" | "register">("login");
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (session) {
    return <HomeScreen userEmail={session.user.email ?? ""} />;
  }

  if (screen === "register") {
    return <UserScreen onBackToLogin={() => setScreen("login")} />;
  }

  return <Login onCreateAccount={() => setScreen("register")} />;
}