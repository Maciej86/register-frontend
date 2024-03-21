import { useParams } from "react-router-dom";
import { NAVIGATION, ORGANIZATION, USERSETTINGS } from "../../../core/InfoText";
import { useFetchData } from "../../../core/hooks/useFetchData";
import { useErrorConnectServer } from "../../../core/hooks/useErrorConnectServer";
import { URL_USER } from "../../../core/urlApi";
import { selectErrorServerUser } from "../../../store/User/sliceUser";
import { selectServerErrorOrganization } from "../../../store/Organization/sliceOrganization";
import { Tile } from "../../../common/Tile";
import { LinkButton } from "../../../common/styledLinkButton";
import { LoaderDataId } from "../../../common/LoaderDataId";
import { FormEditDataUser } from "./view/FormEditDataUser";
import { FormEditPasswordUser } from "./view/FormEditPasswordUser";
import { FormEditOrganizationUser } from "./view/FormEditOrganizationUser";
import { ButtonArea } from "../TableUsers/styled";
import { Conteiner } from "./styled";
import { PiUsers } from "react-icons/pi";
import { LiaCubesSolid } from "react-icons/lia";

export const EditUser = () => {
  const { id } = useParams();
  const { fetchData, fetchDataLoading } = useFetchData(
    URL_USER.FETCH_DATA_USER,
    [id],
    { id: parseInt(id) }
  );

  const { formEditDataUser } = FormEditDataUser(fetchData);
  const { formEditOrganizationUser } = FormEditOrganizationUser(
    fetchData.organizationId,
    id
  );
  const { formEditPasswordUser } = FormEditPasswordUser();

  const { loaderId, loaderMessage } = LoaderDataId(
    true,
    USERSETTINGS.NOT_EXSIST_USER
  );
  useErrorConnectServer(selectErrorServerUser, "storeUser");
  useErrorConnectServer(selectServerErrorOrganization, "storeOrganization");

  const ButtonAllUsers = (
    <ButtonArea>
      <LinkButton to={`/${NAVIGATION.NAV_LINK_USERS}`}>
        <PiUsers /> {USERSETTINGS.COM_SUBTITLE_TABLE_USERS}
      </LinkButton>
    </ButtonArea>
  );

  const ButtonOrganization = (
    <ButtonArea>
      <LinkButton to={`/${NAVIGATION.NAV_LINK_ORGANIZATION}`}>
        <LiaCubesSolid /> {ORGANIZATION.COM_SUBTITLE_ALL_ORGANIZATION}
      </LinkButton>
    </ButtonArea>
  );

  return fetchDataLoading ? (
    <>{loaderId}</>
  ) : fetchData.length === 0 ? (
    <>{loaderMessage}</>
  ) : (
    <Conteiner>
      <Tile
        title={USERSETTINGS.COM_DATA_USER}
        subTitle={USERSETTINGS.CREATE_USER_DATA_SUBTITLE}
        rightSide={ButtonAllUsers}
        content={formEditDataUser}
      />
      <Tile
        title={ORGANIZATION.ORGANIZATION}
        rightSide={ButtonOrganization}
        subTitle={ORGANIZATION.ADD_OR_DELETE_USER_ORGANIZATION}
        content={formEditOrganizationUser}
      />
      <Tile
        title={USERSETTINGS.RESET_PASSWORD}
        subTitle={USERSETTINGS.RESET_PASSWORD_SUBTITLE}
        content={formEditPasswordUser}
      />
    </Conteiner>
  );
};
