import { useSelector } from "react-redux";
import { selectUserState } from "../Login/sliceLoginUser";
import { COMPONENTS } from "../../core/InfoText";
import { Tile } from "../../common/Tile";
import { InputText } from "../../common/elements/Input/InputText";
import { Form } from "./styled";

export const Setings = () => {
  const userData = useSelector(selectUserState);

  const bodyTile = (
    <Form>
      <InputText
        id="name"
        placeholder="Twoje imię"
        label="imię: "
        value={userData.name}
      />
      <InputText
        id="lastname"
        placeholder="Twoje nazwisko"
        label="Nazwisko: "
        value={userData.last_name}
      />
      <InputText
        id="email"
        placeholder="you@com.pl"
        label="Email: "
        value={userData.email}
      />
    </Form>
  );

  return (
    <Tile
      title={COMPONENTS.COM_TITLE_SETINGS}
      subTitle={COMPONENTS.COM_SUBTITLE_SETINGS}
      body={bodyTile}
    />
  );
};
