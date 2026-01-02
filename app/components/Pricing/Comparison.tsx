"use client"

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
export default function Comparison() {
  const { t } = useTranslation("pricing");
  const columns = [
    { key: "mirya", label: t("comparison.columnHeaders.mirya") },
    { key: "n8n", label: t("comparison.columnHeaders.n8n") },
    {
      key: "powerAutomate",
      label: t("comparison.columnHeaders.powerAutomate"),
    },
    { key: "aiAgent", label: t("comparison.columnHeaders.aiAgent") },
  ];
  type FeatureValue =
    | string
    | {
        type: "icon";
        icon: "check" | "cross";
      };

  type ComparisonRow = {
    name: string;
    mirya?: FeatureValue;
    n8n?: FeatureValue;
    powerAutomate?: FeatureValue;
    aiAgent?: FeatureValue;
  };

  const comparisonData: ComparisonRow[] = [
    {
      name: t("comparison.rows.noCode"),
      mirya: { type: "icon", icon: "check" },
      n8n: t("comparison.rows.values.lowCode"),
      powerAutomate: t("comparison.rows.values.lowCode"),
      aiAgent: { type: "icon", icon: "cross" },
    },
    {
      name: t("comparison.rows.onPremise"),
      mirya: { type: "icon", icon: "check" },
      n8n: t("comparison.rows.values.selfHost"),
      powerAutomate: t("comparison.rows.values.mostlyCloud"),
      aiAgent: { type: "icon", icon: "cross" },
    },
    {
      name: t("comparison.rows.humanLike"),
      mirya: { type: "icon", icon: "check" },
      n8n: t("comparison.rows.values.no"),
      powerAutomate: t("comparison.rows.values.limitedUi"),
      aiAgent: { type: "icon", icon: "cross" },
    },
    {
      name: t("comparison.rows.recording"),
      mirya: { type: "icon", icon: "check" },
      n8n: t("comparison.rows.values.no"),
      powerAutomate: t("comparison.rows.values.no"),
      aiAgent: { type: "icon", icon: "cross" },
    },
    {
      name: t("comparison.rows.apiDependent"),
      n8n: t("comparison.rows.values.fullyWithoutApi"),
      powerAutomate: t("comparison.rows.values.apiWebhookDependent"),
      aiAgent: t("comparison.rows.values.apiConnectorRequired"),
      mirya: t("comparison.rows.values.llmApiBased"),
    },
    {
      name: t("comparison.rows.apiSupport"),
      mirya: { type: "icon", icon: "check" },
      n8n: t("comparison.rows.values.yes"),
      powerAutomate: t("comparison.rows.values.yes"),
      aiAgent: { type: "icon", icon: "check" },
    },
    {
      name: t("comparison.rows.autonomous"),
      mirya: { type: "icon", icon: "check" },
      n8n: t("comparison.rows.values.no"),
      powerAutomate: t("comparison.rows.values.partial"),
      aiAgent: { type: "icon", icon: "cross" },
    },
    {
      name: t("comparison.rows.aiDecision"),
      mirya: { type: "icon", icon: "check" },
      n8n: t("comparison.rows.values.pluginBased"),
      powerAutomate: t("comparison.rows.values.addOns"),
      aiAgent: { type: "icon", icon: "check" },
    },
    {
      name: t("comparison.rows.encryption"),
      mirya: { type: "icon", icon: "check" },
      n8n: t("comparison.rows.values.dependsOnHosting"),
      powerAutomate: t("comparison.rows.values.dependsOnTenant"),
      aiAgent: { type: "icon", icon: "cross" },
    },
    {
      name: t("comparison.rows.learnable"),
      mirya: { type: "icon", icon: "check" },
      n8n: t("comparison.rows.values.no"),
      powerAutomate: t("comparison.rows.values.no"),
      aiAgent: { type: "icon", icon: "cross" },
    },
  ];
  const renderFeatureValue = (value: FeatureValue) => {
    if (typeof value === "object" && value.type === "icon") {
      return (
        <Image
          src={
            value.icon === "check"
              ? "/images/green-tick.svg"
              : "/images/cross-icon.svg"
          }
          alt={value.icon}
          width={28}
          height={28}
        />
      );
    }

    const yesText = t("comparison.rows.values.yes");
    const noText = t("comparison.rows.values.no");

    if (value === yesText) {
      return (
        <Image src="/images/green-tick.svg" alt="Yes" width={28} height={28} />
      );
    }

    if (value === noText) {
      return (
        <Image src="/images/cross-icon.svg" alt="No" width={28} height={28} />
      );
    }

    return (
      <span className="text-[14px] md:text-[18px] font-normal leading-[22px] text-center text-[#F4F7FF]">
        {String(value)}
      </span>
    );
  };

  return (
    <div className="pt-[60px] max-w-[1440px] mx-auto flex flex-col items-center relative">
      {/* Background Blur */}
      <div className="absolute top-0 -z-10 pointer-events-none">
        <div className="rounded-[68.75px] opacity-[0.6] bg-[#4F60FA] z-[-1000] blur-[50px] w-[307px] h-[94px]"></div>
      </div>

      {/* Header Section */}
      <div className="pb-3 flex items-center gap-5">
        <Image src="/images/label2.svg" width={78} height={16} alt="line" />
        <h1 className="text-[#959EFE] text-[12px] sm:text-[16px] font-normal leading-5 text-center">
          {t("comparison.badge")}{" "}
        </h1>
        <Image src="/images/label.svg" width={78} height={16} alt="line" />
      </div>

      {/* Main Heading */}
      <h1 className="heading-1 font-medium leading-10 sm:leading-[50px] md:leading-[72px] tracking-[-1.44px] max-w-[686px] w-full text-center pb-3 sm:pb-6">
        {t("comparison.mainTitle")}{" "}
      </h1>

      {/* Subheading */}
      <p className="text-[#CAC9D1] text-[14px] font-normal leading-5 pb-5 sm:pb-10 text-center max-w-[606px]">
        {t("comparison.mainDescription")}
      </p>

      {/* Comparison Table */}
      <div className="pt-10 flex flex-col gap-2 px-3 xl:px-20 w-full pb-[60px]">
        {/* Header Row */}
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(7, 7, 38, 0.50) 0%, rgba(18, 24, 102, 0.80) 65.87%)",
          }}
          className="p-6 rounded-[14.4px] hidden md:grid grid-cols-12 gap-2"
        >
          {/* Feature Title — 4 Columns */}
          <div className="text-[#F4F7FF] text-[20px] font-medium leading-5 col-span-4">
            {t("comparison.columnHeaders.features")}{" "}
          </div>

          {/* Columns — 8 Columns */}
          <div className="col-span-8 grid grid-cols-4 gap-2">
            {columns.map((col) => (
              <div
                key={col.key}
                className="text-[#F4F7FF] text-[20px] leading-5 font-medium text-center"
              >
                {col.label}
              </div>
            ))}
          </div>
        </div>

        {/* Feature Rows */}
        {comparisonData.map((feature, index) => (
          <div
            key={index}
            className="grid grid-cols-12 gap-4 bg-[#FFFFFF14] rounded-lg p-5 items-center"
          >
            {/* Feature Name → 4 columns */}
            <p className="text-[#F4F7FF] text-[20px] font-medium col-span-12 md:col-span-4 w-full max-w-[365px]">
              {feature.name}{" "}
            </p>

            {/* Values for each platform → 8 columns */}
            <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {columns.map((col) => (
                <div
                  key={col.key}
                  className="flex justify-between md:justify-center items-center"
                >
                  <span className="md:hidden text-[#9CA3AF] text-md">
                    {col.label}
                  </span>

                  {renderFeatureValue(
                    feature[col.key as keyof typeof feature] as FeatureValue
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
