import React from "react";
import Login from "./login";

type Props = {
  onLogin: (email: string) => void;
};

export default function LoginScreen({ onLogin }: Props) {
  return <Login onLogin={onLogin} />;
}