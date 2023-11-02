import { ORGANIZATION } from "../../../core/InfoText";
import { useErrorConnectServer } from "../../../core/hooks/useErrorConnectServer";
import { selectServerErrorOrganization } from "../../../store/Organization/sliceOrganization";
import { useFormAddOrganization } from "./form/useFormAddOrganization";
import { useAllOrganizaton } from "./form/useTableOrganization";
import { TileTwoHalf } from "../../../common/TileTwoHalf";
import { Tile } from "../../../common/Tile";
import { Conteiner } from "./styled";

export const Organization = () => {
  const { formNewOrganization } = useFormAddOrganization();
  const { viewOrganization } = useAllOrganizaton();
  useErrorConnectServer(selectServerErrorOrganization);

  return (
    <Conteiner>
      <TileTwoHalf
        title={ORGANIZATION.COM_TITLE_NEW_ORGANIZATIION}
        subTitle={ORGANIZATION.COM_SUBTITLE_NEW_ORGANIZATION}
        body={formNewOrganization}
      />
      <Tile
        title={ORGANIZATION.COM_TITLE_ALL_ORGANIZATION}
        subTitle={ORGANIZATION.COM_SUBTITLE_ALL_ORGANIZATION}
        body={viewOrganization}
      />
    </Conteiner>
  );
};
