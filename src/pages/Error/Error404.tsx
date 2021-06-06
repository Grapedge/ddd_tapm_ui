import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const Error404: React.FC = () => {
  return (
    <Result
      status="404"
      title="页面走丢了"
      subTitle="抱歉，您访问的页面似乎不存在( ˘･з･)"
      extra={
        <Link to="/">
          <Button type="primary">回到首页</Button>
        </Link>
      }
    />
  );
};

export default Error404;
