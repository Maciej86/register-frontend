import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  fetchEditNameOrganization,
  resetOrganizationState,
  selectEditNameOrganization,
  selectNameOrganizationExsist,
} from "@storeOrganization/sliceOrganization";
import { addConfirm } from "@storeConfirm/sliceConfirm";
import { ORGANIZATION } from "@core/InfoText";

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
          text: ORGANIZATION.CONFIRM_EDIT_NAME_ORGANIZATION,
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
          text: ORGANIZATION.NAME_EXSIST_ORGANIZATION,
        })
      );
      dispatch(resetOrganizationState());
    }
  }, [organizationExsist]);

  const changeNameOrganization = (event) => {
    event.preventDefault();

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
          text: ORGANIZATION.EMPTY_INPUT_NAME_ORGANIZATION,
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
