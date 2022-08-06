import React from 'react';
import { withLayout } from "@moxy/next-layout";
import Admin from '.';

const FanShu = () => {
  return (
    <div>FanShu</div>
  )
}

export default withLayout(<Admin/>)(FanShu);