import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { resetUserState } from "@storeUser/sliceUser";
import { addConfirm } from "@storeConfirm/sliceConfirm";
import { resetOrganizationState } from "@storeOrganization/sliceOrganization";
import { COMMON } from "@core/InfoText";

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
