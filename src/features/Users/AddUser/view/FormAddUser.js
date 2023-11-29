import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { USERSETTINGS } from "../../../../core/InfoText";
import {
  fetchAddUser,
  resetUserState,
  selectAddUser,
  selectStatusLoadingAddUser,
} from "../../../../store/User/sliceUser";
import { Loader } from "../../../../common/Loader";
import { Button } from "../../../../common/Button";
import { TableAction } from "../../../../common/styledTable";
import { OrganizationUser } from "./OrganizationUser";
import { addConfirm } from "../../../Confirm/sliceConfirm";
import { DataUser } from "./DataUser";
import { AiOutlineUserAdd } from "react-icons/ai";

export const FormAddUser = () => {
  const dispatch = useDispatch();
  const loadingAddUser = useSelector(selectStatusLoadingAddUser);
  const confirmAddUser = useSelector(selectAddUser);
  const { formDataUser, checkDataUser, dataUser, errorInput, emailExsist } =
    DataUser();
  const {
    tableOrganization,
    fetchDataLoading,
    addUserIntoOrganization,
    organizationChecked,
  } = OrganizationUser();

  console.log();

  useEffect(() => {
    console.log(errorInput, emailExsist);
    if (errorInput && emailExsist === "notexsist") {
      dispatch(
        fetchAddUser({
          name: dataUser[0],
          lastName: dataUser[1],
          email: dataUser[2],
          type: dataUser[5],
          password: dataUser[4],
          organization: organizationChecked,
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
          text: "Konto użytkownika zostało utworzone",
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
