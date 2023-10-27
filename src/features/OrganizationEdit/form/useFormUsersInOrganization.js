import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchUsersInOrganization,
  selectLoadingDeleteUserOrganization,
  selectLoadingOrganization,
  selectUsersInOrganization,
} from "../../../store/Organization/sliceOrganization";
import { Loader } from "../../../common/Loader";
import { useRoleUser } from "../../../core/useRoleUser";
import { useDeleteUserInOrganization } from "../checkValue/useDeleteUserInOrganization";
import { ButtonTab } from "../styled";
import { Button } from "../../../common/elements/Button";
import { AiOutlineUserDelete } from "react-icons/ai";
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
} from "../../../common/styledCommon";
import {
  InputToggleSwitch,
  LabelToggleSwitch,
  SpanToggleSwitch,
  TableAction,
} from "../../Organization/styled";

export const useFormUsersInOrganization = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [toggleTabUsersInOrganization, setToggleTabUsersInOrganization] =
    useState(true);
  const [toggleTabUsersOutOrganization, setToggleTabUserOutOrganization] =
    useState(false);

  const loadUsersInOrganization = () => {
    dispatch(fetchUsersInOrganization({ id: id }));
    setToggleTabUsersInOrganization(true);
    setToggleTabUserOutOrganization(false);
  };

  const loadUsersOutOrganization = () => {
    // dispatch(fetchUsersInOrganization({ id: id }));
    setToggleTabUsersInOrganization(false);
    setToggleTabUserOutOrganization(true);
  };

  useEffect(() => {
    loadUsersInOrganization();
  }, [id]);

  const loadingDeleteUserInOrganization = useSelector(
    selectLoadingDeleteUserOrganization
  );
  const usersInOrganization = useSelector(selectUsersInOrganization);
  const loadingUsersOrganization = useSelector(selectLoadingOrganization);
  const { userRole } = useRoleUser();
  const { deleteUserInOrganization, changeChecked, inputCheckbox, notChecked } =
    useDeleteUserInOrganization(usersInOrganization, id);

  const formUserInOrganization = (
    <form>
      <ConteinerTable>
        <ButtonTab
          type="button"
          $active={toggleTabUsersInOrganization}
          onClick={() => loadUsersInOrganization()}
          disabled={loadingUsersOrganization ? true : false}
        >
          Użytkownicy w organizacji
        </ButtonTab>
        <ButtonTab
          type="button"
          $active={toggleTabUsersOutOrganization}
          onClick={() => loadUsersOutOrganization()}
          disabled={loadingUsersOrganization ? true : false}
        >
          Dodaj innych użytkowników
        </ButtonTab>
        <Table>
          <thead>
            <TrHead>
              <ThLp>Lp.</ThLp>
              <ThLeft>Imię</ThLeft>
              <ThLeft>Nazwisko</ThLeft>
              <Th80>Konto</Th80>
              <Th>Zmień</Th>
            </TrHead>
          </thead>
          <tbody>
            {loadingUsersOrganization ? (
              <tr>
                <td colSpan="5">
                  <Loader margin="15px auto" />
                </td>
              </tr>
            ) : (
              usersInOrganization?.map((item, index) => {
                let number = index + 1;
                return (
                  <TrBody key={index}>
                    <ColumnCenter>{number}</ColumnCenter>
                    <Column>{item.name}</Column>
                    <Column>{item.last_name}</Column>
                    <td>{userRole(item.role, true)}</td>
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
              })
            )}
          </tbody>
        </Table>
      </ConteinerTable>
      <TableAction>
        {loadingUsersOrganization ? (
          ""
        ) : loadingDeleteUserInOrganization ? (
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
