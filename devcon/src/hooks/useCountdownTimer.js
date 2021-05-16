const useCountdownTimer = () => {
  const countdown = () => {
    const countDate = new Date("June 25, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const timeLeft = {
      textDay: Math.floor(gap / day),
      textHour: Math.floor((gap % day) / hour),
      textMinute: Math.floor((gap % hour) / minute),
      textSecond: Math.floor((gap % minute) / second),
    };

    return timeLeft;
  };
  return { countdown };
};

export default useCountdownTimer;
