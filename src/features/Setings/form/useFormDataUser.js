import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectEmailExsist,
  selectStatusUser,
  selectUserState,
} from "../../../common/User/sliceUser";
import { selectUserOrganization } from "../../../common/Organization/sliceOrganization";
import { useEditAccount } from "../checkValue/useEditAccount";
import { USERSETINGS } from "../../../core/InfoText";
import { themesStyles } from "../../../core/styles/theme";
import { useRoleUser } from "../../../common/User/useRoleUser";
import { Loader } from "../../../common/Loader";
import { SelectDefaultValue } from "../../../common/elements/SelectDefaultValue";
import { InputSelect } from "../../../common/elements/InputSelect";
import { InputText } from "../../../common/elements/InputText";
import { Button } from "../../../common/elements/Button";
import { FormArea } from "../styled";
import { LuSave } from "react-icons/lu";

export const useFormDataUser = () => {
  const userData = useSelector(selectUserState);
  const organization = useSelector(selectUserOrganization);
  const emailExsist = useSelector(selectEmailExsist);
  const loadingEditUser = useSelector(selectStatusUser);
  const [themeValue, setThemeValue] = useState(() =>
    SelectDefaultValue(themesStyles, userData?.theme)
  );
  const [organizationValue, setOrganizationValue] = useState(() =>
    SelectDefaultValue(organization, userData?.main_organization)
  );
  const [themeValueData, setThemeValueData] = useState(userData?.theme);
  const [organizationValueData, setOrganizationValueData] = useState(
    userData?.main_organization
  );
  const { changedDataUser, dataUserValue, detaUserEmpty, incorrectEmail } =
    useEditAccount(userData, themeValueData, organizationValueData);
  const { userRole } = useRoleUser(userData?.role);
  const [themeToggle, setThemeToggle] = useState(false);
  const [organizationToggle, setOrganizationToggle] = useState(false);

  const formUserSetings = (
    <form>
      <FormArea>
        <InputText
          id="name"
          placeholder={USERSETINGS.NAME_PLACEHOLDER}
          label={USERSETINGS.NAME_PLACEHOLDER}
          maxlength="20"
          empty={detaUserEmpty[0] === ""}
          ref={(ref) => (dataUserValue.current[0] = ref)}
          value={userData?.name}
        />
        <InputText
          id="lastname"
          placeholder={USERSETINGS.LAST_NAME_PLACEHOLDER}
          label={USERSETINGS.LAST_NAME_LABEL}
          maxlength="45"
          empty={detaUserEmpty[1] === ""}
          ref={(ref) => (dataUserValue.current[1] = ref)}
          value={userData?.last_name}
        />
        <InputText
          id="email"
          type="email"
          placeholder={USERSETINGS.EMAIL_PLACEHOLDER}
          label={USERSETINGS.EMAIL_LABEL}
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
          label={USERSETINGS.TYPE_ACCOUNT}
          value={userRole}
          disabled="disabled"
        />
        <InputSelect
          id="organization"
          label="Główna organizacja"
          data={organization}
          toggle={organizationToggle}
          setToggle={setOrganizationToggle}
          value={organizationValue}
          setValue={setOrganizationValue}
          valueData={organizationValueData}
          setValueData={setOrganizationValueData}
        />
        <InputSelect
          id="theme"
          label={USERSETINGS.TYPE_THEME}
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
          text={USERSETINGS.COFIRM_DATA_USER}
          icon={<LuSave size={"15px"} />}
          action={changedDataUser}
        />
      )}
    </form>
  );

  return formUserSetings;
};
