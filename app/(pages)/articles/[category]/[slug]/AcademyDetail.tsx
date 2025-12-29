"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { categoryApi } from "@/app/api/academy";
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

const AcademyDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;

  const [articleData, setArticleData] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const hasFetched = useRef(false);
  const centerContentRef = useRef<HTMLDivElement>(null); // Ref for scroll control

  // Reset scroll to top of the middle container when activeSection changes
  useEffect(() => {
    if (centerContentRef.current) {
      centerContentRef.current.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [activeSection]);

  const formatBoldText = (text: string) => {
    if (!text) return "";
    let formatted = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    formatted = formatted.replace(/\*(.*?)\*/g, "<strong>$1</strong>");
    return formatted;
  };

  const fetchPageDetail = useCallback(
    async (pageSlug: string, sectionId: string) => {
      try {
        const response = await categoryApi.getDetailBySlug(pageSlug);
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
    []
  );

  useEffect(() => {
    if (!slug || hasFetched.current) return;
    hasFetched.current = true;
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await categoryApi.getById(Number(slug));
        const apiData: CategoryItem[] = Array.isArray(response.data?.data)
          ? response.data.data
          : [];
        const sidebarItems = apiData.map((item) => {
          const isSingle =
            item.pages.length === 1 &&
            item.pages[0].title.toLowerCase() ===
              item.category.title.toLowerCase();

          return {
            // Prefix category IDs with 'cat-'
            id: `cat-${item.category.id}`,
            title: item.category.title,
            slug: isSingle ? item.pages[0].slug : "",
            isSinglePage: isSingle,
            subItems: isSingle
              ? undefined
              : item.pages.map((page) => ({
                  // Prefix page IDs with 'page-'
                  id: `page-${page.id}`,
                  title: page.title,
                  slug: page.slug,
                })),
          };
        });

        const firstCategory = apiData[0];
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
          const firstPageId = `page-${firstPage.id}`; // Add prefix here

          setActiveSection(firstPageId);
          setExpandedItems(new Set([`cat-${firstCategory.category.id}`])); // Prefix here
          fetchPageDetail(firstPage.slug, firstPageId);
        }
      } catch (err) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug, fetchPageDetail]);

  const toggleExpand = (itemId: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) newSet.delete(itemId);
      else newSet.add(itemId);
      return newSet;
    });
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
            className="text-[16px] leading-6 text-[#FFFFFFCC] mb-4 max-w-[646px] whitespace-pre-line"
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
    return (
      <div className="min-h-screen bg-[#00031C] flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 w-10 h-10 rounded-full border-4 border-white border-t-transparent animate-spin" />
        </div>
      </div>
    );
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
        <div className="grid grid-cols-1 lg:grid-cols-12 text-[16px] leading-6 gap-8 h-full">
          {/* 1. LEFT SIDEBAR SCROLLER with sticky positioning */}
          <div className="hidden lg:block lg:col-span-3 h-full pt-4">
            <div className="sticky top-29 h-[calc(100vh-2rem)]"> {/* Add sticky wrapper */}
              <div className="h-full overflow-y-auto custom-scrollbar pr-2">
                <h2 className="text-[#FFFFFF99] text-[14px] font-normal leading-4 mb-4">
                  {articleData.title}
                </h2>
                <nav className="space-y-2 pb-20">
                  {articleData.sidebar.map((item) => {
                    const isExpanded = expandedItems.has(item.id);
                    const isParentActive = item.isSinglePage
                      ? activeSection === item.id
                      : item.subItems?.some((sub) => sub.id === activeSection);

                    if (item.isSinglePage) {
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleSectionClick(item.id, item.slug)}
                          className={`w-full max-w-[245px] text-left px-2 py-3 rounded-lg text-[14px] leading-5 font-normal transition-all mb-4 cursor-pointer ${
                            activeSection === item.id
                              ? "bg-gradient-to-b from-[#00082F] to-[#0274FE] text-white"
                              : "text-[#F4F7FF99] hover:bg-gradient-to-b from-[#00082F] to-[#0274FE] text-white"
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
                          className={`w-full max-w-[245px] text-left px-2 py-3 rounded-lg text-[14px] leading-5 font-normal transition-all mb-4 cursor-pointer ${
                            isParentActive
                              ? "bg-gradient-to-b from-[#00082F] to-[#0274FE] text-white"
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
                                onClick={() =>
                                  handleSectionClick(subItem.id, subItem.slug)
                                }
                                className={`w-full text-left px-3 ml-2 max-w-[230px] w-full py-2 rounded-lg text-[14px] transition-all cursor-pointer ${
                                  activeSection === subItem.id
                                    ? "text-[#116AF8] bg-[#116af81f]"
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

          {/* 2. CENTER CONTENT SCROLLER - unchanged */}
          <div
            ref={centerContentRef}
            className="col-span-1 lg:col-span-7 h-full overflow-y-auto pt-4 px-2 custom-scrollbar"
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

            <div className="pb-24">
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
                  <div className="flex items-center justify-center py-20">
                    <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                {/* <div className="mt-6 w-full max-w-[600px] border-t border-[#FFFFFF1F]" /> */}
              </div>
            </div>
          </div>

          {/* 3. RIGHT SIDEBAR SCROLLER with sticky positioning */}
          <div className="hidden lg:block lg:col-span-2 h-full pt-4">
            <div className="sticky top-29 h-[calc(100vh-2rem)]">
              <div className="h-full overflow-y-auto custom-scrollbar pl-2">
                <h3 className="text-white text-[16px] font-medium leading-5 mb-4">
                  {currentContent.rightCard?.title || "On this Page"}
                </h3>
                <div className="space-y-4 pb-20">
                  {currentContent.rightCard?.items?.map((item: any, idx) => (
                    <a
                      key={idx}
                      href={`#${item.id}`}
                      className="block text-[14px] text-[#FFFFFF99] hover:text-[#0274FE] transition-colors"
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
          width: 4px;
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
      `}</style>
    </div>
  );
};

export default AcademyDetailPage;
