"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import academyData from "@/app/data/academyData";

// Define types for the data structure
interface SubItem {
  id: string;
  title: string;
}

interface SidebarItem {
  id: string;
  title: string;
  subItems?: SubItem[];
}

interface Subsection {
  title?: string;
  content?: string;
  features?: string;
  headingOne?: string;
  headingOneDescription?: string;
  headingTwo?: string;
  headingTwoDescription?: string;
  headingThree?: string;
  headingThreeDescription?: string;
  headingFour?: string;
  headingFourDescription?: string;
  title_bulletPoints?: string[];
  short_description?: string;
  secondSection?: {
    subHeading?: string;
    subHeadingContent?: string;
    features?: string;
    bulletPoints?: Array<{
      title: string;
      description: string;
    }>;
    short_description?: string;
  };
}

interface ContentItem {
  title: string;
  heading?: string;
  content?: string;
  heading_content?: string;
  subsections?: Subsection[];
  rightCard?: {
    title: string;
    items: Array<{ text: string }>;
  };
}

interface ArticleData {
  title: string;
  category: string;
  lastUpdated: string;
  sidebar: SidebarItem[];
  content: {
    [key: string]: ContentItem;
  };
  rightCard: {
    title: string;
    items: Array<{ text: string }>;
  };
}

type AcademyData = {
  [key: string]: ArticleData;
};

