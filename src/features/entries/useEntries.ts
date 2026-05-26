import { useState } from "react";
import { Entry } from "./type";
import { supabase } from "../../lib/supabase";

export function useEntries() {
  const [entries, setEntries] = useState<Entry[]>([]);

  const addEntry = (text: string) => {
    const newEntry: Entry = {
      id: Date.now().toString(),
      text,
    };

    setEntries([newEntry, ...entries]);
  };

  const deleteEntry = (id: string) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return {
    entries,
    addEntry,
    deleteEntry,
  };
}