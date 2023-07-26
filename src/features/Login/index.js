import { useSelector } from "react-redux";
import { selectStatusUser, selectUserNotExist } from "./sliceLoginUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoginUser } from "./useLoginUser";
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
import { Loader } from "../../common/Loader";
import { ErrorLogin } from "./ErrorLogin";
import { userText } from "../../core/InfoText";

export const PanelLogin = () => {
  const { onSubmitLoginUser, refLoginUser, refPasswordUser, emptyInput } =
    useLoginUser();
  const statusLogin = useSelector(selectStatusUser);
  const userExist = useSelector(selectUserNotExist);

  return (
    <Wrapper>
      {emptyInput ? <ErrorLogin message={userText.loginUserEmptyInput} /> : ""}
      {userExist ? <ErrorLogin message={userText.loginUserErrorData} /> : ""}
      <Conteiner>
        <ConteinerLeft>
          <LeftTitle>REGISTER</LeftTitle>
          <SubTitle>Panel administracyjny</SubTitle>
          <Logo>
            <FontAwesomeIcon icon="fa-solid fa-server" size="2xl" />
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
                  maxLength={15}
                />
              </FormBox>
              <FormBox>
                <FormLabel htmlFor="password">Hasło</FormLabel>
                <FormInput
                  type="password"
                  ref={refPasswordUser}
                  id="password"
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
