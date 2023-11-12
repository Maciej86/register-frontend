import { USERSETTINGS } from "../../core/InfoText";
import { useErrorConnectServer } from "../../core/hooks/useErrorConnectServer";
import { selectErrorServerUser } from "../../store/User/sliceUser";
import { Tile } from "../../common/Tile";
import { useFormDataUser } from "./form/useFormDataUser";
import { useFromPasswordUser } from "./form/useFormPasswordUser";
import { Conteiner } from "./styled";

export const Settings = () => {
  const formUserSetings = useFormDataUser();
  const formUserPassword = useFromPasswordUser();
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
