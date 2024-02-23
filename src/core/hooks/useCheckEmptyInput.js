import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addConfirm } from "../../features/Confirm/sliceConfirm";
import { USERSETTINGS } from "../InfoText";
import { useState } from "react";

export const useCheckEmptyInput = () => {
  const dispatch = useDispatch();
  const [dataInput, setDataInput] = useState({});

  const checkEmptyInput = (valueInput) => {
    valueInput.forEach((input) => {
      setDataInput((currentData) => ({
        ...currentData,
        [input.id]: input.value.trim(),
      }));
    });

    for (const emptyInput of valueInput) {
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

  return { checkEmptyInput, dataInput };
};
