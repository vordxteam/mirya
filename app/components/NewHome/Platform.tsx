// "use client";

// import Image from "next/image";
// import React from "react";
// import { motion, Variants } from "framer-motion";

// interface PlatformCard {
//   id: number;
//   title: string;
//   description: string;
//   icon: string;
// }

// const platformCards: PlatformCard[] = [
//   {
//     id: 1,
//     title: "No-code first, code when you want",
//     description:
//       "Business departments automate on their own. Developers add custom logic, APIs, and complex conditions whenever needed.",
//     icon: "/images/icons/platform-nocode.svg",
//   },
//   {
//     id: 2,
//     title: "AI agents as digital team members",
//     description:
//       "Not isolated chatbots. AI agents that understand processes, learn from users, and work autonomously within your existing workflows.",
//     icon: "/images/icons/platform-ai.svg",
//   },
//   {
//     id: 3,
//     title: "Secure on premise or hybrid",
//     description:
//       "Deploy entirely within your infrastructure. Your data never leaves your environment. GDPR and enterprise compliance by default.",
//     icon: "/images/icons/platform-secure.svg",
//   },
//   {
//     id: 4,
//     title: "Integrates with existing systems",
//     description:
//       "SAP, ERP, Excel, Outlook, web portals, and legacy applications. MIRYA works where your team already works.",
//     icon: "/images/icons/platform-integrates.svg",
//   },
//   {
//     id: 5,
//     title: "Enterprise governance & roles",
//     description:
//       "Granular role and permission models. Full audit trail. Centralised control with departmental autonomy.",
//     icon: "/images/icons/platform-governance.svg",
//   },
//   {
//     id: 6,
//     title: "Scalable implementation",
//     description:
//       "Training, enablement, and change management included. We don't hand you software we ensure adoption and ROI.",
//     icon: "/images/icons/platform-scalable.svg",
//   },
// ];

// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const cardVariants: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
// };

// const cardBorder =
//   "linear-gradient(270deg, #00031C 16.47%, #8EA0E0 48.87%, #00031C 78.17%)";

// function PlatformCardItem({ card }: { card: PlatformCard }) {
//   return (
//     <motion.div
//       variants={cardVariants}
//       className="relative rounded-2xl p-[1px] h-full"
//       style={{ background: cardBorder }}
//     >
//       <div
//         className="rounded-2xl h-full flex flex-col gap-3"
//         style={{
//           backgroundColor: "#050A29",
//           padding: "16px 12px",
//           boxShadow: "8px 8px 24px 0px #00D37F1A",
//         }}
//       >
//         {/* Icon */}
//         <div className="flex items-center gap-3">

//         <div className="flex-shrink-0">
//           <Image
//             src="/images/platform-icon.svg"
//             alt={card.title}
//             width={52}
//             height={52}
//           />
//         </div>

//         {/* Text */}
//         <div className="flex flex-col gap-2">
//           <h3 className="text-white text-[16px] font-normal leading-5">
//             {card.title}
//           </h3>
//           <p className="text-[#FFFFFF80] text-[12px] leading-4">
//             {card.description}
//           </p>
//         </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default function Platform(): React.ReactElement {
//   return (
//     <section className="relative bg-[#00031C] overflow-hidden">

//       {/* Top divider */}
//       <div className="flex justify-center">
//         <div
//           className="w-full opacity-80"
//           style={{
//             height: "1px",
//             background:
//               "linear-gradient(270deg, #00031C 16.47%, #8EA0E0 48.87%, #00031C 78.17%)",
//           }}
//         />
//       </div>

//       {/* Blue glow — behind heading */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
//         <div className="rounded-[68.75px] opacity-[0.6] bg-[#5935E94D] blur-[90px] w-[458px] h-[318px]" />
//       </div>

//       {/* Blue glow — center of section */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
//         <div className="rounded-[68.75px] opacity-[0.45] bg-[#5935E94D] blur-[100px] w-[500px] h-[500px]" />
//       </div>

//       <div
//         className="relative z-10 mx-auto px-5 md:px-[80px] py-[80px]"
//         style={{ maxWidth: "1440px" }}
//       >

//         {/* Header */}
//         <motion.div
//           className="flex flex-col items-center gap-4 text-center mb-[64px]"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//         >
//           <motion.div className="flex items-center gap-3" variants={itemVariants}>
//             <Image src="/images/label1-new.svg" alt="" width={20} height={20} />
//             <span className="text-[#959EFE] text-[20px] leading-6 font-normal tracking-widest uppercase">
//               PLATFORM
//             </span>
//             <Image src="/images/label1-new.svg" alt="" width={20} height={20} />
//           </motion.div>

//           <motion.h2
//             className="text-white text-[40px] md:text-[52px] font-normal leading-[1.1] tracking-[-0.01em]"
//             variants={itemVariants}
//           >
//             Enterprise grade. No code first.
//           </motion.h2>

