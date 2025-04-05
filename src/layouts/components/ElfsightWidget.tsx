"use client";
import React, { useEffect } from "react";

const ElfsightWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;
    script.dataset.useServiceCore = "";
    document.body.appendChild(script);

    // Function to hide the unwanted anchor tag within the specific div
    const hideUnwantedAnchor = () => {
      const widgetDiv = document.querySelector(
        ".elfsight-app-1c8eae20-9708-4a7d-99eb-fef06c5988eb",
      );
      if (widgetDiv) {
        const anchors = widgetDiv.getElementsByTagName("a");
        for (let anchor of anchors) {
          if (getComputedStyle(anchor).color === "rgba(0, 0, 0, 0.5)") {
            anchor.style.display = "none";
          }
        }
      }
    };

    // Check for the unwanted anchor after the script loads
    script.onload = () => {
      hideUnwantedAnchor();
    };

    // Optional: Re-check periodically in case of delayed rendering
    const intervalId = setInterval(hideUnwantedAnchor, 1000);

    return () => {
      document.body.removeChild(script);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="section pt-8">
      <div className="container">
        <h2 className="text-[20px] leading-8 tracking-wide md:text-2xl font-black  mb-6 ">
          Don&rsquo;t Just Take Our Word For It.
        </h2>
        <div
          className="elfsight-app-1c8eae20-9708-4a7d-99eb-fef06c5988eb"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  );
};

export default ElfsightWidget;
