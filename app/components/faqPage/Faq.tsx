"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

// FIX: Define interfaces to resolve the implicit 'any' types
interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSection {
  category: string;
  description: string;
  questions: FaqItem[];
}

const Faq = () => {
  const { t } = useTranslation("faq");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const faqSections = (t("sections", { returnObjects: true }) || []) as FaqSection[];

  const toggleQuestion = (questionId: string) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <div className="max-w-[1440px] m-auto">
      <div className="px-5 sm:px-10 md:px-[20] py-[60px] relative">
        <div className="mt-8">
          {faqSections.map((section, sectionIndex) => (
            <div key={`section-${sectionIndex}`} className="mb-12 md:flex md:gap-10">
              {/* Sticky Section Header */}
              <div className="md:w-1/3 shrink-0">
                <div className="sticky top-20">
                  <h2 className="text-white text-2xl md:text-[32px] font-medium leading-9 tracking-[-1.44px]">
                    {section.category}
                  </h2>
                  <p className="text-[#CAC9D1] text-sm mt-3 max-w-[413px] leading-5">
                    {section.description}
                  </p>
                </div>
              </div>

              {/* Questions */}
              <div className="mt-6 md:mt-0 md:w-2/3 space-y-6">
                {section.questions.map((item: FaqItem, itemIndex: number) => {
                  // Create a unique ID using the section index and the question index
                  const uniqueId = `q-${sectionIndex}-${itemIndex}`;

                  return (
                    <div
                      key={uniqueId}
                      className="rounded-xl p-[0.5]"
                      style={{
                        background:
                          "linear-gradient(270deg, #00031C 16.47%, #8EA0E0 48.87%, #00031C 78.17%)",
                      }}
                    >
                      <div className="bg-[#080E34] rounded-xl overflow-hidden transition-all duration-500 hover:border-[#4F60FA] p-6">
                        <button
                          onClick={() => toggleQuestion(uniqueId)}
                          className="w-full flex items-center justify-between text-left cursor-pointer"
                        >
                          <span className="text-[#F4F7FF] text-[20px] font-normal">
                            {item.question}
                          </span>
                          <div className="shrink-0 w-6 h-6 rounded-md bg-[#0274FE] flex items-center justify-center transition-all duration-300">
                            {openQuestion === uniqueId ? (
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
                            openQuestion === uniqueId
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          } overflow-hidden`}
                        >
                          <div className="pt-3 text-[#CAC9D1] font-light text-[16px] leading-5">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;