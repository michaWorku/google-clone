import Image from "next/image";
import React from "react";

const Avatar: React.FC=() =>{
  return (
    <div className="rounded-full overflow-hidden flex flex-col justify-center align-center">
      <Image
        className="object-cover h-10 w-10"
        src="/me.jpg"
        alt="set your picture here"
        height={'10px'}
        width={'10px'}
      />
    </div>
  );
}

export default Avatar