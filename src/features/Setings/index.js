import { useSelector } from "react-redux";
import { selectUserState } from "../Login/sliceLoginUser";
import { useRoleUser } from "../../core/hooks/useRoleUser";
import { COMPONENTS } from "../../core/InfoText";
import { Tile } from "../../common/Tile";
import { InputText } from "../../common/elements/Input/InputText";
import {
  Conteiner,
  Form,
  Select,
  SelectButton,
  SelectItem,
  SelectList,
} from "./styled";
import { useState } from "react";
import { Input, Label } from "../../common/elements/Input/styled";

export const Setings = () => {
  const userData = useSelector(selectUserState);
  const { userRole } = useRoleUser(userData?.role);
  const [selectVisibiltyTheme, setSelectVisibiltyTheme] = useState(false);
  const [selectVisibiltyTest, setSelectVisibiltyTest] = useState(false);

  const [selectThemeValue, setSelectThemeValue] = useState("Theme 1");
  console.log(selectThemeValue);

  const bodyTileSetings = (
    <Form>
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

      <Select onMouseLeave={() => setSelectVisibiltyTheme(false)}>
        <Label htmlFor="theme">Styl aplikacji</Label>
        <Input
          id="theme"
          type="text"
          autoCapitalize="none"
          autoComplete="off"
          aria-autocomplete="list"
          aria-haspopup="true"
          role="combobox"
          value={selectThemeValue}
          onClick={() =>
            setSelectVisibiltyTheme(
              (selectVisibiltyTheme) => !selectVisibiltyTheme
            )
          }
        />
        <SelectList $isVisibilty={selectVisibiltyTheme}>
          <SelectItem>
            <SelectButton
              onClick={() => {
                setSelectThemeValue("Opcja 1");
                setSelectVisibiltyTheme(false);
              }}
              type="button"
            >
              Opcja 1
            </SelectButton>
          </SelectItem>
          <SelectItem>
            <SelectButton
              onClick={() => {
                setSelectThemeValue("Opcja 2");
                setSelectVisibiltyTheme(false);
              }}
              type="button"
            >
              Opcja 2
            </SelectButton>
          </SelectItem>
          <SelectItem>
            <SelectButton
              onClick={() => {
                setSelectThemeValue("Opcja 3");
                setSelectVisibiltyTheme(false);
              }}
              type="button"
            >
              Opcja 3
            </SelectButton>
          </SelectItem>
        </SelectList>
      </Select>

      <Select onMouseLeave={() => setSelectVisibiltyTest(false)}>
        <label htmlFor="theme">Styl aplikacji</label>
        <input
          id="theme1"
          type="text"
          autoCapitalize="none"
          autoComplete="off"
          aria-autocomplete="list"
          aria-haspopup="true"
          role="combobox"
          defaultValue="Theme 1"
          onClick={() =>
            setSelectVisibiltyTest(
              (selectVisibiltyTest) => !selectVisibiltyTest
            )
          }
        />
        <SelectList $isVisibilty={selectVisibiltyTest}>
          <SelectItem>
            <SelectButton type="button">Opcja 1</SelectButton>
          </SelectItem>
          <SelectItem>
            <SelectButton type="button">Opcja 2</SelectButton>
          </SelectItem>
          <SelectItem>
            <SelectButton type="button">Opcja 3</SelectButton>
          </SelectItem>
        </SelectList>
      </Select>
    </Form>
  );

  const bodyTilePassword = (
    <Form>
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
    </Form>
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
