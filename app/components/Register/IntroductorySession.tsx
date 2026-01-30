// "use client";

// import React, { useState, useEffect } from "react";
// import dayjs, { Dayjs } from "dayjs";
// import { bookSesssion } from "@/app/api/sessions";

// import { TimeSlots } from "./TimeSlots";
// import { SpeakerGrid } from "./SpeakerGrid";
// import { RegistrationForm } from "./RegistrationForm";
// import FullCalendarComponent from "./FullCalendarComponent";
// import toast from "react-hot-toast";
// import { useTranslation } from "react-i18next";

// interface TimeSlot {
//   id: string;
//   time: string;
//   period: "am" | "pm";
// }

// interface Speaker {
//   id: string;
//   name: string;
//   role: string;
//   image: string;
// }

// interface SessionData {
//   id: string;
//   name: string;
//   title: string;
//   speakers: Array<{
//     id: string;
//     name: string;
//     role: string;
//     image: string;
//   }>;
//   sessions: Array<{
//     id: string;
//     webinar_id: string;
//     session_date: string;
//     available_slots: Array<{
//       start_time: string;
//       end_time: string;
//       available_slots: string;
//     }>;
//   }>;
// }

// const IntroductorySession = ({ data }: { data: { data: SessionData } }) => {
//   const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
//   const [selectedTime, setSelectedTime] = useState<string | null>(null);
//   const [selectedPeriod, setSelectedPeriod] = useState<"am" | "pm">("pm");
//   const [selectedSessionId, setSelectedSessionId] = useState<string | null>(
//     null,
//   );
//   const [isLoading, setIsLoading] = useState(false);
//   const [registrationStatus, setRegistrationStatus] = useState<{
//     success: boolean;
//     message: string;
//   } | null>(null);
//   const { t } = useTranslation("live-session");

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     companyName: "",
//     role: "",
//   });

//   const sessions = data?.data?.sessions || [];

//   // Get webinar ID from the data
//   const webinarId = data?.data?.id;

//   // Get speakers from API or use static data
//   const apiSpeakers = data?.data?.speakers || [];
//   const speakers: Speaker[] =
//     apiSpeakers.length > 0
//       ? apiSpeakers.map((speaker: any, index: number) => ({
//           id: speaker.id?.toString() || (index + 1).toString(),
//           name: speaker.name || "Speaker Name",
//           role: speaker.role || "Role",
//           image: speaker.image || "/images/speaker-default.png",
//         }))
//       : [
//           {
//             id: "1",
//             name: "Sarah Chen",
//             role: "AI Solutions Architect",
//             image: "/images/speaker1.png",
//           },
//           {
//             id: "2",
//             name: "Marcus Rodriguez",
//             role: "Product Manager",
//             image: "/images/speaker2.png",
//           },
//           {
//             id: "3",
//             name: "Aisha Patel",
//             role: "Technical Lead",
//             image: "/images/speaker3.png",
//           },
//         ];

//   // Set initial selected date when component mounts or data changes
//   useEffect(() => {
//     if (sessions.length > 0 && !selectedDate) {
//       const firstSessionDate = dayjs(sessions[0].session_date);
//       setSelectedDate(firstSessionDate);
//       console.log(
//         "Setting initial date to:",
//         firstSessionDate.format("YYYY-MM-DD"),
//       );
//     }
//   }, [sessions, selectedDate]);

//   // Update selected session ID when date changes
//   useEffect(() => {
//     if (selectedDate) {
//       const sessionForDate = sessions.find((session: any) => {
//         const sessionDateStr = dayjs(session.session_date).format("YYYY-MM-DD");
//         const selectedDateStr = selectedDate.format("YYYY-MM-DD");
//         return sessionDateStr === selectedDateStr;
//       });

//       if (sessionForDate) {
//         setSelectedSessionId(sessionForDate.id.toString());
//       } else {
//         setSelectedSessionId(null);
//       }
//     }
//   }, [selectedDate, sessions]);

//   // Get available slots for selected date
//   const getAvailableSlotsForDate = (date: Dayjs | null) => {
//     console.log("=== getAvailableSlotsForDate ===");
//     console.log("Date:", date?.format("YYYY-MM-DD"));

