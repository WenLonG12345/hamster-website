import React from 'react';
import { withLayout } from "@moxy/next-layout";
import Admin from '.';

const HuiHui = () => {
  return (
    <div>HuiHui</div>
  )
}

export default withLayout(<Admin/>)(HuiHui);