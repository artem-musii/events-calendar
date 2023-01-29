import React, { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { GlobalContext } from '../context/global-context';
import { IEvent } from '../types/event';

type Props = {
  day: dayjs.Dayjs;
};

export const Day: React.FC<Props> = ({ day }) => {
  const [dayEvents, setDayEvents] = useState<IEvent[]>([]);
  const { monthIndex, savedEvents, setSelectedEvent } = useContext(GlobalContext);

  useEffect(() => {
    const events = savedEvents.filter(
      (event) => dayjs(event.date).format('DD-MM-YYYY') === day.format('DD-MM-YYYY')
    );
    setDayEvents(events);
  }, [day, savedEvents, setDayEvents]);

  const getCurrentDayClass = () => {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'bg-green-100' : '';
  };

  const getCurrentMonthClass = () => {
    let index = monthIndex;

    if (monthIndex < 0) {
      index = 12 - Math.abs(index % 12);
    }

    if (monthIndex > 0) {
      index %= 12;
    }

    return dayjs(day).month() !== index ? 'opacity-50' : '';
  };

  return (
    <div
      className={`border max-h-32 border-gray-200 flex flex-col px-2 py-1 ${getCurrentDayClass()} ${getCurrentMonthClass()}`}
    >
      <header className="flex justify-between mb-1">
        <p className="font-bold select-none text-xs p-1">{day.format('DD')}</p>
        <p className="font-bold select-none text-xs p-1">{day.format('dd')}</p>
      </header>
      <div className="overflow-scroll">
        {dayEvents.map((event) => (
          <div
            key={event.id}
            onClick={() => setSelectedEvent(event)}
            className="pl-1 cursor-pointer mb-1 rounded text-white hover:bg-cyan-700 bg-cyan-600 truncate"
          >
            {event.title}
          </div>
        ))}
      </div>
    </div>
  );
};
