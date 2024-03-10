import { useEffect } from "react";
import { useState } from "react";
export default function DigitalClock() {
  const [time, setTime] = useState(new Date());
  const [format, setFormat] = useState("Military format");
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  function formatTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let AMorPM = hours > 12 ? "PM" : "AM";
    hours = hours > 12 ? hours - 12 : hours;

    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}:${AMorPM}`;
  }
  function formatDate() {
    let date = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    return `${date < 10 ? "0" + date : date}-${
      month < 10 ? "0" + month : month
    }-${year}`;
  }
  function formatDay() {
    let day = time.getDay();
    switch (day) {
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
      case 0:
        day = "Sunday";
        break;
    }
    return `${day}`;
  }
  return (
    <>
      <div className="clock">{formatTime()}</div>
      <div className="date">
        {formatDate()} &nbsp;&nbsp;&nbsp;&nbsp;{formatDay()}
      </div>
    </>
  );
}
