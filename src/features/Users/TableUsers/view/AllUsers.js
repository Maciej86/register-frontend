import { useSelector } from "react-redux";
import { selectUserState } from "../../../../store/User/sliceUser";
import { COMMON, NAVIGATION, USERSETTINGS } from "../../../../core/InfoText";
import { useRoleUser } from "../../../../core/hooks/useRoleUser";
import { Loader } from "../../../../common/Loader";
import { LinkButton } from "../../../../common/styledLinkButton";
import { Button } from "../../../../common/Button";
import {
  Column,
  ColumnCenter,
  ConteinerTable,
  Table,
  Th,
  Th80,
  ThLeft,
  ThLp,
  TrBody,
  TrHead,
} from "../../../../common/styledTable";
import { LinkText } from "../../../../common/styledLink";
import { Modal } from "../../../../common/Modal";
import { useDeleteUser } from "../hooks/useDeleteUser";
import {
  LackOrganization,
  Separator,
  TextDelete,
  TextInfo,
  TextQuestion,
  TextUser,
} from "../styled";
import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";

export const AllUsers = () => {
  const { userRole } = useRoleUser();
  const loggedUser = useSelector(selectUserState);

  const {
    fetchDataLoading,
    visibleModal,
    setVisibleModal,
    selectIdUser,
    setSelecIdtUser,
    selectNameUser,
    setSelecNametUser,
    deleteUser,
    loadingDeleteUser,
    compressionUsersData,
  } = useDeleteUser();

  const ContentModal = (
    <TextDelete>
      <TextQuestion>Czy napewno chcesz usunać konto użytkownika?</TextQuestion>
      <TextUser>{selectNameUser}</TextUser>
      <TextInfo>
        Mimo usunięcia konta uzytkownika, jego imię i nazwisko będzie widniało
        przy rejestrach, w któych dokonał zmian oraz przy utworzonych notatkach.
        Jednak będzie onaznaczony jako użytkownik usunięty.
      </TextInfo>
    </TextDelete>
  );

  const viewAllUsers = fetchDataLoading ? (
    <Loader margin=" 30px auto" />
  ) : (
    <>
      <Modal
        setVisible={setVisibleModal}
        visible={visibleModal}
        textHeader="Usuwanie konta użytkownika"
        content={ContentModal}
        type="delete"
        typeButton="delete"
        buttonText="Usuń konto"
        buttonIcon={<GoTrash size={"15px"} />}
        buttonAction={() => deleteUser(selectIdUser)}
        loadingAction={loadingDeleteUser}
      />
      <ConteinerTable>
        <Table>
          <thead>
            <TrHead>
              <ThLp>{COMMON.TABLE_HEADER_COUNT}</ThLp>
              <ThLeft>{COMMON.TABLE_HEADER_NAME2}</ThLeft>
              <ThLeft>{COMMON.TABLE_HEADER_LASTNAME}</ThLeft>
              <ThLeft>{COMMON.TABLE_HEADER_ACCOUNT}</ThLeft>
              <ThLeft>{COMMON.TABLE_HEADER_EMAIL}</ThLeft>
              <Th80>{COMMON.TABLE_HEADER_ORGANIZATION}</Th80>
              <Th>{COMMON.TABLE_HEADER_EDIT}</Th>
              <Th>{COMMON.TABLE_HEADER_DELETE}</Th>
            </TrHead>
          </thead>
          <tbody>
            {compressionUsersData.map((item, index) => {
              index++;
              return (
                <TrBody key={index}>
                  <ColumnCenter>{index}</ColumnCenter>
                  <Column>{item.name}</Column>
                  <Column>{item.last_name}</Column>
                  <Column>{userRole(item.role, true)}</Column>
                  <Column>{item.email}</Column>
                  <Column>
                    {item.organizations.length === 0 ? (
                      <LackOrganization>
                        {USERSETTINGS.LACK_ORGANIZATION}
                      </LackOrganization>
                    ) : (
                      item.organizations.map((organization, index) => {
                        return (
                          <Separator key={index}>
                            <LinkText
                              to={`/${NAVIGATION.NAV_ID_ORGANIZATION}/${organization.id}`}
                            >
                              {organization.name}
                            </LinkText>
                          </Separator>
                        );
                      })
                    )}
                  </Column>
                  <ColumnCenter>
                    {loggedUser?.id > 1 && item.role === 1 ? (
                      <Button
                        type="button"
                        small="true"
                        typeAction="confirm"
                        icon={<FiEdit size={"15px"} />}
                        disabled="disabled"
                      />
                    ) : (
                      <LinkButton to={`#/${item.id}`} $small="true">
                        <FiEdit size={"15px"} />
                      </LinkButton>
                    )}
                  </ColumnCenter>
                  <ColumnCenter>
                    <Button
                      type="button"
                      small="true"
                      typeAction="delete"
                      icon={<GoTrash size={"15px"} />}
                      action={() => {
                        setVisibleModal((visibleModal) => !visibleModal);
                        setSelecIdtUser(item.id);
                        setSelecNametUser(`${item.name} ${item.last_name}`);
                      }}
                      disabled={
                        loggedUser?.id > 1 && item.role === 1 ? "disabled" : ""
                      }
                    />
                  </ColumnCenter>
                </TrBody>
              );
            })}
          </tbody>
        </Table>
      </ConteinerTable>
    </>
  );

  return { viewAllUsers };
};
