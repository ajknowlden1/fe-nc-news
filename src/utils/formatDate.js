export const formatDate = (date) => {
  let result = {};

  let formattedDate = date.split("T");
  result.date = formattedDate[0];
  result.time = formattedDate[1].split(":00")[0];

  return result;
};
