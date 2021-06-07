import { Alert, Empty } from 'antd';

const NoCodeRepo: React.FC = () => {
  return (
    <>
      <Alert
        type="info"
        showIcon
        message="没有代码仓库"
        description="点击右上角，绑定代码仓库！"
      />
      <br />
      <br />
      <Empty description="暂时还没有代码仓库" />
    </>
  );
};

export default NoCodeRepo;
