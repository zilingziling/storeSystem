import { Button, Result } from 'antd';
import React from 'react';
import router from 'umi/router'; // 这里应该使用 antd 的 404 result 组件，
// 但是还没发布，先来个简单的。

const NoFoundPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, You do not have permission to access this page."
    // extra={
    //   <Button type="primary" onClick={() => router.push('/')}>
    //     Back Home
    //   </Button>
    // }
  ></Result>
);

export default NoFoundPage;
