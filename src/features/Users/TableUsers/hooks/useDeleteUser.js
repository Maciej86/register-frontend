import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  fetchDeleteUser,
  selectDeleteUser,
  selectStatusLoadingAddOrDeleteUser,
} from "@storeUser/sliceUser";
import { resetOrganizationState } from "@storeOrganization/sliceOrganization";
import { addConfirm } from "@storeConfirm/sliceConfirm";
import { useFetchData } from "@coreHooks/useFetchData";
import { USERSETTINGS } from "@core/InfoText";
import { URL_USER } from "@core/urlApi";
import { CompressionData } from "./CompressionData";

export const useDeleteUser = () => {
  const dispatch = useDispatch();
  const loadingDeleteUser = useSelector(selectStatusLoadingAddOrDeleteUser);
  const confirmDeleteUser = useSelector(selectDeleteUser);
  const [visibleModal, setVisibleModal] = useState(false);
  const [selectIdUser, setSelecIdtUser] = useState(0);
  const [selectNameUser, setSelecNametUser] = useState("");

  const { fetchData, fetchDataLoading } = useFetchData(URL_USER.ALL_USERS, [
    confirmDeleteUser,
  ]);
  const { compressionUsersData } = CompressionData(fetchData);

  useEffect(() => {
    setVisibleModal(loadingDeleteUser);
  }, [loadingDeleteUser]);

  useEffect(() => {
    if (confirmDeleteUser) {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: true,
          text: USERSETTINGS.CONFIRM_DELETE_USER,
        })
      );
      dispatch(resetOrganizationState());
    }
  }, [confirmDeleteUser]);

  const deleteUser = (idUser) => {
    dispatch(fetchDeleteUser(idUser));
  };

  return {
    fetchDataLoading,
    visibleModal,
    setVisibleModal,
    selectIdUser,
    setSelecIdtUser,
    selectNameUser,
    setSelecNametUser,
    deleteUser,
    loadingDeleteUser,
    compressionUsersData,
  };
};
