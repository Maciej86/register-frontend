import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectLoadingDeleteUserOrganization } from "../../../store/Organization/sliceOrganization";
import { useFetchData } from "../../../core/useFetchData";
import { URL_ORGANIZATION } from "../../../core/urlBackend";
import { Loader } from "../../../common/Loader";
import { useRoleUser } from "../../../core/useRoleUser";
import { useDeleteUserInOrganization } from "../checkValue/useDeleteUserInOrganization";
import { ConteinerLoader } from "../styled";
import { Button } from "../../../common/elements/Button";
import { AiOutlineUserDelete } from "react-icons/ai";
import {
  Column,
  Column80,
  ColumnCenter,
  ColumnLp,
  ConteinerTable,
  Table,
  Th,
  ThLeft,
  TrBody,
  TrHead,
} from "../../../common/styledCommon";
import {
  InputToggleSwitch,
  LabelToggleSwitch,
  SpanToggleSwitch,
  TableAction,
} from "../../Organization/styled";

export const useFormUsersInOrganization = () => {
  const { id } = useParams();
  const { fetchData, fetchDataLoading } = useFetchData(
    URL_ORGANIZATION.FETCH_USER_IN_ORGANIZATION,
    [id],
    { id: parseInt(id) }
  );
  const loadingDeleteUserInOrganization = useSelector(
    selectLoadingDeleteUserOrganization
  );
  const { userRole } = useRoleUser();
  const [notChecked, setNotChecked] = useState();

  const { deleteUserInOrganization, changeChecked, inputCheckbox } =
    useDeleteUserInOrganization(fetchData, setNotChecked);

  const formUserInOrganization = fetchDataLoading ? (
    <ConteinerLoader>
      <Loader margin="30px auto" />
    </ConteinerLoader>
  ) : (
    <form>
      <ConteinerTable>
        <Table>
          <thead>
            <TrHead>
              <Th>Lp.</Th>
              <ThLeft>Imię</ThLeft>
              <ThLeft>Nazwisko</ThLeft>
              <ThLeft>Konto</ThLeft>
              <Th>Zmień</Th>
            </TrHead>
          </thead>
          <tbody>
            {fetchData?.map((item, index) => {
              let number = index + 1;
              return (
                <TrBody key={index}>
                  <ColumnLp>{number}</ColumnLp>
                  <Column>{item.name}</Column>
                  <Column>{item.last_name}</Column>
                  <Column80>{userRole(item.role, true)}</Column80>
                  <ColumnCenter>
                    <LabelToggleSwitch
                      id={index}
                      $isChecked={inputCheckbox[index]}
                    >
                      <InputToggleSwitch
                        htmlFor={index}
                        type="checkbox"
                        value={item.id}
                        onChange={(event) =>
                          changeChecked(index, event.target.checked)
                        }
                        checked={inputCheckbox[index]}
                      />
                      <SpanToggleSwitch
                        $isChecked={inputCheckbox[index]}
                      ></SpanToggleSwitch>
                    </LabelToggleSwitch>
                  </ColumnCenter>
                </TrBody>
              );
            })}
          </tbody>
        </Table>
      </ConteinerTable>
      <TableAction>
        {loadingDeleteUserInOrganization ? (
          <Loader margin="0 5px 0 0" />
        ) : (
          <Button
            text="Usuń z organizacji"
            typeAction="delete"
            icon={<AiOutlineUserDelete size={"15px"} />}
            action={deleteUserInOrganization}
            disabled={notChecked === false ? false : true}
          />
        )}
      </TableAction>
    </form>
  );

  return { formUserInOrganization };
};