//     if (!date) {
//       console.log("No date selected, returning empty");
//       return [];
//     }

//     // Find session for the selected date
//     const selectedSession = sessions.find((session: any) => {
//       const sessionDateStr = dayjs(session.session_date).format("YYYY-MM-DD");
//       const selectedDateStr = date.format("YYYY-MM-DD");
//       console.log(`Comparing: ${sessionDateStr} === ${selectedDateStr}`);
//       return sessionDateStr === selectedDateStr;
//     });

//     console.log("Selected session:", selectedSession);

//     if (!selectedSession) {
//       console.log("No session found for this date");
//       return [];
//     }

//     console.log("Session available_slots:", selectedSession.available_slots);

//     // If session exists but no available_slots, return empty
//     if (
//       !selectedSession.available_slots ||
//       selectedSession.available_slots.length === 0
//     ) {
//       console.log("Session exists but no available slots");
//       return [];
//     }

//     // Convert API available_slots to TimeSlot format
//     const apiSlots = selectedSession.available_slots.map(
//       (slot: any, index: number) => {
//         console.log(`Processing API slot ${index}:`, slot);

//         // Parse time - handle both "18:51" and "18:51:00" formats
//         const parseTime = (timeStr: string) => {
//           const cleanTime = timeStr.split(":").slice(0, 2).join(":"); // Take only hour and minute
//           const parts = cleanTime.split(":");
//           const hour = parseInt(parts[0]);
//           const minute = parts[1];
//           const period = hour < 12 ? "am" : "pm";
//           return { hour, minute, period };
//         };

//         const startTime = parseTime(slot.start_time);
//         const endTime = parseTime(slot.end_time);

//         console.log("Start time parsed:", startTime);
//         console.log("End time parsed:", endTime);

//         // Convert to 12-hour format
//         const convertTo12Hour = (hour: number, minute: string) => {
//           const period = hour >= 12 ? "PM" : "AM";
//           const hour12 = hour % 12 || 12; // Convert 0 to 12 for midnight
//           return `${hour12}:${minute} ${period}`;
//         };

//         const startTime12 = convertTo12Hour(startTime.hour, startTime.minute);
//         const endTime12 = convertTo12Hour(endTime.hour, endTime.minute);

//         const formattedSlot = {
//           id: `api-${index}-${Date.now()}`,
//           time: `${startTime12} - ${endTime12}`,
//           period: startTime.period, // Use the period we calculated
//         };

//         console.log("Formatted slot:", formattedSlot);
//         return formattedSlot;
//       },
//     );

//     console.log("Final API slots:", apiSlots);

//     // If we got slots from API, return them
//     if (apiSlots.length > 0) {
//       console.log("Returning API slots:", apiSlots.length);
//       return apiSlots;
//     }

//     console.log("No slots generated, returning empty array");
//     return [];
//   };

//   const handleDateSelect = (date: Dayjs) => {
//     console.log("Date selected:", date.format("YYYY-MM-DD"));
//     setSelectedDate(date);
//     setSelectedTime(null); // Reset time when date changes
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Validation
//     if (!selectedDate || !selectedTime) {
//       setRegistrationStatus({
//         success: false,
//         message: "Please select a date and time",
//       });
//       return;
//     }

//     if (!selectedSessionId) {
//       setRegistrationStatus({
//         success: false,
//         message: "Please select a valid session",
//       });
//       return;
//     }

//     // Prepare payload according to your API requirements
//     const payload = {
//       webinar_id: webinarId.toString(), // Convert to string if needed
//       session_id: selectedSessionId.toString(), // Convert to string if needed
//       name: formData.fullName,
//       email: formData.email,
//       company_name: formData.companyName,
//       role: formData.role,
//       select_time: selectedTime, // This is the selected time slot
//     };

//     console.log("Submitting registration with payload:", payload);

//     setIsLoading(true);
//     setRegistrationStatus(null);

//     try {
//       // Call the API function
//       const response = await bookSesssion(payload);

//       console.log("Registration response:", response);

