/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layouts/Admin";
import { useHamsterStore } from "../../hooks/useHamsterStore";
import { getAllHamsters } from "../../utils/api";
import { useFetchAxios } from "../../utils/common";

type AdminProps = {
  children?: any;
}

const Admin: React.FC<AdminProps> = ({children}) => {

  const allHamster = useFetchAxios(getAllHamsters);
  const hamsterState = useHamsterStore();

  useEffect(() => {
    if(allHamster) {
      hamsterState.addHamsters(allHamster);
    }
  }, [allHamster])
  
 
  return (
    <AdminLayout>
      {children}
    </AdminLayout>
  );
};

export default Admin;
