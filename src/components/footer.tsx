import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Keep learning every day.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 14,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  text: {
    textAlign: "center",
    color: "#777",
  },
});