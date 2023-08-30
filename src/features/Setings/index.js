import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEditPassword,
  fetchEditUser,
  selectStatusUser,
  selectUserState,
  selectloadingEditPassword,
} from "../../common/user/sliceUser";
import { useRoleUser } from "../../common/user/useRoleUser";
import { COMPONENTS } from "../../core/InfoText";
import { themesStyles } from "../../core/styles/theme";
import { Tile } from "../../common/Tile";
import { InputText } from "../../common/elements/InputText";
import { InputSelect } from "../../common/elements/InputSelect";
import { Loader } from "../../common/Loader";
import { Button } from "../../common/elements/Button";
import { Conteiner, FormInput } from "./styled";
import { LuSave } from "react-icons/lu";

export const Setings = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserState);
  const loadingEditUser = useSelector(selectStatusUser);
  const loadingEditPassword = useSelector(selectloadingEditPassword);
  const { userRole } = useRoleUser(userData?.role);
  const [themeToggle, setThemeToggle] = useState(false);
  const [themeValue, setThemeValue] = useState(userData?.theme);

  const dataUser = useRef([]);
  const passwordUser = useRef([]);

  const saveNewDataUser = () => {
    dispatch(
      fetchEditUser({
        id: userData?.id,
        name: dataUser.current[0].value,
        lastname: dataUser.current[1].value,
        email: dataUser.current[2].value,
        theme: themeValue,
      })
    );
  };

  const changedPassword = () => {
    dispatch(
      fetchEditPassword({
        id: userData?.id,
        oldpassword: passwordUser.current[0].value,
        newpassword: passwordUser.current[1].value,
      })
    );
  };

  const bodyTileSetings = (
    <form>
      <FormInput>
        <InputText
          id="name"
          placeholder="Twoje imię"
          label="imię"
          ref={(ref) => (dataUser.current[0] = ref)}
          value={userData?.name}
        />
        <InputText
          id="lastname"
          placeholder="Twoje nazwisko"
          label="Nazwisko"
          ref={(ref) => (dataUser.current[1] = ref)}
          value={userData?.last_name}
        />
        <InputText
          id="email"
          type="email"
          placeholder="you@com.pl"
          label="Email"
          ref={(ref) => (dataUser.current[2] = ref)}
          value={userData?.email}
        />
        <InputText
          id="role"
          label="Typ konta"
          value={userRole}
          disabled="disabled"
        />
        <InputSelect
          id="theme"
          label="Styl aplikacji"
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
          text="Zmień dane"
          icon={<LuSave size={"15px"} />}
          action={saveNewDataUser}
        />
      )}
    </form>
  );

  const bodyTilePassword = (
    <form>
      <FormInput>
        <InputText
          id="oldpassword"
          placeholder="**********"
          label="Obecne hasło"
          type="password"
          ref={(ref) => (passwordUser.current[0] = ref)}
        />
        <InputText
          id="newpassword"
          placeholder="Wpisz trudne do złamania hasło"
          label="Nowe hasło"
          type="password"
          ref={(ref) => (passwordUser.current[1] = ref)}
        />
        <InputText
          id="newpasswordconform"
          placeholder="Powtórz nowe hasło"
          label="Powtórz nowe hasło"
          type="password"
          ref={(ref) => (passwordUser.current[2] = ref)}
        />
      </FormInput>
      {loadingEditPassword ? (
        <Loader margin="0" />
      ) : (
        <Button
          text="Zmień hasło"
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
