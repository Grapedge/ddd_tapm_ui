import { ModalForm, ProFormText } from '@ant-design/pro-form';
import { Alert } from 'antd';
import React from 'react';

export type BindRepoistoryProps = {
  trigger: React.ReactElement;
  onFinish: () => Promise<boolean>;
};

// TODO：填入默认值
const BindRepoistory: React.FC<BindRepoistoryProps> = (props) => {
  return (
    <ModalForm
      title="绑定仓库"
      trigger={props.trigger}
      onFinish={props.onFinish}
    >
      <ProFormText
        width="md"
        name="homeUrl"
        label="仓库主页"
        tooltip="如：https://github.com/Grapedge/ddd_tapm_ui"
        rules={[
          {
            type: 'url',
            required: false,
          },
        ]}
        placeholder="请输入仓库主页"
      />
      <ProFormText
        width="md"
        name="gitUrl"
        label="Git 地址"
        tooltip="如：git@github.com:Grapedge/ddd_tapm_ui.git"
        rules={[
          {
            required: true,
          },
        ]}
      />
      <Alert
        message="请确认仓库可公开访问"
        description="请确认上方输入的 Git 仓库为公开仓库，若仓库无法克隆，可能影响最终结课成绩（如果这个项目是你创建着玩的就当我没说）！示例地址：git@github.com:Grapedge/ddd_tapm_ui.git"
        type="error"
        showIcon
      />
    </ModalForm>
  );
};

export default BindRepoistory;
