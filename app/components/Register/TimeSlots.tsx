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
        <h4 className="text-base font-medium text-white">Available Time Slots</h4>

        <div className="flex gap-2 bg-[#FFFFFF1F] p-1 rounded-xl">
          {(["am", "pm"] as const).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => onPeriodChange(p)}
              className={`px-3 py-[6px] rounded-lg text-sm font-medium transition-all ${
                selectedPeriod === p ? "bg-[#050A29] text-white" : "bg-transparent text-white"
              }`}
            >
              {p === "am" ? "12h" : "24h"}
            </button>
          ))}
        </div>
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
                className={`relative overflow-hidden px-[18px] py-3 rounded-[12px] text-sm font-medium transition-all ${
                  isSelected ? "border-[#4F60FA] text-white" : "text-[#CAC9D1]"
                }`}
              >
                <span className="relative z-10">{slot.time}</span>

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
