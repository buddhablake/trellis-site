"use client";

import { Container } from "./container";
import { AssessmentDialog } from "../forms/assessment-dialog";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-forest/80",
        isScrolled && "backdrop-blur-md shadow-sm"
      )}
    >
      <Container className="flex items-center justify-between h-20">
        <Link href="/" className="relative w-32 h-8">
          <Image
            src="/logo/Trellis_logo.png"
            alt="Trellis"
            fill
            className="object-contain"
            priority
          />
        </Link>
        <AssessmentDialog
          className="bg-cream text-forest hover:bg-cream/90"
          variant="default"
        />
      </Container>
    </header>
  );
}
