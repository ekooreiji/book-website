/** @jsxImportSource react */

import { useEffect } from "react";
import { MenuController } from "../Menu.module.js";

export default function MenuClient({ listClassMenus }) {
  useEffect(() => {
    console.log(listClassMenus)
    MenuController(listClassMenus);
  }, []);
  return null;
}
