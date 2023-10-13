import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addConfirm } from "../../Confirm/sliceConfirm";
import {
  fetchEditNameOrganization,
  resetOrganizationState,
  selectEditNameOrganization,
  selectNameOrganizationExsist,
} from "../../../store/Organization/sliceOrganization";

export const useEditNameOrganization = () => {
  const dispatch = useDispatch();
  const confirmEditNameOrganization = useSelector(selectEditNameOrganization);
  const organizationExsist = useSelector(selectNameOrganizationExsist);
  const editNameOrganization = useRef(null);
  const idEditOrganization = useRef(null);
  const [emptyNameOrganization, setEmptyNameOrganization] = useState(false);

  useEffect(() => {
    if (confirmEditNameOrganization) {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: true,
          text: "Nazwa organizacji została zmieniona",
        })
      );
      dispatch(resetOrganizationState());
    }
  }, [confirmEditNameOrganization]);

  useEffect(() => {
    if (organizationExsist) {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: "Podana nazwa organizacji już istnieje.",
        })
      );
      dispatch(resetOrganizationState());
    }
  }, [organizationExsist]);

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
        id: idEditOrganization.current.value,
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
