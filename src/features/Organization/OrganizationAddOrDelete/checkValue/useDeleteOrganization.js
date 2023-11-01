import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  fetchDeleteOrganization,
  resetOrganizationState,
  selectDeleteOrganization,
  selectloadingDeleteOrganization,
} from "../../../../store/Organization/sliceOrganization";
import { addConfirm } from "../../../Confirm/sliceConfirm";

export const useDeleteOrganization = () => {
  const dispatch = useDispatch();
  const confirmDeleteOrganization = useSelector(selectDeleteOrganization);
  const loadingDeleteOrganization = useSelector(
    selectloadingDeleteOrganization
  );

  useEffect(() => {
    if (confirmDeleteOrganization) {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: true,
          text: "Organizacja została usunięta.",
        })
      );
      dispatch(resetOrganizationState());
    }
  }, [confirmDeleteOrganization]);

  const deleteOrganization = (id) => {
    dispatch(fetchDeleteOrganization(id));
  };

  return {
    deleteOrganization,
    loadingDeleteOrganization,
    confirmDeleteOrganization,
  };
};
