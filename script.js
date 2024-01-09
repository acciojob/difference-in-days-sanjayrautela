var dateDiffInDays = function (date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
  const firstDate = Date.UTC(
    parseInt(date1.substring(0, 4)), // Year
    parseInt(date1.substring(5, 7)) - 1, // Month (zero-based)
    parseInt(date1.substring(8, 10)) // Day
  );

  const secondDate = Date.UTC(
    parseInt(date2.substring(0, 4)), // Year
    parseInt(date2.substring(5, 7)) - 1, // Month (zero-based)
    parseInt(date2.substring(8, 10)) // Day
  );

  const diffInMs = secondDate - firstDate;
  return Math.round(diffInMs / oneDay);
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date (YYYY-MM-DD):");
const dateTwo = prompt("Enter End Date (YYYY-MM-DD):");
alert(dateDiffInDays(dateOne, dateTwo));
