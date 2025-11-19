"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/16/solid";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Product" },
  { href: "/articles", label: "Article" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  // Animation variants
  const sidebarVariants = {
    closed: { x: "100%" },
    open: { x: 0 },
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  const linkContainerVariants = {
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const linkItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };
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

        {/* Desktop Get Started Button */}
        <div className="hidden lg:flex items-center lg:flex-1 lg:justify-end gap-5">
          <Link href="/coming-soon" className="text-white heading-5 underline cursor-pointer hover:text-white">
            Signin
          </Link>
          <div
            className="rounded-full p-0.5"
            style={{
              background:
                "linear-gradient(180deg, #4D4D4D 0%, #FFF 49.5%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            <Link
              href="/contact"
              className="inline-block text-[16px] font-normal text-white py-2 px-5 bg-[#00031C] rounded-full"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button (Burger) */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 z-50 bg-black/50 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              key="sidebar"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-[#00031C] p-6 overflow-y-auto lg:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="-m-1.5 p-1.5"
                  onClick={() => setMobileMenuOpen(false)}
                >
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
              <motion.div
                variants={linkContainerVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="mt-8 space-y-4"
              >
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div key={link.href} variants={linkItemVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block text-[18px] font-normal py-2 ${
                          isActive ? "text-white" : "text-[#73799B]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Mobile Signin and Get Started Buttons */}
              <motion.div
                variants={linkContainerVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="mt-8 space-y-4"
              >
                {/* Signin Button */}
                <motion.div variants={linkItemVariants}>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#73799B] text-[18px] font-normal underline cursor-pointer hover:text-white w-full text-left py-2"
                  >
                    Signin
                  </button>
                </motion.div>

                {/* Get Started Button */}
                <motion.div variants={linkItemVariants}>
                  <div
                    className="rounded-full p-0.5 inline-block w-full"
                    style={{
                      background:
                        "linear-gradient(180deg, #4D4D4D 0%, #FFF 49.5%, rgba(255, 255, 255, 0) 100%)",
                    }}
                  >
                    <Link
                      href="#"
                      className="inline-block text-[16px] font-normal text-white py-2 px-6 bg-[#00031C] rounded-full w-full text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
