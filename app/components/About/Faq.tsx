"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqSections = [
    {
      id: 1,
      category: "General Questions",
      description:
        "Covers the basics of MIRYA, its purpose, sign-up process Free Trial, and available resources.",
      questions: [
        {
          id: 1,
          question: "What is MIRYA and how can it help my business?",
          answer:
            "MIRYA is a no-code automation platform that allows you to record, build, and run process automations — without programming knowledge. You can use it as SaaS, on-premise, or as a fully white-labeled solution. Once deployed, JENNY can work around the clock and scale to manage virtual workers.",
        },
        {
          id: 2,
          question: "Who can use MIRYA?",
          answer:
            "MIRYA is designed for businesses of all sizes, from startups to enterprises. Whether you're in finance, healthcare, retail, or any other industry, MIRYA can help automate repetitive tasks and streamline workflows.",
        },
        {
          id: 3,
          question: "Can you setup the first process for us?",
          answer:
            "Yes! Our team can help you set up your first automation process. We offer onboarding support and training to ensure you get the most out of MIRYA from day one.",
        },
        {
          id: 4,
          question: "How long does it take to get started?",
          answer:
            "You can get started with MIRYA in minutes. Simply sign up, record your workflow, and let MIRYA handle the rest. Most users have their first automation running within hours.",
        },
      ],
    },
    {
      id: 2,
      category: "Features and Plans",
      description:
        "Includes information on features in the Free Trial, plan flexibility, and compatibility with other software.",
      questions: [
        {
          id: 5,
          question: "How does the subscription work?",
          answer:
            "Choose the plan that fits your needs, start immediately, and upgrade or downgrade anytime. Our SaaS model is flexible (except white label) you can switch plans whenever you need.",
        },
        {
          id: 6,
          question: "Can I upgrade or downgrade my plan?",
          answer:
            "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and you'll be billed accordingly on your next billing cycle.",
        },
        {
          id: 7,
          question: "Is MIRYA compatible with other softwares?",
          answer:
            "MIRYA integrates seamlessly with most popular business applications and software. Our platform is designed to work across different systems, browsers, and environments.",
        },
        {
          id: 8,
          question: "What is the white label option and who is it for?",
          answer:
            "The white label option allows you to rebrand MIRYA as your own product. It's perfect for agencies, consultants, and businesses who want to offer automation solutions under their own brand.",
        },
      ],
    },
  ];

  const toggleQuestion = (questionId: any) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <div className="max-w-[1440px] m-auto">
      <div className="px-5 sm:px-10 md:px-20 py-[60px] relative">
        <div className="flex items-center justify-center flex-col">
          <div className="absolute -top-20">
            <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] blur-[50px] w-[181px] h-[94px]"></div>
          </div>
          {/* Top Title Row */}
          <div className="pb-3 flex items-center justify-center gap-5">
            <Image
              src="/images/left-line.png"
              width={73}
              height={8}
              alt="line"
            />
            <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal text-center">
              FAQs
            </h1>
            <Image
              src="/images/right-line.png"
              width={73}
              height={8}
              alt="line"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-[30px] sm:text-[48px] font-medium leading-[38px] sm:leading-14 tracking-[-1.44px] max-w-[548px] text-center pb-3 sm:pb-6">
            Get answers to your questions in our FAQ's
          </h1>

          {/* Subheading */}
          <p className="text-[#CAC9D1] text-[14px] sm:text-[16px] font-normal leading-5 pb-5 sm:pb-10 text-center max-w-[510px]">
            Find quick answers to your questions below, or reach out to our
            support team for more help!
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="mt-8">
          {faqSections.map((section) => (
            <div key={section.id} className="mb-12 md:flex md:gap-10">
              {/* Sticky Section Header */}
              <div className="md:w-1/3 shrink-0">
                <div className="sticky top-20">
                  {" "}
                  {/* top-20 adjusts space from top */}
                  <h2 className="text-white text-2xl md:text-[32px] font-medium leading-9 tracking-[-1.44px]">
                    {section.category}
                  </h2>
                  <p className="text-[#CAC9D1] text-sm md:text-base mt-3">
                    {section.description}
                  </p>
                </div>
              </div>

              {/* Questions */}
              <div className="mt-6 md:mt-0 md:w-2/3 space-y-6">
                {section.questions.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl p-[0.5]"
                    style={{
                      background:
                        "linear-gradient(270deg, #00031C 16.47%, #8EA0E0 48.87%, #00031C 78.17%)",
                    }}
                  >
                    <div className="bg-[#080E34] rounded-xl overflow-hidden transition-all duration-500 hover:border-[#4F60FA] p-6">
                      <button
                        onClick={() => toggleQuestion(item.id)}
                        className="w-full flex items-center justify-between text-left cursor-pointer"
                      >
                        <span className="text-[#F4F7FF] text-[20px] font-normal">
                          {item.question}
                        </span>
                        <div className="shrink-0 w-6 h-6 rounded-md bg-[#0274FE] flex items-center justify-center transition-all duration-300">
                          {openQuestion === item.id ? (
                            <span className="text-white text-lg font-normal">
                              −
                            </span>
                          ) : (
                            <span className="text-white text-lg font-normal">
                              +
                            </span>
                          )}
                        </div>
                      </button>

                      <div
                        className={`transition-all duration-300 ease-in-out ${
                          openQuestion === item.id
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        } overflow-hidden`}
                      >
                        <div className="pt-3 text-[#CAC9D1] text-sm md:text-base leading-relaxed">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
