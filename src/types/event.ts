export interface IEvent {
  id: number;
  title: string;
  description?: string;
  date: Date | null;
  time: string;
}
