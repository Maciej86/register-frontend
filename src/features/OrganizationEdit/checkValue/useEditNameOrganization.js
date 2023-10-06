import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addConfirm } from "../../Confirm/sliceConfirm";
import { fetchEditNameOrganization } from "../../../store/Organization/sliceOrganization";

export const useEditNameOrganization = () => {
  const dispatch = useDispatch();
  const editNameOrganization = useRef(null);
  const idEditOrganization = useRef(null);
  const [emptyNameOrganization, setEmptyNameOrganization] = useState(false);

  const changeNameOrganization = () => {
    setEmptyNameOrganization(false);
    const newNameOrganization =
      editNameOrganization.current !== null
        ? editNameOrganization.current.value.trim()
        : "";

    if (newNameOrganization === "") {
      setEmptyNameOrganization(true);
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: "Proszę podać nazwę organizacji.",
        })
      );
      return;
    }

    dispatch(
      fetchEditNameOrganization({
        id: idEditOrganization,
        name: newNameOrganization,
      })
    );
  };

  return {
    editNameOrganization,
    idEditOrganization,
    emptyNameOrganization,
    changeNameOrganization,
  };
};
