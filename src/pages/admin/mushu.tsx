import React from 'react';
import { withLayout } from "@moxy/next-layout";
import Admin from '.';

const MuShu = () => {
  return (
    <div>MuShu</div>
  )
}

export default withLayout(<Admin/>)(MuShu);