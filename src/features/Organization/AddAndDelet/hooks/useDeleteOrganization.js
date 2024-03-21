import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  fetchDeleteOrganization,
  resetOrganizationState,
  selectAddNewOrganization,
  selectDeleteOrganization,
  selectloadingDeleteOrganization,
} from "@storeOrganization/sliceOrganization";
import { addConfirm } from "@storeConfirm/sliceConfirm";
import { useFetchData } from "@coreHooks/useFetchData";
import { URL_ORGANIZATION } from "@core/urlApi";
import { ORGANIZATION } from "@core/InfoText";

export const useDeleteOrganization = () => {
  const dispatch = useDispatch();
  const addNewOrganization = useSelector(selectAddNewOrganization);
  const confirmDeleteOrganization = useSelector(selectDeleteOrganization);
  const loadingDeleteOrganization = useSelector(
    selectloadingDeleteOrganization
  );
  const [visibleModal, setVisibleModal] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const [idOrganization, setIdOrganization] = useState(null);

  const { fetchData, fetchDataLoading } = useFetchData(
    URL_ORGANIZATION.FETCH_ALL_ORGANIZATION,
    [addNewOrganization, confirmDeleteOrganization]
  );

  useEffect(() => {
    setVisibleModal(loadingDeleteOrganization);
  }, [loadingDeleteOrganization]);

  useEffect(() => {
    if (confirmDeleteOrganization) {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: true,
          text: ORGANIZATION.DELETE_ORGANIZATION,
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
    visibleModal,
    setVisibleModal,
    selectedOrganization,
    setSelectedOrganization,
    idOrganization,
    setIdOrganization,
  };
};
