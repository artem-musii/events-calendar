import { useContext, useEffect, useState } from 'react';
import { getMonth } from './util';
import { Month } from './components/month';
import { CalendarHeader } from './components/calendar-header';
import { GlobalContext } from './context/global-context';
import { EventForm } from './components/event-form';

function App() {
  const { monthIndex, showEventForm } = useContext(GlobalContext);

  const [month, setMonth] = useState(getMonth());

  useEffect(() => {
    setMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div className="h-screen flex flex-col p-4 mx-auto max-w-6xl">
      {showEventForm && <EventForm />}
      <CalendarHeader />
      <Month month={month} />
    </div>
  );
}

export default App;
