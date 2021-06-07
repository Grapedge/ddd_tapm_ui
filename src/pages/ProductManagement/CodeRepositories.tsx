import { Button, Col, PageHeader, Row } from 'antd';
import classes from './CodeRepositories.module.scss';
import BindRepoistory from './components/BindRepoistory';
import CodeRepoCard from './components/CodeRepoCard';
import NoCodeRepo from './components/NoCodeRepo';

const CodeRepositories: React.FC = () => {
  return (
    <>
      <PageHeader
        title="代码仓库"
        extra={
          <BindRepoistory
            trigger={<Button type="primary">绑定仓库</Button>}
            onFinish={async () => true}
          />
        }
      />
      <div className={classes.container}>
        {/* 没有代码仓库 */}
        <NoCodeRepo />
        <div className={classes.repos}>
          <CodeRepoCard />
          <CodeRepoCard />
          <CodeRepoCard />
          <CodeRepoCard />
          <CodeRepoCard />
          <CodeRepoCard />
          <CodeRepoCard />
          <CodeRepoCard />
          <CodeRepoCard />
        </div>
      </div>
    </>
  );
};

export default CodeRepositories;
