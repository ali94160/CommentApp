
export const handleDateAndTime = (createdAt: string) => {
  const localDate = new Date(Date.parse(createdAt)).toLocaleDateString();
  const localTime = new Date(Date.parse(createdAt)).toLocaleTimeString();
  const fullDate = `${localDate.substring(2)} ${localTime.substring(0, 5)}`;
  return fullDate;
};
