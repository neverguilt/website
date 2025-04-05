"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Logo = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust breakpoint as needed
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logoSrc = isSmallScreen ? "/images/logo-small.png" : "/images/logo.png";
  const logoWidth = isSmallScreen ? 76 : 300;
  const logoHeight = isSmallScreen ? 38 : 150;
  const maxWidth = isSmallScreen ? "76px" : "300px";

  return (
    <Link href="/" className="navbar-brand inline-block">
      <Image
        src={logoSrc}
        alt="Logo"
        width={logoWidth}
        height={logoWidth}
        priority
        style={{
          width: "100%",
          height: "auto",
          maxWidth, // Adjust as needed
        }}
      />
    </Link>
  );
};

export default Logo;
