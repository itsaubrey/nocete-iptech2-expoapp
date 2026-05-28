import React from "react";
import LoginScreen from "./loginScreen";

type Props = {
  onCreateAccount: () => void;
};

export default function Login({ onCreateAccount }: Props) {
  return <LoginScreen onCreateAccount={onCreateAccount} />;
}