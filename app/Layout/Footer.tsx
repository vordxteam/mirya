"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLayoutTranslation } from "@/app/hooks/useLayoutTranslation";
type FooterLink = {
  id?: number;
  name: string;
  href: string;
  img?: string;
};

type FooterSection = {
  title: string;
  childs: FooterLink[];
};

const Footer = () => {
  const { t } = useLayoutTranslation();

  const footerLinks: FooterSection[] = [
    {
      title: t("footer.sections.pages.title"),
      childs: t("footer.sections.pages.links", {
        returnObjects: true,
      }) as FooterLink[],
    },
    {
      title: t("footer.sections.technology.title"),
      childs: t("footer.sections.technology.links", {
        returnObjects: true,
      }) as FooterLink[],
    },
    {
      title: t("footer.sections.contact.title"),
      childs: t("footer.sections.contact.links", {
        returnObjects: true,
      }) as FooterLink[],
    },
  ];

  return (
    <footer className="bg-black w-full relative z-0 ">
      <div className="bg-[url('/images/footer-bg1.png')] bg-no-repeat bg-cover bg-bottom">
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="px-5 z-0 relative sm:px-10 md:px-20 pt-[63px] pb-[80px] max-w-[1440px] m-auto">
          <div className="flex flex-col pb-5 sm:pb-[62px] border-b border-[#FFFFFF52] sm:flex-row items-center justify-between">
            <h3 className="heading-3 font-normal text-[#FFFFFF] max-w-[517px] sm:!text-[40px] text-[24px] sm:!leading-[48px] leading-8">
              {t("footer.newsletter")}
            </h3>
            <div className="flex flex-col sm:flex-row  gap-3">
              <div className="relative mt-3 sm:mt-0">
                <input
                  type="text"
                  placeholder={t("footer.inputPlaceholder")}
                  className=" pl-[54px] heading-6 font-normal pr-6 py-[14px] border border-[#FFFFFF3D] rounded-full w-full lg:w-[360px]"
                />
                <Image
                  src="/images/person.svg"
                  width={20}
                  height={20}
                  alt="person"
                  className="absolute top-[14px] left-6"
                />
              </div>
              <button
                className="
                  text-white
                  font-normal
                  py-3
                  px-6
                  cursor-pointer
                  relative
                  overflow-hidden
                "
                style={{
                  borderRadius: "40px",
                  background: `
                    linear-gradient(#0274FE, #0274FE) padding-box,
                    linear-gradient(270deg, #343754 0.33%, #AAB1EC 53.7%, #343754 100%) border-box
                  `,
                  border: "1px solid transparent",
                }}
              >
                {t("footer.subscribe")}
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row w-full justify-between py-6 border-b border-b-[#FFFFFF52]">
            <div className="flex flex-col justify-between sm:gap-18 gap-4">
              <Image
                src="/images/guarantee.png"
                alt="Guarantee card"
                height={56}
                width={100}
              />
              <Image
                src="/images/footer-logo.svg"
                alt="Guarantee card"
                height={56}
                width={264}
                className="w-[119px] sm:w-[264px]"
              />
            </div>

            <div className="flex flex-col md:flex-row mt-3 sm:mt-0 justify-end gap-18 w-full">
              {footerLinks.map((section, index) => (
                <div key={index}>
                  <h3 className="text-[#FFFFFF80] heading-5 font-medium leading-5 mb-4">
                    {section.title}
                  </h3>
                  {/* <div className="flex flex-col gap-5">
                    {section.childs.map((link: any, idx: number) => (
                      <div key={idx} className="flex gap-2 items-center">
                        {link.img && (
                          <Image
                            src={link.img}
                            width={20}
                            height={20}
                            alt={`${link.name} icon`}
                          />
                        )}
                        <Link
                          href={link.href}
                          target={link.id === 14 ? "_blank" : ""}
                          className={`heading-5 font-normal  text-[#FFFFFF] `}
                        >
                          {link.name}
                        </Link>
                      </div>
                    ))}
                  </div> */}
                  <div className="flex flex-col gap-5">
                    {section.childs.map((link: any, idx: number) => (
                      /* Changed gap-2 to gap-[8px] (or gap-2) and ensured vertical alignment */
                      <div key={idx} className="flex gap-[8px] items-center">
                        {link.img && (
                          <Image
                            src={link.img}
                            width={20}
                            height={20}
                            alt={`${link.name} icon`}
                            /* flex-shrink-0 prevents the icon from distorting */
                            className="shrink-0 object-contain"
                          />
                        )}
                        <Link
                          href={link.href}
                          target={link.id === 14 ? "_blank" : ""}
                          /* Ensure line-height doesn't push the text away from the icon's center */
                          className="heading-5 font-normal text-[#FFFFFF] leading-none"
                        >
                          {link.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-10 gap-4">
            <p className="text-[#F4F7FF] heading-6 font-normal leading-5 text-center md:text-left">
              {t("footer.copyright")}
            </p>
            <div className="flex gap-3">
              <div className="flex gap-3 border-r border-r-[#FFFFFF33] pr-2">
                <Link
                  href="/privacy-policy"
                  className="heading-6 font-normal white"
                >
                  {t("footer.privacy")}
                </Link>
              </div>
              <div className="flex gap-3 border-r border-r-[#FFFFFF33] pr-2">
                <Link href="/security" className="heading-6 font-normal white">
                  {t("footer.security")}
                </Link>
              </div>
              <div className="flex gap-3 border-r border-r-[#FFFFFF33] pr-2">
                <Link href="/imprint" className="heading-6 font-normal white">
                  {t("footer.imprint")}
                </Link>
              </div>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 cursor-pointer text-white text-[14px] leading-none font-normal"
            >
              <span>{t("footer.backToTop")}</span>
              {/* SVG arrow unchanged */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none"
              >
                <path
                  d="M8.52918 10.5301C8.46051 10.6038 8.37771 10.6629 8.28571 10.7039C8.19372 10.7448 8.0944 10.7669 7.9937 10.7687C7.893 10.7704 7.79297 10.7519 7.69958 10.7142C7.60619 10.6765 7.52136 10.6203 7.45014 10.5491C7.37892 10.4779 7.32278 10.3931 7.28505 10.2997C7.24733 10.2063 7.22881 10.1063 7.23059 10.0056C7.23236 9.90485 7.2544 9.80553 7.2954 9.71353C7.33639 9.62153 7.39549 9.53873 7.46918 9.47007L11.4692 5.47007C11.6098 5.32962 11.8004 5.25073 11.9992 5.25073C12.1979 5.25073 12.3886 5.32962 12.5292 5.47007L16.5292 9.47007C16.6029 9.53873 16.662 9.62153 16.703 9.71353C16.7439 9.80553 16.766 9.90485 16.7678 10.0056C16.7695 10.1063 16.751 10.2063 16.7133 10.2997C16.6756 10.3931 16.6194 10.4779 16.5482 10.5491C16.477 10.6203 16.3922 10.6765 16.2988 10.7142C16.2054 10.7519 16.1054 10.7704 16.0047 10.7687C15.904 10.7669 15.8046 10.7448 15.7126 10.7039C15.6206 10.6629 15.5378 10.6038 15.4692 10.5301L12.7492 7.81007V17.5001C12.7492 17.699 12.6702 17.8898 12.5295 18.0304C12.3889 18.1711 12.1981 18.2501 11.9992 18.2501C11.8003 18.2501 11.6095 18.1711 11.4688 18.0304C11.3282 17.8898 11.2492 17.699 11.2492 17.5001V7.81007L8.52918 10.5301Z"
                  fill="white"
                />
              </svg>{" "}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
