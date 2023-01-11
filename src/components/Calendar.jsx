import React, { useState } from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Badge } from "@mui/material";
import { PickersDay } from "@mui/x-date-pickers";
import { Check } from "@mui/icons-material";

const Cal = () => {
  const [value, setValue] = useState(new Date());
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        orientation="portrait"
        openTo="day"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        renderDay={(day, _value, DayComponentProps) => {
          const isSelected = !DayComponentProps.outsideCurrentMonth && highlightedDays.indexOf(day.getDate()) >= 0;

          return (
            <Badge key={day.toString()} overlap="circular" badgeContent={isSelected ? <Check /> : undefined}>
              <PickersDay {...DayComponentProps} />
            </Badge>
          );
        }}
      />
    </LocalizationProvider>
  );
};

export default Cal;
