import React from 'react';
import { withLayout } from "@moxy/next-layout";
import Admin from '.';

const Mimi = () => {
  return (
    <div>Mimi</div>
  )
}

export default withLayout(<Admin/>)(Mimi);