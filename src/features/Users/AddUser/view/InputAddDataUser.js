import { useSelector } from "react-redux";
import { selectEmailExsist } from "../../../../store/User/sliceUser";
import { USERSETTINGS } from "../../../../core/InfoText";
import { InputSelect } from "../../../../common/InputSelect";
import { InputText } from "../../../../common/InputText";
import { useValidDataUser } from "../hooks/useValidDataUser";
import { FormBasicUser } from "../styled";

export const InputAddDataUser = () => {
  const emailExsist = useSelector(selectEmailExsist);
  const {
    roleDefinitions,
    userRoleToggle,
    setUserRoleToggle,
    roleUserValue,
    setRoleUserValue,
    roleUserValueData,
    setRoleUserValueData,
    dataInput,
    dataUserValue,
    checkDataUser,
    emailErrorRegExp,
  } = useValidDataUser();

  const inputAddDataUser = (
    <>
      <h3>{USERSETTINGS.COM_SUBTITLE_SETTINGS}</h3>
      <FormBasicUser>
        <InputText
          id="name"
          placeholder={USERSETTINGS.CREATE_USER_NAME}
          label={USERSETTINGS.CREATE_USER_NAME}
          maxlength="20"
          empty={dataInput.name === ""}
          ref={(ref) => (dataUserValue.current[0] = ref)}
          value={dataInput.name}
        />
        <InputText
          id="lastname"
          placeholder={USERSETTINGS.CREATE_USER_LAST_NAME}
          label={USERSETTINGS.CREATE_USER_LAST_NAME}
          maxlength="45"
          empty={dataInput.lastname === ""}
          ref={(ref) => (dataUserValue.current[1] = ref)}
          value={dataInput.lastname}
        />
        <InputText
          id="email"
          type="email"
          placeholder={USERSETTINGS.EMAIL_PLACEHOLDER}
          label={USERSETTINGS.EMAIL_LABEL}
          maxlength="50"
          empty={dataInput.email === "" || emailErrorRegExp || emailExsist}
          ref={(ref) => (dataUserValue.current[2] = ref)}
          value={dataInput.email}
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
        <InputText
          id="password"
          placeholder={USERSETTINGS.NEW_PASSWORD_PLACEHOLDER}
          label={USERSETTINGS.CREATE_USER_PASSWORD_LABEL}
          type="password"
          maxlength="100"
          empty={dataInput.password === ""}
          ref={(ref) => (dataUserValue.current[3] = ref)}
          value={dataInput.password}
        />
        <InputText
          id="passwordconfirm"
          placeholder={USERSETTINGS.CREATE_USER_PASSWORD_REPEAT_LABEL}
          label={USERSETTINGS.CREATE_USER_PASSWORD_REPEAT_LABEL}
          type="password"
          maxlength="100"
          empty={dataInput.passwordconfirm === ""}
          ref={(ref) => (dataUserValue.current[4] = ref)}
          value={dataInput.passwordconfirm}
        />
      </FormBasicUser>
    </>
  );
  return {
    inputAddDataUser,
    checkDataUser,
    dataInput,
    emailExsist,
    roleUserValueData,
  };
};
