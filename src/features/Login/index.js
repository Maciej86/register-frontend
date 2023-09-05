import { useSelector } from "react-redux";
import {
  selectStatusUser,
  selectStatusUserOut,
  selectUserNotExist,
} from "../../common/User//sliceUser";
import { useLoginUser } from "./useLoginUser";
import { USER_TEXT } from "../../core/InfoText";
import { Loader } from "../../common/Loader";
import { ErrorLogin } from "./ErrorLogin";
import {
  Conteiner,
  ConteinerLeft,
  SubTitle,
  LeftTitle,
  Wrapper,
  Logo,
  ConteinerRight,
  WrapperForm,
  FormTitle,
  FormBox,
  FormLabel,
  FormInput,
  FormButton,
} from "./styled";
import { AiFillDatabase } from "react-icons/ai";
import { OutLogin } from "./OutLogin";

export const PanelLogin = () => {
  const { onSubmitLoginUser, refLoginUser, refPasswordUser, emptyInput } =
    useLoginUser();
  const loginOut = useSelector(selectStatusUserOut);
  const statusLogin = useSelector(selectStatusUser);
  const userExist = useSelector(selectUserNotExist);

  return (
    <Wrapper>
      {emptyInput ? (
        <ErrorLogin message={USER_TEXT.LOGIN_USER_EMPTY_INPUT} />
      ) : (
        ""
      )}
      {userExist ? (
        <ErrorLogin message={USER_TEXT.LOGIN_USER_ERROR_DATA} />
      ) : (
        ""
      )}
      {loginOut ? <OutLogin message={USER_TEXT.LOGIN_OUT_USER} /> : ""}
      <Conteiner>
        <ConteinerLeft>
          <LeftTitle>REGISTER</LeftTitle>
          <SubTitle>Panel administracyjny</SubTitle>
          <Logo>
            <AiFillDatabase />
          </Logo>
        </ConteinerLeft>
        <ConteinerRight>
          <WrapperForm>
            <form onSubmit={onSubmitLoginUser}>
              <FormTitle>Panel logowania</FormTitle>
              <FormBox>
                <FormLabel htmlFor="login">Login</FormLabel>
                <FormInput
                  type="text"
                  ref={refLoginUser}
                  id="login"
                  maxLength={20}
                  placeholder="you@email.com"
                  autoComplete="off"
                />
              </FormBox>
              <FormBox>
                <FormLabel htmlFor="password">Hasło</FormLabel>
                <FormInput
                  type="password"
                  ref={refPasswordUser}
                  id="password"
                  maxLength={100}
                  placeholder="****************"
                />
              </FormBox>
              {statusLogin ? (
                <Loader size="36px" border="4px" margin="25px auto 0 auto" />
              ) : (
                <FormButton type="submit">Zaloguj</FormButton>
              )}
            </form>
          </WrapperForm>
        </ConteinerRight>
      </Conteiner>
    </Wrapper>
  );
};
