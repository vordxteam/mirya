
"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/pagination";

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

const testimonials = [
    {
        review:
            "The easiest automation tool we've ever used. Our team learned it in one day. A tool that works exactly with the systems we already have no integrations needed. We white-labeled MIRYA and now deliver automation to our clients under our brand. Game-changing.",
        name: "David Anderson",
        designation: "Director",
        image: "/images/testimonial-user.png",
    },
    {
        review:
            "The easiest automation tool we've ever used. Our team learned it in one day. A tool that works exactly with the systems we already have no integrations needed. We white-labeled MIRYA and now deliver automation to our clients under our brand. Game-changing.",
        name: "David Anderson",
        designation: "Director",
        image: "/images/testimonial-user.png",
    },
    {
        review:
            "The easiest automation tool we've ever used. Our team learned it in one day. A tool that works exactly with the systems we already have no integrations needed. We white-labeled MIRYA and now deliver automation to our clients under our brand. Game-changing.",
        name: "David Anderson",
        designation: "Director",
        image: "/images/testimonial-user.png",
    },
    {
        review:
            "The easiest automation tool we've ever used. Our team learned it in one day. A tool that works exactly with the systems we already have no integrations needed. We white-labeled MIRYA and now deliver automation to our clients under our brand. Game-changing.",
        name: "David Anderson",
        designation: "Director",
        image: "/images/testimonial-user.png",
    },
    {
        review:
            "Seamlessly streamlines our workflow, saving us countless hours each week. The intuitive interface means no steep learning curve, and the customization options allow us to tailor it to our exact needs. Our productivity has soared since adopting this tool.",
        name: "Samantha Lee",
        designation: "Product Manager",
        image: "/images/testimonial-user.png",
    },
    {
        review:
            "This platform transformed how we manage projects. The real-time updates and automated reminders keep our team aligned and on schedule. Plus, the dedicated customer support team ensures any questions are promptly addressed.",
        name: "Carlos Martinez",
        designation: "Operations Lead",
        image: "/images/testimonial-user.png",
    },
];

// Chunks array into groups of `size` — NO padding, last chunk can be smaller
function chunkArray<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}

function TestimonialCard({
    review,
    name,
    designation,
    image,
}: {
    review: string;
    name: string;
    designation: string;
    image: string;
}) {
    const [hovered, setHovered] = React.useState(false);
    const [dots] = React.useState(() =>
        Array.from({ length: 12 }, (_, i) => ({
            id: i, x: Math.random() * 90 + 5, y: Math.random() * 90 + 5,
        }))
    );
    return (
        <motion.div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            variants={cardVariants}
            className="relative overflow-hidden flex sm:min-h-[432px] min-h-[300px] flex-col justify-between rounded-[20px] sm:px-6 px-4 sm:py-8 py-4"
            style={{
                background: "linear-gradient(180deg, #1F1B48 0%, #00041E 100%)",
            }}
        >
            {hovered && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    {dots.map((d, i) => dots.slice(i + 1).map(d2 => (
                        <motion.line key={`${d.id}-${d2.id}`} x1={`${d.x}%`} y1={`${d.y}%`} x2={`${d2.x}%`} y2={`${d2.y}%`}
                            stroke="rgba(156,150,227,0.25)" strokeWidth="0.5"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} />
                    )))}
                    {dots.map(d => (
                        <motion.circle key={d.id} cx={`${d.x}%`} cy={`${d.y}%`} r="2" fill="rgba(156,150,227,0.7)"
                            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} />
                    ))}
                </svg>
            )}
            <p className="text-[#F4F7FF] sm:text-[18px] text-[14px] leading-6 font-normal tracking-[-0.01em] max-w-[310px]">
                {review}
            </p>

            <div className="flex items-end justify-between gap-4">
                <div>
                    <h3 className="text-white text-[18px] leading-6 font-semibold">
                        {name}
                    </h3>
                    <p className="text-[#CAC9D1] text-[12px] leading-4 font-light">
                        {designation}
                    </p>
                </div>

                <div className="relative h-[40px] w-[40px] shrink-0 overflow-hidden rounded-full">
                    <Image
                        src="/images/author.svg"
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </motion.div>
    );
}

