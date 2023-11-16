import { URL_USERS } from "../../../../core/urlBackend";
import { COMMON, NAVIGATION, USERSETTINGS } from "../../../../core/InfoText";
import { useFetchData } from "../../../../core/hooks/useFetchData";
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
import { CompressionData } from "../hooks/CompressionData";
import { LackOrganization, Separator } from "../styled";
import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";

export const useAllUsers = () => {
  const { userRole } = useRoleUser();
  const { fetchData, fetchDataLoading } = useFetchData(URL_USERS.ALL_USERS);
  const { compressionUsersData } = CompressionData(fetchData);

  console.log(compressionUsersData);

  const viewAllUsers = fetchDataLoading ? (
    <Loader margin=" 30px auto" />
  ) : (
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
                  <LinkButton to={`#/${item.id}`} $small="true">
                    <FiEdit size={"15px"} />
                  </LinkButton>
                </ColumnCenter>
                <ColumnCenter>
                  <Button
                    type="button"
                    small="true"
                    typeAction="delete"
                    icon={<GoTrash size={"15px"} />}
                    action={null}
                  />
                </ColumnCenter>
              </TrBody>
            );
          })}
        </tbody>
      </Table>
    </ConteinerTable>
  );

  return { viewAllUsers };
};
