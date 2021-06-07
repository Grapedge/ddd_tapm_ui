import React from 'react';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { PageHeader } from 'antd';
import { Link } from 'react-router-dom';
import classes from './Workbench.module.scss';

type BacklogItemData = {
  backlogItemId: string;
  subject: string;
  productId: string;
  type: string;
  status: number;
  description: string;
  updatedAt: Date;
};

const columns: ProColumns<BacklogItemData>[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '主题',
    dataIndex: 'subject',
    copyable: true,
    ellipsis: true,
  },
  {
    title: '状态',
    dataIndex: 'status',
    filters: true,
    onFilter: true,
    valueType: 'select',
    valueEnum: {
      0: { text: '全部', status: 'Default' },
      1: {
        text: '已完成',
        status: 'Success',
      },
      2: {
        text: '进行中',
        status: 'Processing',
      },
      3: {
        text: '未解决',
        status: 'Error',
      },
    },
  },

  {
    title: '更新时间',
    dataIndex: 'updatedAt',
    valueType: 'date',
    sorter: true,
  },
  {
    title: '操作',
    valueType: 'option',
    render: (_text, entity, _, action) => [
      <Link
        to={`/product/${encodeURIComponent(
          entity.productId
        )}/${encodeURIComponent(entity.backlogItemId)}`}
        key="view"
      >
        查看
      </Link>,
    ],
  },
];

const Workbench: React.FC = () => {
  const actionRef = React.useRef<ActionType>();
  return (
    <>
      <PageHeader title="工作台" />
      <div className={classes.container}>
        <ProTable<BacklogItemData>
          rowKey="backlogItemId"
          columns={columns}
          actionRef={actionRef}
          request={async (params = {}, sort, filter) => {
            console.log(sort, filter);
            // TODO
            // return request<{
            //   data: BacklogItemData[];
            // }>('https://proapi.azurewebsites.net/github/issues', {
            //   params,
            // });
            return {};
          }}
          pagination={{
            pageSize: 10,
          }}
          dateFormatter="string"
          headerTitle="我的待办事项"
        />
      </div>
    </>
  );
};

export default Workbench;
