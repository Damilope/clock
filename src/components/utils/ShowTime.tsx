import { Space, Typography } from "antd";
import React from "react";

export interface IShowTimeProps {
    time: Date;
    showMilliseconds?: boolean;
    style?: React.CSSProperties;
    className?: string;
}

const ShowTime: React.FC<IShowTimeProps> = (props) => {
    const { time, showMilliseconds, style, className } = props;

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const milliseconds = time.getMilliseconds();

    const hoursNode = (
        <Typography.Text type={hours === 0 ? "secondary" : undefined}>
            {hours}:
        </Typography.Text>
    );

    const minutesNode = (
        <Typography.Text type={minutes === 0 ? "secondary" : undefined}>
            {minutes}:
        </Typography.Text>
    );

    const secondsNode = (
        <Typography.Text type={seconds === 0 ? "secondary" : undefined}>
            {seconds}:
        </Typography.Text>
    );

    const millisecondsNode = showMilliseconds && (
        <Typography.Text>.{milliseconds}</Typography.Text>
    );

    return (
        <Space className={className} style={style}>
            {hoursNode}
            {minutesNode}
            {secondsNode}
            {millisecondsNode}
        </Space>
    );
};

export default ShowTime;
