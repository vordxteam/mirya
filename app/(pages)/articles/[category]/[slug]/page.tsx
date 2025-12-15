"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { features } from "process";
import React, { useState, useEffect } from "react";


const academyData = {
  "getting-started": {
    title: "Getting Started",
    category: "academy",
    lastUpdated: "August 20, 2025",
    sidebar: [
      {
        id: "welcome",
        title: "Welcome to MIRYA",
        subItems: [
          { id: "no-code", title: "No-Code Automation" },
          { id: "interface", title: "Mirya Interface" },
          { id: "structure", title: "Academy Structure" },
          { id: "login", title: "Login" },
        ],
      },
      {
        id: "installation",
        title: "Installation & Setup",
        subItems: [
          { id: "premise", title: "Cloud Vs Premise" },
          { id: "guide", title: "Installation Guide" },
          { id: "requirements", title: "System Requirements" },
          { id: "systems", title: "Connecting External Systems" },
          { id: "configuration", title: "Initial Configuration" },
        ],
      },
      {
        id: "first-automation",
        title: "Build Your First Automation",
        subItems: [
          { id: "workflow", title: "Workflow" },
          { id: "process", title: "Drag-and-Drop Process" },
          { id: "debugging", title: "Running & Debugging" },
        ],
      },
    ],
    content: {
      "no-code": {
        title: "Getting Started",

        heading: "Installation & Setup",
        heading_content:
          "Get a quick introduction to Mirya, understand how no-code automation works, and learn the essential steps to begin building powerful workflows.",

        subsections: [
          {
            title: "Introduction to No-Code Automation",
            content:
              "Mirya allows you to build powerful automation workflows without writing code. Using a visual drag-and-drop interface, you can combine actions, logic, and data operations to automate repetitive work across desktop apps, websites, email, spreadsheets, documents, and more.",
            title_bulletPoints: [
              "Reduce manual workload",
              "Eliminate repetitive tasks",
              "Improve accuracy and consistency",
              "Scale operations efficiently",
              "Speed up processes without expanding ",
            ],
            subHeading: "Key Advantages and Typical Use Cases",
            subHeadingContent:
              "Mirya Academy is divided into clear learning paths that guide you from beginner to expert",
            features: "No-code automation helps businesses",
            bulletPoints: [
              "Finance & Accounting: Invoice extraction, payment preparation, data validation",
              "Customer Service: Creating tickets from emails, auto-responding, classification",
            ],
            short_description:
              "It enables anyone — regardless of technical background — to automate real business workflows quickly.",
            secondSection: {
              subHeading: "Key Advantages and Typical Use Cases",
              subHeadingContent:
                "Mirya Academy is divided into clear learning paths that guide you from beginner to expert:",
              features: "No-code automation helps businesses:",

              bulletPoints: [
                {
                  title: "Finance & Accounting:",
                  description:
                    "Invoice extraction, payment preparation, data validation",
                },
                {
                  title: "Customer Service:",
                  description:
                    "Creating tickets from emails, auto-responding, classification",
                },
                {
                  title: "HR & Recruiting:",
                  description:
                    "Sorting CVs, onboarding workflows, document generation",
                },
                {
                  title: "Operations:",
                  description:
                    "Data migration, system updates, routine administrative tasks",
                },
                {
                  title: "E-Commerce:",
                  description:
                    "Order processing, product updates, return handling",
                },
              ],
            },
          },
        ],
      },

      interface: {
        title: "Mirya Interface",
        heading: "Installation & Setup",
        heading_content:
          "Get a quick introduction to Mirya, understand how no-code automation works, and learn the essential steps to begin building powerful workflows.",

        subsections: [
          {
            title: "Quick Tour of the MIRYA Interface",
            content:
              "When you log in to MIRYA, you enter a clean, intuitive workspace built to help you design, run, and manage automations with ease. Every part of the interface is designed to support a no-code workflow, so even non-technical users can build powerful automations confidently. The layout gives you everything you need at a glance—whether you're monitoring bots, building processes, or reviewing logs.",

            headingOne: "Dashboard",
            headingOneDescription:
              "The Dashboard provides a real-time overview of your automation environment. Here, you can quickly see active bots, recent workflow executions, performance indicators, and the status of ongoing tasks. It acts as your control center, giving you immediate insights into what’s running, what needs attention, and how your automations are performing across the organization.",
            features:
              "No-code automation inside MIRYA helps businesses streamline operations through several core modules:",
            headingTwo: "Workflow Builder",
            headingTwoDescription:
              "The Workflow Builder is the heart of Mirya’s automation system. It offers a drag-and-drop canvas where you can visually design workflows step-by-step. Each action can be configured through simple input fields, making it easy to map out processes without writing code. The visual layout helps you understand the flow of your automation and makes building complex logic approachable for everyone.",

            headingThree: "Action Library",
            headingThreeDescription:
              "The Action Library contains a wide collection of pre-built automation actions for desktop applications, websites, emails, Excel, files, logic operations, document processing, and more. Instead of searching for plugins or writing scripts, you simply choose an action and drop it into your workflow. Each action is optimized for reliability, allowing you to automate everything from reading emails to processing PDFs.",

            headingFour: "Bot Manager",
            headingFourDescription:
              "The Bot Manager is where you create, manage, and schedule autonomous bots that execute your workflows. You can configure run times, assign workflows to specific bots, manage bot availability, and monitor their performance. Whether you’re automating tasks every minute, every hour, or overnight, the Bot Manager ensures everything runs reliably and on schedule.",
          },
        ],
      },
      structure: {
        title: "Academy Structure",
        heading: "Installation & Setup",
        heading_content:
          "Get a quick introduction to Mirya, understand how no-code automation works, and learn the essential steps to begin building powerful workflows.",

        subsections: [
          {
            secondSection: {
              subHeading: "How the Academy Is Structured",
              subHeadingContent:
                "Mirya Academy is divided into clear learning paths that guide you from beginner to expert:",
              features: "No-code automation helps businesses:",

              bulletPoints: [
                {
                  title: "Getting Started:",
                  description:
                    "Basics, installation, first workflow",
                },
                {
                  title: "MIRYA Tutorials:",
                  description:
                    "Practical examples for web, desktop, email, Excel, PDF, logic",
                },
                {
                  title: "Real Process Use Cases:",
                  description:
                    "Industry workflows with ready-to-use blueprints",
                },
                {
                  title: "Best Practices:",
                  description:
                    "Standards, governance, optimization tips",
                },
                {
                  title: "Troubleshooting:",
                  description:
                    "Error handling, debugging, logs, support",
                },
                 {
                  title: "Updates & Roadmap:",
                  description:
                    "What’s new and what’s coming",
                },
                 {
                  title: "Community Hub:",
                  description:
                    "Q&A, workflow sharing, challenges",
                },
              ],
              short_description:
                "This structure ensures you don’t just learn Mirya — you learn real automation skills.",
            },
          },
        ],
      },
      login: {
        title: "Login",
        heading: "Installation & Setup",
        heading_content:
          "Get a quick introduction to Mirya, understand how no-code automation works, and learn the essential steps to begin building powerful workflows.",

        subsections: [
          {
            secondSection: {
              subHeading: "Your First Steps After Login",
              subHeadingContent:
                "To help you start strong, follow this recommended sequence:",
              features: "No-code automation helps businesses:",

              bulletPoints: [
                {
                  title: "Explore the dashboard",
                  description:
                    "and familiarize yourself with the main sections.",
                },
                {
                  title: "Open the Workflow Builder",
                  description: "and review the action categories.",
                },
                {
                  title: "Try a basic automation,",
                  description:
                    "such as opening a website or reading an Excel file.",
                },
                {
                  title: "Run your workflow,",
                  description:
                    "observe the logs, and understand how each step executes",
                },
                {
                  title: "Browse the Tutorials section",
                  description:
                    "to explore practical examples for your department.",
                },
                {
                  title: "Create your first bot",
                  description: "and schedule it to run automatically.",
                },
              ],
              short_description:
                "This structure ensures you don’t just learn Mirya — you learn real automation skills.",
            },
          },
        ],
      },
      installation: {
        title: "Installation & Setup",
        content:
          "Get a quick introduction to Mirya, understand how no-code automation works, and learn the essential steps to begin building powerful workflows.",
        bulletPoints: [
          "Create your MIRYA account",
          "Set up your workspace",
          "Connect your first application",
          "Configure user permissions",
        ],
      },
      "first-automation": {
        title: "Build Your First Automation",
        content:
          "Learn how to create your first automation workflow from scratch. This hands-on tutorial will guide you through the process step by step.",
      },
    },
    rightCard: {
      title: "On this Page",
      items: [
        { text: "Introduction to No-Code Automation" },
        { text: "Key Advantages and Typical Use Cases" },
        { text: "How No-Code Automation Helps Businesses" },
      ],
    },
  },
  troubleshooting: {
    title: "Trouble Shooting & Support Guides",
    category: "academy",
    lastUpdated: "August 20, 2025",
    sidebar: [
      {
        id: "common-issues",
        title: "Common Issues",
      },
      {
        id: "debugging",
        title: "Debugging Guide",
      },
      {
        id: "contact-support",
        title: "Contact Support",
      },
    ],
    content: {
      "common-issues": {
        title: "Common Issues and Solutions",
        content:
          "Find quick solutions to the most frequently encountered issues in MIRYA.",
        bulletPoints: [
          "Connection errors and how to resolve them",
          "Workflow execution failures",
          "Data sync issues",
          "Performance problems",
        ],
      },
      debugging: {
        title: "Debugging Guide",
        content:
          "Learn how to debug your workflows and identify issues quickly.",
      },
      "contact-support": {
        title: "Contact Support",
        content:
          "Our support team is here to help you resolve any issues you encounter.",
      },
    },
    rightCard: {
      title: "Support Resources",
      items: [
        { text: "Help Center" },
        { text: "Live Chat" },
        { text: "Email Support" },
      ],
    },
  },
  "mirya-tutorials": {
    title: "MIRYA Tutorials",
    category: "academy",
    lastUpdated: "August 20, 2025",
    sidebar: [
      { id: "basic", title: "Basic Tutorials" },
      { id: "advanced", title: "Advanced Tutorials" },
    ],
    content: {
      basic: {
        title: "Basic Tutorials",
        content: "Learn the fundamentals of MIRYA automation.",
      },
      advanced: {
        title: "Advanced Tutorials",
        content: "Master advanced automation techniques.",
      },
    },
    rightCard: {
      title: "Tutorial Resources",
      items: [{ text: "Video Tutorials" }, { text: "Step-by-Step Guides" }],
    },
  },
  "process-use-cases": {
    title: "Process Use Cases",
    category: "academy",
    lastUpdated: "August 20, 2025",
    sidebar: [
      { id: "finance", title: "Finance & Accounting" },
      { id: "hr", title: "HR & Recruiting" },
    ],
    content: {
      finance: {
        title: "Finance & Accounting Automation",
        content: "Automate your financial processes with MIRYA.",
      },
      hr: {
        title: "HR & Recruiting Automation",
        content: "Streamline HR processes and recruitment workflows.",
      },
    },
    rightCard: {
      title: "Popular Use Cases",
      items: [{ text: "Invoice Processing" }, { text: "Financial Reporting" }],
    },
  },
  "best-practices": {
    title: "Best Practices",
    category: "academy",
    lastUpdated: "August 20, 2025",
    sidebar: [
      { id: "workflow-design", title: "Workflow Design" },
      { id: "error-handling", title: "Error Handling" },
    ],
    content: {
      "workflow-design": {
        title: "Workflow Design Best Practices",
        content: "Design efficient and maintainable workflows.",
      },
      "error-handling": {
        title: "Error Handling",
        content: "Implement robust error handling in your workflows.",
      },
    },
    rightCard: {
      title: "Quick Tips",
      items: [{ text: "Design Patterns" }, { text: "Optimization Tips" }],
    },
  },
  "updates-release-roadmap": {
    title: "Updates, Release & Roadmap",
    category: "academy",
    lastUpdated: "August 20, 2025",
    sidebar: [
      { id: "latest-updates", title: "Latest Updates" },
      { id: "roadmap", title: "Product Roadmap" },
    ],
    content: {
      "latest-updates": {
        title: "Latest Updates",
        content: "Stay up to date with the latest features and improvements.",
      },
      roadmap: {
        title: "Product Roadmap",
        content: "See what's coming next for MIRYA.",
      },
    },
    rightCard: {
      title: "Release Info",
      items: [{ text: "What's New" }, { text: "Upcoming Features" }],
    },
  },
  "community-hub": {
    title: "Community Hub",
    category: "academy",
    lastUpdated: "August 20, 2025",
    sidebar: [
      { id: "forums", title: "Community Forums" },
      { id: "templates", title: "Shared Templates" },
    ],
    content: {
      forums: {
        title: "Community Forums",
        content: "Connect with other MIRYA users and share experiences.",
      },
      templates: {
        title: "Shared Templates",
        content: "Access and share workflow templates with the community.",
      },
    },
    rightCard: {
      title: "Community",
      items: [{ text: "Join Forums" }, { text: "Template Library" }],
    },
  },
};

const AcademyDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const categorySlug = params.categories as string;
  const slug = params.slug as string;
  const [activeParent, setActiveParent] = useState("");

  const articleData = academyData[slug];
  const [activeSection, setActiveSection] = useState("");
  const [expandedItems, setExpandedItems] = useState(new Set());

  useEffect(() => {
    if (articleData && articleData.sidebar.length > 0) {
      const firstItem = articleData.sidebar[0];
      if (firstItem.subItems && firstItem.subItems.length > 0) {
        setActiveSection(firstItem.subItems[0].id);
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
  const toggleExpand = (itemId) => {
    if (expandedItems.has(itemId)) {
      setExpandedItems(new Set());
      setActiveParent(""); 
    } else {
      setExpandedItems(new Set([itemId]));
      setActiveParent(itemId); 
    }
  };

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  const hasActiveChild = (item) => {
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
          <div className="lg:col-span-3 sticky top-6">
            <div className="py-4">
              <h2 className="text-[#FFFFFF99] text-[14px] font-normal leading-4 mb-4">
                {articleData.title}
              </h2>
              <nav className="space-y-2">
                {articleData.sidebar.map((item) => {
                  const isParentActive =
                    activeSection === item.id && !item.subItems;
                  const hasActiveSubItem = hasActiveChild(item);
                  const isExpanded = expandedItems.has(item.id);
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
                        className={`w-full max-w-[233px] text-left px-2 py-3 rounded-lg text-[14px] leading-5 font-normal transition-all mb-4 ${
                          activeParent === item.id || activeSection === item.id
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
                              className={`w-full max-w-[211px] whitespace-nowrap  text-left px-2 py-2 rounded-lg text-[14px] leading-5 font-light transition-all relative ${
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
                  <h2 className="text-[20px] leading-6 font-medium  mb-4">
                    {currentContent.heading}
                  </h2>
                </div>
                <div>
                  <p className="text-[16px] leading-5 font-normal text-[#FFFFFFCC]">
                    {currentContent.content}
                  </p>
                </div>

                <div>
                  <p className="text-[16px] leading-5  text-[#FFFFFFCC] mb-12 w-full max-w-[680px]">
                    {currentContent.heading_content}
                  </p>
                </div>

                {currentContent.subsections &&
                  currentContent.subsections.map((subsection, idx) => (
                    <div key={idx} className="space-y-5">
                      <h2 className=" text-[24px] leading-8 font-semibold">
                        {subsection.title}
                      </h2>
                      <p className="text-[16px] leading-6 font-normal w-full max-w-[661px]">
                        {subsection.content}
                      </p>

                      {subsection.features && (
                        <p className="text-[16px] leading-5 mb-5 text-white">
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

                      {/* First Bullet Points */}
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
                          <h3 className=" text-[24px] leading-8 font-semibold mb-5">
                            {subsection.secondSection.subHeading}
                          </h3>
                          <p className="text-[16px] leading-6 font-normal mt-4 text-white mb-6 w-full max-w-[680px]">
                            {subsection.secondSection.subHeadingContent}
                          </p>

                          {subsection.secondSection.features && (
                            <p className=" mb-3 mt-6 text-[16px] leading-5  text-white">
                              {subsection.secondSection.features}
                            </p>
                          )}
                          <ul className="space-y-2 ml-5">
                            {subsection.secondSection.bulletPoints.map(
                              (point, idx) => (
                                <li
                                  key={idx}
                                  className="text-[16px] leading-6 list-disc text-[#F4F7FF]"
                                >
                                  <span className="font-semibold text-[16px] leading-6 text-white">
                                    {point.title}
                                  </span>
                                  {" "}
                                  <span className="font-normal text-[16px] leading-6">
                                    {point.description}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>

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

          {/* Right Side Card */}
          <div className="lg:col-span-2 mt-[120px]  sticky top-6">
            <div className="space-y-3">
              <h3 className="text-white text-[16px] font-medium leading-5 mb-4">
                {articleData.rightCard.title}
              </h3>
              <div className="space-y-3">
                {articleData.rightCard.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start  text-[16px] text-[#FFFFFF99] leading-5 hover:text-[#0274FE] transition-colors cursor-pointer"
                  >
                    <span className="leading-6">{item.text}</span>
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
