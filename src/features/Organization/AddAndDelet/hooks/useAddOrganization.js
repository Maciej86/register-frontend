import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addConfirm } from "@storeConfirm/sliceConfirm";
import {
  fetchAddOrganization,
  resetOrganizationState,
  selectAddNewOrganization,
  selectNameOrganizationExsist,
} from "@storeOrganization/sliceOrganization";
import { selectUserState } from "@storeUser/sliceUser";
import { ORGANIZATION } from "@core/InfoText";

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

  const addNewOrganization = (event) => {
    event.preventDefault();

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

    const currentDate = new Date();
    const dateCreatedOrganization = currentDate.toISOString().split("T")[0];

    dispatch(
      fetchAddOrganization({
        idUser: userData?.id,
        name: newNameOrganization,
        createdDate: dateCreatedOrganization,
      })
    );
  };

  return { addNewOrganization, nameOrganization, emptyNameOrganization };
};
