"use client";

import React from "react";

export interface TimeSlot {
  id: string;
  time: string;
  period: "am" | "pm";
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
  selectedPeriod,
  onPeriodChange,
  onTimeSelect,
}) => {
  const filteredSlots = slots.filter((slot) => slot.period === selectedPeriod);

  const defaultGradientBorder =
    "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)";

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-base font-normal text-white">
          Available Time Slots
        </h4>
      </div>

      {/* Slots Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
        {filteredSlots.length > 0 ? (
          filteredSlots.map((slot: TimeSlot) => {
            const isSelected = selectedTime === slot.time;

            return (
              <button
                key={slot.id}
                type="button"
                onClick={() => onTimeSelect(slot)}
                style={{
                  background: isSelected ? "#4F60FA1A" : "#050A29",
                  backgroundImage: isSelected
                    ? "none"
                    : `linear-gradient(#050A29, #050A29), ${defaultGradientBorder}`,
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                  border: "1px solid transparent",
                }}
                className={`relative overflow-hidden px-[18px] py-3 rounded-[12px] text-sm font-medium transition-all cursor-pointer ${
                  isSelected ? "border-[#4F60FA] text-white" : "text-[#CAC9D1]"
                }`}
              >
                {/* 1. Use a flex wrapper to align SVG and Text with 8px gap */}
                <div className="relative z-10 flex items-center justify-center gap-3">
                  {/* SVG Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16" // Slightly reduced to 16 to look better with text
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10 3.75C8.3424 3.75 6.75269 4.40848 5.58058 5.58058C4.40848 6.75269 3.75 8.3424 3.75 10C3.75 11.6576 4.40848 13.2473 5.58058 14.4194C6.75269 15.5915 8.3424 16.25 10 16.25C11.6576 16.25 13.2473 15.5915 14.4194 14.4194C15.5915 13.2473 16.25 11.6576 16.25 10C16.25 8.3424 15.5915 6.75269 14.4194 5.58058C13.2473 4.40848 11.6576 3.75 10 3.75ZM2.5 10C2.5 9.01509 2.69399 8.03982 3.0709 7.12987C3.44781 6.21993 4.00026 5.39314 4.6967 4.6967C5.39314 4.00026 6.21993 3.44781 7.12987 3.0709C8.03982 2.69399 9.01509 2.5 10 2.5C10.9849 2.5 11.9602 2.69399 12.8701 3.0709C13.7801 3.44781 14.6069 4.00026 15.3033 4.6967C15.9997 5.39314 16.5522 6.21993 16.9291 7.12987C17.306 8.03982 17.5 9.01509 17.5 10C17.5 11.9891 16.7098 13.8968 15.3033 15.3033C13.8968 16.7098 11.9891 17.5 10 17.5C8.01088 17.5 6.10322 16.7098 4.6967 15.3033C3.29018 13.8968 2.5 11.9891 2.5 10Z"
                      fill="currentColor" // Changed to currentColor so it inherits text color
                    />
                  </svg>

                  {/* Time text */}
                  <span className="text-[14px] leading-5 font-normal">{slot.time}</span>
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
          <p className="text-[#73799B] text-sm italic">No slots available.</p>
        )}
      </div>
    </div>
  );
};
