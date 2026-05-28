import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "./header";
import Footer from "./footer";
import BodyPage from "./bodypage";
import { supabase } from "../../App";

type Props = {
  userEmail: string;
};

export default function HomeScreen({ userEmail }: Props) {
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Text style={styles.welcome}>Welcome, {userEmail}</Text>
        <BodyPage />

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  content: {
    flex: 1,
  },
  welcome: {
    fontSize: 15,
    fontWeight: "600",
    color: "#7A1F2B",
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  logoutButton: {
    backgroundColor: "#333",
    padding: 13,
    borderRadius: 10,
    alignItems: "center",
    margin: 20,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
  },
});