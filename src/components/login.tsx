import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

type Props = {
  onLogin: (email: string) => void;
};

export default function Login({ onLogin }: Props) {
  const [isCreateAccount, setIsCreateAccount] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleContinue = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Missing fields", "Please enter email and password.");
      return;
    }

    if (isCreateAccount) {
      Alert.alert("Success", "Account created successfully!");
    }

    onLogin(email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isCreateAccount ? "Create Account" : "Welcome"}
      </Text>

      <Text style={styles.subtitle}>Things I learned today</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <View style={styles.passwordBox}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />

        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.showText}>{showPassword ? "Hide" : "Show"}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>
          {isCreateAccount ? "Create Account" : "Login"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsCreateAccount(!isCreateAccount)}>
        <Text style={styles.switchText}>
          {isCreateAccount
            ? "Already have an account? Login"
            : "Don't have an account? Create account"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#6b1e1e",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    color: "#666",
    marginTop: 8,
    marginBottom: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  passwordBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: 12,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 14,
  },
  showText: {
    color: "#6b1e1e",
    fontWeight: "700",
  },
  button: {
    backgroundColor: "#6b1e1e",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },
  switchText: {
    textAlign: "center",
    marginTop: 18,
    color: "#6b1e1e",
    fontWeight: "600",
  },
});