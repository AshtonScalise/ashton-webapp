"use client";

import { useState, useEffect } from "react";

export function Duration({
  start,
  end,
}: {
  start: Date | string;
  end?: Date | string;
}) {
  const [duration, setDuration] = useState("");

  useEffect(() => {
    const updateDuration = () => {
      const now = end ? new Date(end) : new Date();
      setDuration(calculateDuration(new Date(start), now));
    };

    updateDuration();

    if (end) {
      return;
    }

    const intervalId = setInterval(updateDuration, 1000 * 60 * 60 * 24);
    return () => clearInterval(intervalId);
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
