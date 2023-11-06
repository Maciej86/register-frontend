import { ORGANIZATION } from "../../../core/InfoText";
import { useErrorConnectServer } from "../../../core/hooks/useErrorConnectServer";
import { selectServerErrorOrganization } from "../../../store/Organization/sliceOrganization";
import { useFormEditOrganization } from "./form/useFormEditOrganization";
import { useFormUsersInOrganization } from "./form/useFormUsersInOrganization";
import { TileTwoHalf } from "../../../common/TileTwoHalf";
import { Tile } from "../../../common/Tile";
import { Conteiner } from "./styled";

export const OrganizationEdit = () => {
  const { formEditname } = useFormEditOrganization();
  const { formUserInOrganization } = useFormUsersInOrganization();
  useErrorConnectServer(selectServerErrorOrganization, "storeOrganization");

  return (
    <Conteiner>
      <TileTwoHalf
        title={ORGANIZATION.COM_TITLE_EDIT_ORGANIZATION}
        subTitle={ORGANIZATION.COM_SUBTITLE_EDIT_ORGANIZATION}
        body={formEditname}
      />
      <Tile
        title={ORGANIZATION.COM_TITLE_USERS_IN_ORGANIZATION}
        subTitle={ORGANIZATION.COM_SUBTITLE_USERS_IN_ORGANIZATION}
        body={formUserInOrganization}
      />
    </Conteiner>
  );
};
