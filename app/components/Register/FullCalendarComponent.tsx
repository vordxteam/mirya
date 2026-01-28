"use client";

import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs, { Dayjs } from "dayjs";

const FullCalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

  const defaultGradientBorder =
    "linear-gradient(97deg, #22223C 14.82%, #22223C 25.27%, #686DDD 39.55%, #22223C 49.99%, #22223C 84.47%)";

  return (
    <div
      style={{
        /* --- GRADIENT BORDER LOGIC FROM TIME SLOTS --- */
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
          onChange={(newValue) => setSelectedDate(newValue)}
          disablePast
          showDaysOutsideCurrentMonth
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
              margin: "4px 0",
              justifyContent: "space-between",
              alignItems: "center",
            },
            "& .MuiPickersDay-root": {
              color: "#FFFFFF99",
              fontSize: "16px",
              borderRadius: "999px",
              width: "61px",
              height: "40px",
              margin: "0 auto",
            },

            "& .MuiPickersDay-root.Mui-selected": {
              backgroundColor: "#1E7BFF !important",
              color: "#FFFFFF",
              minWidth: "61px",
              height: "40px", 
              borderRadius: "999px",
            },

            "& .MuiDayCalendar-weekDayLabel": {
              color: "#FFFFFFCC",
              fontSize: "16px",
              fontWeight: 600,
              width: "50px",
            },

            "& .MuiPickersDay-today": {
              border: "1px solid #1E7BFF !important",
              backgroundColor: "transparent",
            },
            "& .MuiPickersDay-root:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default FullCalendarComponent;
