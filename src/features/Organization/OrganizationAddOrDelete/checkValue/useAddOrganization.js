import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addConfirm } from "../../../Confirm/sliceConfirm";
import { COMMON, ORGANIZATION } from "../../../../core/InfoText";
import {
  fetchAddNewOrganization,
  resetOrganizationState,
  selectAddNewOrganization,
  selectNameOrganizationExsist,
} from "../../../../store/Organization/sliceOrganization";
import { selectUserState } from "../../../../store/User/sliceUser";

export const useAddOrganization = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserState);
  const confirmAddNewOrganization = useSelector(selectAddNewOrganization);
  const organizationExsist = useSelector(selectNameOrganizationExsist);
  const nameOrganization = useRef(null);
  const [emptyNameOrganization, setEmptyNameOrganization] = useState(false);

  useEffect(() => {
    if (confirmAddNewOrganization) {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: true,
          text: ORGANIZATION.ADD_NEW_ORGANIZATION,
        })
      );
      dispatch(resetOrganizationState());
    }
  }, [confirmAddNewOrganization]);

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

  const addNewOrganization = () => {
    setEmptyNameOrganization(false);
    const newNameOrganization =
      nameOrganization.current !== null
        ? nameOrganization.current.value.trim()
        : "";

    if (newNameOrganization.length < 3) {
      setEmptyNameOrganization(true);
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: ORGANIZATION.ERROR_NAME_ORGANIZATION,
        })
      );
      return;
    }

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
      fetchAddNewOrganization({
        idUser: userData?.id,
        name: newNameOrganization,
      })
    );
  };

  return { addNewOrganization, nameOrganization, emptyNameOrganization };
};
