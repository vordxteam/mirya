"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { categoryApi } from "@/app/api/academy";
import { motion, AnimatePresence } from "framer-motion";
import {
  XMarkIcon,
  Bars3Icon,
  ChevronDownIcon,
} from "@heroicons/react/16/solid";
import { useLayoutTranslation } from "@/app/hooks/useLayoutTranslation";

const languages = [
  { code: "en", label: "English", flag: "/images/british.png" },
  { code: "de", label: "German", flag: "/images/german.png" },
  { code: "tr", label: "Turkish", flag: "/images/turkish.png" },
] as const;

type CommunityData = {
  label: string;
  slug: string;
  href: string;
};

// These will now come from translation
// const resourcesItems = [
//   { label: "Academy", href: "/articles" },
//   { label: "Community", href: "" },
//   { label: "Live Sessions", href: "/live-session" },
// ];

// const partnersItems = [
//   { label: "Become an Expert", href: "/become-expert" },
//   { label: "Hire an Expert", href: "/hire-expert" },
// ];

export default function Header() {
  const { t, i18n } = useLayoutTranslation();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [partnersOpen, setPartnersOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const mobileResourcesRef = useRef<HTMLDivElement>(null);
  const mobilePartnersRef = useRef<HTMLDivElement>(null);

  const [communityData, setCommunityData] = useState<CommunityData | null>(
    null,
  );

  const apiLangMap: Record<string, string> = {
    en: "english",
    tr: "turkish",
    de: "german",
  };

  // Get translated dropdown items
  const resourcesItems = (t("header.resourcesDropdown", {
    returnObjects: true,
  }) as Array<{
    label: string;
    href: string;
  }>) || [
    { label: "Academy", href: "/articles" },
    { label: "Community", href: "" },
    { label: "Live Sessions", href: "/live-session" },
  ];

  const partnersItems = (t("header.partnersDropdown", {
    returnObjects: true,
  }) as Array<{
    label: string;
    href: string;
  }>) || [
    { label: "Become an Expert", href: "/become-expert" },
    { label: "Hire an Expert", href: "/hire-expert" },
  ];

  // Get current language object
  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];
  const isClient = typeof window !== "undefined";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 5);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const currentLang = apiLangMap[i18n.language] || "english";
    categoryApi
      .getAll(currentLang)
      .then((res) => {
        const rawData = res.data?.data || [];
        const communityItem = rawData.find(
          (item) => item.name?.toLowerCase() === "community hub",
        );

        if (communityItem) {
          setCommunityData({
            label: "Community",
            slug: communityItem.slug,
            href: `/articles/academy/${communityItem.slug}`,
          });
        } else {
          console.log("Community Hub not found in API response");
          // Set a fallback or keep as null - we'll handle this in the UI
        }
      })
      .catch((err) => console.error("Failed to fetch community data:", err));
  }, [i18n.language]);

  // Handle community click
  const handleCommunityClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (communityData) {
      router.push(communityData.href);
    }
    setResourcesOpen(false);
    setMobileMenuOpen(false);
  };

  // Alternative method for mobile - navigate even without communityData
  const handleMobileCommunityClick = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();

    // If we have communityData, use it
    if (communityData) {
      router.push(communityData.href);
    } else {
    
      router.push("/community");
     
    }

    setResourcesOpen(false);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (open && !target.closest(".language-selector")) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        resourcesOpen &&
        resourcesRef.current &&
        !resourcesRef.current.contains(target) &&
        (!mobileResourcesRef.current || !mobileResourcesRef.current.contains(target))
      ) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [resourcesOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        partnersOpen &&
        partnersRef.current &&
        !partnersRef.current.contains(target) &&
        (!mobilePartnersRef.current || !mobilePartnersRef.current.contains(target))
      ) {
        setPartnersOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [partnersOpen]);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    if (typeof window !== "undefined") localStorage.setItem("language", code);
    setOpen(false);
  };

  // Translated nav links from your hook
  const navLinks = t("header.links", { returnObjects: true }) as Array<{
    href: string;
    name: string;
  }>;

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

  const dropdownVariants = {
    closed: { opacity: 0, y: -8, scale: 0.97 },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.18, ease: "easeOut" as const },
    },
    exit: {
      opacity: 0,
      y: -6,
      scale: 0.97,
      transition: { duration: 0.13, ease: "easeIn" as const },
    },
  };

  return (
    <motion.header
      animate={{
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        backgroundColor: scrolled ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed w-full top-0 z-500"
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between p-6 lg:py-[26px] xl:px-20 relative z-500">
        {/* Logo */}
        <div className="flex">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image src="/images/logo.svg" width={132} height={40} alt="logo" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex lg:gap-x-5 items-center">
          {navLinks.map((link) => {
            // Check if this is the "Academy" link (which becomes the Resources dropdown)
            const isResources =
              link.href === "/resources" || link.href === "/articles";
            link.name?.toLowerCase() === "academy" ||
              link.href === "/resources" ||
              link.href === "/articles";

            if (isResources) {
              return (
                <div key={link.href} ref={resourcesRef} className="relative">
                  {/* Resources trigger button */}
                  <button
                    onClick={() => setResourcesOpen((prev) => !prev)}
                    className={`
                      relative text-[16px] transition-colors duration-300 flex items-center cursor-pointer gap-[6px]
                      ${
                        resourcesOpen ||
                        pathname.startsWith("/resources") ||
                        pathname.startsWith("/articles") ||
                        pathname.startsWith("/academy") ||
                        pathname.startsWith("/community") ||
                        pathname.startsWith("/live-sessions")
                          ? "text-white font-medium"
                          : "text-[#73799B] font-normal"
                      }
                      hover:text-white
                      after:absolute after:-bottom-1 after:left-0 after:h-0.5
                      after:w-0 after:bg-linear-to-r after:from-[#000529] after:via-[#4A56FF] after:to-[#000529]
                      hover:after:w-full after:transition-all after:duration-300
                    `}
                  >
                    {link.name}
                    <motion.span
                      animate={{ rotate: resourcesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex"
                    >
                      <ChevronDownIcon className="w-4 h-4 text-current" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {resourcesOpen && (
                      <motion.div
                        key="resources-dropdown"
                        variants={dropdownVariants}
                        initial="closed"
                        animate="open"
                        exit="exit"
                        className="absolute top-[calc(100%+12px)] -left-17 min-w-[176px] z-50 overflow-hidden"
                        style={{
                          borderRadius: "8px",
                          background:
                            "linear-gradient(258deg, #00031C 0%, #121A4E 135.06%) padding-box, " +
                            "linear-gradient(270deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%) border-box",
                          border: "1px solid transparent",
                        }}
                      >
                        {resourcesItems.map((item, idx) => {
                          // Special handling for Community item
                          if (
                            item.label === "Community" ||
                            item.label === t("header.community", "Community")
                          ) {
                            return (
                              <button
                                key={item.label}
                                onClick={handleCommunityClick}
                                disabled={!communityData}
                                className={`
                                  w-full text-left block px-4 py-[14px] text-[12px] font-medium leading-4 text-[#fff] transition-colors cursor-pointer duration-150
                                  hover:text-white hover:bg-white/5
                                  ${!communityData ? "opacity-50 cursor-not-allowed" : ""}
                                  ${
                                    idx !== resourcesItems.length - 1
                                      ? "border-b border-[#343754]"
                                      : ""
                                  }
                                  ${communityData && pathname === communityData.href ? "text-white font-medium" : ""}
                                `}
                              >
                                {item.label}
                              </button>
                            );
                          }

                          // Regular Link for other items
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setResourcesOpen(false)}
                              className={`
                                block px-4 py-[14px] text-[12px] font-medium leading-4 text-[#fff] transition-colors duration-150
                                hover:text-white hover:bg-white/5
                                ${
                                  idx !== resourcesItems.length - 1
                                    ? "border-b border-[#343754]"
                                    : ""
                                }
                                ${pathname === item.href ? "text-white font-medium" : ""}
                              `}
                            >
                              {item.label}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            // Check if this is the "Partners" nav link
            const isPartners = link.href === "/partners";
            // link.href === "/partners";

            if (isPartners) {
              return (
                <div key={link.href} ref={partnersRef} className="relative">
                  <button
                    onClick={() => setPartnersOpen((prev) => !prev)}
                    className={`
                      relative text-[16px] transition-colors duration-300 flex cursor-pointer items-center gap-[6px]
                      ${
                        partnersOpen ||
                        pathname.startsWith("/partners") ||
                        pathname.startsWith("/become-an-expert") ||
                        pathname.startsWith("/hire-an-expert")
                          ? "text-white font-medium"
                          : "text-[#73799B] font-normal"
                      }
                      hover:text-white
                      after:absolute after:-bottom-1 after:left-0 after:h-0.5
                      after:w-0 after:bg-linear-to-r after:from-[#000529] after:via-[#4A56FF] after:to-[#000529]
                      hover:after:w-full after:transition-all after:duration-300
                    `}
                  >
                    {link.name}
                    <motion.span
                      animate={{ rotate: partnersOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex"
                    >
                      <ChevronDownIcon className="w-4 h-4 text-current" />
                    </motion.span>
                  </button>

                  {/* Partners Dropdown */}
                  <AnimatePresence>
                    {partnersOpen && (
                      <motion.div
                        key="partners-dropdown"
                        variants={dropdownVariants}
                        initial="closed"
                        animate="open"
                        exit="exit"
                        className="absolute top-[calc(100%+12px)] -left-17 min-w-[176px] z-50 overflow-hidden"
                        style={{
                          borderRadius: "8px",
                          background:
                            "linear-gradient(258deg, #00031C 0%, #121A4E 135.06%) padding-box, " +
                            "linear-gradient(270deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%) border-box",
                          border: "1px solid transparent",
                        }}
                      >
                        {partnersItems.map((item, idx) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setPartnersOpen(false)}
                            className={`
                              block px-4 py-[14px] text-[12px] font-medium leading-4 text-[#fff] transition-colors duration-150
                              hover:text-white hover:bg-white/5
                              ${
                                idx !== partnersItems.length - 1
                                  ? "border-b border-[#343754]"
                                  : ""
                              }
                              ${
                                pathname === item.href
                                  ? "text-white font-medium"
                                  : ""
                              }
                            `}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            // Default nav link rendering
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative text-[16px] leading-5 transition-colors duration-300
                  ${
                    isActive
                      ? "text-white font-normal"
                      : "text-[#73799B] font-normal"
                  }
                  hover:text-white
                  after:absolute after:-bottom-1 after:left-0 after:h-0.5
                  after:w-0 after:bg-linear-to-r after:from-[#000529] after:via-[#4A56FF] after:to-[#000529]
                  hover:after:w-full after:transition-all after:duration-300
                  ${isActive ? "after:w-full" : ""}
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center lg:justify-end gap-5">
          {isClient ? (
            <div className="relative text-white language-selector">
              <div
                onClick={() => setOpen(!open)}
                className="rounded-lg cursor-pointer flex items-center gap-1 justify-between"
              >
                <span className="flex items-center gap-2 heading-6">
                  <Image
                    src={currentLang.flag}
                    alt={currentLang.label}
                    width={20}
                    height={14}
                    className="rounded-sm"
                  />
                  {currentLang.label}
                </span>
                <Image
                  src="/images/dropdown.svg"
                  alt="dropdown"
                  width={20}
                  height={10}
                />
              </div>

              {open && (
                <div
                  className="absolute top-full left-0 w-[150px] mt-1 bg-[#050925] border border-transparent rounded-lg overflow-hidden z-50"
                  style={{
                    background:
                      "linear-gradient(#050925, #050925) padding-box, conic-gradient(from 0deg at 50% 50%, #00031c, #8ea0e0, #00031c) border-box",
                    border: "1px solid transparent",
                  }}
                >
                  {languages.map((item) => (
                    <div
                      key={item.code}
                      onClick={(e) => {
                        e.stopPropagation();
                        changeLanguage(item.code);
                      }}
                      className="px-3 py-2 flex items-center heading-7 font-normal gap-2 cursor-pointer border-b border-[#FFFFFF1F] last:border-none hover:bg-white/10"
                    >
                      <Image
                        src={item.flag}
                        alt={item.label}
                        width={16}
                        height={11}
                      />
                      {item.label}
                      {i18n.language === item.code && (
                        <span className="ml-auto text-[#4A56FF]">✓</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="w-[80px] h-[20px] bg-white/5 animate-pulse rounded"></div>
          )}

          <Link
            href="/coming-soon"
            className="text-white text-[14px] underline cursor-pointer hover:text-white"
          >
            {t("header.signin", "Signin")}
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
              {t("header.button")}
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              key="overlay"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 z-50 bg-black/50 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              key="sidebar"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-y-0 right-0 z-100000 w-full sm:max-w-sm bg-[#00031C] p-6 overflow-y-auto lg:hidden h-[100vh]"
            >
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

              <motion.div
                variants={linkContainerVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="mt-8 space-y-4"
              >
                {navLinks.map((link) => {
                  const isResources =
                    link.name?.toLowerCase() === "resources" ||
                    link.name?.toLowerCase() === "academy" ||
                    link.href === "/resources" ||
                    link.href === "/articles";

                  const isPartners =
                    link.name?.toLowerCase() === "partners" ||
                    link.href === "/partners";

                  const isActive = pathname === link.href;

                  if (isResources) {
                    return (
                      <motion.div key={link.href} variants={linkItemVariants} ref={mobileResourcesRef}>
                        <button
                          onClick={() => setResourcesOpen((prev) => !prev)}
                          className="flex items-center justify-between w-full text-[18px] font-normal py-2 text-[#73799B] hover:text-white"
                        >
                          {link.name}
                          <motion.span
                            animate={{ rotate: resourcesOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDownIcon className="w-4 h-4" />
                          </motion.span>
                        </button>
                        <AnimatePresence>
                          {resourcesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden ml-4 mt-1 "
                              style={{
                                borderRadius: "8px",
                                maxWidth: "176px",
                                background:
                                  "linear-gradient(258deg, #00031C 0%, #121A4E 135.06%) padding-box, " +
                                  "linear-gradient(270deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%) border-box",
                                border: "1px solid transparent",
                              }}
                            >
                              {resourcesItems.map((item, idx) => {
                                if (
                                  item.label === "Community" ||
                                  item.label ===
                                    t("header.community", "Community")
                                ) {
                                  return (
                                    <button
                                      key={item.label}
                                      onClick={handleMobileCommunityClick}
                                      className={`
                                        w-full text-left block px-5 py-3 text-[15px] font-normal text-white
                                        hover:text-white hover:bg-white/5 transition-colors duration-150
                                        ${!communityData ? "opacity-80" : ""}
                                        ${
                                          idx !== resourcesItems.length - 1
                                            ? "border-b border-[#343754]"
                                            : ""
                                        }
                                      `}
                                    >
                                      {item.label}
                                    </button>
                                  );
                                }

                                return (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => {
                                      setResourcesOpen(false);
                                      setMobileMenuOpen(false);
                                    }}
                                    className={`
                              block px-4 py-[14px] text-[12px] font-medium leading-4 text-[#fff] transition-colors duration-150
                              hover:text-white hover:bg-white/5
                                      ${
                                        idx !== resourcesItems.length - 1
                                          ? "border-b border-[#343754]"
                                          : ""
                                      }
                                    `}
                                  >
                                    {item.label}
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

                  if (isPartners) {
                    return (
                      <motion.div key={link.href} variants={linkItemVariants} ref={mobilePartnersRef}>
                        {/* Mobile Partners accordion */}
                        <button
                          onClick={() => setPartnersOpen((prev) => !prev)}
                          className="flex items-center justify-between w-full text-[18px] font-normal py-2 text-[#73799B] hover:text-white"
                        >
                          {link.name}
                          <motion.span
                            animate={{ rotate: partnersOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDownIcon className="w-4 h-4" />
                          </motion.span>
                        </button>
                        <AnimatePresence>
                          {partnersOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden ml-4 mt-1"
                              style={{
                                borderRadius: "8px",
                                maxWidth: "178px",
                                background:
                                  "linear-gradient(258deg, #00031C 0%, #121A4E 135.06%) padding-box, " +
                                  "linear-gradient(270deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%) border-box",
                                border: "1px solid transparent",
                              }}
                            >
                              {partnersItems.map((item, idx) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => {
                                    setPartnersOpen(false);
                                    setMobileMenuOpen(false);
                                  }}
                                  className={`
                              block px-4 py-[14px] text-[12px] font-medium leading-4 text-[#fff] transition-colors duration-150
                              hover:text-white hover:bg-white/5
                                    ${
                                      idx !== partnersItems.length - 1
                                        ? "border-b border-[#343754]"
                                        : ""
                                    }
                                  `}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div key={link.href} variants={linkItemVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block text-[18px] font-normal py-2 ${
                          isActive ? "text-white" : "text-[#73799B]"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Mobile Language Selector */}
                <motion.div
                  variants={linkItemVariants}
                  className="pt-4 border-t border-white/10"
                >
                  <p className="text-[#73799B] text-sm mb-4">
                    {t("header.languageLabel", "Language")}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code);
                          setMobileMenuOpen(false);
                        }}
                        className={`flex items-center gap-2 py-2 px-3 rounded-lg border ${
                          i18n.language === lang.code
                            ? "border-[#4A56FF] bg-white/5 text-white"
                            : "border-white/5 text-[#73799B]"
                        }`}
                      >
                        <Image
                          src={lang.flag}
                          width={20}
                          height={14}
                          alt=""
                          className="rounded-sm"
                        />
                        <span className="text-[14px]">{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Mobile Signin and Get Started */}
                <motion.div
                  variants={linkItemVariants}
                  className="space-y-4 pt-4"
                >
                  <Link
                    href="/coming-soon"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#73799B] text-[18px] font-normal underline cursor-pointer hover:text-white w-full text-left block py-2"
                  >
                    {t("header.signin", "Signin")}
                  </Link>

                  <div
                    className="rounded-full p-0.5 inline-block w-full"
                    style={{
                      background:
                        "linear-gradient(180deg, #4D4D4D 0%, #FFF 49.5%, rgba(255, 255, 255, 0) 100%)",
                    }}
                  >
                    <Link
                      href="/contact"
                      className="inline-block text-[16px] font-normal text-white py-2 px-6 bg-[#00031C] rounded-full w-full text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("header.button")}
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx>{`
        .non-rounded2 {
          background:
            linear-gradient(#4542e0, #4542e0) padding-box,
            linear-gradient(0deg, #00031c, #8ea0e0, #00031c) border-box;
        }
      `}</style>
    </motion.header>
  );
}
