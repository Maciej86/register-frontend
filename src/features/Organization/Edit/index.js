import { selectServerErrorOrganization } from "@storeOrganization/sliceOrganization";
import { ORGANIZATION } from "@core/InfoText";
import { useErrorConnectServer } from "@coreHooks/useErrorConnectServer";
import { Tile } from "@common/Tile";
import { LoaderDataId } from "@common/LoaderDataId";
import { FormEditOrganization } from "./view/FormEditOrganization";
import { TableUsersInOrganization } from "./view/TableUsersInOrganization";
import { Conteiner } from "./styled";

export const OrganizationEdit = () => {
  const { formEditname, fetchData, fetchDataLoading } = FormEditOrganization();
  const { tableUsersInOrganization } = TableUsersInOrganization();
  const { loaderId, loaderMessage } = LoaderDataId(
    true,
    ORGANIZATION.NOT_EXSIST_ORGANIZATION
  );
  useErrorConnectServer(selectServerErrorOrganization, "storeOrganization");

  return fetchDataLoading ? (
    <>{loaderId}</>
  ) : fetchData.length == 0 ? (
    <>{loaderMessage}</>
  ) : (
    <Conteiner>
      <Tile
        title={ORGANIZATION.COM_TITLE_EDIT_ORGANIZATION}
        subTitle={ORGANIZATION.COM_SUBTITLE_EDIT_ORGANIZATION}
        rightSide={formEditname}
      />
      <Tile
        title={ORGANIZATION.COM_TITLE_USERS_IN_ORGANIZATION}
        subTitle={ORGANIZATION.COM_SUBTITLE_USERS_IN_ORGANIZATION}
        content={tableUsersInOrganization}
      />
    </Conteiner>
  );
};
