import React from 'react';
import { withLayout } from "@moxy/next-layout";
import Admin from '.';

const MoMo = () => {
  return (
    <div>MoMo</div>
  )
}

export default withLayout(<Admin/>)(MoMo);