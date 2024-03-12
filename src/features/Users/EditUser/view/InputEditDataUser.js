import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../../../core/hooks/useFetchData";
import { useRoleUser } from "../../../../core/hooks/useRoleUser";
import { useCheckEmail } from "../../../../core/hooks/useCheckEmail";
import { useCheckEmptyInput } from "../../../../core/hooks/useCheckEmptyInput";
import { USERSETTINGS } from "../../../../core/InfoText";
import { URL_USER } from "../../../../core/urlApi";
import { selectEmailExsist } from "../../../../store/User/sliceUser";
import { InputSelect } from "../../../../common/InputSelect";
import { InputText } from "../../../../common/InputText";
import { FormArea } from "../styled";

export const InputEditDataUser = () => {
  const { id } = useParams();
  const { fetchData, fetchDataLoading } = useFetchData(
    URL_USER.FETCH_DATA_USER,
    [id],
    { id: parseInt(id) }
  );
  const emailExsist = useSelector(selectEmailExsist);
  const { roleDefinitions } = useRoleUser();
  const { checkEmptyInput, dataInput } = useCheckEmptyInput();
  const { checkEmail, emailErrorRegExp, emailNotCheckInDataBase } =
    useCheckEmail();
  const [userRoleToggle, setUserRoleToggle] = useState(false);
  const [roleUserValue, setRoleUserValue] = useState("");
  const [roleUserValueData, setRoleUserValueData] = useState(
    fetchData?.dataUser?.role
  );
  const dataUserValue = useRef([]);

  useEffect(() => {
    setRoleUserValue(roleDefinitions[fetchData?.dataUser?.role]?.name);
    setRoleUserValueData(fetchData?.dataUser?.role);
  }, [fetchData?.dataUser?.role]);

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
    checkEmptyInput,
    checkEmail,
    inputEditDataUser,
    emailExsist,
    emailNotCheckInDataBase,
    fetchData,
    fetchDataLoading,
    dataInput,
    dataUserValue,
    roleUserValueData,
  };
};
