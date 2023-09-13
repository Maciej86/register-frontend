import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addConfirm } from "../../Confirm/sliceConfirm";
import { fetchAddNewOrganization } from "../../../store/Organization/sliceOrganization";

export const useAddOrganization = () => {
  const dispatch = useDispatch();
  const nameOrganization = useRef(null);
  const [emptyNameOrganization, setEmptyNameOrganization] = useState(false);

  const addNewOrganization = () => {
    setEmptyNameOrganization(false);
    const newNameOrganization =
      nameOrganization.current !== null
        ? nameOrganization.current.value.trim()
        : "";

    if (newNameOrganization === "") {
      setEmptyNameOrganization(true);
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: "Proszę o uzupełnienie pola.",
        })
      );
      return;
    }

    dispatch(fetchAddNewOrganization({ name: newNameOrganization }));
  };

  return { addNewOrganization, nameOrganization, emptyNameOrganization };
};
