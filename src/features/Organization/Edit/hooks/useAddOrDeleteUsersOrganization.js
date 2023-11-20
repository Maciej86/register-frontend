import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  fetchAddOrDeleteUsersOrganization,
  fetchUserOrganization,
  resetOrganizationState,
  selectAddOrDeleteUsersOrganization,
} from "../../../../store/Organization/sliceOrganization";
import { selectUserState } from "../../../../store/User/sliceUser";
import { ORGANIZATION } from "../../../../core/InfoText";
import { addConfirm } from "../../../Confirm/sliceConfirm";

export const useDeleteUserInOrganization = (
  data,
  idOrganization,
  changeTab
) => {
  const dispatch = useDispatch();
  const confirmAddOrDeleteUsersOrganization = useSelector(
    selectAddOrDeleteUsersOrganization
  );
  const [inputCheckbox, setInputCheckbox] = useState([]);
  const [userChecked, setUserChecked] = useState();
  const loginUser = useSelector(selectUserState);

  useEffect(() => {
    setInputCheckbox(data.map(() => changeTab));
    setUserChecked(true);
  }, [data, changeTab]);

  const changeChecked = (index, value) => {
    const changedCheckbox = [...inputCheckbox];
    changedCheckbox[index] = value;
    setInputCheckbox(changedCheckbox);

    const isExsistCheckInput = new Set(changedCheckbox);
    setUserChecked(!isExsistCheckInput.has(!changeTab));
  };

  const addOrDeleteUsersOrganization = (event) => {
    event.preventDefault();

    const usersToAddOrDelete = [];
    for (let i = 0; i < inputCheckbox.length; i++) {
      if (inputCheckbox[i] === (changeTab ? false : true)) {
        usersToAddOrDelete.push(data[i].id);
      }
    }

    dispatch(
      fetchAddOrDeleteUsersOrganization({
        idUsers: usersToAddOrDelete,
        idOrganization: parseInt(idOrganization),
        inOut: changeTab,
      })
    );
  };

  useEffect(() => {
    if (confirmAddOrDeleteUsersOrganization) {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: true,
          text: changeTab
            ? ORGANIZATION.CONFIRM_DELETE_USERS_ORGANIZATION
            : ORGANIZATION.CONFIRM_ADD_USERS_ORGANIZATION,
        })
      );
      dispatch(fetchUserOrganization(loginUser.id));
      dispatch(resetOrganizationState());
    }
  }, [confirmAddOrDeleteUsersOrganization]);

  return {
    addOrDeleteUsersOrganization,
    changeChecked,
    setInputCheckbox,
    inputCheckbox,
    userChecked,
  };
};
