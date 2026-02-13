"use client";

import React from "react";
import { useTranslation } from "react-i18next";

export interface TimeSlot {
  id: string;
  time: string;
  period: "am" | "pm";
  availableCount: number; // Added this to interface
}

export interface TimeSlotsProps {
  slots: TimeSlot[];
  selectedTime: string | null;
  selectedPeriod: "am" | "pm";
  onPeriodChange: (period: "am" | "pm") => void;
  onTimeSelect: (slot: TimeSlot) => void;
}

export const TimeSlots: React.FC<TimeSlotsProps> = ({
  slots,
  selectedTime,
  onTimeSelect,
}) => {
  const { t } = useTranslation("live-session");

  // REMOVED: const filteredSlots = slots.filter(...)
  // We use "slots" directly now to show everything at once.

  const defaultGradientBorder =
    "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)";

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-base font-normal text-white">
          {t("available_slots")}
        </h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
        {slots && slots.length > 0 ? (
          slots.map((slot: any) => {
            const isSelected = selectedTime === slot.time;
            const isFull = slot.availableCount <= 0;

            return (
              <button
                key={slot.id}
                type="button"
                disabled={isFull}
                onClick={() => onTimeSelect(slot)}
                style={{
                  // Updated: Background remains constant regardless of selection
                  background: "#050A29",
                  backgroundImage: `linear-gradient(#050A29, #050A29), ${defaultGradientBorder}`,
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                  border: "1px solid transparent",
                  opacity: isFull ? 0.5 : 1,
                }}
                className={`relative overflow-hidden px-[18px] py-3 rounded-[12px] text-sm font-medium transition-all ${
                  isFull ? "cursor-not-allowed" : "cursor-pointer"
                } ${isSelected ? "text-white" : "text-[#CAC9D1]"}`}
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                  >
                    {/* Outer ring */}
                    <path
                      d="M10 3.75C6.548 3.75 3.75 6.548 3.75 10C3.75 13.452 6.548 16.25 10 16.25C13.452 16.25 16.25 13.452 16.25 10C16.25 6.548 13.452 3.75 10 3.75Z
       M10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 14.1421 14.1421 17.5 10 17.5
       C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5Z"
                      fill={isSelected ? "#0274FE" : "#CAC9D1"}
                    />

                    {/* Inner fill – ONLY when selected */}
                    {isSelected && (
                      <circle cx="10" cy="10" r="4" fill="#0274FE" />
                    )}
                  </svg>

                  <span className="text-[14px] leading-5 font-normal">
                    {slot.time}
                  </span>
                </div>

                {!isSelected && (
                  <div
                    style={{
                      position: "absolute",
                      width: "493px",
                      height: "213px",
                      right: "-401px",
                      bottom: "-100px",
                      borderRadius: "493px",
                      background: "rgba(33, 31, 156, 0.80)",
                      filter: "blur(70px)",
                      transform: "rotate(-7.679deg)",
                      pointerEvents: "none",
                      zIndex: 1,
                    }}
                  />
                )}
              </button>
            );
          })
        ) : (
        <p className="col-span-2 text-[#73799B] text-[16px] text-center">
  {t("no_slots")}
</p>
        )}
      </div>
    </div>
  );
};
