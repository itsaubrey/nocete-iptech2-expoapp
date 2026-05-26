import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import { Entry } from "./type";
import Item from "./item";
import { supabase } from "../../lib/supabase";

type Props = {
  entries: Entry[];
  onDelete: (id: string) => void;
};

export default function List({ entries, onDelete }: Props) {
  return (
    <FlatList
      data={entries}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={
        <Text style={styles.empty}>No lessons added yet.</Text>
      }
      renderItem={({ item }) => (
        <Item entry={item} onDelete={onDelete} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  empty: {
    textAlign: "center",
    color: "#999",
    marginTop: 30,
  },
});