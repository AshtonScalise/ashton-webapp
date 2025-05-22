"use client";

import { useState, useEffect } from "react";

export function Duration({ start, end }: { start: Date; end?: Date }) {
  const [duration, setDuration] = useState("");

  useEffect(() => {
    const now = end ?? new Date();
    setDuration(calculateDuration(new Date(start), now));
  }, [start, end]);

  const calculateDuration = (start: Date, end: Date): string => {
    const years = end.getFullYear() - start.getFullYear();
    const months = end.getMonth() - start.getMonth();
    const totalMonths = years * 12 + months;
    const displayYears = Math.floor(totalMonths / 12);
    const displayMonths = totalMonths % 12;
    return `${displayYears} yrs ${displayMonths} mos`;
  };

  return <>{duration}</>;
}
