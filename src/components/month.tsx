import React from 'react';
import dayjs from 'dayjs';
import { Day } from './day';

type Props = {
  month: dayjs.Dayjs[][];
};

export const Month: React.FC<Props> = ({ month }) => {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row) => row.map((day) => <Day key={day.format('DD/MM/YYYY')} day={day} />))}
    </div>
  );
};
