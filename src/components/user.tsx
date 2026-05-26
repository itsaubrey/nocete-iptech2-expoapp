import React from "react";
import { Text, View, StyleSheet } from "react-native";

type Props = {
  email: string;
};

export default function User({ email }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Logged in as: {email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#fff7f7",
  },
  text: {
    textAlign: "center",
    color: "#6b1e1e",
    fontWeight: "600",
  },
});