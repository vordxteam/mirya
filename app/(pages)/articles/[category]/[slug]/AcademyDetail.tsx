


"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { categoryApi } from "@/app/api/academy";
import SkeletonDetail, { ContentSkeleton } from "./SkeletonDetail";
import { useTranslation } from "react-i18next";
import React, {
  useState,
  useEffect,
  useCallback,
  ReactElement,
  useRef,
} from "react";

interface ApiElement {
  type: string;
  value?: string;
  checked?: boolean;
}

interface ApiContentBlock {
  heading?: string;
  heading_checked?: boolean;
  elements: ApiElement[];
}

interface PageDetail {
  id: number;
  slug: string;
  title: string;
  content: ApiContentBlock[];
  updated_at: string;
  short_description?: string;
}

interface SubItem {
  id: string;
  title: string;
  slug: string;
}

interface SidebarItem {
  id: string;
  title: string;
  slug: string;
  isSinglePage: boolean;
  subItems?: SubItem[];
}

interface ProcessedContent {
  blocks: ApiContentBlock[];
  allHeadings: Array<{ text: string; id: string }>;
}

interface ContentItem {
  title: string;
  shortDescription?: string;
  content?: ProcessedContent;
  rightCard?: { title: string; items: Array<{ text: string }> };
}

interface ArticleData {
  title: string;
  category: string;
  lastUpdated: string;
  updated_at: string;
  sidebar: SidebarItem[];
  content: { [key: string]: ContentItem };
  rightCard: { title: string; items: Array<{ text: string }> };
}

interface CategoryItem {
  id: number;
  main_category: {
    id: number;
    name: string;
  };
  category: {
    id: number;
    title: string;
  };
  pages: Page[];
  updated_at: string;
}

interface Page {
  id: number;
  title: string;
  slug: string;
  content?: ApiContentBlock[];
  updated_at: string;
}

// MOVED OUTSIDE THE COMPONENT
const apiLangMap: Record<string, string> = {
  en: "english",
  tr: "turkish",
  de: "german",
};

