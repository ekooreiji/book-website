/** @jsxImportSource react */

import { useEffect } from "react";
import { initDropdown } from "../Header.module.js";

export default function HeaderClient() {
  useEffect(() => {
    initDropdown("categories_header");
  }, []);
  return null;
}
