import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { resetUserState } from "../../store/User/sliceUser";
import { resetOrganizationState } from "../../store/Organization/sliceOrganization";
import { addConfirm } from "../../features/Confirm/sliceConfirm";
import { COMMON } from "../InfoText";
import { LuBrackets } from "react-icons/lu";

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
      switch (typeStore) {
        case "storeUser":
          dispatch(resetUserState());
          break;
        case "storeOrganization":
          dispatch(resetOrganizationState());
          break;
      }
    }
  }, [errorServer]);
};
