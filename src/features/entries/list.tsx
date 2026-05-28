import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import EntryItem from "./item";
import { Entry } from "./type";

type Props = {
  entries: Entry[];
  onDelete: (id: number) => void;
};

export default function EntryList({ entries, onDelete }: Props) {
  if (entries.length === 0) {
    return <Text style={styles.empty}>No learnings added yet.</Text>;
  }

  return (
    <FlatList
      data={entries}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <EntryItem entry={item} onDelete={onDelete} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  empty: {
    textAlign: "center",
    color: "#777",
    marginTop: 25,
  },
});