/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react';
import { storage } from '../storage/storage';
import { IEvent } from '../types/event';

type Action = {
  type: string;
  payload: IEvent;
};

export const GlobalContext = createContext({
  monthIndex: +storage.get('monthIndex'),
  setMonthIndex: (_i: number) => {},
  showEventForm: false,
  setShowEventForm: (_bool: boolean) => {},
  dispatchSavedEvents: ({ type, payload }: Action) => {},
  savedEvents: [] as IEvent[]
});
