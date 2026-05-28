import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { supabase } from "../../App";

type Props = {
  onCreateAccount: () => void;
};

export default function LoginScreen({ onCreateAccount }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (loading) return;

    if (!email.trim() || !password.trim()) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password: password.trim(),
    });

    setLoading(false);

    if (error) {
      Alert.alert("Login failed", error.message);
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things I Learned Today</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <View style={styles.passwordBox}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={styles.passwordInput}
        />

        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.showText}>{showPassword ? "Hide" : "Show"}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Logging in..." : "Login"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onCreateAccount} disabled={loading}>
        <Text style={styles.link}>Don’t have an account? Create account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 25, backgroundColor: "#F7F7F7" },
  title: { fontSize: 28, fontWeight: "bold", color: "#7A1F2B", textAlign: "center" },
  subtitle: { textAlign: "center", marginBottom: 30, marginTop: 8, color: "#666" },
  input: { backgroundColor: "#fff", padding: 14, borderRadius: 10, borderWidth: 1, borderColor: "#ddd", marginBottom: 15 },
  passwordBox: { backgroundColor: "#fff", borderRadius: 10, borderWidth: 1, borderColor: "#ddd", marginBottom: 15, paddingHorizontal: 14, flexDirection: "row", alignItems: "center" },
  passwordInput: { flex: 1, paddingVertical: 14 },
  showText: { color: "#7A1F2B", fontWeight: "bold" },
  button: { backgroundColor: "#7A1F2B", padding: 15, borderRadius: 10, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold" },
  link: { marginTop: 20, textAlign: "center", color: "#7A1F2B", fontWeight: "600" },
});