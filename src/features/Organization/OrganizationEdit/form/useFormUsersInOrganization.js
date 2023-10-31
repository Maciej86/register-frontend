import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchUsersInOutOrganization,
  selectLoadingAddOrDeleteUsersOrganization,
  selectLoadingOrganization,
  selectUsersInOutOrganization,
} from "../../../../store/Organization/sliceOrganization";
import { Loader } from "../../../../common/Loader";
import { useRoleUser } from "../../../../core/useRoleUser";
import { useDeleteUserInOrganization } from "../checkValue/useAddOrDeleteUsersOrganization";
import { ButtonTab } from "../styled";
import { Button } from "../../../../common/elements/Button";
import { AiOutlineUserDelete, AiOutlineUserAdd } from "react-icons/ai";
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
import {
  InputToggleSwitch,
  LabelToggleSwitch,
  SpanToggleSwitch,
  TableAction,
} from "../../OrganizationAddOrDelete/styled";

export const useFormUsersInOrganization = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loadingAddOrDeleteUsersOrganization = useSelector(
    selectLoadingAddOrDeleteUsersOrganization
  );
  const usersOrganization = useSelector(selectUsersInOutOrganization);
  const loadingUsersOrganization = useSelector(selectLoadingOrganization);
  const { userRole } = useRoleUser();
  const [toggleTabUsersOrganization, setToggleTabUsersOrganization] =
    useState(true);
  const {
    addOrDeleteUsersOrganization,
    changeChecked,
    inputCheckbox,
    userChecked,
  } = useDeleteUserInOrganization(
    usersOrganization,
    id,
    toggleTabUsersOrganization
  );

  const loadUsersInOrganization = () => {
    dispatch(fetchUsersInOutOrganization({ id: id, inOut: true }));
    setToggleTabUsersOrganization(true);
  };

  const loadUsersOutOrganization = () => {
    dispatch(fetchUsersInOutOrganization({ id: id, inOut: false }));
    setToggleTabUsersOrganization(false);
  };

  useEffect(() => {
    loadUsersInOrganization();
  }, [id]);

  const formUserInOrganization = (
    <form>
      <ConteinerTable>
        <ButtonTab
          type="button"
          $active={toggleTabUsersOrganization}
          onClick={() => loadUsersInOrganization()}
          disabled={loadingUsersOrganization}
        >
          Użytkownicy w organizacji
        </ButtonTab>
        <ButtonTab
          type="button"
          $active={toggleTabUsersOrganization ? false : true}
          onClick={() => loadUsersOutOrganization()}
          disabled={loadingUsersOrganization}
        >
          Dodaj użytkowników
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
              usersOrganization?.map((item, index) => {
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
                          name="idUser"
                          defaultValue={item.id}
                          onChange={(event) =>
                            changeChecked(index, event.target.checked)
                          }
                          checked={inputCheckbox[index] || false}
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
        ) : loadingAddOrDeleteUsersOrganization ? (
          <Loader margin="0 5px 0 0" />
        ) : toggleTabUsersOrganization ? (
          <Button
            text="Usuń z organizacji"
            typeAction="delete"
            icon={<AiOutlineUserDelete size={"15px"} />}
            action={addOrDeleteUsersOrganization}
            disabled={userChecked}
          />
        ) : (
          <Button
            text="Dodaj uzytkownika"
            typeAction="add"
            icon={<AiOutlineUserAdd size={"15px"} />}
            action={addOrDeleteUsersOrganization}
            disabled={userChecked}
          />
        )}
      </TableAction>
    </form>
  );

  return { formUserInOrganization };
};
