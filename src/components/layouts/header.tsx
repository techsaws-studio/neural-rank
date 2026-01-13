"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Button } from "../ui/button";

import { cn } from "@/lib/utils";

import Logo from "../../../public/favicons/logo-transparent.png";
import MenuIcon from "../../../public/icons/menu-icon.svg";

function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full fixed top-4 left-0 right-0 z-[9999]">
      <div className="flex h-[60px] justify-between items-center border border-border px-4 md:px-8 rounded-full md:w-[700px] mx-auto max-md:layout-standard backdrop-blur">
        <Link href={"/"} passHref>
          <Image
            src={Logo}
            alt="Neural Rank – AI-Powered SEO Platform for Real Rankings"
            className="w-[50px] h-auto cursor-pointer hover:scale-110 animation-standard"
          />
        </Link>

        <div className="hidden md:block">
          <nav className="flex gap-6 text-sm font-medium">
            <Link
              href={"/"}
              className={cn(
                pathname === "/"
                  ? "text-heading"
                  : "text-sub-heading hover:text-heading",
                "transition uppercase font-heading"
              )}
            >
              Home
            </Link>

            <Link
              href={"/solutions"}
              className={cn(
                pathname === "/solutions"
                  ? "text-heading"
                  : "text-sub-heading hover:text-heading",
                "transition uppercase font-heading"
              )}
            >
              Solutions
            </Link>

            <Link
              href={"/about"}
              className={cn(
                pathname === "/about"
                  ? "text-heading"
                  : "text-sub-heading hover:text-heading",
                "transition uppercase font-heading"
              )}
            >
              About
            </Link>

            <Link
              href={"/pricings"}
              className={cn(
                pathname === "/pricings"
                  ? "text-heading"
                  : "text-sub-heading hover:text-heading",
                "transition uppercase font-heading"
              )}
            >
              Pricings
            </Link>
          </nav>
        </div>

        <div className="flex gap-4 items-center">
          <Button className="py-2 px-3 rounded-lg font-normal text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] relative">
            <div className="absolute inset-0">
              <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
              <div className="rounded-lg border border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent)]" />
              <div className="absolute inset-0 shadow-[0_0_10px_rgba(140,69,255,.7)_inset] rounded-lg" />
            </div>
            <span>Get Started</span>
          </Button>

          <Image src={MenuIcon} alt="menu" className="md:hidden h-auto w-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
