import { Product } from '@/models/Product';
import ProList from '@ant-design/pro-list';
import { Alert, PageHeader, Tag } from 'antd';
import { Link } from 'react-router-dom';
import CreateProduct from './components/CreateProduct';
import classes from './MyProducts.module.scss';

const dataSource = [
  {
    id: '2333',
    name: '我的产品',
    logo: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    description: '我是一条产品的描述',
    productOwnerId: '2019',
  },
];

const MyProducts: React.FC = () => {
  return (
    <>
      <PageHeader title="我的项目" />
      <div className={classes.container}>
        <Alert
          message="还没有项目？"
          description="点击右下方新建按钮，快速创建一个项目！"
          type="info"
          showIcon
        />
        <ProList<any>
          rowKey="id"
          pagination={{
            defaultPageSize: 10,
            showSizeChanger: true,
          }}
          toolBarRender={() => [<CreateProduct key="create" />]}
          headerTitle="我参与的"
          tooltip="我参与的所有项目"
          dataSource={dataSource}
          // showActions="hover"
          showExtra="hover"
          metas={{
            title: {
              dataIndex: 'name',
            },
            avatar: {
              dataIndex: 'logo',
            },
            description: {
              dataIndex: 'description',
            },
            subTitle: {
              render: (_) => {
                return <Tag color="#5BD8A6">我管理的</Tag>;
              },
            },
            actions: {
              render: (_, entity) => [
                <Link
                  to={`/product/${encodeURIComponent(entity.id)}`}
                  target="_blank"
                  key="product"
                >
                  查看
                </Link>,
              ],
            },
          }}
        />
      </div>
    </>
  );
};

export default MyProducts;
