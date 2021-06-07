import React from 'react';
import { Card, Col, PageHeader, Row, Statistic } from 'antd';
import CurTimeCard from './components/CurTimeCard';
import classes from './ProductOverview.module.scss';

const ProductOverview: React.FC = () => {
  return (
    <>
      <PageHeader title="项目概览" />
      <div className={classes.container}>
        <Row gutter={16}>
          <Col span={6}>
            {/* 当前时间 */}
            <CurTimeCard />
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="代码仓库" value={20} suffix="个" />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="待办事项" value={20} suffix="个" />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="冲刺数" value={15} suffix="个" />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProductOverview;
