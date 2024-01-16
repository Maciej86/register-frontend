import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { USERSETTINGS } from "../../../../core/InfoText";
import {
  fetchAddUser,
  resetUserState,
  selectAddUser,
  selectStatusLoadingAddOrDeleteUser,
} from "../../../../store/User/sliceUser";
import { Loader } from "../../../../common/Loader";
import { Button } from "../../../../common/Button";
import { TableAction } from "../../../../common/styledTable";
import { OrganizationUser } from "./TableOrganization";
import { addConfirm } from "../../../Confirm/sliceConfirm";
import { InputDataUser } from "./InputDataUser";
import { AiOutlineUserAdd } from "react-icons/ai";

export const FormAddUser = () => {
  const dispatch = useDispatch();
  const loadingAddUser = useSelector(selectStatusLoadingAddOrDeleteUser);
  const confirmAddUser = useSelector(selectAddUser);
  const { formDataUser, checkDataUser, dataUser, errorInput, emailExsist } =
    InputDataUser();
  const {
    tableOrganization,
    fetchDataLoading,
    addUserIntoOrganization,
    organizationChecked,
  } = OrganizationUser();

  useEffect(() => {
    if (errorInput && emailExsist === "notexsist") {
      dispatch(
        fetchAddUser({
          name: dataUser[0],
          lastName: dataUser[1],
          email: dataUser[2],
          type: dataUser[5],
          password: dataUser[4],
          organizations: organizationChecked,
        })
      );
    }
  }, [errorInput, emailExsist]);

  useEffect(() => {
    if (confirmAddUser) {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: true,
          text: USERSETTINGS.CREATE_USER_ACCOUNT,
        })
      );
      dispatch(resetUserState());
    }
  }, [confirmAddUser]);

  const SubmitDataUser = (event) => {
    event.preventDefault();
    checkDataUser();
    addUserIntoOrganization();
  };

  const formAddUser = (
    <form onSubmit={SubmitDataUser}>
      {formDataUser}
      {fetchDataLoading ? (
        <Loader margin=" 30px auto" />
      ) : (
        <>
          {tableOrganization}
          <TableAction>
            {loadingAddUser ? (
              <Loader margin="0" />
            ) : (
              <Button
                text={USERSETTINGS.BUTTON_CREATE_ACCOUNT}
                typeAction="add"
                icon={<AiOutlineUserAdd size={"15px"} />}
                type="submit"
              />
            )}
          </TableAction>
        </>
      )}
    </form>
  );

  return { formAddUser };
};
