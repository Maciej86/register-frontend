import { useLoginUser } from "./useLoginUser";
import { useSelector } from "react-redux";
import { selectStatusUser } from "./sliceLoginUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

export const PanelLogin = () => {
  const { onSubmitLoginUser, refLoginUser, refPasswordUser } = useLoginUser();
  const statusLogin = useSelector(selectStatusUser);

  return (
    <Wrapper>
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
              {statusLogin ? "Trwa ładowanie..." : <FormButton type="submit">Zaloguj</FormButton>}
            </form>
          </WrapperForm>
        </ConteinerRight>
      </Conteiner>
    </Wrapper>
  );
};
