import { ORGANIZATION } from "../../../core/InfoText";
import { useErrorConnectServer } from "../../../core/hooks/useErrorConnectServer";
import { selectServerErrorOrganization } from "../../../store/Organization/sliceOrganization";
import { Tile } from "../../../common/Tile";
import { FormAddOrganization } from "./view/FormAddOrganization";
import { TableOrganizaton } from "./view/TableOrganization";
import { Conteiner } from "./styled";

export const Organization = () => {
  const { formNewOrganization } = FormAddOrganization();
  const { viewOrganization } = TableOrganizaton();
  useErrorConnectServer(selectServerErrorOrganization, "storeOrganization");

  return (
    <Conteiner>
      <Tile
        title={ORGANIZATION.COM_TITLE_NEW_ORGANIZATIION}
        subTitle={ORGANIZATION.COM_SUBTITLE_NEW_ORGANIZATION}
        rightSide={formNewOrganization}
      />
      <Tile
        title={ORGANIZATION.COM_TITLE_ALL_ORGANIZATION}
        subTitle={ORGANIZATION.COM_SUBTITLE_ALL_ORGANIZATION}
        content={viewOrganization}
      />
    </Conteiner>
  );
};
