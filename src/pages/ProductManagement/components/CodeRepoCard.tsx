import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Avatar, Card, Popconfirm, Typography } from 'antd';
import classes from '../CodeRepositories.module.scss';
import BindRepoistory from './BindRepoistory';
import GitRepoHelper from './GitRepoHelper';

const avatarColors = [
  '#FFA000',
  '#AFB42B',
  '#689F38',
  '#039BE5',
  '#6D4C41',
  '#D81B60',
];

const CodeRepoCard: React.FC = () => {
  return (
    <Card
      className={classes.codeRepo}
      actions={[
        <GitRepoHelper key="git" />,
        <BindRepoistory
          key="edit"
          trigger={<EditOutlined />}
          onFinish={async () => true}
        />,
        <Popconfirm
          key="del"
          title="确定删除吗，此操作不可恢复！"
          onConfirm={() => null}
          okText="确认"
          cancelText="取消"
        >
          <DeleteOutlined />
        </Popconfirm>,
      ]}
    >
      <Card.Meta
        avatar={
          <Avatar
            style={{
              backgroundColor:
                avatarColors['测'.charCodeAt(0) % avatarColors.length],
            }}
          >
            测
          </Avatar>
        }
        title={
          <a
            href="http://baidu.com"
            className={classes.title}
            target="_blank"
            rel="noreferrer"
          >
            测试仓库
          </a>
        }
        description={
          <Typography.Text
            ellipsis
            className={classes.description}
            type="secondary"
          >
            This is the descriptionThis is the descriptionThis is the
            descriptionThis is the descriptionThis is the descriptionThis is the
            description
          </Typography.Text>
        }
      />
    </Card>
  );
};

export default CodeRepoCard;
