"use client";

import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs, { Dayjs } from "dayjs";

const FullCalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

  return (
    <div className="rounded-2xl border border-[#2A2D47] bg-[#0B0F2A] px-6 py-5 max-w-[714px]">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          disablePast
          showDaysOutsideCurrentMonth
          sx={{
            width: "100%",

            /* HEADER (Month + arrows) */
            "& .MuiPickersCalendarHeader-root": {
              color: "#FFFFFF",
              paddingBottom: "12px",
            },
            "& .MuiPickersCalendarHeader-label": {
              fontSize: "16px",
              fontWeight: 500,
            },
            "& .MuiPickersArrowSwitcher-button": {
              color: "#8EA0E0",
            },

            /* WEEKDAY LABELS (MON, TUE…) */
            "& .MuiDayCalendar-weekDayLabel": {
              color: "#8B8FAE",
              fontSize: "12px",
              fontWeight: 500,
            },

            /* DAY CELL */
            "& .MuiPickersDay-root": {
              color: "#D1D5DB",
              fontSize: "14px",
              borderRadius: "999px",
            },

            /* SELECTED DAY (Blue pill) */
            "& .MuiPickersDay-root.Mui-selected": {
              backgroundColor: "#1E7BFF !important",
              color: "#FFFFFF",
            },

            /* HOVER */
            "& .MuiPickersDay-root:hover": {
              backgroundColor: "#1E293B",
            },

            /* TODAY */
            "& .MuiPickersDay-today": {
              border: "1px solid #1E7BFF",
            },

            /* DISABLED DAYS */
            "& .MuiPickersDay-root.Mui-disabled": {
              color: "#4B5563",
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default FullCalendarComponent;
