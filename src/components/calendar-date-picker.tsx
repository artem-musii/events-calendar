import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon } from '@heroicons/react/20/solid';

export const CalendarDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  return (
    <div>
      <DatePicker
        className="cursor-pointer border rounded p-2 w-14 h-10"
        showMonthYearPicker
        showTwoColumnMonthYearPicker
        selected={selectedDate}
        customInput={<CalendarIcon className="w-10 h-10" />}
        onChange={(date: Date) => setSelectedDate(date)}
      />
    </div>
  );
};
