import { USERSETTINGS } from "../../core/InfoText";
import { useErrorConnectServer } from "../../core/hooks/useErrorConnectServer";
import { selectErrorServerUser } from "../../store/User/sliceUser";
import { Tile } from "../../common/Tile";
import { FormDataUser } from "./view/FormDataUser";
import { FromPasswordUser } from "./view/FormPasswordUser";
import { Conteiner } from "./styled";

export const Settings = () => {
  const { formUserSetings } = FormDataUser();
  const { formUserPassword } = FromPasswordUser();
  useErrorConnectServer(selectErrorServerUser, "storeUser");

  return (
    <Conteiner>
      <Tile
        title={USERSETTINGS.COM_TITLE_SETTINGS}
        subTitle={USERSETTINGS.COM_SUBTITLE_SETTINGS}
        content={formUserSetings}
      />
      <Tile
        title={USERSETTINGS.COM_TITLE_CHANGED_PASSWORD}
        content={formUserPassword}
      />
    </Conteiner>
  );
};
