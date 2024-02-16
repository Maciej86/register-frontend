import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectEmailExsist,
  selectUserState,
} from "../../../store/User/sliceUser";
import { USERSETTINGS } from "../../../core/InfoText";
import { InputSelect } from "../../../common/InputSelect";
import { InputText } from "../../../common/InputText";
import { FormArea } from "../styled";
import { useValidDataAccount } from "../hooks/useValidDataAccount";
import { SelectDefaultValue } from "../../../common/InputSelect/SelectDefaultValue";
import { useRoleUser } from "../../../core/hooks/useRoleUser";
import { themesStyles } from "../../../core/styles/theme";

export const InputDataAccount = () => {
  const userCurrentData = useSelector(selectUserState);
  const emailExsist = useSelector(selectEmailExsist);
  const [themeValue, setThemeValue] = useState(() =>
    SelectDefaultValue(themesStyles, userCurrentData?.theme)
  );
  const [themeValueData, setThemeValueData] = useState(userCurrentData?.theme);
  const [themeToggle, setThemeToggle] = useState(false);
  const { userRole } = useRoleUser();
  const {
    changedDataUser,
    emailNotCheckInDataBase,
    setEmailNotCheckInDataBase,
    dataUser,
    dataUserValue,
    emailErrorRegExp,
  } = useValidDataAccount(userCurrentData?.email);

  const inputDataAccount = (
    <FormArea>
      <InputText
        id="name"
        placeholder={USERSETTINGS.NAME_PLACEHOLDER}
        label={USERSETTINGS.NAME_PLACEHOLDER}
        maxlength="20"
        empty={dataUser.name === ""}
        ref={(ref) => (dataUserValue.current[0] = ref)}
        value={userCurrentData?.name}
      />
      <InputText
        id="lastname"
        placeholder={USERSETTINGS.LAST_NAME_PLACEHOLDER}
        label={USERSETTINGS.LAST_NAME_LABEL}
        maxlength="45"
        empty={dataUser.lastname === ""}
        ref={(ref) => (dataUserValue.current[1] = ref)}
        value={userCurrentData?.last_name}
      />
      <InputText
        id="email"
        type="email"
        placeholder={USERSETTINGS.EMAIL_PLACEHOLDER}
        label={USERSETTINGS.EMAIL_LABEL}
        maxlength="50"
        empty={dataUser.email === "" || emailErrorRegExp.current || emailExsist}
        ref={(ref) => (dataUserValue.current[2] = ref)}
        value={userCurrentData?.email}
      />
      <InputText
        id="role"
        label={USERSETTINGS.TYPE_ACCOUNT}
        value={userRole(userCurrentData?.role)}
        disabled="disabled"
      />
      <InputSelect
        id="theme"
        label={USERSETTINGS.TYPE_THEME}
        data={themesStyles}
        toggle={themeToggle}
        setToggle={setThemeToggle}
        value={themeValue}
        setValue={setThemeValue}
        valueData={themeValueData}
        setValueData={setThemeValueData}
      />
    </FormArea>
  );

  return {
    inputDataAccount,
    userData: userCurrentData,
    themeValueData,
    emailExsist,
    changedDataUser,
    emailNotCheckInDataBase,
    setEmailNotCheckInDataBase,
    dataUser,
  };
};
