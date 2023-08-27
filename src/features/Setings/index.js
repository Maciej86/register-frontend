import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUserState } from "../Login/sliceLoginUser";
import { useRoleUser } from "../../core/hooks/useRoleUser";
import { COMPONENTS } from "../../core/InfoText";
import { themesStyles } from "../../core/styles/theme";
import { Tile } from "../../common/Tile";
import { InputText } from "../../common/elements/InputText";
import { InputSelect } from "../../common/elements/InputSelect";
import { Conteiner, FormInput } from "./styled";
import { Button } from "../../common/elements/Button";

export const Setings = () => {
  const userData = useSelector(selectUserState);
  const { userRole } = useRoleUser(userData.role);
  const [themeToggle, setThemeToggle] = useState(false);
  const [themeValue, setThemeValue] = useState(userData.theme);

  const bodyTileSetings = (
    <form>
      <FormInput>
        <InputText
          id="name"
          placeholder="Twoje imię"
          label="imię"
          value={userData.name}
        />
        <InputText
          id="lastname"
          placeholder="Twoje nazwisko"
          label="Nazwisko"
          value={userData.last_name}
        />
        <InputText
          id="email"
          type="email"
          placeholder="you@com.pl"
          label="Email"
          value={userData.email}
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
          currentTheme={userData.theme}
          toggle={themeToggle}
          setToggle={setThemeToggle}
          value={themeValue}
          setValue={setThemeValue}
        />
      </FormInput>
      <Button text="Zapisz" />
    </form>
  );

  const bodyTilePassword = (
    <form>
      <FormInput>
        <InputText
          id="oldpassword"
          placeholder="**********"
          label="Obecne hasło"
        />
        <InputText
          id="newpassword"
          placeholder="Wpisz trudne do złamania hasło"
          label="Nowe hasło"
        />
        <InputText
          id="newpasswordconform"
          placeholder="Powtórz nowe hasło"
          label="Powtórz nowe hasło"
        />
      </FormInput>
      <Button text="Zmień hasło" />
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
