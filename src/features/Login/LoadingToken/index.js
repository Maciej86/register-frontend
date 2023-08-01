import { Loader } from "../../../common/Loader";
import { Conteiner, Wrapper } from "../styled";

export const LoadingToken = () => {
  return (
    <Wrapper>
      <Conteiner>
        <div>
          <p>Ponowne logowanie...</p>
          <Loader size="36px" border="4px" margin="25px auto 0 auto" />
        </div>
      </Conteiner>
    </Wrapper>
  );
};
