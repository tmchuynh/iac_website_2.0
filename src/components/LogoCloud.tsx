import { logos } from "@/lib/constants/list";

export default function LogoCloud() {
  return (
    <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center">
      {logos.map((logo, index) => (
        <div key={index} className="text-center">
          <img
            alt={logo.alt}
            src={logo.src}
            className="object-cover h-24 md:h-36 mx-auto"
          />
        </div>
      ))}
    </div>
  );
}
