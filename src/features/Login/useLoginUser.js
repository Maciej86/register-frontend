import { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchLoginUser } from "./sliceLoginUser";

export const useLoginUser = () => {
  const dispatch = useDispatch();
  const refLoginUser = useRef();
  const refPasswordUser = useRef();

  const onSubmitLoginUser = (event) => {
    event.preventDefault();

    if (refLoginUser.current !== null && refPasswordUser.current !== null) {
      const loginTrim = refLoginUser.current.value.trim();
      const passwordTrim = refPasswordUser.current.value.trim();

      if (loginTrim !== "" && passwordTrim !== "") {
        dispatch(
          fetchLoginUser({
            login: loginTrim,
            password: passwordTrim,
          })
        );
      }
    }
  };

  return {
    onSubmitLoginUser,
    refLoginUser,
    refPasswordUser,
  };
};
