import { cn } from "@/lib/utils";
import Image from "next/image";

export default function FadedImage({
  imageSrc,
  className,
}: {
  imageSrc: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "lg:block relative hidden pt-16 lg:pt-10 overflow-hidden",
        className
      )}
    >
      <div className="mx-auto">
        <Image
          alt=""
          src={imageSrc}
          className="shadow-2xl mb-[-12%] ring-1 ring-gray-900/10 rounded-xl aspect-video object-cover"
          width={3600}
          height={1200}
        />
        <div aria-hidden="true" className="relative">
          <div className="absolute bottom-0 -inset-x-20 bg-linear-to-t from-background pt-[27%]" />
        </div>
      </div>
    </div>
  );
}
