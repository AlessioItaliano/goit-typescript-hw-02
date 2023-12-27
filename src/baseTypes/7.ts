enum WeekDay {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const isWeekend = (date: WeekDay): boolean => {
  if (date === WeekDay.Sunday || date === WeekDay.Saturday) {
    console.log(`${date} is a weekend day`);
    return true;
  } else {
    console.log(`${date} is a working day`);
    return false;
  }
};
