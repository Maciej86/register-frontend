import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addConfirm } from "../../features/Confirm/sliceConfirm";
import { USERSETTINGS } from "../InfoText";
import { useState } from "react";

export const useCheckEmptyInput = () => {
  const dispatch = useDispatch();
  const [dataUser, setDataUser] = useState({});

  const checkEmptyInput = (dataInput) => {
    dataInput.forEach((input) => {
      setDataUser((currentUserData) => ({
        ...currentUserData,
        [input.id]: input.value,
      }));
    });

    for (const emptyInput of dataInput) {
      if (emptyInput.value === "") {
        dispatch(
          addConfirm({
            id: nanoid(),
            type: false,
            text: USERSETTINGS.CONFIRM_EDIT_EMPTY_INPUT,
          })
        );
        return true;
      }
    }
    return false;
  };

  return { checkEmptyInput, dataUser };
};
