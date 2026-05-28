import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Footer() {
  return <Text style={styles.footer}>Keep learning every day.</Text>;
}

const styles = StyleSheet.create({
  footer: {
    textAlign: "center",
    color: "#777",
    fontSize: 13,
    marginVertical: 12,
  },
});