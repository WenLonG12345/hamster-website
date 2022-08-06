import React from 'react';
import { withLayout } from "@moxy/next-layout";
import Admin from '.';

const MaoDou = () => {
  return (
    <div>MaoDou</div>
  )
}

export default withLayout(<Admin/>)(MaoDou);