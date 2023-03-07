import dayjs from 'dayjs';

export const toUnix = (timestamp?: number) => {
  let date = dayjs();
  if (timestamp) {
    date = dayjs(timestamp);
  }
  const unix = date.unix();
  return unix;
};

export const toDateString = (timestamp?: number | string) => {
  let date = dayjs();
  if (timestamp) {
    date = dayjs(timestamp);
  }
  const parsedDate = date.format('L LT');
  return parsedDate;
};
