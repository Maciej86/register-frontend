import { useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDeleteUserInOrganization,
  resetOrganizationState,
  selectDeleteUserOrganization,
} from "../../../store/Organization/sliceOrganization";
import { addConfirm } from "../../Confirm/sliceConfirm";

export const useDeleteUserInOrganization = (data, setNotChecked) => {
  const dispatch = useDispatch();
  const confirmDeleteUserOrganization = useSelector(
    selectDeleteUserOrganization
  );
  const [inputCheckbox, setInputCheckbox] = useState([]);

  useEffect(() => {
    if (confirmDeleteUserOrganization) {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: true,
          text: "Wybrani użytkownicy zostali usunięci z organizacji",
        })
      );
      dispatch(resetOrganizationState());
    }
  }, [confirmDeleteUserOrganization]);

  useEffect(() => {
    for (let i = 0; i <= data.length; i++) {
      setInputCheckbox((isChecked) => [...isChecked, true]);
    }
  }, [data]);

  const changeChecked = (index, value) => {
    const chnagedInputCheckbox = [...inputCheckbox];
    chnagedInputCheckbox[index] = value;
    setInputCheckbox(chnagedInputCheckbox);
    setNotChecked(chnagedInputCheckbox.find((item) => item === false));
  };

  const deleteUserInOrganization = () => {
    const usersToDelete = [];
    for (let i = 0; i < inputCheckbox.length; i++) {
      if (!inputCheckbox[i]) {
        usersToDelete.push(data[i].id);
      }
    }

    dispatch(fetchDeleteUserInOrganization(usersToDelete));
  };

  return {
    deleteUserInOrganization,
    changeChecked,
    setInputCheckbox,
    inputCheckbox,
  };
};
