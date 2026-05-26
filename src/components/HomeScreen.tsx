import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./header";
import Footer from "./footer";
import BodyPage from "./bodypage";
import LoginScreen from "./loginScreen";
import User from "./user";

export default function HomeScreen() {
  const [screen, setScreen] = useState<"login" | "home">("login");
  const [userEmail, setUserEmail] = useState("");

  if (screen === "login") {
    return (
      <LoginScreen
        onLogin={(email) => {
          setUserEmail(email);
          setScreen("home");
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <User email={userEmail} />
      <BodyPage />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});