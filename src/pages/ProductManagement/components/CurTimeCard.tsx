import React from 'react';
import { Card, Statistic } from 'antd';

const formatCurTime = () => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
};

const CurTimeCard = () => {
  const [curTime, setCurTime] = React.useState(formatCurTime);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurTime(formatCurTime);
    });
    return () => clearInterval(timer);
  }, []);

  return (
    <Card>
      <Statistic title="当前时间" value={curTime} />
    </Card>
  );
};

export default CurTimeCard;
