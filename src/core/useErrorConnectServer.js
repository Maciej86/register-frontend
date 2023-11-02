import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addConfirm } from "../features/Confirm/sliceConfirm";
import { COMMON } from "./InfoText";

export const useErrorConnectServer = (selector) => {
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
    }
  }, [errorServer]);
};
