"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-[1440px] items-center justify-between p-6 lg:py-[26px] lg:px-20"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image src="/images/logo.svg" width={132} height={40} alt="logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-[16px] leading-5 font-normal text-[#73799B]"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-[16px] leading-5 font-normal text-[#73799B]"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-[16px] leading-5 font-normal text-[#73799B]"
          >
            Article
          </Link>
          <Link
            href="#"
            className="text-[16px] leading-5 font-normal text-[#73799B]"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-[16px] leading-5 font-normal text-[#73799B]"
          >
            FAQ
          </Link>
          <Link
            href="#"
            className="text-[16px] leading-5 font-normal text-[#73799B]"
          >
            Contact
          </Link>
        </PopoverGroup>
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
