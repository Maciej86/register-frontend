import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addConfirm } from "../../Confirm/sliceConfirm";
import {
  fetchAddNewOrganization,
  resetOrganization,
  selectAddNewOrganization,
  selectNameOrganizationExsist,
} from "../../../store/Organization/sliceOrganization";
import { selectUserState } from "../../../store/User/sliceUser";

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
          text: "Utworzono nową organizację.",
        })
      );
    }
    dispatch(resetOrganization());
  }, [confirmAddNewOrganization]);

  useEffect(() => {
    if (organizationExsist) {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: "Podana nazwa organizacji już istnieje.",
        })
      );
    }
    dispatch(resetOrganization());
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
          text: "Nazwa musi zawierać co najmniej 3 znaki.",
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
          text: "Proszę o uzupełnienie pola.",
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
