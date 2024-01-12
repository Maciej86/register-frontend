import { COMMON } from "../../core/InfoText";
import { Loader } from "../Loader";
import { ConteinerLoader, NotExsist } from "./styled";

export const LoaderDataId = (textLoading, message) => {
  const loaderId = (
    <ConteinerLoader>
      {textLoading ? <p>{COMMON.LOADING}</p> : ""}
      <Loader margin="0 auto" size="35px" />
    </ConteinerLoader>
  );

  const loaderMessage = <NotExsist>{message}</NotExsist>;

  return { loaderId, loaderMessage };
};