//           <motion.p
//             className="text-[#CAC9D1] text-[18px] leading-[1.6] max-w-[520px]"
//             variants={itemVariants}
//           >
//             MIRYA is built for business teams to operate independently while
//             giving developers every hook they need to extend and customize.
//           </motion.p>
//         </motion.div>

//         {/* ── DESKTOP LAYOUT (lg+) ── */}
//         <motion.div
//           className="hidden lg:grid items-center gap-6"
//           style={{ gridTemplateColumns: "1fr auto 1fr" }}
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//         >

//           {/* LEFT COLUMN — cards 1, 3, 5 */}
//           <div className="flex flex-col gap-6">
//             <PlatformCardItem card={platformCards[0]} />
//             <PlatformCardItem card={platformCards[2]} />
//             <PlatformCardItem card={platformCards[4]} />
//           </div>

//           {/* CENTER — node image */}
//           <motion.div
//             variants={itemVariants}
//             className="flex items-center justify-center px-4"
//           >
//             <Image
//               src="/images/platform-nodes.png"
//               alt="MIRYA Platform"
//               width={340}
//               height={480}
//               className="w-full max-w-[340px] h-auto"
//             />
//           </motion.div>

//           {/* RIGHT COLUMN — cards 2, 4, 6 */}
//           <div className="flex flex-col gap-6">
//             <PlatformCardItem card={platformCards[1]} />
//             <PlatformCardItem card={platformCards[3]} />
//             <PlatformCardItem card={platformCards[5]} />
//           </div>

//         </motion.div>

//         {/* ── MOBILE / TABLET LAYOUT (below lg) ── */}
//         <motion.div
//           className="flex lg:hidden flex-col gap-10"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//         >
//           {/* Center image on mobile */}
//           <motion.div variants={itemVariants} className="flex justify-center">
//             <Image
//               src="/images/platform-nodes.png"
//               alt="MIRYA Platform"
//               width={280}
//               height={380}
//               className="w-full max-w-[280px] h-auto"
//             />
//           </motion.div>

//           {/* All 6 cards stacked in 2-col grid on sm, single col on xs */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {platformCards.map((card) => (
//               <PlatformCardItem key={card.id} card={card} />
//             ))}
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

interface PlatformCard {
    id: number;
    title: string;
    description: string;
    icon: string;
}

