import React, { useContext, useState } from 'react';
import { XMarkIcon, TrashIcon } from '@heroicons/react/20/solid';
import { GlobalContext } from '../context/global-context';
import DatePicker from 'react-datepicker';
import dayjs from 'dayjs';

export const EventForm: React.FC = () => {
  const { setShowEventForm, dispatchSavedEvents, selectedEvent, setSelectedEvent } =
    useContext(GlobalContext);
  const [date, setDate] = useState<string | null>(
    selectedEvent ? selectedEvent.date : dayjs().format()
  );
  const [time, setTime] = useState(selectedEvent ? selectedEvent.time : dayjs().format('HH:mm'));
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : '');
  const [description, setDescription] = useState(
    selectedEvent?.description ? selectedEvent.description : ''
  );

  const handleClose = () => {
    setShowEventForm(false);
    setSelectedEvent(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const calendarEvent = {
      title,
      description,
      id: selectedEvent ? selectedEvent.id : Date.now(),
      createdAt: new Date(),
      date: date,
      time: time
    };

    const type = selectedEvent ? 'update' : 'push';

    dispatchSavedEvents({ type, payload: calendarEvent });
    setShowEventForm(false);
    setSelectedEvent(null);
  };

  return (
    <div className="h-screen w-full z-10 fixed left-0 top-0 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white rounded w-1/3 z-5 bg-gray-100">
        <header className="p-4 select-none">
          <div className="flex justify-between items-center">
            <span className="font-semi-bold text-2xl">
              {selectedEvent ? `Edit ${selectedEvent.title} event` : 'Add event'}
            </span>

            <button onClick={handleClose}>
              <XMarkIcon className="w-6 h-6 text-gray-400" />
            </button>
          </div>

          {selectedEvent && (
            <span className="text-xs">
              Created at: {dayjs(selectedEvent.date).format('DD.MM.YYYY HH:mm')}
            </span>
          )}
        </header>

        <div className="p-4">
          <label className="flex select-none text-sm mb-2 text-gray-400" htmlFor="title">
            Title *
          </label>

          <input
            type="text"
            required
            value={title}
            className="bg-gray-100 w-full pb-2 text-xl border-b-2 mb-6 outline-none border-gray-400"
            placeholder="Enter title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="flex select-none text-sm mb-12 text-gray-400" htmlFor="description">
            Description
          </label>

          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="bg-gray-100 w-full pb-2 text-xl border-b-2 mb-6 outline-none border-gray-400"
            id="description"
          />

          <div className="flex justify-between mb-36">
            <div>
              <span className="flex select-none text-sm mb-2 text-gray-400">Date</span>

              <DatePicker
                className="cursor-pointer h-10 pb-2 w-fit text-xl border-b-2 border-gray-400"
                selected={new Date()}
                customInput={<div>{dayjs(date).format('DD.MM.YYYY')}</div>}
                onChange={(e) => setDate(dayjs(e).format('DD.MM.YYYY'))}
              />
            </div>

            <div>
              <label className="flex select-none text-sm mb-2 text-gray-400" htmlFor="time">
                Begin Time
              </label>

              <input
                className="bg-gray-100 h-10 w-22 pb-2 text-xl border-b-2 mb-6 outline-none border-gray-400"
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            {selectedEvent && (
              <button
                onClick={() => dispatchSavedEvents({ type: 'delete', payload: selectedEvent })}
                className="p-2 bg-red-600 text-white w-10 rounded"
              >
                <TrashIcon />
              </button>
            )}

            <button className="p-2 bg-cyan-600 text-white w-24 rounded">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};
