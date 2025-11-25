"use client";

import { HeroUIProvider } from "@heroui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function HeroProvider({ children }: Props) {
  return <HeroUIProvider locale="fa">{children}</HeroUIProvider>;
}