const platformCards: PlatformCard[] = [
    {
        id: 1,
        title: "No-code first, code when you want",
        description:
            "Business departments automate on their own. Developers add custom logic, APIs, and complex conditions whenever needed.",
        icon: "/images/icons/platform-nocode.svg",
    },
    {
        id: 2,
        title: "AI agents as digital team members",
        description:
            "Not isolated chatbots. AI agents that understand processes, learn from users, and work autonomously within your existing workflows.",
        icon: "/images/icons/platform-ai.svg",
    },
    {
        id: 3,
        title: "Secure on premise or hybrid",
        description:
            "Deploy entirely within your infrastructure. Your data never leaves your environment. GDPR and enterprise compliance by default.",
        icon: "/images/icons/platform-secure.svg",
    },
    {
        id: 4,
        title: "Integrates with existing systems",
        description:
            "SAP, ERP, Excel, Outlook, web portals, and legacy applications. MIRYA works where your team already works.",
        icon: "/images/icons/platform-integrates.svg",
    },
    {
        id: 5,
        title: "Enterprise governance & roles",
        description:
            "Granular role and permission models. Full audit trail. Centralised control with departmental autonomy.",
        icon: "/images/icons/platform-governance.svg",
    },
    {
        id: 6,
        title: "Scalable implementation",
        description:
            "Training, enablement, and change management included. We don't hand you software we ensure adoption and ROI.",
        icon: "/images/icons/platform-scalable.svg",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const cardBorder =
    "linear-gradient(270deg, #00031C 16.47%, #8EA0E0 48.87%, #00031C 78.17%)";

function PlatformCardItem({ card }: { card: PlatformCard }) {
    return (
        <motion.div
            variants={cardVariants}
            className="relative rounded-2xl p-[1px]"
            style={{ background: cardBorder }}
        >
            <div
                className="rounded-2xl flex flex-col gap-3"
                style={{
                    backgroundColor: "#050A29",
                    padding: "16px 12px",
                    boxShadow: "8px 8px 24px 0px #00D37F1A",
                }}
            >
                <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                        <Image
                            src="/images/platform-icon.svg"
                            alt={card.title}
                            width={52}
                            height={52}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-white text-[16px] font-normal leading-5">
                            {card.title}
                        </h3>
                        <p className="text-[#FFFFFF80] text-[12px] leading-4">
                            {card.description}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Platform(): React.ReactElement {
    const { t } = useTranslation("home");
    const translatedPlatformCards = t("newHome.platform.cards", {
        returnObjects: true,
    }) as Array<Pick<PlatformCard, "id" | "title" | "description">>;
    const localizedPlatformCards = platformCards.map((card) => {
        const translatedCard = translatedPlatformCards.find((item) => item.id === card.id);
        return translatedCard ? { ...card, ...translatedCard } : card;
    });

    return (
        <section className="relative bg-[#00031C] overflow-hidden">

            {/* Top divider */}
            <div className="flex justify-center">
                <div
                    className="w-full opacity-80"
                    style={{
                        height: "1px",
                        background:
                            "linear-gradient(270deg, #00031C 16.47%, #8EA0E0 48.87%, #00031C 78.17%)",
                    }}
                />
            </div>

            {/* Blue glow — behind heading */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
                <div className="rounded-[68.75px] opacity-[0.6] bg-[#5935E94D] blur-[90px] w-[458px] h-[318px]" />
            </div>

            {/* Blue glow — center of section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
                <div className="rounded-[68.75px] opacity-[0.45] bg-[#5935E94D] blur-[100px] w-[500px] h-[500px]" />
            </div>

            <div
                className="relative z-10 mx-auto px-5 md:px-[80px] py-[80px]"
                style={{ maxWidth: "1440px" }}
            >

                {/* Header */}
                <motion.div
                    className="flex flex-col items-center gap-4 text-center mb-[64px]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.div className="flex items-center gap-3" variants={itemVariants}>
                        <Image src="/images/label1-new.svg" alt="" width={20} height={20} />
                        <span className="text-[#959EFE] text-[20px] leading-6 font-normal tracking-widest uppercase">
                            {t("newHome.platform.badge")}
                        </span>
                        <Image src="/images/label1-new.svg" alt="" width={20} height={20} />
                    </motion.div>

                    <motion.h2
                        className="text-white text-[40px] md:text-[48px] font-normal leading-[1.1] tracking-[-0.01em]"
                        variants={itemVariants}
                    >
                        {t("newHome.platform.title")}
                    </motion.h2>

                    <motion.p
                        className="text-[#CAC9D1] text-[18px] leading-[1.6] max-w-[721px]"
                        variants={itemVariants}
                    >
                        {t("newHome.platform.description")}
                    </motion.p>
                </motion.div>

                {/* ── DESKTOP LAYOUT (lg+) ── */}
                <div className="hidden lg:block relative w-full" style={{ height: "520px" }}>

                    {/* CENTER IMAGE — absolutely centered */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Image
                                src="/images/platform-nodes.png"
                                alt={t("newHome.platform.imageAlt")}
                                width={300}
                            height={620}
                            className="h-auto"
                        />
                    </div>

                    {/* TOP LEFT */}
                    <div className="absolute" style={{ top: "20px", left: "120px", width: "calc(50% - 190px)" }}>
                        <PlatformCardItem card={localizedPlatformCards[0]} />
                    </div>

                    {/* TOP RIGHT */}
                    <div className="absolute" style={{ top: "20px", right: "120px", width: "calc(50% - 190px)" }}>
                        <PlatformCardItem card={localizedPlatformCards[1]} />
                    </div>

                    {/* MIDDLE LEFT */}
                    <div className="absolute" style={{ top: "50%", transform: "translateY(-50%)", left: "30px", width: "calc(50% - 190px)" }}>
                        <PlatformCardItem card={localizedPlatformCards[2]} />
                    </div>

                    {/* MIDDLE RIGHT */}
                    <div className="absolute" style={{ top: "50%", transform: "translateY(-50%)", right: "30px", width: "calc(50% - 190px)" }}>
                        <PlatformCardItem card={localizedPlatformCards[3]} />
                    </div>

                    {/* BOTTOM LEFT */}
                    <div className="absolute" style={{ bottom: "70px", left: "45px", width: "calc(50% - 190px)" }}>
                        <PlatformCardItem card={localizedPlatformCards[4]} />
                    </div>

                    {/* BOTTOM RIGHT */}
                    <div className="absolute" style={{ bottom: "70px", right: "50px", width: "calc(50% - 190px)" }}>
                        <PlatformCardItem card={localizedPlatformCards[5]} />
                    </div>

                </div>

                {/* ── MOBILE / TABLET LAYOUT (below lg) ── */}
                <motion.div
                    className="flex lg:hidden flex-col gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.div variants={itemVariants} className="flex justify-center">
                        <Image
                            src="/images/platform-nodes.png"
                            alt={t("newHome.platform.imageAlt")}
                            width={280}
                            height={380}
                            className="w-full max-w-[280px] h-auto"
                        />
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {localizedPlatformCards.map((card) => (
                            <PlatformCardItem key={card.id} card={card} />
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
