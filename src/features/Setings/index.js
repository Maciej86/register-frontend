import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectStatusUser,
  selectUserState,
  selectStatusEditPassword,
  selectEmailExsist,
} from "../../common/user/sliceUser";
import { useRoleUser } from "../../common/user/useRoleUser";
import { COMPONENTS, USERSETINGS } from "../../core/InfoText";
import { themesStyles } from "../../core/styles/theme";
import { Tile } from "../../common/Tile";
import { InputText } from "../../common/elements/InputText";
import { InputSelect } from "../../common/elements/InputSelect";
import { Loader } from "../../common/Loader";
import { Button } from "../../common/elements/Button";
import { useCheckValue } from "./useCheckValue";
import { Conteiner, FormInput } from "./styled";
import { LuSave } from "react-icons/lu";

export const Setings = () => {
  const userData = useSelector(selectUserState);
  const emailExsist = useSelector(selectEmailExsist);
  const [themeValue, setThemeValue] = useState(userData?.theme);

  const {
    dataUserValue,
    passwordUserValue,
    detaUserEmpty,
    passwordUserEmpty,
    differentPasswords,
    incorrectEmail,
    changedDataUser,
    changedPassword,
    oldPassword,
  } = useCheckValue(userData, themeValue);

  const loadingEditUser = useSelector(selectStatusUser);
  const loadingEditPassword = useSelector(selectStatusEditPassword);
  const { userRole } = useRoleUser(userData?.role);
  const [themeToggle, setThemeToggle] = useState(false);

  const bodyTileSetings = (
    <form>
      <FormInput>
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
          id="theme"
          label={USERSETINGS.TYPE_THEME}
          data={themesStyles}
          toggle={themeToggle}
          setToggle={setThemeToggle}
          value={themeValue}
          setValue={setThemeValue}
        />
      </FormInput>
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

  const bodyTilePassword = (
    <form>
      <FormInput>
        <InputText
          id="oldpassword"
          placeholder={USERSETINGS.OLD_PASSWORD_PLACEHOLDER}
          label={USERSETINGS.OLD_PASSWORD_LABEL}
          type="password"
          empty={passwordUserEmpty[0] === "" || oldPassword.current}
          ref={(ref) => (passwordUserValue.current[0] = ref)}
        />
        <InputText
          id="newpassword"
          placeholder={USERSETINGS.NEW_PASSWORD_PLACEHOLDER}
          label={USERSETINGS.NEW_PASSWORD_LABEL}
          type="password"
          maxlength="100"
          empty={passwordUserEmpty[1] === "" || differentPasswords.current}
          ref={(ref) => (passwordUserValue.current[1] = ref)}
        />
        <InputText
          id="newpasswordconform"
          placeholder={USERSETINGS.NEW_PASSWORD_REPEAT_PLACEHOLDER}
          label={USERSETINGS.NEW_PASSWORD_REPEAT_LABEL}
          type="password"
          maxlength="100"
          empty={passwordUserEmpty[2] === "" || differentPasswords.current}
          ref={(ref) => (passwordUserValue.current[2] = ref)}
        />
      </FormInput>
      {loadingEditPassword ? (
        <Loader margin="0" />
      ) : (
        <Button
          text={USERSETINGS.NEW_PASSWORD_CONFIRM}
          icon={<LuSave size={"15px"} />}
          action={changedPassword}
        />
      )}
    </form>
  );

  return (
    <Conteiner>
      <Tile
        title={COMPONENTS.COM_TITLE_SETINGS}
        subTitle={COMPONENTS.COM_SUBTITLE_SETINGS}
        body={bodyTileSetings}
      />
      <Tile
        title={COMPONENTS.COM_TITLE_CHANGED_PASSWORD}
        body={bodyTilePassword}
      />
    </Conteiner>
  );
};