const AcademyDetailPage = () => {
  const { i18n } = useTranslation();
  const params = useParams();
  const slug = params.slug as string;

  const [articleData, setArticleData] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [showMobileRightSidebar, setShowMobileRightSidebar] = useState(false);
  const centerContentRef = useRef<HTMLDivElement>(null);
  const [expandedItems, setExpandedItems] = useState<string | null>(null);
  const [isI18nReady, setIsI18nReady] = useState(false);

  useEffect(() => {
    if (centerContentRef.current) {
      centerContentRef.current.scrollTo({ top: 0, behavior: "instant" });
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  }, [activeSection]);

  // Wait for i18n to be ready
  useEffect(() => {
    if (i18n.isInitialized) {
      setIsI18nReady(true);
    } else {
      const checkReady = setInterval(() => {
        if (i18n.isInitialized) {
          setIsI18nReady(true);
          clearInterval(checkReady);
        }
      }, 50);
      return () => clearInterval(checkReady);
    }
  }, [i18n]);

  const fetchPageDetail = useCallback(
    async (pageSlug: string, sectionId: string) => {
      try {
        const currentLang = apiLangMap[i18n.language] || "english";
        const response = await categoryApi.getDetailBySlug(
          pageSlug,
          currentLang
        );

        if (!response?.data?.data) throw new Error("Invalid API response");

        const detailData = response.data.data as unknown as PageDetail;
        const allHeadings = detailData.content.flatMap(
          (block: ApiContentBlock) =>
            block.elements
              .filter(
                (el) =>
                  el.type.startsWith("h") && el.value && el.value.trim() !== ""
              )
              .map((el) => {
                const headingId =
                  el.value
                    ?.toLowerCase()
                    .replace(/[^\w\s-]/g, "")
                    .replace(/\s+/g, "-") || "";
                return { text: el.value || "", id: headingId };
              })
        );

        setArticleData((prev) => {
          if (!prev) return prev;
          return {
            ...prev,
            updated_at: detailData.updated_at,
            content: {
              ...prev.content,
              [sectionId]: {
                title: detailData.title,
                shortDescription: detailData.short_description,
                content: { blocks: detailData.content, allHeadings },
                rightCard: { title: "On this page", items: allHeadings },
              },
            },
          };
        });
      } catch (err) {
        console.error("Error fetching page detail:", err);
      }
    },
    [i18n.language]
  );

  const linkify = (text: string) => {
    if (!text) return "";

    const urlRegex = /((https?:\/\/)|(www\.))[^\s/$.?#].[^\s]*/gi;

    return text.replace(urlRegex, (url) => {
      let href = url;
      if (url.toLowerCase().startsWith("www.")) {
        href = `https://${url}`;
      }

      return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="underline hover:text-[#0F73FE] transition-colors">${url}</a>`;
    });
  };

  const formatBoldText = (text: string) => {
    if (!text) return "";

    let formatted = linkify(text);
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    formatted = formatted.replace(/\*(.*?)\*/g, "<strong>$1</strong>");

    return formatted;
  };

  useEffect(() => {
    if (!slug || !isI18nReady) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const currentLang =
          apiLangMap[i18n.language.split("-")[0]] || "english";

        const response = await categoryApi.getById(Number(slug), currentLang);

        if (!response.data?.success) {
          console.warn(`Failed to fetch data for language: ${currentLang}`);
          setError("Failed to load data for the selected language");
          setLoading(false);
          return;
        }

        const apiData: CategoryItem[] = Array.isArray(response.data?.data)
          ? response.data.data
          : [];

        const sidebarItems = apiData.map((item) => {
          const isSingle =
            item.pages.length === 1 &&
            item.pages[0].title.toLowerCase() ===
              item.category.title.toLowerCase();

          return {
            id: `cat-${item.category.id}`,
            title: item.category.title,
            slug: isSingle ? item.pages[0].slug : "",
            isSinglePage: isSingle,
            subItems: isSingle
              ? undefined
              : item.pages.map((page) => ({
                  id: `page-${page.id}`,
                  title: page.title,
                  slug: page.slug,
                })),
          };
        });

        const firstCategory = apiData[0];

        if (firstCategory) {
          setArticleData({
            title: firstCategory.main_category.name,
            category: firstCategory.category.title,
            updated_at:
              firstCategory.pages[0]?.updated_at || firstCategory.updated_at,
            lastUpdated: "Recently",
            sidebar: sidebarItems,
            content: {},
            rightCard: { title: "On this page", items: [] },
          });

          if (firstCategory.pages[0]) {
            const firstPage = firstCategory.pages[0];
            const firstSidebarItem = sidebarItems[0];

            const initialActiveId = firstSidebarItem.isSinglePage
              ? firstSidebarItem.id
              : `page-${firstPage.id}`;

            setActiveSection(initialActiveId);
            setExpandedItems(firstSidebarItem.id);

            fetchPageDetail(firstPage.slug, initialActiveId);
          }
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug, fetchPageDetail, i18n.language, isI18nReady]);

  const toggleExpand = (itemId: string) => {
    setExpandedItems((prev) => (prev === itemId ? null : itemId));
  };

  const handleSectionClick = (sectionId: string, sectionSlug: string) => {
    setActiveSection(sectionId);
    if (!articleData?.content[sectionId]) {
      fetchPageDetail(sectionSlug, sectionId);
    }
  };
  const renderElement = (
    el: ApiElement,
    index: number,
    blockIndex: number
  ): ReactElement | null => {
    const elementId =
      el.value
        ?.toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-") || `element-${blockIndex}-${index}`;
    switch (el.type) {
      case "h1":
        return (
          <h1
            key={index}
            id={elementId}
            className="text-[24px] leading-8 font-semibold mt-10 mb-4 scroll-mt-24"
          >
            {el.value}
          </h1>
        );
      case "h2":
        return (
          <h2
            key={index}
            id={elementId}
            className="max-w-[680px] w-full text-[20px] leading-7 font-semibold mt-8 mb-3 scroll-mt-24"
          >
            {el.value}
          </h2>
        );
      case "h3":
        return (
          <h3
            key={index}
            id={elementId}
            className="text-[20px] leading-6 font-medium mt-6 mb-2 scroll-mt-24"
          >
            {el.value}
          </h3>
        );
      case "h4":
        return (
          <h4
            key={index}
            id={elementId}
            className="text-[18px] leading-6 font-semibold mt-4 mb-2"
          >
            {el.value}
          </h4>
        );
      case "description":
        if (!el.value?.trim()) return null;
        return (
          <p
            key={index}
            className="text-[16px] leading-6 text-[#ffffff] mb-4 max-w-[646px] whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: formatBoldText(el.value || "") }}
          />
        );
      case "feature":
        if (!el.value?.trim()) return null;
        return (
          <li
            key={index}
            className="list-disc text-[16px] leading-6 text-[#fff] ml-5 max-w-[666px] w-full"
            dangerouslySetInnerHTML={{ __html: formatBoldText(el.value || "") }}
          />
        );
      default:
        return null;
    }
  };

  const renderContentBlock = (block: ApiContentBlock, blockIndex: number) => {
    const elements = block.elements;
    const renderedElements: ReactElement[] = [];
    let currentFeatureList: ReactElement[] = [];
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      if (el.type === "feature") {
        const rendered = renderElement(el, i, blockIndex);
        if (rendered) currentFeatureList.push(rendered);
        if (i === elements.length - 1 || elements[i + 1]?.type !== "feature") {
          renderedElements.push(
            <ul
              key={`feature-list-${blockIndex}-${i}`}
              className="space-y-2 mb-4"
            >
              {currentFeatureList}
            </ul>
          );
          currentFeatureList = [];
        }
      } else {
        if (currentFeatureList.length > 0) {
          renderedElements.push(
            <ul
              key={`feature-list-${blockIndex}-${i}`}
              className="space-y-2 mb-4"
            >
              {currentFeatureList}
            </ul>
          );
          currentFeatureList = [];
        }
        const rendered = renderElement(el, i, blockIndex);
        if (rendered) renderedElements.push(rendered);
      }
    }
    return (
      <div key={blockIndex} className="space-y-4 mb-8">
        {renderedElements}
        {blockIndex < (currentContent.content?.blocks?.length || 0) - 1 && (
          <div className="my-8 border-t w-full max-w-[600px] border-[#FFFFFF1F]" />
        )}
      </div>
    );
  };

  if (loading) {
    return <SkeletonDetail />;
  }

  if (error || !articleData) {
    return (
      <div className="min-h-screen bg-[#00031C] flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-2xl mb-4">{error || "Article not found"}</h1>
          <Link href="/articles" className="text-[#0F73FE] hover:underline">
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  const currentContent = articleData.content[activeSection] || {};

  return (
    <div className="bg-[#00031C] min-h-screen">
      <div className="max-w-[1440px] m-auto px-5 sm:px-10 lg:px-20 h-full">
        {/* Mobile Sidebar Toggle Buttons */}
        <div className="lg:hidden flex justify-between items-center py-4">
          <button
            onClick={() => setShowMobileSidebar(!showMobileSidebar)}
            className="flex items-center gap-2 text-[#FFFFFF99] text-sm px-4 py-2 rounded-lg bg-[#00082F]"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            Menu
          </button>

          <button
            onClick={() => setShowMobileRightSidebar(!showMobileRightSidebar)}
            className="flex items-center gap-2 text-[#FFFFFF99] text-sm px-4 py-2 rounded-lg bg-[#00082F]"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            On This Page
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 text-[16px]  gap-4 lg:gap-8 h-full">
          {/* 1. LEFT SIDEBAR - Show on mobile when toggled */}
          <div
            className={`${
              showMobileSidebar ? "block" : "hidden"
            } lg:block lg:col-span-3 h-full pt-4`}
          >
            <div className="lg:sticky lg:top-29 h-[calc(100vh-2rem)]">
              <div className="h-full overflow-y-auto custom-scrollbar pr-2 bg-[#00031C] lg:bg-transparent">
                <h2 className="text-[#FFFFFF99] text-[12px] font-normal leading-4 mb-4">
                  {articleData.title}
                </h2>
                <nav className="space-y-2 pb-20">
                  {articleData.sidebar.map((item) => {
                    // Check if this specific item is the one stored in state
                    const isExpanded = expandedItems === item.id;

                    const isParentActive = item.isSinglePage
                      ? activeSection === item.id
                      : item.subItems?.some((sub) => sub.id === activeSection);

                    if (item.isSinglePage) {
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            handleSectionClick(item.id, item.slug);
                            setExpandedItems(null); // Close any open dropdowns when a single page is clicked
                            setShowMobileSidebar(false);
                          }}
                          className={`w-full max-w-[245px] text-left px-2 py-3 rounded-lg text-[14px] leading-5 font-light transition-all mb-4 cursor-pointer ${
                            activeSection === item.id
                              ? "bg-gradient-to-b from-[#00082F] to-[#116AF8] text-white font-normal"
                              : "text-[#F4F7FF99] hover:bg-gradient-to-b from-[#00082F] to-[#116AF8] text-white"
                          }`}
                        >
                          {item.title}
                        </button>
                      );
                    }

                    return (
                      <div key={item.id}>
                        <button
                          onClick={() => toggleExpand(item.id)}
                          className={`w-full max-w-[245px] text-left px-2 py-3 rounded-lg text-[14px] leading-5 font-light transition-all mb-4 cursor-pointer ${
                            isParentActive
                              ? "bg-gradient-to-b from-[#00082F] to-[#0274FE] text-white font-normal "
                              : "text-[#F4F7FF99] hover:bg-gradient-to-b from-[#00082F] to-[#0274FE] text-white"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{item.title}</span>
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
                          </div>
                        </button>
                        {isExpanded && item.subItems && (
                          <div className="relative space-y-2 mb-4 ml-2 border-l border-[#116AF8]">
                            {item.subItems.map((subItem) => (
                              <button
                                key={subItem.id}
                                onClick={() => {
                                  handleSectionClick(subItem.id, subItem.slug);
                                  setShowMobileSidebar(false); // Close sidebar on mobile after selection
                                }}
                                className={`w-full text-left px-3 ml-2 max-w-[230px] py-2 leading-5 font-light rounded-lg text-[14px] transition-all cursor-pointer ${
                                  activeSection === subItem.id
                                    ? "text-[#116AF8] bg-[#116af81f] font-normal"
                                    : "text-[#FFFFFFE0] hover:text-[#116AF8]"
                                }`}
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
          </div>

          {/* 2. CENTER CONTENT - Adjust column span for mobile */}
          <div
            ref={centerContentRef}
            className={`${
              showMobileSidebar || showMobileRightSidebar ? "hidden" : "block"
            } lg:block lg:col-span-7 h-full overflow-y-auto overflow-x-hidden pt-4 custom-scrollbar`}
          >
            <div className="flex items-center gap-3 text-[14px] font-normal leading-5 text-[#FFFFFF99] mb-12">
              <Link
                href="/articles"
                className="hover:text-[#0F73FE] transition-colors"
              >
                MIRYA Academy
              </Link>
              <span>{">"}</span>
              <span className="text-white">{articleData.title}</span>
            </div>

            <div className="pb-[66px]">
              <div className="mb-12">
                <h1 className="text-[32px] sm:text-[48px] font-medium leading-tight mb-6">
                  {articleData.title}
                </h1>
                <p className="text-[#FFFFFF99] text-[16px] leading-5 font-normal mb-12">
                  Last Updated{" "}
                  {articleData.updated_at
                    ? new Date(articleData.updated_at).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "long", day: "numeric" }
                      )
                    : "—"}
                </p>
              </div>

              <div>
                {currentContent.content?.blocks ? (
                  currentContent.content.blocks.map((block, idx) =>
                    renderContentBlock(block, idx)
                  )
                ) : (
                  <div className="py-10">
                    <ContentSkeleton />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 3. RIGHT SIDEBAR - Show on mobile when toggled */}
          <div
            className={`${
              showMobileRightSidebar ? "block" : "hidden"
            } lg:block lg:col-span-2 h-full pt-4`}
          >
            <div className="lg:sticky lg:top-29 h-[calc(100vh-2rem)]">
              <div className="h-full overflow-y-auto custom-scrollbar pl-2 bg-[#00031C] lg:bg-transparent">
                <div className="flex justify-between items-center mb-4 lg:hidden">
                  <h3 className="text-white text-[16px] font-medium leading-5">
                    {currentContent.rightCard?.title || "On this Page"}
                  </h3>
                  <button
                    onClick={() => setShowMobileRightSidebar(false)}
                    className="text-[#FFFFFF99] hover:text-white"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <h3 className="text-white text-[16px] font-medium leading-5 mb-4 hidden lg:block">
                  {currentContent.rightCard?.title || "On this Page"}
                </h3>

                <div className="space-y-4 pb-20">
                  {currentContent.rightCard?.items?.map((item: any, idx) => (
                    <a
                      key={idx}
                      href={`#${item.id}`}
                      // Added 'truncate' and 'w-full'
                      className="block text-[16px] leading-5 text-[#FFFFFF] hover:text-[#0274FE] transition-colors truncate w-full"
                      title={item.text} // Good practice: shows full text on hover
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById(item.id)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {item.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
          display: none;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ffffff1a;
          border-radius: 10px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background: #ffffff33;
        }

        /* Mobile sidebar overlay effect */
        @media (max-width: 1023px) {
          .block.lg\\:block {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 50;
            background: rgba(0, 3, 28, 0.95);
            padding: 1rem;
            overflow-y: auto;
          }

          .block.lg\\:block:first-child {
            /* Left sidebar specific styles */
          }

          .block.lg\\:block:last-child {
            /* Right sidebar specific styles */
          }
        }
      `}</style>
    </div>
  );
};

export default AcademyDetailPage;
<style jsx global>{`
  .custom-scrollbar::-webkit-scrollbar {
    width: 2px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #ffffff1a;
    border-radius: 10px;

    /* --- ADD THESE THREE LINES --- */
    /* This creates a 50px invisible gap at the top and bottom of the thumb */
    border-top: 50px solid rgba(0, 0, 0, 0);
    border-bottom: 50px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
  }

  .custom-scrollbar:hover::-webkit-scrollbar-thumb {
    background: #ffffff33;
    /* Re-apply background-clip on hover to ensure it stays short */
    background-clip: padding-box;
  }

  /* ... rest of your existing mobile styles ... */
`}</style>;
