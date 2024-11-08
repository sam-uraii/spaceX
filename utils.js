import { MONTH_MAP } from "./Constants/General";

export const dateFormatter = (timeStamp) => {
  let dateInstance = new Date(timeStamp * 1000);
  let date = dateInstance.getDate();
  let month = dateInstance.getMonth();
  let year = dateInstance.getFullYear();
  let hours = dateInstance.getHours();
  let minutes = dateInstance.getUTCMinutes();

  return `${date}.${month}.${`${year}`.slice(2, 4)},${hours}:${minutes}`;
};

export const debounce = (func, delay) => {
  let timeoutId;
  return (value) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(value);
    }, delay);
  };
};
