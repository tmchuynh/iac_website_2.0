import Image from "next/image";

export default function CenteredSimple() {
  return (
    <div className="px-6 sm:px-6 lg:px-8 py-10 md:py-12">
      <div className="flex md:flex-row flex-col items-center gap-6 mx-auto max-w-2xl text-center">
        <Image
          src="/images/icons/extra/stars.png"
          alt="Star Icon"
          width={50}
          height={50}
        />
        <h3 className="font-[Caveat] font-bold text-lg text-tertiary md:text-xl lg:text-2xl xl:text-3xl">
          When children are given the freedom to imagine, incredible things
          happen.
        </h3>
        <Image
          src="/images/icons/extra/stars.png"
          alt="Star Icon"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
}
