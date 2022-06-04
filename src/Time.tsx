import React from "react";
import moment from "moment-timezone";

const Time = () => {
  const [timeState, setTimeState] = React.useState();
  const timezone = moment.tz("Europe/London").format("z");

  React.useEffect(() => {
    setInterval(() => {
      const time: any = moment.tz("Europe/London").format("HH:mm");
      setTimeState(time);
    }, 10);
  }, []);

  return (
    <div className="t">
      {timeState}
      <span>{timezone}</span>
    </div>
  );
};

export default Time;
