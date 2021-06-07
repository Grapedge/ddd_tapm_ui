import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Modal, Space, Typography } from 'antd';

const GitRepoHelper = () => {
  const [visible, setVisible] = React.useState(false);

  const handleShow = React.useCallback(() => {
    setVisible(true);
  }, []);

  const handleClose = React.useCallback(() => {
    setVisible(false);
  }, []);
  return (
    <>
      <UploadOutlined type="primary" onClick={handleShow} />
      <Modal
        title="Git 仓库帮助"
        visible={visible}
        onOk={handleClose}
        okText="确定"
        cancelButtonProps={{
          style: {
            display: 'none',
          },
        }}
      >
        <Space direction="vertical" style={{ width: '100%' }}>
          <Typography.Text>推送代码到仓库</Typography.Text>
          <Typography.Paragraph>
            <pre>
              git push # sss
              <br />
              gi
            </pre>
          </Typography.Paragraph>
        </Space>
      </Modal>
    </>
  );
};

export default GitRepoHelper;
