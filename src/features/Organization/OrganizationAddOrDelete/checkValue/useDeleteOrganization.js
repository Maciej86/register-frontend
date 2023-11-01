import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useFetchData } from "../../../../core/useFetchData";
import { URL_ORGANIZATION } from "../../../../core/urlBackend";
import {
  fetchDeleteOrganization,
  resetOrganizationState,
  selectAddNewOrganization,
  selectDeleteOrganization,
  selectloadingDeleteOrganization,
} from "../../../../store/Organization/sliceOrganization";
import { addConfirm } from "../../../Confirm/sliceConfirm";

export const useDeleteOrganization = () => {
  const dispatch = useDispatch();
  const addNewOrganization = useSelector(selectAddNewOrganization);
  const confirmDeleteOrganization = useSelector(selectDeleteOrganization);
  const loadingDeleteOrganization = useSelector(
    selectloadingDeleteOrganization
  );
  const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const [idOrganization, setIdOrganization] = useState(null);

  const { fetchData, fetchDataLoading } = useFetchData(
    URL_ORGANIZATION.FETCH_ALL_ORGANIZATION,
    [addNewOrganization, confirmDeleteOrganization]
  );

  useEffect(() => {
    setVisibleDeleteModal(loadingDeleteOrganization);
  }, [loadingDeleteOrganization]);

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
    fetchData,
    fetchDataLoading,
    deleteOrganization,
    loadingDeleteOrganization,
    visibleDeleteModal,
    setVisibleDeleteModal,
    selectedOrganization,
    setSelectedOrganization,
    idOrganization,
    setIdOrganization,
  };
};