//       if (response.success) {
//         toast.success("Registration successful!");
//         // Reset form after successful registration
//         setFormData({
//           fullName: "",
//           email: "",
//           companyName: "",
//           role: "",
//         });
//         setSelectedTime(null);
//       } else {
//         toast.error(
//           response.message || "Registration failed. Please try again.",
//         );
//       }
//     } catch (error: any) {
//       console.error("Registration error:", error);
//       setRegistrationStatus({
//         success: false,
//         message:
//           error.response?.data?.message ||
//           "An error occurred. Please try again.",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 overflow-hidden relative gap-[70px] max-w-[1440px] m-auto">
//       <div className="lg:col-span-2 space-y-4 max-w-[715px]">
//         <div className="">
//           <h2 className="text-[18px] sm:text-[24px] pb-2 font-medium leading-8 text-white">
//             AI Automation in Action
//           </h2>
//           <p className="text-[#FFFFFFCC] text-[12px] leading-4 font-normal pb-4">
//             A live walkthrough showing how MIRYA automates processes, data and
//             systems into intelligent automation.
//           </p>
//           <div className="flex items-center gap-4 leading-5 text-[14px] font-normal text-[#FFFFFFCC]">
//             <span className="flex items-center gap-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 16 16"
//                 fill="none"
//               >
//                 <path
//                   d="M5.33333 1.33325V3.99992M10.6667 1.33325V3.99992M2 6.66658H14M5.33333 9.33325H5.34M8 9.33325H8.00667M10.6667 9.33325H10.6733M5.33333 11.9999H5.34M8 11.9999H8.00667M10.6667 11.9999H10.6733M3.33333 2.66659H12.6667C13.403 2.66659 14 3.26354 14 3.99992V13.3333C14 14.0696 13.403 14.6666 12.6667 14.6666H3.33333C2.59695 14.6666 2 14.0696 2 13.3333V3.99992C2 3.26354 2.59695 2.66659 3.33333 2.66659Z"
//                   stroke="white"
//                   strokeOpacity="0.8"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//               23 October, 2025
//             </span>
//             <span className="flex items-center gap-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 16 16"
//                 fill="none"
//               >
//                 <g clipPath="url(#clip0_4241_35058)">
//                   <path
//                     d="M8.0026 3.99992V7.99992H11.0026M14.6693 7.99992C14.6693 11.6818 11.6845 14.6666 8.0026 14.6666C4.32071 14.6666 1.33594 11.6818 1.33594 7.99992C1.33594 4.31802 4.32071 1.33325 8.0026 1.33325C11.6845 1.33325 14.6693 4.31802 14.6693 7.99992Z"
//                     stroke="white"
//                     strokeOpacity="0.8"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_4241_35058">
//                     <rect width="16" height="16" fill="white" />
//                   </clipPath>
//                 </defs>
//               </svg>
//               12:30 PM - 2:30 PM
//             </span>
//             <span className="flex items-center gap-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 16 16"
//                 fill="none"
//               >
//                 <path
//                   d="M3.33594 14.6666H12.6693M3.33594 1.33325H12.6693M11.3359 14.6666V11.8853C11.3359 11.5317 11.1953 11.1926 10.9453 10.9426L8.0026 7.99992M8.0026 7.99992L5.05994 10.9426C4.80987 11.1926 4.66935 11.5317 4.66927 11.8853V14.6666M8.0026 7.99992L5.05994 5.05725C4.80987 4.80726 4.66935 4.46818 4.66927 4.11459V1.33325M8.0026 7.99992L10.9453 5.05725C11.1953 4.80726 11.3359 4.46818 11.3359 4.11459V1.33325"
//                   stroke="white"
//                   strokeOpacity="0.8"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//               2 Hour
//             </span>
//           </div>
//           <h2 className="text-[18px] sm:text-[24px] pt-6 font-medium leading-8 text-white">
//             Select Date & Time
//           </h2>
//         </div>

