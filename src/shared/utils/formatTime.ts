export const formatTime = (time: string) => {
  const dateTime = new Date(time);

  return dateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};
