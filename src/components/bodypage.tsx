import React from "react";
import { View, StyleSheet } from "react-native";
import Form from "../features/entries/form";
import List from "../features/entries/list";
import { useEntries } from "../features/entries/useEntries";

export default function BodyPage() {
  const { entries, addEntry, deleteEntry } = useEntries();

  return (
    <View style={styles.container}>
      <Form onAdd={addEntry} />
      <List entries={entries} onDelete={deleteEntry} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});