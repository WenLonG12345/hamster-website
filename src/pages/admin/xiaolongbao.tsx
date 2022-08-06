import React from 'react';
import { withLayout } from "@moxy/next-layout";
import Admin from '.';

const XiaoLongBao = () => {
  return (
    <div>XiaoLongBao</div>
  )
}

export default withLayout(<Admin/>)(XiaoLongBao);