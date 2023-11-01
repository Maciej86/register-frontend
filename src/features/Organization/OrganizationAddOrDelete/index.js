import { ORGANIZATION } from "../../../core/InfoText";
import { useFormAddOrganization } from "./form/useFormAddOrganization";
import { useAllOrganizaton } from "./form/useTableOrganization";
import { TileTwoHalf } from "../../../common/TileTwoHalf";
import { Tile } from "../../../common/Tile";
import { Conteiner } from "./styled";

export const Organization = () => {
  const { formNewOrganization } = useFormAddOrganization();
  const { viewOrganization } = useAllOrganizaton();

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
