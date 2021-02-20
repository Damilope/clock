import React from "react";
import ShowTime from "../utils/ShowTime";

export interface IClockProps {}

const kSecondInMilliseconds = 1000;

const Clock: React.FC<IClockProps> = (props) => {
    const [time, setTime] = React.useState(Date.now());

    const incrementTime = React.useCallback(() => {
        setTime(Date.now());
    }, []);

    React.useEffect(() => {
        const handle = setInterval(incrementTime, kSecondInMilliseconds);

        return () => {
            clearInterval(handle);
        };
    }, [incrementTime]);

    return <ShowTime />;
};

export default Clock;
