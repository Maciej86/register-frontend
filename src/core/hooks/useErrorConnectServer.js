import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { resetUserState } from "../../store/User/sliceUser";
import { resetOrganizationState } from "../../store/Organization/sliceOrganization";
import { addConfirm } from "../../features/Confirm/sliceConfirm";
import { COMMON } from "../InfoText";

export const useErrorConnectServer = (selector, typeStore) => {
  const dispatch = useDispatch();
  const errorServer = useSelector(selector);

  useEffect(() => {
    if (errorServer) {
      dispatch(
        addConfirm({
          id: nanoid(),
          type: false,
          text: COMMON.ERROR_CONNECT_SERVER,
        })
      );
      if (typeStore === "storeUser") {
        dispatch(resetUserState());
      } else if (typeStore === "storeOrganization") {
        dispatch(resetOrganizationState());
      }
    }
  }, [errorServer]);
};
