import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things I Learned Today</Text>
      <Text style={styles.subtitle}>Write one thing you learned today</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7A1F2B",
    paddingTop: 55,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#F8D7DA",
    marginTop: 5,
    fontSize: 14,
  },
});