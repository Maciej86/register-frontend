import { ORGANIZATION } from "../../../core/InfoText";
import { useErrorConnectServer } from "../../../core/hooks/useErrorConnectServer";
import { selectServerErrorOrganization } from "../../../store/Organization/sliceOrganization";
import { useFormAddOrganization } from "./form/useFormAddOrganization";
import { useAllOrganizaton } from "./form/useTableOrganization";
import { Tile } from "../../../common/Tile";
import { TileHeadAndBody } from "../../../common/TileHeadAndBody";
import { Conteiner } from "./styled";

export const Organization = () => {
  const { formNewOrganization } = useFormAddOrganization();
  const { viewOrganization } = useAllOrganizaton();
  useErrorConnectServer(selectServerErrorOrganization, "storeOrganization");

  return (
    <Conteiner>
      <TileHeadAndBody
        title={ORGANIZATION.COM_TITLE_NEW_ORGANIZATIION}
        subTitle={ORGANIZATION.COM_SUBTITLE_NEW_ORGANIZATION}
        rightSide={formNewOrganization}
      />
      <Tile
        title={ORGANIZATION.COM_TITLE_ALL_ORGANIZATION}
        subTitle={ORGANIZATION.COM_SUBTITLE_ALL_ORGANIZATION}
        body={viewOrganization}
      />
    </Conteiner>
  );
};
