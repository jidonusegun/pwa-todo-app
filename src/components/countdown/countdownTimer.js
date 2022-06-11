import React from "react";
import DateTimeDisplay from "./dateTimeDisplay";
import { useCountdown } from "../../hooks";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
    </div>
  );
};
 
const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <DateTimeDisplay value={days} type={"D"} isDanger={days <= 3} />
      <p>:</p>
      <DateTimeDisplay value={hours} type={"H"} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={minutes} type={"M"} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={seconds} type={"S"} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate, item }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  
  // useEffect(() => {
  //   Notification.requestPermission()
  //   .then((result) => {
  //     if(result === "granted") {
  //       if(days <= 0 && hours <= 0 && minutes === 5) {
  //         const title = "Reminder"
  //         const options = {
  //           body:  `Reminder: ${item}`,
  //           icon: "/img/delete.png",
  //         };
  //           new Notification(title, options);
  //         }
  //     }
  //   });
  //   // eslint-disable-next-line
  // },[minutes])
   
  
  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};
export default CountdownTimer;
