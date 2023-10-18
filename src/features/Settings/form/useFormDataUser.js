import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectEmailExsist,
  selectStatusUser,
  selectUserState,
} from "../../../store/User/sliceUser";
import { useRoleUser } from "../../../core/useRoleUser";
import { useEditAccount } from "../checkValue/useEditAccount";
import { USERSETTINGS } from "../../../core/InfoText";
import { themesStyles } from "../../../core/styles/theme";
import { Loader } from "../../../common/Loader";
import { SelectDefaultValue } from "../../../common/elements/SelectDefaultValue";
import { InputSelect } from "../../../common/elements/InputSelect";
import { InputText } from "../../../common/elements/InputText";
import { Button } from "../../../common/elements/Button";
import { FormArea } from "../styled";
import { LuSave } from "react-icons/lu";

export const useFormDataUser = () => {
  const userData = useSelector(selectUserState);
  const emailExsist = useSelector(selectEmailExsist);
  const loadingEditUser = useSelector(selectStatusUser);
  const [themeValue, setThemeValue] = useState(() =>
    SelectDefaultValue(themesStyles, userData?.theme)
  );
  const [themeValueData, setThemeValueData] = useState(userData?.theme);
  const [organizationValueData] = useState(userData?.main_organization);
  const { changedDataUser, dataUserValue, detaUserEmpty, incorrectEmail } =
    useEditAccount(userData, themeValueData, organizationValueData);
  const { userRole } = useRoleUser();
  const [themeToggle, setThemeToggle] = useState(false);

  const formUserSetings = (
    <form>
      <FormArea>
        <InputText
          id="name"
          placeholder={USERSETTINGS.NAME_PLACEHOLDER}
          label={USERSETTINGS.NAME_PLACEHOLDER}
          maxlength="20"
          empty={detaUserEmpty[0] === ""}
          ref={(ref) => (dataUserValue.current[0] = ref)}
          value={userData?.name}
        />
        <InputText
          id="lastname"
          placeholder={USERSETTINGS.LAST_NAME_PLACEHOLDER}
          label={USERSETTINGS.LAST_NAME_LABEL}
          maxlength="45"
          empty={detaUserEmpty[1] === ""}
          ref={(ref) => (dataUserValue.current[1] = ref)}
          value={userData?.last_name}
        />
        <InputText
          id="email"
          type="email"
          placeholder={USERSETTINGS.EMAIL_PLACEHOLDER}
          label={USERSETTINGS.EMAIL_LABEL}
          maxlength="50"
          empty={
            detaUserEmpty[2] === "" ||
            incorrectEmail.current ||
            emailExsist === "exsist"
          }
          ref={(ref) => (dataUserValue.current[2] = ref)}
          value={userData?.email}
        />
        <InputText
          id="role"
          label={USERSETTINGS.TYPE_ACCOUNT}
          value={userRole(userData?.role)}
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
      {loadingEditUser ? (
        <Loader margin="0" />
      ) : (
        <Button
          text={USERSETTINGS.COFIRM_DATA_USER}
          icon={<LuSave size={"15px"} />}
          action={changedDataUser}
        />
      )}
    </form>
  );

  return formUserSetings;
};
