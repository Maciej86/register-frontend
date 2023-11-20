import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { COMMON, ORGANIZATION } from "../../../../core/InfoText";
import { useRoleUser } from "../../../../core/hooks/useRoleUser";
import {
  fetchUsersInOutOrganization,
  selectLoadingAddOrDeleteUsersOrganization,
  selectLoadingOrganization,
  selectUsersInOutOrganization,
} from "../../../../store/Organization/sliceOrganization";
import { Loader } from "../../../../common/Loader";
import { Button } from "../../../../common/Button";
import {
  Column,
  ColumnCenter,
  ConteinerTable,
  EmptyTable,
  Table,
  TableAction,
  Th,
  Th80,
  ThLeft,
  ThLp,
  TrBody,
  TrHead,
} from "../../../../common/styledTable";
import {
  InputBoxSwitch,
  LabelBoxSwitch,
  SpanBoxSwitch,
} from "../../../../common/styledInputBoxSwitch";
import { useDeleteUserInOrganization } from "../hooks/useAddOrDeleteUsersOrganization";
import { ButtonTab } from "../styled";
import { AiOutlineUserDelete, AiOutlineUserAdd } from "react-icons/ai";

export const useTableUsersInOrganization = () => {
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

  const tableUserInOrganization = (
    <form onSubmit={addOrDeleteUsersOrganization}>
      <ConteinerTable>
        <ButtonTab
          type="button"
          $active={toggleTabUsersOrganization}
          onClick={() => loadUsersInOrganization()}
          disabled={loadingUsersOrganization}
        >
          {ORGANIZATION.TAB_USER_IN_ORGANIZATION}
        </ButtonTab>
        <ButtonTab
          type="button"
          $active={toggleTabUsersOrganization ? false : true}
          onClick={() => loadUsersOutOrganization()}
          disabled={loadingUsersOrganization}
        >
          {ORGANIZATION.TAB_ADD_USER_FOR_ORGANIZATION}
        </ButtonTab>
        <Table>
          <thead>
            <TrHead>
              <ThLp>{COMMON.TABLE_HEADER_COUNT}</ThLp>
              <ThLeft>{COMMON.TABLE_HEADER_NAME2}</ThLeft>
              <ThLeft>{COMMON.TABLE_HEADER_LASTNAME}</ThLeft>
              <Th80>{COMMON.TABLE_HEADER_ACCOUNT}</Th80>
              <Th>{COMMON.TABLE_HEADER_CHANGE}</Th>
            </TrHead>
          </thead>
          <tbody>
            {loadingUsersOrganization ? (
              <tr>
                <td colSpan="5">
                  <Loader margin="15px auto" />
                </td>
              </tr>
            ) : usersOrganization.length === 0 ? (
              toggleTabUsersOrganization ? (
                <tr>
                  <ColumnCenter colSpan="5">
                    <EmptyTable>
                      {ORGANIZATION.EMPTY_TABLE_USERES_IN_ORGANIZATION}
                    </EmptyTable>
                  </ColumnCenter>
                </tr>
              ) : (
                <tr>
                  <ColumnCenter colSpan="5">
                    <EmptyTable>
                      {ORGANIZATION.EMPTY_TABLE_ALL_USERS_IN_ORGANIZATION}
                    </EmptyTable>
                  </ColumnCenter>
                </tr>
              )
            ) : (
              usersOrganization?.map((item, index) => {
                let number = index + 1;
                return (
                  <TrBody key={index}>
                    <ColumnCenter>{number}</ColumnCenter>
                    <Column>{item.name}</Column>
                    <Column>{item.last_name}</Column>
                    <Column>{userRole(item.role, true)}</Column>
                    <ColumnCenter>
                      <LabelBoxSwitch
                        id={index}
                        $isChecked={inputCheckbox[index]}
                      >
                        <InputBoxSwitch
                          htmlFor={index}
                          type="checkbox"
                          name="idUser"
                          defaultValue={item.id}
                          onChange={(event) =>
                            changeChecked(index, event.target.checked)
                          }
                          checked={inputCheckbox[index] || false}
                        />
                        <SpanBoxSwitch
                          $isChecked={inputCheckbox[index]}
                        ></SpanBoxSwitch>
                      </LabelBoxSwitch>
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
            text={ORGANIZATION.BUTTON_DELETE_USER_ORGANIZATION}
            typeAction="delete"
            icon={<AiOutlineUserDelete size={"15px"} />}
            type="submit"
            disabled={userChecked}
          />
        ) : (
          <Button
            text={ORGANIZATION.BUTTON_ADD_USER_ORGANIZATION}
            typeAction="add"
            icon={<AiOutlineUserAdd size={"15px"} />}
            type="submit"
            disabled={userChecked}
          />
        )}
      </TableAction>
    </form>
  );

  return { tableUserInOrganization };
};
