import React, { useContext } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from '@heroicons/react/20/solid';
import dayjs from 'dayjs';
import { GlobalContext } from '../context/global-context';
import { CalendarDatePicker } from './calendar-date-picker';

export const CalendarHeader: React.FC = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };

  return (
    <header className="flex justify-between align-middle py-4">
      <button className="bg-cyan-600 flex justify-center items-center w-10 h-10 hover:bg-cyan-700 text-white rounded-full">
        <PlusIcon className="h-6 w-6" />
      </button>
      <div className="flex items-center">
        <div className="flex pr-4 items-center">
          <ChevronLeftIcon onClick={handlePrevMonth} className="h-8 w-8 cursor-pointer" />

          <span className="w-32 text-center select-none">
            {dayjs().month(monthIndex).format('MMMM YYYY')}
          </span>

          <ChevronRightIcon onClick={handleNextMonth} className="h-8 w-8 cursor-pointer" />
        </div>

        <CalendarDatePicker />
      </div>
    </header>
  );
};
