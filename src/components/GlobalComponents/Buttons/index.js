import React from "react";

import { Button } from "./styles";

export default function Buttons({ title, onClick }) {
  return <Button onClick={onClick}>{title}</Button>;
}