//         <div className="calendar-container max-w-[714px]">
//           <FullCalendarComponent data={data} onDateSelect={handleDateSelect} />
//         </div>
//         <div className="relative overflow-hidden">
//           <div className="absolute inset-0 flex items-center justify-center top-39 pointer-events-none z-0">
//             <div className="rounded-[493.75px] opacity-[0.6] bg-[#211F9CCC] blur-[90px] w-[443px] h-[200px] "></div>
//           </div>

//           <div className="relative z-10">
//             <TimeSlots
//               slots={getAvailableSlotsForDate(selectedDate) as any}
//               selectedTime={selectedTime}
//               selectedPeriod={selectedPeriod}
//               onPeriodChange={setSelectedPeriod}
//               onTimeSelect={(slot: TimeSlot) => setSelectedTime(slot.time)}
//             />

//             <SpeakerGrid speakers={speakers} />
//           </div>
//         </div>
//       </div>

//       <div className="lg:col-span-1">
//         {/* Show registration status message */}

//         <RegistrationForm
//           selectedDate={selectedDate}
//           selectedTime={selectedTime}
//           formData={formData}
//           onChange={handleInputChange}
//           onSubmit={handleSubmit}
//           isLoading={isLoading}
//         />
//       </div>
//     </div>
//   );
// };

// export default IntroductorySession;


