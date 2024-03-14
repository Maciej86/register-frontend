import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { USERSETTINGS } from "../../../../core/InfoText";
import {
  fetchAddUser,
  resetUserState,
  selectAddUser,
  selectEndChceckEmailExsist,
  selectStatusLoadingAddOrDeleteUser,
} from "../../../../store/User/sliceUser";
import { addConfirm } from "../../../../store/Confirm/sliceConfirm";
import { Loader } from "../../../../common/Loader";
import { Button } from "../../../../common/Button";
import { TableAction } from "../../../../common/styledTable";
import { useTableOrganization } from "../../../../core/hooks/AddOrganizationIntoUser/useTableOrganization";
import { InputAddDataUser } from "./InputAddDataUser";
import { AiOutlineUserAdd } from "react-icons/ai";

export const FormAddUser = () => {
  const dispatch = useDispatch();
  const loadingAddUser = useSelector(selectStatusLoadingAddOrDeleteUser);
  const endChceckEmailExsist = useSelector(selectEndChceckEmailExsist);
  const confirmAddUser = useSelector(selectAddUser);
  const {
    checkEmptyInput,
    checkEmail,
    checkPassword,
    dataInputEmpty,
    dataInputPassword,
    dataUserValue,
    inputAddDataUser,
    emailExsist,
    roleUserValueData,
    correctPassword,
  } = InputAddDataUser();
  const {
    tableOrganization,
    fetchDataLoading,
    addUserIntoOrganization,
    organizationChecked,
  } = useTableOrganization();

  useEffect(() => {
    if (emailExsist === false && correctPassword && endChceckEmailExsist) {
      dispatch(
        fetchAddUser({
          name: dataInputEmpty.name,
          lastName: dataInputEmpty.lastname,
          email: dataInputEmpty.email,
          type: roleUserValueData,
          password: dataInputPassword.password,
          organizations: organizationChecked,
        })
      );
      dispatch(resetUserState());
    }
  }, [endChceckEmailExsist]);

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

    if (checkEmptyInput(dataUserValue.current)) {
      return;
    }
    checkPassword(dataUserValue.current);
    checkEmail(
      dataUserValue.current.find((input) => input.id === "email").value.trim()
    );

    addUserIntoOrganization();
  };

  const formAddUser = (
    <form onSubmit={SubmitDataUser}>
      {inputAddDataUser}
      {fetchDataLoading ? (
        <Loader margin=" 30px auto" />
      ) : (
        <>
          {tableOrganization}
          <TableAction justify={"end"}>
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
