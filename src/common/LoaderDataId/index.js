import { COMMON } from "../../core/InfoText";
import { Loader } from "../Loader";
import { ConteinerLoader, NotExsist } from "./styled";

export const LoaderDataId = (message) => {
  const loaderId = (
    <ConteinerLoader>
      <p>{COMMON.LOADING}</p>
      <Loader margin="0 auto" size="35px" />
    </ConteinerLoader>
  );

  const loaderMessage = <NotExsist>{message}</NotExsist>;

  return { loaderId, loaderMessage };
};
