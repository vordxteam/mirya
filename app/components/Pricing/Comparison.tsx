import GradientButton from "@/app/ui/GradientButton";
import Image from "next/image";
import React from "react";

export default function Comparison() {
  const plans = [
    {
      id: 1,
      title: "Basic plan",
      amount: "€ 299,",
      period: " / month",
    },
    {
      id: 2,
      title: "Standard plan",
      amount: "€ 499,",
      period: " / month",
    },
    {
      id: 3,
      title: "Premium plan",
      amount: "€ 799,",
      period: " / month",
    },
  ];

  const comparisonData = [
    {
      category: "Dashboard & Tracking",
      features: [
        {
          name: "Transaction Tracking",
          basic: { type: "icon", value: "true" },
          standard: { type: "icon", value: "true" },
          premium: { type: "icon", value: "true" },
        },
        {
          name: "Budget Management",
          basic: { type: "icon", value: "true" },
          standard: { type: "icon", value: "true" },
          premium: { type: "icon", value: "true" },
        },
        {
          name: "Dashboard Insights",
          basic: { type: "icon", value: "true" },
          standard: { type: "icon", value: "true" },
          premium: { type: "text", value: "Premium Customization" },
        },
        {
          name: "Expense Analysis",
          basic: { type: "icon", value: "false" },
          standard: { type: "text", value: "Advanced" },
          premium: { type: "icon", value: "true" },
        },
      ],
    },
    {
      category: "Customer Support",
      features: [
        {
          name: "Phone Support",
          basic: { type: "icon", value: "false" },
          standard: { type: "icon", value: "false" },
          premium: { type: "icon", value: "true" },
        },
      ],
    },
    {
      category: "Advanced Features",
      features: [
        {
          name: "Transaction Categorization",
          basic: { type: "icon", value: "false" },
          standard: { type: "icon", value: "false" },
          premium: { type: "text", value: "Advanced" },
        },
        {
          name: "Budget Tracking",
          basic: { type: "icon", value: "true" },
          standard: { type: "text", value: "Comprehensive" },
          premium: { type: "text", value: "Advanced" },
        },
        {
          name: "Contract Reminder",
          basic: { type: "icon", value: "true" },
          standard: { type: "icon", value: "true" },
          premium: { type: "icon", value: "true" },
        },
        {
          name: "Document Storage",
          basic: { type: "icon", value: "false" },
          standard: { type: "text", value: "Advanced" },
          premium: { type: "icon", value: "true" },
        },
        {
          name: "Account Aggregation",
          basic: { type: "icon", value: "true" },
          standard: { type: "icon", value: "true" },
          premium: { type: "text", value: "Premium Customization" },
        },
      ],
    },
  ];

  const renderFeatureValue = (feature: any, plan: string) => {
    const value = feature[plan];
    if (value.type === "icon") {
      return (
        <Image
          src={`/images/${value.value}.png`}
          alt={value.value}
          height={28}
          width={28}
        />
      );
    }
    return (
      <p className="text-[#F4F7FF] heading-4 font-medium text-start">
        {value.value}
      </p>
    );
  };

  return (
    <div className="pt-[60px] max-w-[1440px] mx-auto flex flex-col items-center relative">
      {/* Background Blur - unchanged */}
      <div className="absolute top-0 ">
        <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] z-[-1000] blur-[50px] w-[307px] h-[94px]"></div>
      </div>

      {/* Header Section - unchanged */}
      <div className="pb-3 flex items-center gap-5">
        <Image src="/images/left-line.png" width={73} height={8} alt="line" />
        <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
          Pricing Comparison
        </h1>
        <Image src="/images/right-line.png" width={73} height={8} alt="line" />
      </div>

      {/* Main Heading - unchanged */}
      <h1 className="heading-1 font-medium leading-10 sm:leading-[50px] md:leading-[72px] tracking-[-1.44px] max-w-[686px] w-full text-center pb-3 sm:pb-6">
        Choose the plan that fits your workflow
      </h1>

      {/* Subheading - unchanged */}
      <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 pb-5 sm:pb-10 text-center">
        Simple, transparent pricing with all the essentials you need to build,
        publish, and scale.
      </p>

      {/* Pricing Cards - unchanged */}
      <div className="pt-16 grid grid-cols-8">
        <div className="sm:col-start-2 xl:col-start-4 col-span-6">
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-[97px]">
            {plans.map((items) => (
              <div key={items.id} className="space-y-3">
                <p className="body-3 font-regular text-[#F4F7FF]">
                  {items.title}
                </p>
                <div className="flex items-end">
                  <h1 className="text-[40px] font-medium leading-[48px] text-transparent bg-clip-text bg-gradient-to-r from-[#789EFF] via-[#3A38AA] to-[#3A38AA]">
                    {items.amount}
                  </h1>
                  <p className="heading-5 font-regular text-[#73799B]">
                    {items.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Tables from JSON */}
      <div className="pt-10 flex flex-col gap-10 px-3 sm:px-[80px] w-full rounded-2xl pb-[60px]">
        {comparisonData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="flex flex-col gap-3">
            {/* Section Header */}
            <div className="p-4 bg-gradient-to-b from-[#07072680] via-[#121866CC] to-[#121866CC] rounded-2xl text-[#F4F7FF] heading-3 font-medium">
              {section.category}
            </div>

            {/* Features */}
            {section.features.map((feature, featureIndex) => (
              <div
                key={featureIndex}
                className="flex flex-col sm:grid sm:grid-cols-4 bg-[#FFFFFF14] rounded-lg items-center gap-4 sm:gap-0 p-4 sm:p-0"
              >
                {/* Feature Name */}
                <p className="p-4 text-[#F4F7FF] heading-4 font-medium sm:text-start w-full">
                  {feature.name}
                </p>

                {/* Basic Plan */}
                <div className="flex justify-between sm:justify-center w-full sm:w-auto">
                  <span className="sm:hidden text-[#F4F7FF]">Basic</span>
                  {renderFeatureValue(feature, "basic")}
                </div>

                {/* Standard Plan */}
                <div className="flex justify-between sm:justify-center w-full sm:w-auto">
                  <span className="sm:hidden text-[#F4F7FF]">Standard</span>
                  {renderFeatureValue(feature, "standard")}
                </div>

                {/* Premium Plan */}
                <div className="flex justify-between sm:justify-center w-full sm:w-auto">
                  <span className="sm:hidden text-[#F4F7FF]">Premium</span>
                  {renderFeatureValue(feature, "premium")}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

       <div className="pb-15 grid grid-cols-8">
        <div className="sm:col-start-2 xl:col-start-4 col-span-6">
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-[97px]">
            <GradientButton label="Get Started" bgColor="#0274FE" href="#"/>
        <GradientButton label="Get Started" bgColor="#0274FE" href="#"/>
        <GradientButton label="Get Started" bgColor="#0274FE" href="#"/>
          </div>
        </div>
      </div>


              <div className="sm:col-start-2 xl:col-start-4 col-span-6">
      <div className="sm:col-start-2 xl:col-start-4 col-span-6">
        
      </div>
      </div>
    </div>
  );
}
