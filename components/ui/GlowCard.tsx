"use client";

import { useEffect, ReactNode } from "react";

// Props interface
interface GlowCardProps {
  children: ReactNode;
  identifier: string | number;
}

const GlowCard: React.FC<GlowCardProps> = ({ children, identifier }) => {
  useEffect(() => {
    const container = document.querySelector<HTMLDivElement>(
      `.glow-container-${identifier}`
    );
    const cards = document.querySelectorAll<HTMLDivElement>(
      `.glow-card-${identifier}`
    );

    if (!container || !cards) return;

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event: PointerEvent) => {
      cards.forEach((card) => {
        const cardBounds = card.getBoundingClientRect();

        const isInside =
          event.x > cardBounds.left - CONFIG.proximity &&
          event.x < cardBounds.left + cardBounds.width + CONFIG.proximity &&
          event.y > cardBounds.top - CONFIG.proximity &&
          event.y < cardBounds.top + cardBounds.height + CONFIG.proximity;

        card.style.setProperty("--active", isInside ? "1" : `${CONFIG.opacity}`);

        const cardCenterX = cardBounds.left + cardBounds.width * 0.5;
        const cardCenterY = cardBounds.top + cardBounds.height * 0.5;

        let angle = (Math.atan2(event.y - cardCenterY, event.x - cardCenterX) * 180) / Math.PI;
        angle = angle < 0 ? angle + 360 : angle;

        card.style.setProperty("--start", `${angle + 90}`);
      });
    };

    const RESTYLE = () => {
      container.style.setProperty("--gap", `${CONFIG.gap}`);
      container.style.setProperty("--blur", `${CONFIG.blur}`);
      container.style.setProperty("--spread", `${CONFIG.spread}`);
      container.style.setProperty("--direction", CONFIG.vertical ? "column" : "row");
    };

    RESTYLE();
    document.body.addEventListener("pointermove", UPDATE);

    // Cleanup
    return () => {
      document.body.removeEventListener("pointermove", UPDATE);
    };
  }, [identifier]);

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article
        className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}
      >
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
