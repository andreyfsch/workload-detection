const dateFormat = (date) => {
  if (Math.abs(date) === 8640000000000000) return date;
  let parts = date.split("_");
  let day = parts[0];
  let time = parts[1];

  let explode_day = day.split("-");

  let fixed_day = explode_day[2] + "-" + explode_day[1] + "-" + explode_day[0];
  let fixed_time = time.replaceAll("-", ":");

  let  fixed_date = fixed_day + "T" + fixed_time;

  return fixed_date;
};

const findNextDate = (dates, target) => {
  let nextDate = 8640000000000000;
  let dateTarget = new Date(dateFormat(target));

  dates.filter(
    d => new Date(dateFormat(d)).getTime() >
      dateTarget.getTime()
  ).forEach(function (d) {
    const date = new Date(dateFormat(d));

    if (
      Math.abs(date - dateTarget) <
      Math.abs(new Date(dateFormat(nextDate)) - dateTarget) 
    ) {
      nextDate = d;
    }
  });

  return nextDate;
};

const findPrevDate = (dates, target) => {
  let prevDate = -8640000000000000;
  let dateTarget = new Date(dateFormat(target));

  dates.filter(
    d => new Date(dateFormat(d)).getTime() <
    dateTarget.getTime()
  ).forEach(function (d) {
    const date = new Date(dateFormat(d));

    if (
      Math.abs(date - dateTarget) <
      Math.abs(new Date(dateFormat(prevDate)) - dateTarget) 
    ) {
      prevDate = d;
    }
  });

  return prevDate;
};

const dateOperations = {
  findNextDate: findNextDate,
  findPrevDate: findPrevDate
};

export default dateOperations;