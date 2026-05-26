import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Entry } from "./type";
import { supabase } from "../../lib/supabase";

type Props = {
  entry: Entry;
  onDelete: (id: string) => void;
};

export default function Item({ entry, onDelete }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{entry.text}</Text>

      <TouchableOpacity onPress={() => onDelete(entry.id)}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#eee",
  },
  text: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
  delete: {
    color: "#b00020",
    fontWeight: "700",
    alignSelf: "flex-end",
  },
});