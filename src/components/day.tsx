import React from 'react';
import dayjs from 'dayjs';

type Props = {
  day: dayjs.Dayjs;
};

export const Day: React.FC<Props> = ({ day }) => {
  const getCurrentDayClass = () => {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'bg-green-100' : '';
  };

  return (
    <div className={`border border-gray-200 flex flex-col px-2 py-1 ${getCurrentDayClass()}`}>
      <header className="flex justify-between">
        <p className="font-bold text-xs p-1">{day.format('DD')}</p>
        <p className="font-bold text-xs p-1">{day.format('dd')}</p>
      </header>
    </div>
  );
};
