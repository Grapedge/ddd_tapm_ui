import React from 'react';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import { Button } from 'antd';

const CreateProduct: React.FC = () => {
  const onFinish = React.useCallback(async () => {
    return true;
  }, []);

  return (
    <ModalForm
      onFinish={onFinish}
      title="创建产品"
      trigger={<Button type="primary">创建产品</Button>}
    >
      <ProFormText
        width="md"
        name="name"
        label="产品名称"
        tooltip="最长20个字符"
        placeholder="请输入产品名称"
        rules={[
          {
            required: true,
            min: 1,
            max: 20,
          },
        ]}
      />
      <ProFormText
        width="md"
        name="description"
        label="产品描述"
        tooltip="最长100个字符"
        placeholder="请输入产品描述"
        rules={[
          {
            min: 0,
            max: 100,
          },
        ]}
      />
    </ModalForm>
  );
};

export default CreateProduct;
