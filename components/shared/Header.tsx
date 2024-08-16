"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  const [mobileMenu, setMobileMenu] = useState(false);
  console.log(session);

  return (
    <header className="w-full border-b p-5 flex items-center justify-between">
      <div>
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            width={130}
            height={30}
            alt="logo"
            priority
          />
        </Link>
      </div>

      {session?.user ? (
        <>
          <ul className="hidden items-center justify-center md:gap-10 md:flex lg:gap-16 text-gray-600 ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Create Event</Link>
            </li>
            <li>
              <Link href="/">My Profile</Link>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <div className="relative group cursor-pointer">
              <Image
                src="/assets/images/profile.png"
                width={32}
                height={32}
                alt="logo"
                priority
              />
              <div className="absolute border hidden group-hover:block border-gray-200 px-3 space-y-2 text-gray-600 py-2 rounded-xl bg-white w-40 right-0 top-8">
                <Link href="/profile">Profile</Link>
                <div onClick={() => signOut()}>Log out</div>
              </div>
            </div>
            <div>
              <Image
                onClick={() => setMobileMenu((prev) => !prev)}
                src="/assets/icons/menu.svg"
                width={30}
                height={30}
                alt="menu"
                className="cursor-pointer"
              />
            </div>
          </div>
          <div
            className={` ${
              mobileMenu ? "translate-x-0" : "translate-x-full"
            } fixed top-0 bottom-0 right-0 transform transition duration-200 ease-linear  bg-red-900 w-full`}
          >
            <div className="bg-white w-2/3 h-full right-0 "></div>
          </div>
        </>
      ) : (
        <Button
          asChild
          className="bg-indigo-700 rounded-full transition-all hover:bg-indigo-500"
        >
          <Link href="/login">Sign In</Link>
        </Button>
      )}
    </header>
  );
};

export default Header;
