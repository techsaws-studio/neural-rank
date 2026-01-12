"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { Button } from "../ui/button";

import { cn } from "@/lib/utils";

import Logo from "../../../public/favicons/logo-transparent.png";
import MenuIcon from "@/assets/icons/menu-icon.svg";

function Header() {
  const pathname = usePathname();

  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 max-md:backdrop-blur">
      <div className="layout-standard">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur">
          <div>
            <Image
              src={Logo}
              alt="Neural Rank – AI-Powered SEO Platform for Real Rankings"
              className="w-[50px] h-auto"
            />
          </div>

          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a
                href={"/"}
                className={cn(
                  pathname === "/"
                    ? "text-white"
                    : "text-white/70 hover:text-white",
                  "transition uppercase font-heading"
                )}
              >
                Home
              </a>
              <a
                href={"/solutions"}
                className={cn(
                  pathname === "/solutions"
                    ? "text-white"
                    : "text-white/70 hover:text-white",
                  "transition uppercase font-heading"
                )}
              >
                Solutions
              </a>
              <a
                href={"/about"}
                className={cn(
                  pathname === "/about"
                    ? "text-white"
                    : "text-white/70 hover:text-white",
                  "transition uppercase font-heading"
                )}
              >
                About
              </a>
              <a
                href={"/pricings"}
                className={cn(
                  pathname === "/pricings"
                    ? "text-white"
                    : "text-white/70 hover:text-white",
                  "transition uppercase font-heading"
                )}
              >
                Pricings
              </a>
            </nav>
          </div>

          <div className="flex gap-4 items-center">
            <Button className="py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] relative">
              <div className="absolute inset-0">
                <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                <div className="rounded-lg border border-white/40 absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent)]" />
                <div className="absolute inset-0 shadow-[0_0_10px_rgba(140,69,255,.7)_inset] rounded-lg" />
              </div>
              <span>Get Started</span>
            </Button>

            <Image src={MenuIcon} alt="menu" className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
