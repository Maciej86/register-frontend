import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectEmailExsist, selectUserState } from "@storeUser/sliceUser";
import { useRoleUser } from "@coreHooks/useRoleUser";
import { useCheckEmptyInput } from "@coreHooks/useCheckEmptyInput";
import { useCheckEmail } from "@coreHooks/useCheckEmail";
import { USERSETTINGS } from "@core/InfoText";
import { themesStyles } from "@core/styles/theme";
import { InputSelect } from "@common/InputSelect";
import { InputText } from "@common/InputText";
import { SelectDefaultValue } from "@common/InputSelect/SelectDefaultValue";
import { FormArea } from "../styled";

export const InputDataAccount = () => {
  const userCurrentData = useSelector(selectUserState);
  const emailExsist = useSelector(selectEmailExsist);
  const { userRole } = useRoleUser();
  const { checkEmptyInput, dataInput } = useCheckEmptyInput();
  const {
    checkEmail,
    emailErrorRegExp,
    emailNotCheckInDataBase,
    setEmailNotCheckInDataBase,
  } = useCheckEmail();
  const [themeValue, setThemeValue] = useState(() =>
    SelectDefaultValue(themesStyles, userCurrentData?.theme)
  );
  const [themeValueData, setThemeValueData] = useState(userCurrentData?.theme);
  const [themeToggle, setThemeToggle] = useState(false);
  const dataUserValue = useRef([]);

  const inputDataAccount = (
    <FormArea>
      <InputText
        id="name"
        placeholder={USERSETTINGS.NAME_PLACEHOLDER}
        label={USERSETTINGS.NAME_PLACEHOLDER}
        maxlength="20"
        empty={dataInput.name === ""}
        ref={(ref) => (dataUserValue.current[0] = ref)}
        value={userCurrentData?.name}
      />
      <InputText
        id="lastname"
        placeholder={USERSETTINGS.LAST_NAME_PLACEHOLDER}
        label={USERSETTINGS.LAST_NAME_LABEL}
        maxlength="45"
        empty={dataInput.lastname === ""}
        ref={(ref) => (dataUserValue.current[1] = ref)}
        value={userCurrentData?.last_name}
      />
      <InputText
        id="email"
        type="email"
        placeholder={USERSETTINGS.EMAIL_PLACEHOLDER}
        label={USERSETTINGS.EMAIL_LABEL}
        maxlength="50"
        empty={
          dataInput.email === "" || emailErrorRegExp.current || emailExsist
        }
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
    checkEmptyInput,
    checkEmail,
    inputDataAccount,
    userCurrentData,
    themeValueData,
    emailExsist,
    emailNotCheckInDataBase,
    setEmailNotCheckInDataBase,
    dataInput,
    dataUserValue,
  };
};
