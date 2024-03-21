import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useRoleUser } from "../../../../core/hooks/useRoleUser";
import { useCheckEmail } from "../../../../core/hooks/useCheckEmail";
import { useCheckEmptyInput } from "../../../../core/hooks/useCheckEmptyInput";
import { USERSETTINGS } from "../../../../core/InfoText";
import { selectEmailExsist } from "../../../../store/User/sliceUser";
import { InputSelect } from "../../../../common/InputSelect";
import { InputText } from "../../../../common/InputText";
import { FormArea } from "../styled";

export const InputEditDataUser = (fetchDataUser) => {
  const emailExsist = useSelector(selectEmailExsist);
  const { roleDefinitions } = useRoleUser();
  const { checkEmptyInput, dataInput } = useCheckEmptyInput();
  const { checkEmail, emailErrorRegExp, emailNotCheckInDataBase } =
    useCheckEmail();
  const [userRoleToggle, setUserRoleToggle] = useState(false);
  const [roleUserValue, setRoleUserValue] = useState("");
  const [roleUserValueData, setRoleUserValueData] = useState(
    fetchDataUser?.dataUser?.role
  );
  const dataUserValue = useRef([]);

  useEffect(() => {
    setRoleUserValue(roleDefinitions[fetchDataUser?.dataUser?.role]?.name);
    setRoleUserValueData(fetchDataUser?.dataUser?.role);
  }, [fetchDataUser?.dataUser?.role]);

  const inputEditDataUser = (
    <FormArea>
      <InputText
        id="name"
        placeholder={USERSETTINGS.NAME_EDIT_PLACEHOLDER}
        label={USERSETTINGS.NAME_LABEL}
        maxlength="20"
        empty={dataInput.name === ""}
        ref={(ref) => (dataUserValue.current[0] = ref)}
        value={fetchDataUser?.dataUser?.name}
      />
      <InputText
        id="lastname"
        placeholder={USERSETTINGS.LAST_NAME_PLACEHOLDER}
        label={USERSETTINGS.LAST_NAME_EDIT_PLACEHOLDER}
        maxlength="45"
        empty={dataInput.lastname === ""}
        ref={(ref) => (dataUserValue.current[1] = ref)}
        value={fetchDataUser?.dataUser?.last_name}
      />
      <InputText
        id="email"
        type="email"
        placeholder={USERSETTINGS.EMAIL_PLACEHOLDER}
        label={USERSETTINGS.EMAIL_LABEL}
        maxlength="50"
        empty={dataInput.email === "" || emailErrorRegExp || emailExsist}
        ref={(ref) => (dataUserValue.current[2] = ref)}
        value={fetchDataUser?.dataUser?.email}
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
    dataInput,
    dataUserValue,
    roleUserValueData,
  };
};
