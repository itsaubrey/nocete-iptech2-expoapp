import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { supabase } from "../../../App";
import { Entry } from "./type";

export default function useEntries() {
  const [entries, setEntries] = useState<Entry[]>([]);

  const fetchEntries = async () => {
    const { data: userData } = await supabase.auth.getUser();

    if (!userData.user) return;

    const { data, error } = await supabase
      .from("learned_entries")
      .select("*")
      .eq("user_id", userData.user.id)
      .order("created_at", { ascending: false });

    if (error) {
      Alert.alert("Fetch error", error.message);
      return;
    }

    setEntries(data || []);
  };

  const addEntry = async (title: string, description: string) => {
    const { data: userData } = await supabase.auth.getUser();

    if (!userData.user) {
      Alert.alert("Error", "You must be logged in.");
      return;
    }

    const { error } = await supabase.from("learned_entries").insert([
      {
        user_id: userData.user.id,
        title,
        description,
      },
    ]);

    if (error) {
      Alert.alert("Insert error", error.message);
      return;
    }

    fetchEntries();
  };

  const deleteEntry = async (id: number) => {
    const { error } = await supabase
      .from("learned_entries")
      .delete()
      .eq("id", id);

    if (error) {
      Alert.alert("Delete error", error.message);
      return;
    }

    fetchEntries();
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return { entries, addEntry, deleteEntry };
}