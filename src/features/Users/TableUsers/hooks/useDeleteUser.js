import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  fetchDeleteUser,
  selectDeleteUser,
  selectStatusLoadingAddOrDeleteUser,
} from "../../../../store/User/sliceUser";
import { resetOrganizationState } from "../../../../store/Organization/sliceOrganization";
import { useFetchData } from "../../../../core/hooks/useFetchData";
import { URL_USER } from "../../../../core/urlBackend";
import { CompressionData } from "./CompressionData";
import { addConfirm } from "../../../Confirm/sliceConfirm";

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

  console.log(confirmDeleteUser);

  useEffect(() => {
    setVisibleModal(loadingDeleteUser);
  }, [loadingDeleteUser]);

  useEffect(() => {
    console.log(confirmDeleteUser);
    if (confirmDeleteUser) {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: true,
          text: "Uzytkownik został usunięty",
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
