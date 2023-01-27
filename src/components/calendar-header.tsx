import React from 'react';
import plus from '../assets/plus.svg';

export const CalendarHeader: React.FC = () => {
  return (
    <header className="flex justify-between align-middle py-4">
      <button className="bg-cyan-600 flex justify-center items-center w-10 h-10 hover:bg-cyan-700 text-white rounded-full">
        <img src={plus} alt="plus icon" />
      </button>
      <div>Picker</div>
    </header>
  );
};
