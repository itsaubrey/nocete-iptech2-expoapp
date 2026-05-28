import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from "react-native";

type Props = {
  onAdd: (title: string, description: string) => void;
};

export default function EntryForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (!title.trim() || !description.trim()) {
      Alert.alert("Missing input", "Please fill in all fields.");
      return;
    }

    onAdd(title.trim(), description.trim());
    setTitle("");
    setDescription("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="What did you learn today?"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TextInput
        placeholder="Short explanation"
        value={description}
        onChangeText={setDescription}
        style={[styles.input, styles.textArea]}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add Learning</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 13,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  textArea: {
    height: 85,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#7A1F2B",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});