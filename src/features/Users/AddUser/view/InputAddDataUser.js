import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { USERSETTINGS } from "../../../../core/InfoText";
import { useRoleUser } from "../../../../core/hooks/useRoleUser";
import { useCheckEmail } from "../../../../core/hooks/useCheckEmail";
import { useCheckEmptyInput } from "../../../../core/hooks/useCheckEmptyInput";
import { useCheckPassword } from "../../../../core/hooks/useChceckPassword";
import { selectEmailExsist } from "../../../../store/User/sliceUser";
import { InputSelect } from "../../../../common/InputSelect";
import { InputText } from "../../../../common/InputText";
import { FormBasicUser } from "../styled";

export const InputAddDataUser = () => {
  const emailExsist = useSelector(selectEmailExsist);
  const { roleDefinitions } = useRoleUser();
  const { checkEmptyInput, dataInput: dataInputEmpty } = useCheckEmptyInput();
  const { checkEmail, emailErrorRegExp } = useCheckEmail();
  const {
    checkPassword,
    dataInput: dataInputPassword,
    errorPasswords,
    correctPassword,
  } = useCheckPassword();
  const [userRoleToggle, setUserRoleToggle] = useState(false);
  const [roleUserValue, setRoleUserValue] = useState(roleDefinitions[3].name);
  const [roleUserValueData, setRoleUserValueData] = useState(3);
  const dataUserValue = useRef([]);

  const inputAddDataUser = (
    <>
      <h3>{USERSETTINGS.COM_DATA_USER}</h3>
      <FormBasicUser>
        <InputText
          id="name"
          placeholder={USERSETTINGS.CREATE_USER_NAME}
          label={USERSETTINGS.CREATE_USER_NAME}
          maxlength="20"
          empty={dataInputEmpty.name === ""}
          ref={(ref) => (dataUserValue.current[0] = ref)}
        />
        <InputText
          id="lastname"
          placeholder={USERSETTINGS.CREATE_USER_LAST_NAME}
          label={USERSETTINGS.CREATE_USER_LAST_NAME}
          maxlength="45"
          empty={dataInputEmpty.lastname === ""}
          ref={(ref) => (dataUserValue.current[1] = ref)}
        />
        <InputText
          id="email"
          type="email"
          placeholder={USERSETTINGS.EMAIL_PLACEHOLDER}
          label={USERSETTINGS.EMAIL_LABEL}
          maxlength="50"
          empty={dataInputEmpty.email === "" || emailErrorRegExp || emailExsist}
          ref={(ref) => (dataUserValue.current[2] = ref)}
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
          id="newpassword"
          placeholder={USERSETTINGS.NEW_PASSWORD_PLACEHOLDER}
          label={USERSETTINGS.CREATE_USER_PASSWORD_LABEL}
          type="password"
          maxlength="100"
          empty={
            dataInputEmpty.newpassword === "" ||
            dataInputPassword.newpassword === "" ||
            errorPasswords.current
          }
          ref={(ref) => (dataUserValue.current[3] = ref)}
        />
        <InputText
          id="newpasswordconfirm"
          placeholder={USERSETTINGS.CREATE_USER_PASSWORD_REPEAT_LABEL}
          label={USERSETTINGS.CREATE_USER_PASSWORD_REPEAT_LABEL}
          type="password"
          maxlength="100"
          empty={
            dataInputEmpty.newpasswordconfirm === "" ||
            dataInputPassword.newpasswordconfirm === "" ||
            errorPasswords.current
          }
          ref={(ref) => (dataUserValue.current[4] = ref)}
        />
      </FormBasicUser>
    </>
  );
  return {
    checkEmptyInput,
    checkEmail,
    checkPassword,
    dataInputEmpty,
    dataInputPassword,
    dataUserValue,
    inputAddDataUser,
    emailExsist,
    roleUserValueData,
    correctPassword,
  };
};
