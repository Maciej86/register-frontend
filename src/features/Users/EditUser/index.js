import { NAVIGATION, USERSETTINGS } from "../../../core/InfoText";
import { Tile } from "../../../common/Tile";
import { LinkButton } from "../../../common/styledLinkButton";
import { LoaderDataId } from "../../../common/LoaderDataId";
import { FormEditDataUser } from "./view/FormEditDataUser";
import { ButtonArea } from "../TableUsers/styled";
import { PiUsers } from "react-icons/pi";
import { Conteiner } from "./styled";
import { FormEditPasswordUser } from "./view/FormEditPasswordUser";

export const EditUser = () => {
  const { fetchData, fetchDataLoading, formEditDataUser } = FormEditDataUser();
  const { formEditPasswordUser } = FormEditPasswordUser();
  const { loaderId, loaderMessage } = LoaderDataId(
    true,
    USERSETTINGS.NOT_EXSIST_USER
  );

  const ButtonAllUsers = (
    <ButtonArea>
      <LinkButton to={`/${NAVIGATION.NAV_LINK_USERS}`}>
        <PiUsers /> {USERSETTINGS.COM_SUBTITLE_TABLE_USERS}
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
        title="Dane użytkownika"
        subTitle="Podstawowe dane użytkownika."
        rightSide={ButtonAllUsers}
        content={formEditDataUser}
      />
      <Tile
        title="Organizacje"
        rightSide={<button>Zarządzaj organizacjami</button>}
        subTitle="Usuń lub dodaj uzytkownika do organizacji."
        content="Tutaj organizacje"
      />
      <Tile
        title="Reset hasła"
        subTitle="Nadaj użytkownikowi nowe hasło."
        content={formEditPasswordUser}
      />
    </Conteiner>
  );
};
