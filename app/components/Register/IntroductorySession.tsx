"use client";

import React, { useState } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import type { DateClickArg } from "@fullcalendar/interaction";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs, { Dayjs } from "dayjs";

import { TimeSlots } from "./TimeSlots";
import { SpeakerGrid } from "./SpeakerGrid";
import { RegistrationForm } from "./RegistrationForm";
import FullCalendarComponent from "./FullCalendarComponent";

interface TimeSlot {
  id: string;
  time: string;
  period: "am" | "pm";
}

interface Speaker {
  id: string;
  name: string;
  role: string;
  image: string;
}

const IntroductorySession = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<"am" | "pm">("am");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    role: "",
  });

  // In IntroductorySession component, update the timeSlots array:

  const timeSlots: TimeSlot[] = [
    // AM slots (10 slots)
    { id: "1", time: "9:00 AM - 10:00 AM", period: "am" },
    { id: "2", time: "10:00 AM - 11:00 AM", period: "am" },
    { id: "3", time: "11:00 AM - 12:00 PM", period: "am" },
    { id: "4", time: "12:00 PM - 1:00 PM", period: "am" },
    { id: "5", time: "1:00 PM - 2:00 PM", period: "am" },
    { id: "6", time: "2:00 PM - 3:00 PM", period: "am" },
    { id: "7", time: "3:00 PM - 4:00 PM", period: "am" },
    { id: "8", time: "4:00 PM - 5:00 PM", period: "am" },
    { id: "9", time: "5:00 PM - 6:00 PM", period: "am" },
    { id: "10", time: "6:00 PM - 7:00 PM", period: "am" },

    // PM slots (10 slots)
    { id: "11", time: "12:30 PM - 1:30 PM", period: "pm" },
    { id: "12", time: "1:30 PM - 2:30 PM", period: "pm" },
    { id: "13", time: "2:30 PM - 3:30 PM", period: "pm" },
    { id: "14", time: "3:30 PM - 4:30 PM", period: "pm" },
    { id: "15", time: "4:30 PM - 5:30 PM", period: "pm" },
    { id: "16", time: "5:30 PM - 6:30 PM", period: "pm" },
    { id: "17", time: "6:30 PM - 7:30 PM", period: "pm" },
    { id: "18", time: "7:30 PM - 8:30 PM", period: "pm" },
    { id: "19", time: "8:30 PM - 9:30 PM", period: "pm" },
    { id: "20", time: "9:30 PM - 10:30 PM", period: "pm" },
  ];

  const speakers: Speaker[] = [
    {
      id: "1",
      name: "Sarah Chen",
      role: "AI Solutions Architect",
      image: "/images/speaker1.png",
    },
    {
      id: "2",
      name: "Marcus Rodriguez",
      role: "Product Manager",
      image: "/images/speaker2.png",
    },
    {
      id: "3",
      name: "Aisha Patel",
      role: "Technical Lead",
      image: "/images/speaker3.png",
    },
  ];

  // FIX: Ensure this function is correctly typed so it executes properly
  const handleDateClick = (arg: DateClickArg) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (arg.date >= today) {
      setSelectedDate(arg.date);
      setSelectedTime(null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, selectedDate, selectedTime });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3  pb-20 overflow-hidden relative">
      <div className="lg:col-span-2 space-y-12 max-w-[650px]">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white">
            {" "}
            AI Automation in Action{" "}
          </h2>{" "}
          <p className="text-[#CAC9D1] text-base leading-relaxed">
            {" "}
            A live walkthrough showing how MIRYA automates processes, data and
            systems into intelligent automation.{" "}
          </p>{" "}
          <div className="flex items-center gap-3 text-sm text-[#FFFFFFCC]">
            {" "}
            <span className="flex items-center gap-2">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.33333 1.33325V3.99992M10.6667 1.33325V3.99992M2 6.66658H14M5.33333 9.33325H5.34M8 9.33325H8.00667M10.6667 9.33325H10.6733M5.33333 11.9999H5.34M8 11.9999H8.00667M10.6667 11.9999H10.6733M3.33333 2.66659H12.6667C13.403 2.66659 14 3.26354 14 3.99992V13.3333C14 14.0696 13.403 14.6666 12.6667 14.6666H3.33333C2.59695 14.6666 2 14.0696 2 13.3333V3.99992C2 3.26354 2.59695 2.66659 3.33333 2.66659Z"
                  stroke="white"
                  stroke-opacity="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
              23 October, 2025{" "}
            </span>{" "}
            <span>•</span>{" "}
            <span className="flex items-center gap-2">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_4241_35058)">
                  <path
                    d="M8.0026 3.99992V7.99992H11.0026M14.6693 7.99992C14.6693 11.6818 11.6845 14.6666 8.0026 14.6666C4.32071 14.6666 1.33594 11.6818 1.33594 7.99992C1.33594 4.31802 4.32071 1.33325 8.0026 1.33325C11.6845 1.33325 14.6693 4.31802 14.6693 7.99992Z"
                    stroke="white"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4241_35058">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>{" "}
              12:30 PM - 2:30 PM{" "}
            </span>{" "}
            <span>•</span>{" "}
            <span className="flex items-center gap-2">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3.33594 14.6666H12.6693M3.33594 1.33325H12.6693M11.3359 14.6666V11.8853C11.3359 11.5317 11.1953 11.1926 10.9453 10.9426L8.0026 7.99992M8.0026 7.99992L5.05994 10.9426C4.80987 11.1926 4.66935 11.5317 4.66927 11.8853V14.6666M8.0026 7.99992L5.05994 5.05725C4.80987 4.80726 4.66935 4.46818 4.66927 4.11459V1.33325M8.0026 7.99992L10.9453 5.05725C11.1953 4.80726 11.3359 4.46818 11.3359 4.11459V1.33325"
                  stroke="white"
                  stroke-opacity="0.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
              2 Hour{" "}
            </span>{" "}
          </div>{" "}
        </div>

        <div className="calendar-container  max-w-[714px]">
          {/* <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            dateClick={handleDateClick}
            selectable={true}
            validRange={{ start: new Date() }}
            headerToolbar={{ left: "prev", center: "title", right: "next" }}
          /> */}
        <FullCalendarComponent />
        </div>

        <TimeSlots
          slots={timeSlots}
          selectedTime={selectedTime}
          selectedPeriod={selectedPeriod}
          onPeriodChange={setSelectedPeriod}
          onTimeSelect={(slot) => setSelectedTime(slot.time)}
        />

        <SpeakerGrid speakers={speakers} />
      </div>

      <div className="lg:col-span-1">
        <RegistrationForm
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          formData={formData}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default IntroductorySession;
