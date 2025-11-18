import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="pt-[60px] flex flex-col items-center">
      <div className="flex gap-5">
        <Image src="/images/blur.svg" alt="gradient1" height={8} width={8} />
        <h5 className="heading-5 font-regular text-[#959EFE]">
          Simple. Intelligent. Autonomous
        </h5>
        <Image src="/images/blur.svg" alt="gradient1" height={8} width={8} />
      </div>
      <div></div>
    </div>
  );
}
