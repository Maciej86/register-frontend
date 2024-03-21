import { Loader } from "@common/Loader";
import { USER_TEXT } from "@core/InfoText";
import { Conteiner, Wrapper } from "../styled";

export const LoadingToken = () => {
  return (
    <Wrapper>
      <Conteiner>
        <div>
          <p>{USER_TEXT.LOGIN_USER_TOKEN}</p>
          <Loader size="36px" border="4px" margin="25px auto 0 auto" />
        </div>
      </Conteiner>
    </Wrapper>
  );
};