"use client";
import React, { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { bookSession } from "@/app/api/sessions";

import { TimeSlots } from "./TimeSlots";
import { SpeakerGrid } from "./SpeakerGrid";
import { RegistrationForm } from "./RegistrationForm";
import FullCalendarComponent from "./FullCalendarComponent";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

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

interface SessionData {
  id: string;
  name: string;
  title: string;
  short_intro?: string;
  content?: Array<{
    elements: Array<{
      type: string;
      value: string;
    }>;
  }>;
  speakers: Array<{
    id: string | number;
    name: string;
    role: string;
    image: string;
  }>;
  sessions: Array<{
    id: string;
    webinar_id: string;
    session_date: string;
    available_slots: Array<{
      start_time: string;
      end_time: string;
      available_slots: string;
    }>;
  }>;
}

const IntroductorySession = ({ data }: { data: { data: SessionData } }) => {
  const { t } = useTranslation("live-session");
  
const contentElements = data?.data?.content?.[0]?.elements || [];
  
  // These will be string or undefined
  const displayTitle = contentElements.find((el) => el.type === "h1")?.value;
  const displayDescription = contentElements.find((el) => el.type === "description")?.value;

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<"am" | "pm">("pm");
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    role: "",
  });

  const sessions = data?.data?.sessions || [];
  const webinarId = data?.data?.id;

  // 2. Speaker Logic: Removed static data completely
  const speakers: Speaker[] = (data?.data?.speakers || []).map((speaker, index) => ({
    id: speaker.id?.toString() || (index + 1).toString(),
    name: speaker.name || "Speaker Name",
    role: speaker.role || "Role",
    image: speaker.image || "/images/speaker-default.png",
  }));

  useEffect(() => {
    if (sessions.length > 0 && !selectedDate) {
      const firstSessionDate = dayjs(sessions[0].session_date);
      setSelectedDate(firstSessionDate);
    }
  }, [sessions, selectedDate]);

  useEffect(() => {
    if (selectedDate) {
      const sessionForDate = sessions.find((session: any) => {
        const sessionDateStr = dayjs(session.session_date).format("YYYY-MM-DD");
        const selectedDateStr = selectedDate.format("YYYY-MM-DD");
        return sessionDateStr === selectedDateStr;
      });

      setSelectedSessionId(sessionForDate ? sessionForDate.id.toString() : null);
    }
  }, [selectedDate, sessions]);

  const getAvailableSlotsForDate = (date: Dayjs | null) => {
    if (!date) return [];
    const selectedSession = sessions.find((session: any) => 
      dayjs(session.session_date).format("YYYY-MM-DD") === date.format("YYYY-MM-DD")
    );

    if (!selectedSession?.available_slots) return [];

    return selectedSession.available_slots.map((slot: any, index: number) => {
      const parseTime = (timeStr: string) => {
        const parts = timeStr.split(":");
        const hour = parseInt(parts[0]);
        const minute = parts[1];
        return { hour, minute, period: hour < 12 ? ("am" as const) : ("pm" as const) };
      };

      const start = parseTime(slot.start_time);
      const end = parseTime(slot.end_time);

      const to12h = (h: number, m: string) => `${h % 12 || 12}:${m} ${h >= 12 ? "PM" : "AM"}`;

      return {
        id: `api-${index}`,
        time: `${to12h(start.hour, start.minute)} - ${to12h(end.hour, end.minute)}`,
        period: start.period,
      };
    });
  };

  const handleDateSelect = (date: Dayjs) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !selectedSessionId) {
      toast.error(t("validation_error"));
      return;
    }

    const payload = {
      webinar_id: webinarId.toString(),
      session_id: selectedSessionId,
      name: formData.fullName,
      email: formData.email,
      company_name: formData.companyName,
      role: formData.role,
      select_time: selectedTime,
    };

    setIsLoading(true);
    try {
      const response = await bookSession(payload);
      if (response.success) {
        toast.success(t("success_message"));
        setFormData({ fullName: "", email: "", companyName: "", role: "" });
        setSelectedTime(null);
      } else {
        toast.error(response.message || t("generic_error"));
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || t("generic_error"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 overflow-hidden relative gap-[70px] max-w-[1440px] m-auto">
      <div className="lg:col-span-2 space-y-4 max-w-[715px]">
        <div>
          <h2 className="text-[18px] sm:text-[24px] pb-2 font-medium leading-8 text-white">
            {displayTitle}
          </h2>
          <p className="text-[#FFFFFFCC] text-[12px] leading-4 font-normal pb-4">
            {displayDescription}
          </p>
          
          <div className="flex items-center gap-4 leading-5 text-[14px] font-normal text-[#FFFFFFCC]">
             <span className="flex items-center gap-2">

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

                  strokeOpacity="0.8"

                  strokeLinecap="round"

                  strokeLinejoin="round"

                />

              </svg>

              23 October, 2025

            </span>

            <span className="flex items-center gap-2">

              <svg

                xmlns="http://www.w3.org/2000/svg"

                width="16"

                height="16"

                viewBox="0 0 16 16"

                fill="none"

              >

                <g clipPath="url(#clip0_4241_35058)">

                  <path

                    d="M8.0026 3.99992V7.99992H11.0026M14.6693 7.99992C14.6693 11.6818 11.6845 14.6666 8.0026 14.6666C4.32071 14.6666 1.33594 11.6818 1.33594 7.99992C1.33594 4.31802 4.32071 1.33325 8.0026 1.33325C11.6845 1.33325 14.6693 4.31802 14.6693 7.99992Z"

                    stroke="white"

                    strokeOpacity="0.8"

                    strokeLinecap="round"

                    strokeLinejoin="round"

                  />

                </g>

                <defs>

                  <clipPath id="clip0_4241_35058">

                    <rect width="16" height="16" fill="white" />

                  </clipPath>

                </defs>

              </svg>

              12:30 PM - 2:30 PM

            </span>

            <span className="flex items-center gap-2">

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

                  strokeOpacity="0.8"

                  strokeLinecap="round"

                  strokeLinejoin="round"

                />

              </svg>

              {t("duration")}

            </span>
            {/* ... other meta info ... */}
          </div>
          <h2 className="text-[18px] sm:text-[24px] pt-6 font-medium leading-8 text-white">
            {t("select_datetime")}
          </h2>
        </div>

        <div className="calendar-container max-w-[714px]">
          <FullCalendarComponent data={data} onDateSelect={handleDateSelect} />
        </div>

        <div className="relative z-10">
          <TimeSlots
            slots={getAvailableSlotsForDate(selectedDate) as any}
            selectedTime={selectedTime}
            selectedPeriod={selectedPeriod}
            onPeriodChange={setSelectedPeriod}
            onTimeSelect={(slot: TimeSlot) => setSelectedTime(slot.time)}
          />
          <SpeakerGrid speakers={speakers} />
        </div>
      </div>

      <div className="lg:col-span-1">
        <RegistrationForm
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          formData={formData}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default IntroductorySession;