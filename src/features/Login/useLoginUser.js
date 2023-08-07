import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchLoginUser } from "./sliceLoginUser";

export const useLoginUser = () => {
  const dispatch = useDispatch();
  const refLoginUser = useRef();
  const refPasswordUser = useRef();
  const [emptyInput, setEmptyInput] = useState(false);

  const onSubmitLoginUser = (event) => {
    event.preventDefault();

    if (refLoginUser.current !== null && refPasswordUser.current !== null) {
      setEmptyInput(false);
      const loginTrim = refLoginUser.current.value.trim();
      const passwordTrim = refPasswordUser.current.value.trim();

      if (loginTrim === "" || passwordTrim === "") {
        setEmptyInput(true);
        return;
      }

      dispatch(
        fetchLoginUser({
          login: loginTrim,
          password: passwordTrim,
        })
      );
    }
  };

  return {
    onSubmitLoginUser,
    refLoginUser,
    refPasswordUser,
    emptyInput,
  };
};
