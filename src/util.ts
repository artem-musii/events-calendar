import dayjs from 'dayjs';

export const getMonth = (month = dayjs().month()) => {
  const year = dayjs().year();
  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfMonth;

  const daysOfMonth = new Array(5).fill([]).map(() =>
    new Array(7).fill(null).map(() => {
      currentMonthCount++;

      return dayjs(new Date(year, month, currentMonthCount));
    })
  );

  return daysOfMonth;
};
