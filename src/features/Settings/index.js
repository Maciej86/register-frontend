import { COMPONENTS } from "../../core/InfoText";
import { Tile } from "../../common/Tile";

import { Conteiner } from "./styled";
import { useFormDataUser } from "./form/useFormDataUser";
import { useFromPasswordUser } from "./form/useFormPasswordUser";
import { useErrorConnectServer } from "../../core/useErrorConnectServer";
import { selectErrorServerUser } from "../../store/User/sliceUser";

export const Settings = () => {
  const formUserSetings = useFormDataUser();
  const formUserPassword = useFromPasswordUser();
  useErrorConnectServer(selectErrorServerUser);

  return (
    <Conteiner>
      <Tile
        title={COMPONENTS.COM_TITLE_SETTINGS}
        subTitle={COMPONENTS.COM_SUBTITLE_SETTINGS}
        body={formUserSetings}
      />
      <Tile
        title={COMPONENTS.COM_TITLE_CHANGED_PASSWORD}
        body={formUserPassword}
      />
    </Conteiner>
  );
};
