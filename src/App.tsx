import { useContext, useEffect, useState } from 'react';
import { getMonth } from './util';
import { Month } from './components/month';
import { CalendarHeader } from './components/calendar-header';
import { GlobalContext } from './context/global-context';

function App() {
  const { monthIndex } = useContext(GlobalContext);

  const [month, setMonth] = useState(getMonth());

  useEffect(() => {
    setMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div className="h-screen flex flex-col p-4 mx-auto max-w-6xl">
      <CalendarHeader />
      <Month month={month} />
    </div>
  );
}

export default App;
