import React from "react";
import Link from "next/link";

function LinkWidget({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href}>
      <a className="text-sm text-gray-500 hover:underline dark:text-white">
        {text}
      </a>
    </Link>
  );
}

const BottomBar:React.FC = ()=> {
  return (
    <div className="bg-gray-100 flex flex-col dark:bg-gray-600">
      <div className="px-4 py-3 border-b border-gray-300">
        <span className="text-sm text-gray-400">Ethiopia</span>
      </div>

      <div className="flex flex-row flex-wrap justify-center md:justify-between items-center p-4 gap-4 ">
        {/* left group */}
        <div className="flex flex-row w-content justify-center flex-wrap space-x-4 gap-1">
          <LinkWidget href="/about" text="About" />
          <LinkWidget href="/ads" text="Advertisement" />
          <LinkWidget href="/business" text="Business" />
          <LinkWidget href="/how-searching-works" text="How searching works" />
        </div>

        {/* right group */}

        <div className="flex flex-row w-content justify-center flex-wrap space-x-4 gap-1">
          <LinkWidget href="/privacy" text="Privacy" />
          <LinkWidget href="/conditions" text="Conditions" />
          <LinkWidget href="/settings" text="Settings" />
        </div>
      </div>
    </div>
  );
}

export default BottomBar