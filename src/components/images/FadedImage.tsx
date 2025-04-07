import Image from "next/image";

export default function FadedImage({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="relative pt-16 lg:pt-10 overflow-hidden">
      <div className="mx-auto px-6 lg:px-8">
        <Image
          alt=""
          src={imageSrc}
          className="shadow-2xl mb-[-12%] rounded-xl ring-1 ring-gray-900/10 aspect-video object-cover"
          width={3600}
          height={1200}
        />
        <div aria-hidden="true" className="relative">
          <div className="bottom-0 absolute -inset-x-20 bg-linear-to-t from-background pt-[27%]" />
        </div>
      </div>
    </div>
  );
}
