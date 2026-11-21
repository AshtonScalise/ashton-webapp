"use client";

import { useEffect } from "react";

/**
 * Page-wide motion: fades `.reveal` elements in as they scroll into view,
 * moves the spotlight glow with the pointer, and highlights the nav link for
 * the section on screen. Everything degrades to a static page without JS or
 * with reduced motion.
 */
export function Effects() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    let revealObserver: IntersectionObserver | undefined;
    if (reduce || !("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("in"));
    } else {
      revealObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              revealObserver?.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );
      reveals.forEach((el) => revealObserver?.observe(el));
    }

    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-links a"));
    const sections = links
      .map((a) => document.querySelector<HTMLElement>(a.getAttribute("href") || ""))
      .filter((s): s is HTMLElement => !!s);
    const navObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = `#${entry.target.id}`;
          links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === id));
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => navObserver.observe(s));

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        root.style.setProperty("--mx", `${e.clientX}px`);
        root.style.setProperty("--my", `${e.clientY}px`);
      });
    };
    if (!reduce) window.addEventListener("pointermove", onMove, { passive: true });

    const onScroll = () => root.classList.toggle("scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      revealObserver?.disconnect();
      navObserver.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
