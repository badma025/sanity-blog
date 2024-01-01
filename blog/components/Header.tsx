import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/favicon.ico"
            width={50}
            className="rounded-full"
            height={50}
            alt="logo-triangle"
          />
        </Link>
        <h1 className="text-[#A7CECB] font-bold">badma025</h1>
      </div>
      <div>
        <Link href="/" className=" font-bold px-5 py-3 text-sm md:text-base hover:animate-bounce text-[#A7CECB] flex items-center rounded text-center">
          sign up to the university of code
        </Link>
      </div>
    </header>
  );
}

export default Header;
