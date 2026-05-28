import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entry } from "./type";

type Props = {
  entry: Entry;
  onDelete: (id: number) => void;
};

export default function EntryItem({ entry, onDelete }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{entry.title}</Text>
      <Text style={styles.description}>{entry.description}</Text>
      <Text style={styles.date}>{entry.created_at}</Text>

      <TouchableOpacity onPress={() => onDelete(entry.id)}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#eee",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#7A1F2B",
  },
  description: {
    marginTop: 5,
    color: "#333",
  },
  date: {
    marginTop: 8,
    fontSize: 12,
    color: "#777",
  },
  delete: {
    marginTop: 10,
    color: "#B00020",
    fontWeight: "bold",
  },
});