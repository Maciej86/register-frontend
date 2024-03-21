import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  fetchAddOrDeleteUsersOrganization,
  fetchUserOrganization,
  resetOrganizationState,
  selectAddOrDeleteUsersOrganization,
} from "@storeOrganization/sliceOrganization";
import { selectUserState } from "@storeUser/sliceUser";
import { addConfirm } from "@storeConfirm/sliceConfirm";
import { ORGANIZATION } from "@core/InfoText";

export const useAddOrDeleteUserInOrganization = (
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
