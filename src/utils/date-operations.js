const dateFormat = (date) => {
  let parts = date.split("_");
  let day = parts[0];
  let time = parts[1];

  explode_day = day.split("-");

  fixed_day = explode_day[2] + "-" + explode_day[1] + "-" + explode_day[1];
  fixed_time = time.replace("-", ":");

  fixed_date = fixed_day + "T" + fixed_time;

  return fixed_date;
};

const findNextDate = (dates, target) => {
  let nextDate = Infinity;
  const dateTarget = new Date(dateFormat(target));

  dates.filter(
    d => new Date(dateFormat(d).getTime() >
      dateTarget.getTime())
  ).forEach(function (d) {
    const date = new Date(dateFormat(d));

    if (
      Math.abs(new Date(dateFormat(nextDate)) - dateTarget) >
      Math.abs(date - dateTarget)
    ) {
      nextDate = d;
    }
  });

  return nextDate;
};

const findPrevDate = (dates, target) => {
  let prevDate = Infinity;
  const dateTarget = new Date(dateFormat(target));

  dates.filter(
    d => new Date(dateFormat(d).getTime() <
      dateTarget.getTime())
  ).forEach(function (d) {
    const date = new Date(dateFormat(d));

    if (
      Math.abs(dateTarget - new Date(dateFormat(prevDate))) >
      Math.abs(dateTarget - date)
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