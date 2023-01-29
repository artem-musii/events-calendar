import React, { useReducer, useState, useEffect } from 'react';
import { GlobalContext } from './global-context';
import { storage } from '../storage/storage';
import { IEvent } from '../types/event';

type Props = {
  children: React.ReactNode;
};

type EventsState = IEvent[];

type Action = {
  type: string;
  payload: IEvent;
};

const savedEventsReducer = (state: EventsState, { type, payload }: Action) => {
  switch (type) {
    case 'push':
      return [...state, payload];
    case 'update':
      return state.map((event: IEvent) => (event.id === payload.id ? payload : event));
    case 'delete':
      return state.filter((event: IEvent) => event.id !== payload.id);
    default:
      throw new Error('Wrong action type');
  }
};

const initEvents = () => {
  const storageEvents = storage.get('savedEvents');

  return JSON.parse(storageEvents) || [];
};

export const ContextWrapper: React.FC<Props> = ({ children }) => {
  const [monthIndex, setIndex] = useState(+storage.get('monthIndex'));
  const [showEventForm, setShowEventForm] = useState(false);
  const [savedEvents, dispatchSavedEvents] = useReducer(savedEventsReducer, [], initEvents);

  useEffect(() => {
    storage.set('savedEvents', JSON.stringify(savedEvents));
  }, [savedEvents]);

  const setMonthIndex = (value: number) => {
    storage.set('monthIndex', String(value));
    setIndex(value);
  };

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        showEventForm,
        setShowEventForm,
        dispatchSavedEvents,
        savedEvents
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
