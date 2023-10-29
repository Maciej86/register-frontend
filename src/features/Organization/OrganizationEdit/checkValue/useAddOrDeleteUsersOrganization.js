import { useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAddOrDeleteUsersOrganization,
  resetOrganizationState,
  selectLoadingAddOrDeleteUsersOrganization,
} from "../../../../store/Organization/sliceOrganization";
import { addConfirm } from "../../../Confirm/sliceConfirm";

export const useDeleteUserInOrganization = (
  data,
  idOrganization,
  changeTab
) => {
  const dispatch = useDispatch();
  const confirmAddOrDeleteUsersOrganization = useSelector(
    selectLoadingAddOrDeleteUsersOrganization
  );
  const [inputCheckbox, setInputCheckbox] = useState([]);
  const [userChecked, setUserChecked] = useState();

  console.log(data);

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

  const addOrDeleteUsersOrganization = () => {
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
            ? "Wybrani użytkownicy zostali usunięci z organizacji"
            : "Wybrani użytkownicy zostali dodani do organizacji",
        })
      );
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
