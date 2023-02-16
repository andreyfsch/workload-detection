var dateFormat = (date) => {
    var parts = date.split("_");
    var day = parts[0];
    var time = parts[1];

    explode_day = day.split("-");

    fixed_day = explode_day[2] + "-" + explode_day[1] + "-" + explode_day[1];
    fixed_time = time.replace("-", ":");

    fixed_date = fixed_day + "T" + fixed_time;

    return fixed_date;
};

export const findNextDate = (dates, target) => {
    let closest = Infinity;
    const dateTarget = new Date(dateFormat(target));

    dates.forEach(function(d) {
        const date = new Date(dateFormat(d));

        if (date.getTime() < dateTarget.getTime()) {
            return;
        }

        if (Math.abs(new Date(dateFormat(closest)) - dateTarget) > Math.abs(date - dateTarget)) {
            closest = d;
        }
    });

    return closest;
};
