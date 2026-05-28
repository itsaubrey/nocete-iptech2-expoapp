import React from "react";
import { View, StyleSheet } from "react-native";
import EntryForm from "../features/entries/form";
import EntryList from "../features/entries/list";
import useEntries from "../features/entries/useEntries";


export default function BodyPage() {
  const { entries, addEntry, deleteEntry } = useEntries();

  return (
    <View style={styles.container}>
      <EntryForm onAdd={addEntry} />
      <EntryList entries={entries} onDelete={(id) => deleteEntry(Number(id))} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F7F7F7",
  },
});