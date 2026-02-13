"use client";

import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import dayjs, { Dayjs } from "dayjs";

const FullCalendarComponent = ({ data, onDateSelect }: any) => {
  console.log("FullCalendarComponent data:", data);
  console.log("Sessions data:", data?.data?.sessions);

  // Get all session dates from the sessions array
  const sessionDates =
    data?.data?.sessions?.map((session: any) => {
      console.log("Session date string:", session.session_date);
      const date = dayjs(session.session_date);
      console.log("Parsed date:", date.format("YYYY-MM-DD"));
      return date.format("YYYY-MM-DD");
    }) || [];

  console.log("Session dates array:", sessionDates);

  // Set initial selected date to first available session date or today
  const firstSessionDate =
    sessionDates.length > 0 ? dayjs(sessionDates[0]) : dayjs();

  console.log("First session date:", firstSessionDate.format("YYYY-MM-DD"));
  console.log("Today:", dayjs().format("YYYY-MM-DD"));

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(
    firstSessionDate,
  );

  const defaultGradientBorder =
    "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)";

  const handleDateChange = (newValue: Dayjs | null) => {
    console.log("Date changed to:", newValue?.format("YYYY-MM-DD"));
    setSelectedDate(newValue);
    if (newValue && onDateSelect) {
      onDateSelect(newValue);
    }
  };

  return (
    <div
      style={{
        borderRadius: "12px",
        border: "1px solid transparent",
        background: `linear-gradient(#050A29, #050A29), ${defaultGradientBorder}`,
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
      }}
      className="px-6 py-5 max-w-[714px] relative overflow-hidden"
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={selectedDate}
          onChange={handleDateChange}
          disablePast
          showDaysOutsideCurrentMonth
          views={["day"]} // ✅ disables month/year switch
          sx={{
            width: "100%",
            maxHeight: "none",
            backgroundColor: "transparent",

            "& .MuiPickersCalendarHeader-root": {
              color: "#FFFFFF",
              paddingBottom: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
              margin: 0,
              paddingLeft: "0px",
              paddingRight: "0px",
            },
            "& .MuiPickersCalendarHeader-switchViewIcon": {
              display: "none",
            },

            "& .MuiPickersCalendarHeader-label": {
              pointerEvents: "none", // prevents click switching
              cursor: "default",
            },

            "& .MuiPickersCalendarHeader-labelContainer": {
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              margin: 0,
              zIndex: 1,
            },
            "& .MuiPickersArrowSwitcher-root": {
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            },
            "& .MuiPickersArrowSwitcher-button": {
              color: "#FFFFFF",
            },

            "& .MuiDayCalendar-weekContainer": {
              margin: "7px 0",
              justifyContent: "space-evenly",
              alignItems: "center",
              display: "flex",
            },
            "& .MuiPickersDay-root": {
              color: "#FFFFFF99",
              fontSize: "16px",
              borderRadius: "20px",
              width: "61px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              "&.Mui-disabled:not(.Mui-selected)": {
                color: "#FFFFFF99 !important",
              },
            },

            "& .MuiPickersDay-root.Mui-selected": {
              backgroundColor: "#0274FE !important",
              color: "#FFFFFF",
              borderRadius: "20px",
              border: "1px solid #0274FE !important",
              "&.Mui-disabled": {
                opacity: "1 !important",
              },
            },

            "& .MuiDayCalendar-weekDayLabel": {
              color: "#FFFFFFCC",
              fontSize: "16px",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            },

            "& .MuiPickersDay-today": {
              border: "1px solid #0274FE !important",
              backgroundColor: "transparent",
              borderRadius: "20px",
            },
            "& .MuiPickersDay-root:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
          shouldDisableDate={(date) => {
            const dateStr = dayjs(date).format("YYYY-MM-DD");
            const isSunday = dayjs(date).day() === 0;
            return !sessionDates.includes(dateStr) || isSunday;
          }}
          slotProps={{
            day: (ownerState) => {
              const dateStr = dayjs(ownerState.day).format("YYYY-MM-DD");
              const hasSession = sessionDates.includes(dateStr);

              return {
                sx: {
                  ...(hasSession && {
                    border: "1px solid #0274FE",
                    borderRadius: "20px !important",
                    "&.Mui-selected": {
                      backgroundColor: "#0274FE !important",
                      border: "1px solid #0274FE !important",
                      borderRadius: "20px !important",
                      opacity: "1 !important",
                    },
                    "&:hover": {
                      backgroundColor: "rgba(2, 116, 254, 0.1)",
                      border: "1px solid #0274FE",
                    },
                  }),
                },
              };
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default FullCalendarComponent;
