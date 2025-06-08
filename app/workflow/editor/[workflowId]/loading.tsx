import React from "react";
import Image from "next/image";

function loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Image
        src="/loading.gif"
        alt="loading"
        width={72}
        height={72}
        unoptimized
      />
    </div>
  );
}

export default loading;
