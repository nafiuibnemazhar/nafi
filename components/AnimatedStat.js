"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AnimatedStat({ value }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = String(value).match(/^(\d+)(.*)$/);
    if (!match) {
      el.textContent = value;
      return;
    }
    const [, numStr, suffix] = match;
    const target = parseInt(numStr, 10);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = value;
      return;
    }

    const counter = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        val: target,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => {
          el.textContent = Math.round(counter.val) + suffix;
        },
      });
    });

    return () => ctx.revert();
  }, [value]);

  return (
    <div className="stat-value" ref={ref}>
      0
    </div>
  );
}
