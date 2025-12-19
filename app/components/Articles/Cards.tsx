// import Image from "next/image";
// import React from "react";

// const Cards = () => {
//   const cardsData = [
//     {
//       id: 1,
//       icon: "/images/icon3.svg",
//       title: "Getting Started",
//       description:
//         "MIRYA runs in the cloud and works on any modern device with an internet connection. No servers, heavy setup, or installation required — j...",
//       linkText: "Learn More",
//     },
//     {
//       id: 2,
//       icon: "/images/academy2.svg",
//       title: "MIRYA Tutorials",
//       description:
//         "You can easily edit your company, billing, and user details in the Account Settings panel. All updates apply instantly and are securely encryp...",
//       linkText: "Learn More",
//     },
//     {
//       id: 3,
//       icon: "/images/academy3.svg",
//       title: "Process Use Cases",
//       description:
//        "Start by exploring pre-built workflows, connecting your apps, and recording your first process. MIRYA guides you step-by-step so you can auto...",
//       linkText: "Learn More",
//     },
//     {
//       id: 4,
//       icon: "/images/academy4.svg",
//       title: "Best Practices",
//       description:
//         "MIRYA connects seamlessly with ERP, CRM, HR, financial systems, shared mailboxes, databases, and legacy apps. Use API, triggers, forms, or dire...",
//       linkText: "Learn More",
//     },
//     {
//       id: 5,
//       icon: "/images/icon6.svg",
//       title: "Trouble Shooting & Support Guides",
//       description:
//         "Visit MIRYA Academy for tutorials, templates, best practices, and video walkthroughs. Learn how to...",
//       linkText: "Learn More",
//     },
//     {
//       id: 6,
//       icon: "/images/academy5.svg",
//       title: "Updates, Release & Roadmap",
//       description:
//         "Our support team and help center are available anytime. Report issues, request debugging assistance, or schedule a live troubleshooting se...",
//       linkText: "Learn More",
//     },
//     {
//       id: 7,
//       icon: "/images/icon7.svg",
//       title: "Community Hub",
//       description:
//         "MIRYA connects seamlessly with ERP, CRM, HR, financial systems, shared mailboxes, databases, and legacy apps. Use API, triggers, forms, or dire...",
//       linkText: "Learn More",
//     },
  
//   ];

//   return (
//     <div className="bg-[#00031C] relative z-10">
//       <div className="max-w-[1440px] m-auto px-5 sm:px-10 lg:px-20 pb-[60px] sm:pt-[60px] pt-0 overflow-hidden relative">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-[60px]">
//           {cardsData.map((card) => (
//             <div key={card.id}>
//               <div
//                 className="rounded-xl p-0.5 h-full"
//                 style={{
//                   background:
//                     "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)",
//                 }}
//               >
//                 <div className="bg-[#050A29] overflow-hidden relative p-5 h-full">
//                   <div className="absolute right-[-70px] bottom-[21px]">
//                     <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
//                   </div>
//                   <div className="relative z-20 flex flex-col items-start justify-between h-full space-y-6">
//                     <div>
//                       <Image
//                         src={card.icon}
//                         width={56}
//                         height={56}
//                         alt="icon"
//                       />
//                     </div>
//                     <div className="space-y-3">
//                       <h1 className="text-[#F4F7FF] text-[20px] sm:text-[24px] font-medium leading-6 sm:leading-[30px]">
//                         {card.title}
//                       </h1>
//                       <p className="text-[14px] font-normal leading-5 text-[#F4F7FF99]">
//                         {card.description}
//                       </p>
//                     </div>
//                     <div className="flex items-center justify-between w-full cursor-pointer">
//                       <button className="text-[#0F73FE] text-[16px] font-normal leading-5 cursor-pointer">
//                         {card.linkText}
//                       </button>
//                       <div>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                         >
//                           <path
//                             d="M5 12H19M19 12L12 5M19 12L12 19"
//                             stroke="#0F73FE"
//                             strokeWidth="1.5"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;
// components/Cards.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cards = () => {
  const cardsData = [
    {
      id: 1,
      slug: "getting-started",
      category: "academy", // Add category field
      icon: "/images/icon3.svg",
      title: "Getting Started",
      description:
        "Set up Mirya quickly and start automating in minutes. Learn the basics, install the agent, and run your first workflow with confidence.",
      linkText: "Learn More",
    },
    {
      id: 2,
      slug: "mirya-tutorials",
      category: "academy",
      icon: "/images/academy2.svg",
      title: "MIRYA Tutorials",
      description:
        "Step-by-step guides to build, test, and scale automations. From beginner workflows to advanced logic, learn Mirya the practical way.",
      linkText: "Learn More",
    },
    {
      id: 3,
      slug: "process-use-cases",
      category: "academy",
      icon: "/images/academy3.svg",
      title: "Process Use Cases",
      description:
        "Step-by-step guides to build, test, and scale automations. From beginner workflows to advanced logic, learn Mirya the practical way.",
      linkText: "Learn More",
    },
    {
      id: 4,
      slug: "best-practices",
      category: "academy",
      icon: "/images/academy4.svg",
      title: "Best Practices",
      description:
        "Explore real-world automation examples across finance, HR, operations, and more. See how Mirya handles end-to-end processes in production en...",
      linkText: "Learn More",
    },
    {
      id: 5,
      slug: "troubleshooting",
      category: "academy",
      icon: "/images/icon6.svg",
      title: "Trouble Shooting & Support Guides",
      description:
        "Quickly diagnose and resolve automation issues.Find solutions for common errors, logs, debuggi...",
      linkText: "Learn More",
    },
    {
      id: 6,
      slug: "updates-release-roadmap",
      category: "academy",
      icon: "/images/academy5.svg",
      title: "Updates, Release & Roadmap",
      description:
        "Stay informed about new features,improvements, and fixes.See what’s shipping now, what’s next,  and what the community is shaping.",
      linkText: "Learn More",
    },
    {
      id: 7,
      slug: "community-hub",
      category: "academy",
      icon: "/images/icon7.svg",
      title: "Community Hub",
      description:
        "Connect with other Mirya users and automation experts. Ask questions, share workflows, and learn from real production experiences.",
      linkText: "Learn More",
    },
  ];

  return (
    <div className="bg-[#00031C] relative z-10">
      <div className="max-w-[1440px] m-auto px-5 sm:px-10 lg:px-20 pb-[60px] sm:pt-[60px] pt-0 overflow-hidden relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-[60px]">
          {cardsData.map((card) => (
            <Link
              key={card.id}
              href={`/articles/${card.category}/${card.slug}`}
              className="block h-full group"
            >
              <div
                className="rounded-xl p-0.5 h-full transition-transform duration-300 hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)",
                }}
              >
                <div className="bg-[#050A29] overflow-hidden relative p-5 h-full">
                  <div className="absolute right-[-70px] bottom-[21px]">
                    <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
                  </div>
                  <div className="relative z-20 flex flex-col items-start justify-between h-full space-y-6">
                    <div>
                      <Image
                        src={card.icon}
                        width={56}
                        height={56}
                        alt="icon"
                      />
                    </div>
                    <div className="space-y-3">
                      <h1 className="text-[#F4F7FF] text-[20px] sm:text-[24px] font-medium leading-6 sm:leading-[30px]">
                        {card.title}
                      </h1>
                      <p className="text-[14px] font-normal leading-5 text-[#F4F7FF99]">
                        {card.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <span className="text-[#0F73FE] text-[16px] font-normal leading-5 group-hover:underline">
                        {card.linkText}
                      </span>
                      <div className="transition-transform group-hover:translate-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="#0F73FE"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
