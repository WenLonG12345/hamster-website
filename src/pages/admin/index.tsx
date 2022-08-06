import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layouts/Admin";

type AdminProps = {
  children?: any;
}

const Admin: React.FC<AdminProps> = ({children}) => {
  return (
    <AdminLayout>
      {children}
    </AdminLayout>
  );
};

export default Admin;