export default function NewTestimonials(): React.ReactElement {
    const { t } = useTranslation("home");

    const translatedTestimonials = t("newHome.newTestimonials.items", {
        returnObjects: true,
    }) as Array<Pick<(typeof testimonials)[number], "review" | "name" | "designation">>;

    // Safe merge — if translation index doesn't exist, fall back to original
    const localizedTestimonials = testimonials.map((testimonial, index) => ({
        ...testimonial,
        ...(Array.isArray(translatedTestimonials) && translatedTestimonials[index]
            ? translatedTestimonials[index]
            : {}),
    }));

    // Desktop: 6 cards per slide
    const testimonialSlides = chunkArray(localizedTestimonials, 6);

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

            {/* Blue glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
                <div className="rounded-[68.75px] opacity-[0.6] bg-[#5935E94D] blur-[90px] w-[458px] h-[318px]" />
            </div>

            {/* Globe background */}
            <div className="absolute inset-0 z-0 flex justify-center pointer-events-none">
                <div className="mt-[290px] h-[500px] w-[500px] bg-[url('/images/globe.png')] bg-contain bg-center bg-no-repeat opacity-80" />
            </div>

            <div
                className="relative z-10 mx-auto px-5 lg:px-[164px] py-[80px]"
                style={{ maxWidth: "1440px" }}
            >
                {/* Side vertical lines */}
                <Image
                    src="/images/new-lines.svg"
                    alt=""
                    width={577}
                    height={895}
                    className="pointer-events-none absolute left-0 top-[198px] z-0 hidden h-[600px] w-auto lg:block"
                />
                <Image
                    src="/images/new-lines.svg"
                    alt=""
                    width={577}
                    height={895}
                    className="pointer-events-none absolute right-0 top-[198px] z-0 hidden h-[600px] w-auto scale-x-[-1] lg:block"
                />

                {/* Header */}
                <motion.div
                    className="relative z-10 flex flex-col items-center gap-4 text-center mb-[64px]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.div className="flex items-center gap-3" variants={itemVariants}>
                        <Image src="/images/label1-new.svg" alt="" width={20} height={20} />
                        <span className="text-[#959EFE] text-[20px] leading-6 font-normal tracking-widest uppercase">
                            {t("newHome.newTestimonials.badge")}
                        </span>
                        <Image src="/images/label1-new.svg" alt="" width={20} height={20} />
                    </motion.div>

                    <motion.h2
                        className="text-white sm:text-[40px] text-[32px] md:text-[48px] font-normal leading-10 sm:leading-[48px] md:leading-[56px] max-w-[606px]"
                        variants={itemVariants}
                    >
                        {t("newHome.newTestimonials.title")}
                    </motion.h2>

                    <motion.p
                        className="text-[#CAC9D1] sm:text-[18px] text-[14px] leading-6 max-w-[721px]"
                        variants={itemVariants}
                    >
                        {t("newHome.newTestimonials.description")}
                    </motion.p>
                </motion.div>

                {/* ── sm and above: 6 cards per slide ── */}
                <motion.div
                    className="relative z-10 w-full min-w-0 hidden sm:block"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={24}
                        loop={true}
                        speed={800}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{
                            clickable: true,
                            el: ".testimonial-pagination",
                            bulletClass: "testimonial-bullet",
                            bulletActiveClass: "testimonial-bullet-active",
                        }}
                        className="testimonial-swiper w-full"
                    >
                        {testimonialSlides.map((slide, slideIndex) => (
                            <SwiperSlide key={slideIndex}>
                                <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6">
                                    {slide.map((testimonial, index) => (
                                        <TestimonialCard
                                            key={`desktop-${slideIndex}-${index}`}
                                            review={testimonial.review}
                                            name={testimonial.name}
                                            designation={testimonial.designation}
                                            image={testimonial.image}
                                        />
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="testimonial-pagination mt-[64px] flex items-center justify-center gap-1" />
                </motion.div>

                {/* ── below sm: 1 card per slide carousel ── */}
                <motion.div
                    className="relative z-10 w-full min-w-0 sm:hidden"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={16}
                        loop={true}
                        speed={800}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{
                            clickable: true,
                            el: ".testimonial-pagination-mobile",
                            bulletClass: "testimonial-bullet",
                            bulletActiveClass: "testimonial-bullet-active",
                        }}
                        className="testimonial-swiper w-full"
                    >
                        {localizedTestimonials.map((testimonial, index) => (
                            <SwiperSlide key={`mobile-${index}`}>
                                <TestimonialCard
                                    review={testimonial.review}
                                    name={testimonial.name}
                                    designation={testimonial.designation}
                                    image={testimonial.image}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="testimonial-pagination-mobile mt-10 flex items-center justify-center gap-1" />
                </motion.div>
            </div>

            <style jsx global>{`
                .testimonial-swiper {
                    width: 100%;
                    max-width: 100%;
                    overflow: hidden;
                }

                .testimonial-swiper .swiper-wrapper {
                    width: 100%;
                }

                .testimonial-swiper .swiper-slide {
                    width: 100% !important;
                }

                .testimonial-pagination .testimonial-bullet,
                .testimonial-pagination-mobile .testimonial-bullet {
                    display: block;
                    width: 109px;
                    height: 3px;
                    background: #1c263b99;
                    opacity: 1;
                    border-radius: 999px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .testimonial-pagination .testimonial-bullet-active,
                .testimonial-pagination-mobile .testimonial-bullet-active {
                    background: #4f60fa;
                    box-shadow: 0px 0px 12px 0px #3973e9a3;
                }

                @media (max-width: 1023px) {
                    .testimonial-pagination .testimonial-bullet {
                        width: 72px;
                    }
                }

                @media (max-width: 640px) {
                    .testimonial-pagination-mobile .testimonial-bullet {
                        width: 44px;
                    }
                }
            `}</style>
        </section>
    );
}