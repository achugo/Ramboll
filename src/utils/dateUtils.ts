export const getNoOfDaysAhead = (daysAgo: number) => {
  let date = new Date();
  return date.setDate(date.getDate() + daysAgo);
};
