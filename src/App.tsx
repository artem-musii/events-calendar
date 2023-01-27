import { getMonth } from './util';
import { Month } from './components/month';
import { CalendarHeader } from './components/calendar-header';

function App() {
  const month = getMonth();

  return (
    <div className="h-screen flex flex-col p-4 mx-auto max-w-6xl">
      <CalendarHeader />
      <Month month={month} />
    </div>
  );
}

export default App;
