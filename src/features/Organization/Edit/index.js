import { ORGANIZATION } from "../../../core/InfoText";
import { useErrorConnectServer } from "../../../core/hooks/useErrorConnectServer";
import { selectServerErrorOrganization } from "../../../store/Organization/sliceOrganization";
import { Tile } from "../../../common/Tile";
import { useFormEditOrganization } from "./view/useFormEditOrganization";
import { useTableUsersInOrganization } from "./view/useFormUsersInOrganization";
import { Conteiner } from "./styled";

export const OrganizationEdit = () => {
  const { formEditname } = useFormEditOrganization();
  const { tableUserInOrganization } = useTableUsersInOrganization();
  useErrorConnectServer(selectServerErrorOrganization, "storeOrganization");

  return (
    <Conteiner>
      <Tile
        title={ORGANIZATION.COM_TITLE_EDIT_ORGANIZATION}
        subTitle={ORGANIZATION.COM_SUBTITLE_EDIT_ORGANIZATION}
        rightSide={formEditname}
      />
      <Tile
        title={ORGANIZATION.COM_TITLE_USERS_IN_ORGANIZATION}
        subTitle={ORGANIZATION.COM_SUBTITLE_USERS_IN_ORGANIZATION}
        content={tableUserInOrganization}
      />
    </Conteiner>
  );
};
