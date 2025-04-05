import { logos } from "@/lib/constants/list";

export default function LogoCloud() {
  return (
    <div className="mx-auto flex flex-wrap gap-5 justify-center items-center">
      {logos.map((logo, index) => (
        <img
          key={index}
          alt={logo.alt}
          src={logo.src}
          className="object-cover h-24 md:h-36"
        />
      ))}
    </div>
  );
}
