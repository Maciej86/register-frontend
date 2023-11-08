import { URL_USERS } from "../../../../core/urlBackend";
import { COMMON } from "../../../../core/InfoText";
import { useFetchData } from "../../../../core/hooks/useFetchData";
import { useRoleUser } from "../../../../core/hooks/useRoleUser";
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
} from "../../../../common/styledCommon";
import { Loader } from "../../../../common/Loader";
import { LinkButton } from "../../../../common/elements/styled";
import { FiEdit } from "react-icons/fi";

export const useAllUsers = () => {
  const { userRole } = useRoleUser();
  const { fetchData, fetchDataLoading } = useFetchData(URL_USERS.ALL_USERS);
  console.log(fetchData);

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
            <Th80>{COMMON.TABLE_HEADER_ORGANIZATION}</Th80>
            <Th>{COMMON.TABLE_HEADER_EDIT}</Th>
          </TrHead>
        </thead>
        <tbody>
          {fetchData?.map((item, index) => {
            index++;
            return (
              <TrBody key={index}>
                <ColumnCenter>{index}</ColumnCenter>
                <Column>{item.name}</Column>
                <Column>{item.last_name}</Column>
                <td>{userRole(item.role, true)}</td>
                <td>
                  {item.organization_name === null
                    ? "brak"
                    : item.organization_name}
                </td>
                <ColumnCenter>
                  <LinkButton to={`#/${item.id}`} $small="true">
                    <FiEdit size={"15px"} />
                  </LinkButton>
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
