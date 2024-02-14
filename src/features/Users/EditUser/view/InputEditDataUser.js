import { useParams } from "react-router-dom";
import { useFetchData } from "../../../../core/hooks/useFetchData";
import { USERSETTINGS } from "../../../../core/InfoText";
import { InputSelect } from "../../../../common/InputSelect";
import { InputText } from "../../../../common/InputText";
import { useValidDataUserEdit } from "../hooks/useValidDataUserEdit";
import { FormArea } from "../styled";
import { URL_USER } from "../../../../core/urlBackend";

export const InputEditDataUser = () => {
  const { id } = useParams();
  const { fetchData, fetchDataLoading } = useFetchData(
    URL_USER.FETCH_DATA_USER,
    [id],
    { id: parseInt(id) }
  );

  const {
    roleDefinitions,
    userRoleToggle,
    setUserRoleToggle,
    roleUserValue,
    setRoleUserValue,
    roleUserValueData,
    setRoleUserValueData,
    dataUserValue,
    dataUser,
    emailErrorRegExp,
    emailNotCheckInDataBase,
    emailExsist,
    checkDataUser,
  } = useValidDataUserEdit(
    fetchData?.dataUser?.role,
    fetchData?.dataUser?.email
  );

  const inputEditDataUser = (
    <FormArea>
      <InputText
        id="name"
        placeholder={USERSETTINGS.NAME_EDIT_PLACEHOLDER}
        label={USERSETTINGS.NAME_LABEL}
        maxlength="20"
        empty={dataUser[0] === ""}
        ref={(ref) => (dataUserValue.current[0] = ref)}
        value={fetchData?.dataUser?.name}
      />
      <InputText
        id="lastname"
        placeholder={USERSETTINGS.LAST_NAME_PLACEHOLDER}
        label={USERSETTINGS.LAST_NAME_EDIT_PLACEHOLDER}
        maxlength="45"
        empty={dataUser[1] === ""}
        ref={(ref) => (dataUserValue.current[1] = ref)}
        value={fetchData?.dataUser?.last_name}
      />
      <InputText
        id="email"
        type="email"
        placeholder={USERSETTINGS.EMAIL_PLACEHOLDER}
        label={USERSETTINGS.EMAIL_LABEL}
        maxlength="50"
        empty={dataUser[2] === "" || emailErrorRegExp || emailExsist}
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
    dataUser,
  };
};
