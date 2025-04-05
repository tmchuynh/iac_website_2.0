import React, { FC } from "react";

interface HeroProps {
  imageSrc: string;
}

function titleCase(s: string) {
  return s
    .toLowerCase()
    .split(" ")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const HeroSection: FC<HeroProps> = ({ imageSrc }) => {
  const imageArray = imageSrc.split("/");
  const imageTitle = imageArray[imageArray.length - 1].split(".");

  return (
    <section className="relative overflow-hidden">
      <div className="relative w-full h-[30em]">
        <img
          className="object-cover object-center w-full h-full"
          src={imageSrc}
          alt={titleCase(imageTitle[0]) + " Image"}
        />
      </div>
    </section>
  );
};

export default HeroSection;
