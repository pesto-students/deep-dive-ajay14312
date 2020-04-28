const parseMs = (ms) => {
  if (!parseInt(ms, 10)) {
    throw new TypeError(`Expected a number, got ${typeof ms}`);
  }
  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  const daysMs = ms % (24 * 60 * 60 * 1000);
  const hours = Math.floor(daysMs / (60 * 60 * 1000));
  const hoursMs = ms % (60 * 60 * 1000);
  const minutes = Math.floor(hoursMs / (60 * 1000));
  const minutesMs = ms % (60 * 1000);
  const seconds = Math.floor(minutesMs / 1000);
  const milliseconds = ms % 10;

  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
    microseconds: 0,
    nanoseconds: 0,
  };
};

export { parseMs };
