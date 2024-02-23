import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../../../core/hooks/useFetchData";
import { USERSETTINGS } from "../../../../core/InfoText";
import { InputSelect } from "../../../../common/InputSelect";
import { InputText } from "../../../../common/InputText";
import { useValidDataUserEdit } from "../hooks/useValidDataUserEdit";
import { FormArea } from "../styled";
import { URL_USER } from "../../../../core/urlBackend";
import { useRoleUser } from "../../../../core/hooks/useRoleUser";

export const InputEditDataUser = () => {
  const { id } = useParams();
  const { fetchData, fetchDataLoading } = useFetchData(
    URL_USER.FETCH_DATA_USER,
    [id],
    { id: parseInt(id) }
  );
  const { roleDefinitions } = useRoleUser();
  const [userRoleToggle, setUserRoleToggle] = useState(false);
  const [roleUserValue, setRoleUserValue] = useState("");
  const [roleUserValueData, setRoleUserValueData] = useState(
    fetchData?.dataUser?.role
  );
  const idUser = fetchData?.dataUser?.id;
  const theme = fetchData?.dataUser?.theme;

  useEffect(() => {
    setRoleUserValue(roleDefinitions[fetchData?.dataUser?.role]?.name);
    setRoleUserValueData(fetchData?.dataUser?.role);
  }, [fetchData?.dataUser?.role]);

  const {
    dataUserValue,
    dataInput,
    emailErrorRegExp,
    emailNotCheckInDataBase,
    emailExsist,
    checkDataUser,
  } = useValidDataUserEdit(fetchData?.dataUser?.email);

  const inputEditDataUser = (
    <FormArea>
      <InputText
        id="name"
        placeholder={USERSETTINGS.NAME_EDIT_PLACEHOLDER}
        label={USERSETTINGS.NAME_LABEL}
        maxlength="20"
        empty={dataInput.name === ""}
        ref={(ref) => (dataUserValue.current[0] = ref)}
        value={fetchData?.dataUser?.name}
      />
      <InputText
        id="lastname"
        placeholder={USERSETTINGS.LAST_NAME_PLACEHOLDER}
        label={USERSETTINGS.LAST_NAME_EDIT_PLACEHOLDER}
        maxlength="45"
        empty={dataInput.lastname === ""}
        ref={(ref) => (dataUserValue.current[1] = ref)}
        value={fetchData?.dataUser?.last_name}
      />
      <InputText
        id="email"
        type="email"
        placeholder={USERSETTINGS.EMAIL_PLACEHOLDER}
        label={USERSETTINGS.EMAIL_LABEL}
        maxlength="50"
        empty={dataInput.email === "" || emailErrorRegExp || emailExsist}
        ref={(ref) => (dataUserValue.current[2] = ref)}
        value={fetchData?.dataUser?.email}
      />
      <InputSelect
        id="role"
        label={USERSETTINGS.TYPE_ACCOUNT}
        data={roleDefinitions.slice(2, roleDefinitions.length)}
        toggle={userRoleToggle}
        setToggle={setUserRoleToggle}
        value={roleUserValue}
        setValue={setRoleUserValue}
        valueData={roleUserValueData}
        setValueData={setRoleUserValueData}
      />
    </FormArea>
  );

  return {
    inputEditDataUser,
    emailExsist,
    emailNotCheckInDataBase,
    checkDataUser,
    fetchData,
    fetchDataLoading,
    dataInput,
    roleUserValueData,
    idUser,
    theme,
  };
};
