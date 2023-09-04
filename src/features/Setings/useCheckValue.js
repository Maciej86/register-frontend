import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  fetchEditPassword,
  fetchEditUser,
  selectEditAccount,
  selectEditPassword,
} from "../../common/user/sliceUser";
import { addConfirm } from "../Confirm/sliceConfirm";

export const useCheckValue = (userData, themeValue) => {
  const dispatch = useDispatch();
  const confirmEditAccount = useSelector(selectEditAccount);
  const confirmNewPassword = useSelector(selectEditPassword);
  const dataUser = useRef([]);
  const passwordUser = useRef([]);
  const [detaUserEmpty, setDataUserEmpty] = useState([]);
  const [passwordUserEmpty, setPasswordUserEmpty] = useState([]);
  const [differentPasswords, setDifferentPasswords] = useState(false);
  const [incorrectEmail, setIncorrectEmail] = useState(false);

  useEffect(() => {
    if (confirmEditAccount) {
      // Dodać obsługę zmiany danych użytkownika
    }

    if (confirmNewPassword === "ok") {
      // Dodać obsługę poprawnej zmiany hasła
    } else if (confirmNewPassword === "error") {
      // Dodać obsługę podania błędnego obecnego hasła
    }
  }, [confirmEditAccount, confirmNewPassword]);

  const saveNewDataUser = () => {
    setDataUserEmpty(() => []);
    for (const inputValue of dataUser.current) {
      let inputValueTrim = inputValue.value.trim();
      setDataUserEmpty((detaUserEmpty) => [...detaUserEmpty, inputValueTrim]);
    }

    for (const checkEmptyInput of dataUser.current) {
      if (checkEmptyInput.value === "") {
        dispatch(
          addConfirm({
            id: nanoid(),
            type: false,
            text: "1 Proszę o wypełnienie pól zaznaczonych na czerowono",
          })
        );
        return;
      }
    }

    const regexpEmail =
      /^[a-z\d-]+\w?\.?([\w\d-]+)?@[\w\d-]{2,}\.[a-z]{2,6}(\.[a-z]{2,6})?$/gi;

    if (!regexpEmail.test(dataUser.current[2].value)) {
      setIncorrectEmail(true);
      // Dodać obsługę błędu braku poprawnego adresu e-mail
      return;
    }

    dispatch(
      fetchEditUser({
        id: userData?.id,
        name: dataUser.current[0].value,
        lastname: dataUser.current[1].value,
        email: dataUser.current[2].value,
        theme: themeValue,
      })
    );
  };

  const changedPassword = (event) => {
    event.preventDefault();

    setPasswordUserEmpty(() => []);
    for (const inputValue of passwordUser.current) {
      let inputValueTrim = inputValue.value.trim();
      setPasswordUserEmpty((passwordUserEmpty) => [
        ...passwordUserEmpty,
        inputValueTrim,
      ]);
    }

    for (const checkEmptyInput of passwordUser.current) {
      if (checkEmptyInput.value === "") {
        dispatch(
          addConfirm({
            id: nanoid(),
            type: false,
            text: "2 Proszę o wypełnienie pól zaznaczonych na czerowono",
            visibility: false,
          })
        );
        return;
      }
    }

    if (passwordUser.current[1].value !== passwordUser.current[2].value) {
      setDifferentPasswords(true);
      return;
    }

    if (passwordUser.current[1].value.length < 6) {
      setDifferentPasswords(true);
      // Dodać obsługę błędu przy podaniu mniej niż 6 znaków
      return;
    }

    dispatch(
      fetchEditPassword({
        id: userData?.id,
        oldpassword: passwordUser.current[0].value,
        newpassword: passwordUser.current[1].value,
      })
    );
  };

  return {
    dataUser,
    passwordUser,
    detaUserEmpty,
    passwordUserEmpty,
    differentPasswords,
    incorrectEmail,
    saveNewDataUser,
    changedPassword,
  };
};
