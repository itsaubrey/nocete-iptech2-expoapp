import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { supabase } from "../../lib/supabase";

type Props = {
  onAdd: (text: string) => void;
};

export default function Form({ onAdd }: Props) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;

    onAdd(text);
    setText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="What did you learn today?"
        value={text}
        onChangeText={setText}
      />

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 18,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 14,
  },
  button: {
    backgroundColor: "#6b1e1e",
    paddingHorizontal: 18,
    justifyContent: "center",
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },
});