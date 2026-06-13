"use client";
import { useEffect } from "react";
import initSite from "@/lib/initSite";

export default function SiteFx() {
  useEffect(() => {
    const cleanup = initSite();
    return cleanup;
  }, []);
  return null;
}
