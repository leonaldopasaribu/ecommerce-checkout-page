import React from "react";

import { Button } from "./styles";

export default function Buttons({ label, onClick, disabled }) {
  return <Button onClick={!disabled ? onClick : () => {}}>{label}</Button>;
}
