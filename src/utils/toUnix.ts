import dayjs from 'dayjs';

export const toUnix = (timestamp?: number) => {
  let date = dayjs();
  if (timestamp) {
    date = dayjs(timestamp);
  }
  const unix = date.unix();
  return unix;
};

export const toDateString = (timestamp?: number) => {
  let date = dayjs();
  if (timestamp) {
    date = dayjs(timestamp * 1000);
  }
  const parsedDate = date.format('HH:mm');
  return parsedDate;
};