const typedAcademyData = academyData as unknown as AcademyData;
const AcademyDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const [activeParent, setActiveParent] = useState<string>("");
  const [lastActiveParent, setLastActiveParent] = useState<string>("");

  const articleData = typedAcademyData[slug];
  const [activeSection, setActiveSection] = useState<string>("");
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (articleData && articleData.sidebar.length > 0) {
      const firstItem = articleData.sidebar[0];
      if (firstItem.subItems && firstItem.subItems.length > 0) {
        const firstSubItemId = firstItem.subItems[0].id;
        setActiveSection(firstSubItemId);
        setExpandedItems(new Set([firstItem.id]));
      } else {
        setActiveSection(firstItem.id);
      }
    }
  }, [articleData]);

  if (!articleData) {
    return (
      <div className="min-h-screen bg-[#00031C] flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-2xl mb-4">Article not found</h1>
          <Link href="/articles" className="text-[#0F73FE] hover:underline">
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }
  const toggleExpand = (itemId: string) => {
    if (expandedItems.has(itemId)) {
      setExpandedItems(new Set()); // collapse all
      setActiveParent(""); // clear activeParent
    } else {
      setExpandedItems(new Set([itemId]));
      setActiveParent(itemId);
      setLastActiveParent(itemId); // remember last dropdown
    }
  };

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const hasActiveChild = (item: SidebarItem) => {
    if (!item.subItems) return false;
    return item.subItems.some((subItem) => subItem.id === activeSection);
  };

  const currentContent = articleData.content[activeSection] || {
    title: "Content Coming Soon",
    content: "This section is under development.",
  };
  return (
    <div className="bg-[#00031C] min-h-screen">
      <div className="max-w-[1440px] m-auto px-5 sm:px-10 lg:px-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 text-[16px] leading-6">
          <div className="lg:col-span-3 ">
            <div className="pt-4 sticky top-21">
              <h2 className="text-[#FFFFFF99] text-[14px] font-normal leading-4 mb-4">
                {articleData.title}
              </h2>
              <nav className="space-y-2">
                {articleData.sidebar.map((item) => {
                  const isExpanded = expandedItems.has(item.id);
                  const isActive =
                    activeSection === item.id || 
                    expandedItems.has(item.id) ||
                    (!expandedItems.size && lastActiveParent === item.id);
                  return (
                    <div key={item.id}>
                      <button
                        onClick={() => {
                          if (item.subItems) {
                            toggleExpand(item.id);
                          } else {
                            handleSectionClick(item.id);
                          }
                        }}
                        className={`w-full max-w-[245px] text-left px-2 py-3 rounded-lg text-[14px] leading-5 font-normal transition-all mb-4 ${
                          isActive
                            ? "bg-gradient-to-b from-[#00082F] to-[#0274FE] text-white"
                            : "text-[#F4F7FF99] hover:bg-gradient-to-b from-[#00082F] to-[#0274FE] text-white"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.title}</span>
                          {item.subItems && (
                            <svg
                              className={`w-4 h-4 transition-transform ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          )}
                        </div>
                      </button>
                      {item.subItems && expandedItems.has(item.id) && (
                        <div className="relative space-y-2">
                          <div
                            className="absolute top-1 bg-[#116AF8] rounded"
                            style={{
                              left: "12px",
                              width: "1px",
                              height: `${item.subItems.length * 40}px`,
                            }}
                          />
                          {item.subItems.map((subItem) => (
                            <button
                              key={subItem.id}
                              onClick={() => handleSectionClick(subItem.id)}
                              className={`w-full max-w-[211px] whitespace-nowrap text-left px-2 py-2 rounded-lg text-[14px] leading-5 font-light transition-all relative ${
                                activeSection === subItem.id
                                  ? "bg-[rgba(17,106,248,0.12)] text-[#116AF8]"
                                  : "text-[#FFFFFFE0] hover:bg-[rgba(17,106,248,0.12)] hover:text-[#116AF8]"
                              }`}
                              style={{ marginLeft: "24px" }}
                            >
                              {subItem.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-4">
            <div className="flex items-center gap-3 text-[14px] font-normal leading-5 text-[#FFFFFF99] mb-12">
              <Link
                href="/articles"
                className="hover:text-[#0F73FE] transition-colors"
              >
                MIRYA Academy
              </Link>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="20"
                  viewBox="0 0 10 20"
                  fill="none"
                >
                  <path
                    d="M2.04723 5.4832L2.9314 4.59987L7.74723 9.41404C7.82486 9.49118 7.88646 9.58291 7.9285 9.68395C7.97054 9.78499 7.99219 9.89335 7.99219 10.0028C7.99219 10.1122 7.97054 10.2206 7.9285 10.3216C7.88646 10.4227 7.82486 10.5144 7.74723 10.5915L2.9314 15.4082L2.04806 14.5249L6.56806 10.004L2.04723 5.4832Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="text-white text-[14px] font-normal leading-5">
                {articleData.title}
              </span>
            </div>
            <div>
              <div className="mb-12">
                <h1 className=" text-[32px] sm:text-[48px] font-medium leading-14 mb-6">
                  {currentContent.title}
                </h1>
                <p className="text-[#FFFFFF99] text-[16px] leading-5 font-normal mb-12">
                  Last Updated {articleData.lastUpdated}
                </p>
              </div>

              <div className="">
                <div>
                  {currentContent.heading && (
                    <h2 className="text-[20px] leading-6 font-medium mb-4">
                      {currentContent.heading}
                    </h2>
                  )}
                </div>
                <div>
                  {currentContent.content && (
                    <p className="text-[16px] leading-5 font-normal text-[#FFFFFFCC]">
                      {currentContent.content}
                    </p>
                  )}
                </div>

                <div>
                  {currentContent.heading_content && (
                    <p className="text-[16px] leading-5 text-[#FFFFFFCC] mb-12 w-full max-w-[680px]">
                      {currentContent.heading_content}
                    </p>
                  )}
                </div>

                {currentContent.subsections &&
                  currentContent.subsections.map((subsection, idx) => (
                    <div key={idx} className="space-y-5">
                      {subsection.title && (
                        <h2 className=" text-[24px] leading-8 font-semibold">
                          {subsection.title}
                        </h2>
                      )}
                      {subsection.content && (
                        <p className="text-[16px] leading-6 font-normal w-full max-w-[661px]">
                          {subsection.content}
                        </p>
                      )}

                      {subsection.features && (
                        <p className="text-[16px] leading-5 mb-5 text-white w-full max-w-[680px]">
                          {subsection.features}
                        </p>
                      )}

                      {subsection.headingOne && (
                        <div className="my-8 border-t border-[#FFFFFF1F]" />
                      )}

                      {subsection.headingOne && (
                        <div className="space-y-3">
                          <h3 className="text-[20px] leading-7 font-semibold">
                            {subsection.headingOne}
                          </h3>
                          <p className="text-[16px] leading-5 text-[#FFFFFFCC] max-w-[680px]">
                            {subsection.headingOneDescription}
                          </p>
                        </div>
                      )}

                      {subsection.headingOne && subsection.headingTwo && (
                        <div className="my-8 border-t border-[#FFFFFF1F]" />
                      )}

                      {subsection.headingTwo && (
                        <div className="space-y-3">
                          <h3 className="text-[20px] leading-7 font-semibold">
                            {subsection.headingTwo}
                          </h3>
                          <p className="text-[16px] leading-5 text-[#FFFFFFCC] max-w-[680px]">
                            {subsection.headingTwoDescription}
                          </p>
                        </div>
                      )}

                      {subsection.headingTwo && subsection.headingThree && (
                        <div className="my-8 border-t border-[#FFFFFF1F]" />
                      )}

                      {subsection.headingThree && (
                        <div className="space-y-3">
                          <h3 className="text-[20px] leading-7 font-semibold">
                            {subsection.headingThree}
                          </h3>
                          <p className="text-[16px] leading-5 text-[#FFFFFFCC] max-w-[680px]">
                            {subsection.headingThreeDescription}
                          </p>
                        </div>
                      )}

                      {subsection.headingThree && subsection.headingFour && (
                        <div className="my-8 border-t border-[#FFFFFF1F]" />
                      )}

                      {subsection.headingFour && (
                        <div className="space-y-3">
                          <h3 className="text-[20px] leading-7 font-semibold">
                            {subsection.headingFour}
                          </h3>
                          <p className="text-[16px] leading-5 text-[#FFFFFFCC] max-w-[680px]">
                            {subsection.headingFourDescription}
                          </p>
                        </div>
                      )}

                      {subsection.title_bulletPoints && (
                        <ul className="space-y-1 ml-5">
                          {subsection.title_bulletPoints.map(
                            (point, pointIdx) => (
                              <li
                                key={pointIdx}
                                className="text-[16px] leading-6 font-normal list-disc"
                              >
                                {point}
                              </li>
                            )
                          )}
                        </ul>
                      )}

                      {subsection.short_description && (
                        <p className="text-[16px] leading-6 font-normal mt-4 text-white w-full max-w-[661px]">
                          {subsection.short_description}
                        </p>
                      )}

                      {subsection.secondSection && (
                        <div className="my-6 border-t border-[#FFFFFF1F]"></div>
                      )}

                      {subsection.secondSection && (
                        <div>
                          {subsection.secondSection.subHeading && (
                            <h3 className=" text-[24px] leading-8 font-semibold mb-5">
                              {subsection.secondSection.subHeading}
                            </h3>
                          )}
                          {subsection.secondSection.subHeadingContent && (
                            <p className="text-[16px] leading-6 font-normal mt-4 text-white mb-6 w-full max-w-[680px]">
                              {subsection.secondSection.subHeadingContent}
                            </p>
                          )}

                          {subsection.secondSection.features && (
                            <p className="mb-3 mt-6 text-[16px] leading-5 text-white">
                              {subsection.secondSection.features}
                            </p>
                          )}
                          {subsection.secondSection.bulletPoints && (
                            <ul className="space-y-2 ml-5">
                              {subsection.secondSection.bulletPoints.map(
                                (point, idx) => (
                                  <li
                                    key={idx}
                                    className="text-[16px] leading-6 list-disc text-[#F4F7FF]"
                                  >
                                    <span className="font-semibold text-[16px] leading-6 text-white">
                                      {point.title}
                                    </span>{" "}
                                    <span className="font-normal text-[16px] leading-6">
                                      {point.description}
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>
                          )}

                          {subsection.secondSection.short_description && (
                            <p className="text-[16px] leading-6 font-normal mt-4 text-white w-full max-w-[661px]">
                              {subsection.secondSection.short_description}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 sm:mt-[120px] mt-10">
            <div className="space-y-3 sticky top-25">
              <h3 className="text-white text-[16px] font-medium leading-5 mb-4">
                {currentContent.rightCard?.title || "On this Page"}
              </h3>
              <div className="space-y-3">
                {currentContent.rightCard?.items?.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start text-[16px] text-[#FFFFFF99] leading-5 hover:text-[#0274FE] transition-colors cursor-pointer"
                  >
                    <span className="leading-5 text-[14px] font-normal">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyDetailPage;
