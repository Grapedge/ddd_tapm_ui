import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import '@ant-design/pro-form/dist/form.css';
import '@ant-design/pro-list/dist/list.css';
import '@ant-design/pro-table/dist/table.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
