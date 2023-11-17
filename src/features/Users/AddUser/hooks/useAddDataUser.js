import { useState } from "react";
import { useRoleUser } from "../../../../core/hooks/useRoleUser";

export const useAddUser = () => {
  const { roleDefinitions } = useRoleUser();
  const [userRoleToggle, setUserRoleToggle] = useState(false);
  const [roleUserValue, setRoleUserValue] = useState(roleDefinitions[3].name);
  const [roleUserValueData, setRoleUserValueData] = useState(3);

  return {
    roleDefinitions,
    userRoleToggle,
    setUserRoleToggle,
    roleUserValue,
    setRoleUserValue,
    roleUserValueData,
    setRoleUserValueData,
  };
};
