import React, { useState, useContext, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon } from '@heroicons/react/20/solid';
import dayjs from 'dayjs';
import { GlobalContext } from '../context/global-context';

export const CalendarDatePicker: React.FC = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  const [selectedDate, setSelectedDate] = useState<Date>(dayjs().month(monthIndex).toDate());

  const handleDateChange = (date: Date) => {
    const yearDifference = dayjs(date).year() - dayjs().year();
    setMonthIndex(dayjs(date).month() + 12 * yearDifference);
  };

  useEffect(() => {
    setSelectedDate(dayjs().month(monthIndex).toDate());
  }, [monthIndex]);

  return (
    <div>
      <DatePicker
        className="cursor-pointer border rounded p-2 w-14 h-10"
        showMonthYearPicker
        showTwoColumnMonthYearPicker
        selected={selectedDate}
        customInput={<CalendarIcon className="w-10 h-10" />}
        onChange={handleDateChange}
      />
    </div>
  );
};
