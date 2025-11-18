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
    {
      id: 3,
      category: "Security Protection",
      description:
        "Outlines security measures such as data encryption and backup practices to ensure user safety.",
      questions: [
        {
          id: 5,
          question: "How secure is my data with MIRYA?",
          answer:
            "MIRYA uses enterprise-grade security, including end-to-end encryption, secure cloud infrastructure, and strict access controls to protect your data at every step.",
        },
        {
          id: 6,
          question: "Does MIRYA encrypt my information?",
          answer:
            "Yes. All sensitive information is encrypted both in transit (SSL/TLS) and at rest. This ensures your data stays protected against unauthorized access.",
        },
        {
          id: 7,
          question: "Do you create backups of my data?",
          answer:
            "Automatic daily backups are maintained to prevent data loss. In case of any unexpected issue, your data can be restored safely.",
        },
        {
          id: 8,
          question: "Who can access my data inside MIRYA?",
          answer:
            "Only authorized personnel with strict role-based permissions can access system-level data. MIRYA does not sell, share, or expose your information to third parties.",
        },
      ],
    },

    {
      id: 4,
      category: "Customer Support",
      description:
        "Details support options, including self-help resources and contact methods for assistance.",
      questions: [
        {
          id: 5,
          question: "What support options does MIRYA offer?",
          answer:
            "MIRYA provides 24/7 email support, live chat assistance, and a complete help center with guides, FAQs, and video tutorials.",
        },
        {
          id: 6,
          question: "How quickly can I get help if I face an issue?",
          answer:
            "Our response time is typically under 10 minutes on live chat and under 2 hours via email, depending on your plan.",
        },
        {
          id: 7,
          question: "Is there a dedicated support team for premium users?",
          answer:
            "Yes. Premium and enterprise users get priority support with faster response times and direct access to technical specialists.",
        },
        {
          id: 8,
          question: "Do you offer onboarding or training?",
          answer:
            "Absolutely. MIRYA provides guided onboarding sessions, step-by-step documentation, and personalized setup support to help you get started quickly.",
        },
      ],
    },
  ];

  const toggleQuestion = (questionId: any) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <div className="max-w-[1440px] m-auto">
      <div className="px-5 sm:px-10 md:px-[20] py-[60px] relative">
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
