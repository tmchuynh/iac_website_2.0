"use client";

import Image from "next/image";

export default function ResponsiveLogo({ className }: { className?: string }) {
  return (
    <div className={`md:max-w-lg 2xl:max-w-none mx-auto ${className}`}>
      <Image
        alt="IAC Logo"
        src="/images/purple_logo.png"
        className="h-40 xl:h-52 w-auto object-contain"
        priority={true}
        width={3600}
        height={1200}
      />
    </div>
  );
}
