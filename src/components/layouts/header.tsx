"use client"

import Image from "next/image";
import { usePathname } from "next/navigation";

import { CustomButton01 } from "../partials/custom-buttons";

import Logo from "../../../public/favicons/logo-transparent.png";
import MenuIcon from "@/assets/icons/menu-icon.svg";
import { cn } from "@/lib/utils";

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
            <CustomButton01>Get Started</CustomButton01>

            <Image src={MenuIcon} alt="menu" className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
