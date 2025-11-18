"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/16/solid";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/articles", label: "Article" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  return (
    <header className="">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between p-6 lg:py-[26px] lg:px-20">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image src="/images/logo.svg" width={132} height={40} alt="logo" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative text-[16px] font-normal transition-colors duration-300
                  ${isActive ? "text-white" : "text-[#73799B]"}
                  hover:text-white
                  after:absolute after:-bottom-1 after:left-0 after:h-0.5 
                  after:w-0 after:bg-linear-to-r after:from-[#000529] after:via-[#4A56FF] after:to-[#000529] 
                  hover:after:w-full after:transition-all after:duration-300
                  ${isActive ? "after:w-full" : ""}
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Get Started Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div
            className="rounded-full p-0.5"
            style={{
              background:
                "linear-gradient(180deg, #4D4D4D 0%, #FFF 49.5%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            <Link
              href="#"
              className="inline-block text-[16px] font-normal text-white py-2 px-5 bg-[#00031C] rounded-full"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/50" />

        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-[#00031C] p-6 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                src="/images/logo.svg"
                width={132}
                height={40}
                alt="logo"
              />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Links */}
          <div className="mt-8 space-y-4">
            <Link
              href="/"
              className="block text-[18px] font-normal text-[#73799B] py-2"
            >
              Home
            </Link>
            <Link
              href="#"
              className="block text-[18px] font-normal text-[#73799B] py-2"
            >
              About
            </Link>
            <Link
              href="#"
              className="block text-[18px] font-normal text-[#73799B] py-2"
            >
              Article
            </Link>
            <Link
              href="#"
              className="block text-[18px] font-normal text-[#73799B] py-2"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="block text-[18px] font-normal text-[#73799B] py-2"
            >
              FAQ
            </Link>
            <Link
              href="#"
              className="block text-[18px] font-normal text-[#73799B] py-2"
            >
              Contact
            </Link>
          </div>

          {/* Get Started Button */}
          <div className="mt-8">
            <div
              className="rounded-full p-0.5 inline-block"
              style={{
                background:
                  "linear-gradient(180deg, #4D4D4D 0%, #FFF 49.5%, rgba(255, 255, 255, 0) 100%)",
              }}
            >
              <Link
                href="#"
                className="inline-block text-[16px] font-normal text-white py-2 px-6 bg-[#00031C] rounded-full"
              >
                Get Started
              </Link>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
