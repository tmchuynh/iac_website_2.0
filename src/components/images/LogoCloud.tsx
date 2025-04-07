import Image from "next/image";
import { logos } from "@/lib/constants/list";

export default function LogoCloud() {
  return (
    <div className="justify-center items-center gap-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">
      {logos.map((logo, index) => (
        <div key={index} className="text-center">
          <Image
            alt={logo.alt}
            src={logo.src}
            width={144}
            height={144}
            className="mx-auto h-24 md:h-36 object-cover"
          />
        </div>
      ))}
    </div>
  );
}
